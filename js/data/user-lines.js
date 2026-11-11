/*
 * 🍆 Dick Size ve ⏱️ Dayanıklılık: senin profiline (Ben → Profil) göre karakterin baloncukları.
 * app.js (dickPool / staminaLine) ve tools/bot-editor.html (🍆⏱️ sekmesi, salt okunur) kullanır.
 * Kişiliğe göre ekler (Utangaç, Kibirli, Alaycı, Virgo) app.js'de.
 */
window.Stories = window.Stories || {};

Stories.DICK_SIZES = ['Very Small', 'Small', 'Average', 'Large', 'Very Large', 'Huge', 'Massive'];
// boyut → tür (Average: baloncuk yok)
Stories.DK_KIND = { 'Very Small': 'small', Small: 'small', Average: 'mid', Large: 'big', 'Very Large': 'big', Huge: 'huge', Massive: 'huge' };
Stories.DK_SIT = { in: 'içeride', oral: 'ağızda', out: 'dışarıda (el / göğüs / kalça)', cum: '💦 senin boşalman' };
Stories.DK_LINES = {
  small: { in: ['Minik ama tam yerine oturuyor 😏', 'Küçük olsun, benim olsun 🥰', 'Daha hızlı… hissettir bana 😈', 'Küçük ama ne kadar sert 😏', 'Hızlandıkça daha çok hissediyorum 🥵',
      'Tam en hassas yerime denk geliyor 😩', 'Boyut önemli değil, sen önemlisin 🥰', 'Sıkıştırıyorum, kaçamazsın 😈', 'Minik minik vuruşların beni deli ediyor 😳', 'İçimde kıpır kıpır… ahh 🫠'],
    oral: ['Hepsi ağzımda kayboldu 😏', 'Tamamını rahatça alıyorum 😋', 'Ağzıma tam göre 🙈', 'Dibine kadar alıyorum, hiç zorlanmadan 😈', 'Dilimle her yerini dolaşıyorum 😋',
      'Ağzımda şeker gibi 🍭', 'Bütün halde emiyorum 🥵', 'Taşaklarına kadar alabiliyorum 😏', 'Minik ama lezzetli 😋', 'Ağzımdan hiç çıkarmak istemiyorum 🙈'],
    out: ['Avucumda minicik kaldı 😏', 'Parmaklarımın arasında kayboluyor 🙈', 'Tatlı şey… 🥰', 'Tek parmağımla bile idare ederim 😏', 'Göğüslerimin arasında kayboldu 🙈',
      'Avucumda sımsıkı tutuyorum 😈', 'Ne kadar sevimli 🥰', 'Küçük ama zonkluyor, hissediyorum 😳', 'Hızlı hızlı okşayayım mı? 😏', 'Kalçamın arasında saklandı 🍑'],
    cum: ['Az ama sıcacık 😏💦', 'Minik ama coşkulu 😈', 'Hepsi bu mu? Yine de tatlı 🥰', 'Küçük ama kocaman titredin 😳', 'Sıcaklığını hissettim 🥵💦',
      'Damla damla… tatlı 🙈', 'Tadına bakayım 😋', 'Ne çabuk geldin, sevimli 😏', 'Az ama benim için yeterli 🥰', 'Titremene bayıldım 😩'] },
  big: { in: ['Çok doluyum… ahh 😩', 'Kocaman, beni tamamen dolduruyor 🥵', 'Her santimini hissediyorum 😈', 'Beni iyice açıyorsun 😳', 'En dibime çarpıyor… ahh 😩',
      'Kalınlığı aklımı alıyor 🥵', 'Böylesini hiç hissetmedim 😵‍💫', 'Çıkarırken bile boşluğunu özlüyorum 😩', 'Karnımda hissediyorum 😳', 'Yavaş gir, hepsini alacağım 😈'],
    oral: ['Ağzıma zor sığıyor 😳', 'Çenem ağrıdı ama durmam 😋', 'Kocaman… boğazıma kadar 🥵', 'Dudaklarım gerildi 😩', 'Yarısına kadar alabiliyorum 😳',
      'Gözlerim yaşardı ama devam 🥵', 'Ağzımı dolduruyor 😋', 'Dilim altında kayboldu 😏', 'İki elimle tutup emiyorum 😈', 'Bu kadar kalınını emmek zor ama zevkli 🥵'],
    out: ['İki elimle bile tutamıyorum 😳', 'Avucuma sığmıyor 😏', 'Bu ne büyüklük böyle 🥵', 'Göğüslerimin arasından taşıyor 😳', 'Kalçamın arasından başı çıkıyor 😈',
      'Ağır ağır zonkluyor avucumda 🥵', 'Parmaklarım birleşmiyor 😳', 'Bakmaya doyamıyorum 😍', 'Damarlarını hissediyorum 😩', 'Okşadıkça daha da büyüyor 😏'],
    cum: ['Ne kadar çok geldi 😳💦', 'Kocaman ve dolu dolu 🥵', 'Taştı… her yerim 😩', 'Fışkırdıkça zonkluyor 😳💦', 'Hiç bitmiyor… 🥵',
      'Sıcacık doldurdun beni 😩💦', 'Bu kadar çok olacağını bilmiyordum 😳', 'Her damlasını hissettim 🥵', 'Aksın, hepsini istiyorum 😈💦', 'Bembeyaz oldum 😩'] },
  huge: { in: ['Yavaş… çok büyük, ikiye ayrılıyorum 😩', 'Karnıma kadar geliyor 😳🥵', 'Bu kadar büyüğü hiç almadım 😵‍💫', 'Dur… nefes alayım 😩', 'Karnımda şişkinliği görüyor musun? 😳',
      'Yarısı bile zor giriyor 🥵', 'Her vuruşta çığlık atıyorum 😩', 'Beni paramparça ediyorsun… durma 😵‍💫', 'Bacaklarım titriyor, bu çok fazla 🥺', 'Canavar gibi… ama bayılıyorum 😈'],
    oral: ['Yarısı bile sığmıyor 😳', 'Ağzım yetmiyor, dilimle yalıyorum 😋', 'Boğazım… dur, nefes alayım 🥵', 'Sadece başı ağzımı dolduruyor 😳', 'Çenem açılmıyor artık 😩',
      'İki elim ve ağzım, yine de yetmiyor 🥵', 'Yalayarak tapınıyorum 😈', 'Gözlerimden yaş geldi 🥺', 'Bu bir ağıza sığacak şey değil 😵‍💫', 'Başını emmek bile beni yoruyor 😋'],
    out: ['Kolum kadar… 😳', 'İki elim de yetmiyor 🥵', 'Bu bir canavar 😈', 'Göğüslerimin arasından yüzüme kadar uzanıyor 😳', 'Kalçamın üstünde koca bir gölge 🍑',
      'Avucum bir yarısını tutuyor 😩', 'Ağırlığını hissediyorum 🥵', 'Korkutucu ama çok güzel 😍', 'Ellerimle ölçemiyorum 😳', 'Bu nasıl büyüdü böyle 😵‍💫'],
    cum: ['Sel gibi geldi 😳💦', 'Boğuldum… bu kadar çok olur mu 🥵', 'Her yerim seninle kaplandı 😩', 'Şelale gibi akıyor 😵‍💫💦', 'Karnım doldu, taşıyor 😳',
      'Yüzüme kadar sıçradı 🥵💦', 'Bitmiyor… hâlâ geliyor 😩', 'Çarşaf sırılsıklam oldu 🙈', 'Bu kadar dölü nerede sakladın? 😳💦', 'İçimden akıp gidiyor… 🥵'] }
};

Stories.STAMINA_LEVELS = ['Very Low', 'Low', 'Average', 'High', 'Very High', 'Endless'];
Stories.STAMINA_HINT = { 'Very Low': 'çabucak biter', Low: 'çabuk', Average: 'normal', High: 'uzun sürer', 'Very High': 'çok uzun', Endless: 'bitmez' };
// 🥴 Zevk artış çarpanı (düşük dayanıklılık = daha çabuk boşalma)
Stories.ST_MUL = { 'Very Low': 2, Low: 1.5, Average: 1, High: .75, 'Very High': .5, Endless: .3 };
// seviye → tür (Average: baloncuk yok)
Stories.ST_KIND = { 'Very Low': 'low', Low: 'low', High: 'high', 'Very High': 'high', Endless: 'endless' };
Stories.ST_SIT = { in: 'pozisyonda', near: 'pozisyonda, 🥴 Zevk ≥ 60', cum: '💦 senin boşalman' };
Stories.ST_LINES = {
  low: { in: ['Daha yeni başladık, sakin ol 😏', 'Nefesin şimdiden hızlandı 😳', 'Yavaş… hemen bitirme beni 🥺', 'Titriyorsun, dayan biraz 😈', 'Yavaşla, daha yeni ısınıyorum 🥵', 'Bu sefer biraz daha dayan, olur mu? 🙈'],
    near: ['Şimdiden mi?! Dur, dayan 😳', 'Hayır, daha gelme! 🥺', 'Zonkladığını hissediyorum… tut kendini 😩', 'Dur dur, biraz yavaşla 😅', 'Az kaldı değil mi? Yüzünden belli 😏', 'Bekle beni, birlikte gelelim 🥺'],
    cum: ['Bu kadar çabuk mu? 😳', 'Daha yeni başlamıştık… 🙈', 'Hızlı oldu ama tatlıydın 🥰', 'Bu sefer erken kaçtın 😏', 'Sonraki turda daha çok dayanırsın 😉', 'Ben daha ısınıyordum 🥺'] },
  high: { in: ['Hiç yorulmuyor musun? 🥵', 'Ne kadar dayanıklısın böyle 😳', 'Bu tempoya nasıl dayanıyorsun… ahh 😩', 'Sen bitmeden ben iki kere bittim 🫠', 'Bu dayanıklılık nereden 😈', 'Nefesim kesildi, sen hâlâ aynı 😵‍💫'],
    near: ['Sonunda geliyor musun? 🥵', 'Hadi ver artık, hak ettim 😈', 'Bu kadar dayanınca ben de istiyorum artık 😩', 'Zonkluyor… nihayet 😳', 'Ver hadi, bekledim bunu 🥺'],
    cum: ['Sonunda! Ne kadar dayandın 😵‍💫💦', 'Bacaklarımı hissetmiyorum, sonunda geldin 🥵', 'Bu kadar uzun süreni hiç görmedim 😳', 'Sabrımın ödülü 😋💦', 'Önce beni bitirdin, sonra kendin geldin 🫠', 'Maraton gibiydi 😩💦'] },
  endless: { in: ['Sen insan mısın makine mi? 😵‍💫', 'Ben kaç kere geldim, sen hâlâ… 🥵', 'Bitmeyecek mi bu? Bitmesin 😈', 'Bacaklarım titriyor, sen hiç yavaşlamadın 😩', 'Sabaha kadar mı böyle? 😳', 'Sonsuz enerjin var 🫠'],
    near: ['Geleceksin sandım, yine durdun 😩', 'Hadi artık, yalvarıyorum 🥺', 'Bırak kendini artık 😈', 'Gerçekten geliyor musun bu sefer? 😳'],
    cum: ['İnanamıyorum, sonunda! 😵‍💫💦', 'Saatler sürdü… ölüyorum 🫠', 'Bunu kutlamamız lazım 😂💦', 'Artık yürüyemem, senin yüzünden 🥵', 'Bu gece unutulmaz 😩💦'] }
};
