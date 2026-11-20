param([string]$Root = (Split-Path $PSScriptRoot -Parent), [Parameter(Mandatory = $true)][string]$Dir)
# Long event narrations. $Dir\b*.tsv: id <TAB> Turkish story <TAB> English story (one event per line).
# Adds "story" to js/data/system.js events (skips ids that already have one) and merges the
# English lines into js/data/i18n-en-stories.js. Usage: powershell -File tools\apply-stories.ps1 -Dir <folder>
# Events still without a story: system.js events that have no "story" field.
$enc = New-Object Text.UTF8Encoding($false)
$esc = { param($s) $s.Replace('\', '\\').Replace('"', '\"') }
$sysP = Join-Path $Root 'js\data\system.js'
$t = [IO.File]::ReadAllText($sysP)
$rows = @()
Get-ChildItem $Dir -Filter 'b*.tsv' | Sort-Object Name | ForEach-Object {
  [IO.File]::ReadAllLines($_.FullName, $enc) | Where-Object { $_.Trim() } | ForEach-Object {
    $p = $_.Split("`t")
    if ($p.Count -ge 3) { $rows += , @($p[0].Trim(), $p[1].Trim(), $p[2].Trim()) } else { Write-Output "BAD LINE in $($_)" }
  }
}
$added = 0; $miss = @()
foreach ($r in $rows) {
  $id = $r[0]; $tr = & $esc $r[1]
  $k = $t.IndexOf('"id": "' + $id + '"')
  if ($k -lt 0) { $miss += $id; continue }
  $lineStart = $t.LastIndexOf("`n", $k) + 1
  $lineEnd = $t.IndexOf("`n", $k)
  $line = $t.Substring($lineStart, $lineEnd - $lineStart)
  if ($line.TrimStart().StartsWith('{')) {
    # single-line event
    if ($line.Contains('"story": "')) { continue }
    $m = [regex]::Match($line, '"desc": "(?:[^"\\]|\\.)*", ')
    if (-not $m.Success) { $m = [regex]::Match($line, '"tags": \[[^\]]*\], ') }
    if (-not $m.Success) { $miss += $id; continue }
    $nl = $line.Insert($m.Index + $m.Length, '"story": "' + $tr + '", ')
    $t = $t.Substring(0, $lineStart) + $nl + $t.Substring($lineEnd)
  } else {
    # multi-line event: object ends at the next line that is "  }" or "  },"
    $objEnd = [regex]::Match($t.Substring($k), "`n  \},?\r?`n").Index + $k
    $obj = $t.Substring($k, $objEnd - $k)
    if ($obj.Contains('"story": "')) { continue }
    $dm = [regex]::Match($obj, "`n(\s*)`"desc`": `"(?:[^`"\\]|\\.)*`",?\r?")
    if (-not $dm.Success) { $dm = [regex]::Match($obj, "`n(\s*)`"title`": `"(?:[^`"\\]|\\.)*`",\r?") }
    if (-not $dm.Success) { $miss += $id; continue }
    $ind = $dm.Groups[1].Value
    $txt = $dm.Value
    $comma = if ($txt.TrimEnd("`r").EndsWith(',')) { '' } else { ',' }
    $ins = $txt.TrimEnd("`r") + $comma + "`n" + $ind + '"story": "' + $tr + '"' + $(if ($comma) { '' } else { ',' })
    if ($txt.EndsWith("`r")) { $ins = $ins.Replace("`n", "`r`n") + "`r" }
    $obj2 = $obj.Substring(0, $dm.Index) + $ins + $obj.Substring($dm.Index + $dm.Length)
    $t = $t.Substring(0, $k) + $obj2 + $t.Substring($objEnd)
  }
  $added++
}
[IO.File]::WriteAllText($sysP, $t, $enc)
# EN dictionary: keep the entries already in the file, add / replace the ones from the batch files
$enP = Join-Path $Root 'js\data\i18n-en-stories.js'
$en = [ordered]@{}
if (Test-Path $enP) {
  foreach ($ln in [IO.File]::ReadAllLines($enP, $enc)) {
    $m = [regex]::Match($ln, '^  "((?:[^"\\]|\\.)*)": "((?:[^"\\]|\\.)*)",$')
    if ($m.Success) { $en[$m.Groups[1].Value] = $m.Groups[2].Value }
  }
}
foreach ($r in $rows) { $en[(& $esc $r[1])] = (& $esc $r[2]) }
$sb = New-Object Text.StringBuilder
[void]$sb.AppendLine('/* EN dictionary for long event narrations (system.js "story"): Turkish source -> English. Written by tools/apply-stories.ps1; see js/i18n.js */')
[void]$sb.AppendLine('Stories.I18n.add({')
foreach ($k in $en.Keys) { [void]$sb.AppendLine('  "' + $k + '": "' + $en[$k] + '",') }
[void]$sb.AppendLine('});')
[IO.File]::WriteAllText($enP, $sb.ToString(), $enc)
"rows $($rows.Count) added $added missing $($miss.Count) $($miss -join ',') en $($en.Count)"
