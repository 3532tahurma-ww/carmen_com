/*
 * 🌍 Memleketler: ülke → şehirler + o ülkeye göre isimler (🎲 rastgele karakter önce ülkeyi, sonra şehri ve ismi seçer)
 *   r: kültür bölgesi → bot kurallarında "Memleket: <bölge>" özelliği (bkz. js/bot.js originTrait; kurallar "=memleket")
 *   w: ağırlık (Türkiye daha sık gelir). Türkiye'nin şehirleri / isimleri js/data/pools.js'ten gelir
 */
window.Stories = window.Stories || {};

Stories.World = (() => {
  const P = Stories.Pools || { cities: [], names: {} };
  const REGIONS = { tr: 'Türk', latin: 'Latin', akdeniz: 'Akdeniz', fransiz: 'Fransız', slav: 'Slav', kuzey: 'Kuzey Avrupa', anglo: 'Anglo', asya: 'Doğu Asya', arap: 'Arap' };
  const C = (id, name, flag, r, cities, f, m, w = 1) => ({ id, name, flag, r, w, cities, names: { '♀': f, '♂': m } });
  const countries = [
    C('tr', 'Türkiye', '🇹🇷', 'tr', P.cities || [], P.names['♀'] || [], P.names['♂'] || [], 8),
    // 💃 Latin
    C('br', 'Brezilya', '🇧🇷', 'latin', ['Rio de Janeiro', 'São Paulo', 'Salvador', 'Florianópolis', 'Recife'],
      ['Isabela', 'Larissa', 'Camila', 'Fernanda', 'Bianca', 'Gabriela', 'Juliana', 'Letícia', 'Rafaela', 'Thaís', 'Bruna', 'Mariana'], ['Thiago', 'Lucas', 'Rafael', 'Gustavo', 'Bruno', 'Felipe']),
    C('mx', 'Meksika', '🇲🇽', 'latin', ['Mexico City', 'Guadalajara', 'Cancún', 'Monterrey', 'Tulum'],
      ['Valeria', 'Ximena', 'Guadalupe', 'Fernanda', 'Daniela', 'Paola', 'Itzel', 'Renata', 'Mariana', 'Lupita', 'Karla'], ['Diego', 'Alejandro', 'Santiago', 'Mateo', 'Emiliano']),
    C('ar', 'Arjantin', '🇦🇷', 'latin', ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza'],
      ['Martina', 'Sofía', 'Agustina', 'Lucía', 'Florencia', 'Milagros', 'Delfina', 'Camila', 'Valentina'], ['Facundo', 'Joaquín', 'Lautaro', 'Tomás', 'Nicolás']),
    C('co', 'Kolombiya', '🇨🇴', 'latin', ['Medellín', 'Bogotá', 'Cartagena', 'Cali'],
      ['Valentina', 'Mariana', 'Daniela', 'Natalia', 'Salomé', 'Manuela', 'Juliana', 'Catalina', 'Isabella'], ['Andrés', 'Sebastián', 'Juan', 'Camilo', 'Esteban']),
    // 🍷 Akdeniz
    C('it', 'İtalya', '🇮🇹', 'akdeniz', ['Roma', 'Milano', 'Napoli', 'Floransa', 'Venedik', 'Palermo'],
      ['Giulia', 'Chiara', 'Francesca', 'Alessia', 'Martina', 'Sofia', 'Aurora', 'Ginevra', 'Bianca', 'Valentina', 'Elena', 'Serena'], ['Luca', 'Marco', 'Matteo', 'Lorenzo', 'Alessandro', 'Giovanni']),
    C('es', 'İspanya', '🇪🇸', 'akdeniz', ['Madrid', 'Barselona', 'Sevilla', 'Valencia', 'Malaga', 'İbiza'],
      ['Lucía', 'Carmen', 'Paula', 'Alba', 'Marta', 'Nerea', 'Inés', 'Claudia', 'Elena', 'Sara', 'Rocío', 'Noelia'], ['Pablo', 'Javier', 'Álvaro', 'Hugo', 'Sergio', 'Diego']),
    C('gr', 'Yunanistan', '🇬🇷', 'akdeniz', ['Atina', 'Selanik', 'Mikonos', 'Girit', 'Rodos'],
      ['Eleni', 'Katerina', 'Maria', 'Sofia', 'Despina', 'Ioanna', 'Anastasia', 'Christina', 'Dimitra', 'Zoe'], ['Nikos', 'Giorgos', 'Kostas', 'Dimitris', 'Yannis']),
    C('pt', 'Portekiz', '🇵🇹', 'akdeniz', ['Lizbon', 'Porto', 'Faro', 'Madeira'],
      ['Beatriz', 'Inês', 'Leonor', 'Matilde', 'Mariana', 'Carolina', 'Joana', 'Rita', 'Margarida'], ['João', 'Tiago', 'Rodrigo', 'Duarte', 'Miguel']),
    // 🥐 Fransız
    C('fr', 'Fransa', '🇫🇷', 'fransiz', ['Paris', 'Lyon', 'Marsilya', 'Nice', 'Bordeaux', 'Cannes'],
      ['Camille', 'Chloé', 'Léa', 'Manon', 'Inès', 'Juliette', 'Margaux', 'Élise', 'Clémence', 'Amélie', 'Océane', 'Céline'], ['Louis', 'Hugo', 'Antoine', 'Julien', 'Théo', 'Maxime']),
    C('be', 'Belçika', '🇧🇪', 'fransiz', ['Brüksel', 'Liège', 'Namur', 'Brugge'],
      ['Louise', 'Elise', 'Charlotte', 'Margaux', 'Noémie', 'Juliette', 'Clara', 'Lisa'], ['Arthur', 'Noah', 'Victor', 'Jules']),
    // 🪆 Slav
    C('ru', 'Rusya', '🇷🇺', 'slav', ['Moskova', 'St. Petersburg', 'Soçi', 'Kazan', 'Novosibirsk'],
      ['Anastasia', 'Natasha', 'Svetlana', 'Ekaterina', 'Olga', 'Daria', 'Polina', 'Ksenia', 'Alina', 'Irina', 'Yulia', 'Tatiana'], ['Dmitri', 'Ivan', 'Aleksei', 'Sergei', 'Nikolai', 'Mikhail']),
    C('ua', 'Ukrayna', '🇺🇦', 'slav', ['Kiev', 'Odessa', 'Lviv', 'Harkov'],
      ['Oksana', 'Olena', 'Viktoria', 'Kateryna', 'Sofia', 'Yana', 'Anastasia', 'Khrystyna', 'Iryna'], ['Andriy', 'Taras', 'Oleksandr', 'Bohdan', 'Mykola']),
    C('pl', 'Polonya', '🇵🇱', 'slav', ['Varşova', 'Krakov', 'Gdansk', 'Wrocław'],
      ['Agnieszka', 'Kasia', 'Magda', 'Zofia', 'Natalia', 'Aleksandra', 'Weronika', 'Julia', 'Marta'], ['Piotr', 'Tomasz', 'Kacper', 'Jakub', 'Michał']),
    C('cz', 'Çekya', '🇨🇿', 'slav', ['Prag', 'Brno', 'Karlovy Vary'],
      ['Tereza', 'Kateřina', 'Lucie', 'Veronika', 'Petra', 'Klára', 'Adéla', 'Eliška'], ['Jakub', 'Tomáš', 'Ondřej', 'Lukáš']),
    // ❄️ Kuzey Avrupa
    C('se', 'İsveç', '🇸🇪', 'kuzey', ['Stockholm', 'Göteborg', 'Malmö', 'Uppsala'],
      ['Astrid', 'Freja', 'Ebba', 'Linnea', 'Saga', 'Elsa', 'Maja', 'Ingrid', 'Alva', 'Wilma'], ['Erik', 'Oskar', 'Lars', 'Anders', 'Gustav']),
    C('no', 'Norveç', '🇳🇴', 'kuzey', ['Oslo', 'Bergen', 'Tromsø', 'Stavanger'],
      ['Ingrid', 'Nora', 'Sigrid', 'Tuva', 'Thea', 'Ida', 'Silje', 'Hedda', 'Solveig'], ['Magnus', 'Henrik', 'Sindre', 'Jonas', 'Leif']),
    C('dk', 'Danimarka', '🇩🇰', 'kuzey', ['Kopenhag', 'Aarhus', 'Odense'],
      ['Freja', 'Ida', 'Mathilde', 'Karla', 'Signe', 'Laura', 'Clara', 'Josefine'], ['Mads', 'Rasmus', 'Mikkel', 'Frederik']),
    C('de', 'Almanya', '🇩🇪', 'kuzey', ['Berlin', 'Münih', 'Hamburg', 'Köln', 'Frankfurt'],
      ['Lena', 'Hannah', 'Laura', 'Lea', 'Johanna', 'Katharina', 'Greta', 'Mia', 'Charlotte', 'Anja', 'Sophie', 'Leonie'], ['Lukas', 'Felix', 'Jonas', 'Maximilian', 'Paul', 'Tobias']),
    C('nl', 'Hollanda', '🇳🇱', 'kuzey', ['Amsterdam', 'Rotterdam', 'Utrecht', 'Lahey'],
      ['Sanne', 'Fleur', 'Anouk', 'Lotte', 'Femke', 'Noor', 'Iris', 'Lieke', 'Eva'], ['Daan', 'Sem', 'Bram', 'Thijs', 'Ruben']),
    // 🗽 Anglo
    C('us', 'ABD', '🇺🇸', 'anglo', ['New York', 'Los Angeles', 'Miami', 'Las Vegas', 'Chicago', 'Austin'],
      ['Ashley', 'Madison', 'Brittany', 'Kayla', 'Taylor', 'Jessica', 'Hailey', 'Brooke', 'Savannah', 'Amber', 'Megan', 'Jasmine'], ['Jake', 'Tyler', 'Ryan', 'Brandon', 'Josh', 'Chris']),
    C('gb', 'İngiltere', '🇬🇧', 'anglo', ['Londra', 'Manchester', 'Liverpool', 'Brighton', 'Edinburgh'],
      ['Olivia', 'Amelia', 'Emily', 'Charlotte', 'Poppy', 'Isla', 'Grace', 'Lily', 'Evie', 'Freya', 'Holly', 'Imogen'], ['Oliver', 'Harry', 'George', 'Jack', 'Alfie', 'James']),
    C('au', 'Avustralya', '🇦🇺', 'anglo', ['Sidney', 'Melbourne', 'Brisbane', 'Gold Coast', 'Perth'],
      ['Chloe', 'Mia', 'Ruby', 'Zoe', 'Matilda', 'Sienna', 'Tahlia', 'Isabella', 'Jade'], ['Lachlan', 'Cooper', 'Liam', 'Jack', 'Riley']),
    C('ca', 'Kanada', '🇨🇦', 'anglo', ['Toronto', 'Vancouver', 'Montreal', 'Calgary'],
      ['Emma', 'Avery', 'Madison', 'Brooklyn', 'Claire', 'Abigail', 'Sarah', 'Mackenzie'], ['Liam', 'Owen', 'Ethan', 'Logan', 'Nathan']),
    // 🌸 Doğu Asya
    C('jp', 'Japonya', '🇯🇵', 'asya', ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Sapporo', 'Fukuoka'],
      ['Yuki', 'Sakura', 'Hana', 'Aiko', 'Mei', 'Rin', 'Yui', 'Haruka', 'Miyu', 'Nanami', 'Akari', 'Emi'], ['Haruto', 'Ren', 'Sota', 'Kaito', 'Takeshi', 'Yuto']),
    C('kr', 'Güney Kore', '🇰🇷', 'asya', ['Seul', 'Busan', 'İncheon', 'Jeju'],
      ['Ji-woo', 'Seo-yeon', 'Min-ji', 'Ha-eun', 'Soo-ah', 'Yuna', 'Ji-ah', 'Chae-won', 'Da-eun', 'Eun-bi'], ['Min-jun', 'Ji-ho', 'Seo-jun', 'Hyun-woo', 'Do-yun']),
    C('cn', 'Çin', '🇨🇳', 'asya', ['Şanghay', 'Pekin', 'Hong Kong', 'Shenzhen', 'Chengdu'],
      ['Mei', 'Xiao', 'Lian', 'Ling', 'Yan', 'Jing', 'Hui', 'Xin', 'Fang', 'Lan'], ['Wei', 'Jun', 'Hao', 'Lei', 'Chen']),
    C('th', 'Tayland', '🇹🇭', 'asya', ['Bangkok', 'Phuket', 'Pattaya', 'Chiang Mai'],
      ['Ploy', 'Mint', 'Nok', 'Fah', 'Ying', 'Kanya', 'Malee', 'Pim', 'Dao'], ['Arthit', 'Somchai', 'Krit', 'Niran']),
    // 🌙 Arap
    C('lb', 'Lübnan', '🇱🇧', 'arap', ['Beyrut', 'Trablus', 'Sayda', 'Byblos'],
      ['Nour', 'Yasmin', 'Lara', 'Maya', 'Rania', 'Lina', 'Rima', 'Haifa', 'Nadine'], ['Karim', 'Rami', 'Ziad', 'Fadi', 'Nabil']),
    C('ma', 'Fas', '🇲🇦', 'arap', ['Kazablanka', 'Marakeş', 'Rabat', 'Tanca', 'Fes'],
      ['Salma', 'Imane', 'Khadija', 'Samira', 'Leila', 'Zineb', 'Houda', 'Sanaa', 'Meryem'], ['Youssef', 'Hamza', 'Mehdi', 'Amine', 'Omar']),
    C('ae', 'BAE', '🇦🇪', 'arap', ['Dubai', 'Abu Dabi', 'Şarika'],
      ['Aisha', 'Mariam', 'Fatima', 'Noor', 'Hessa', 'Shamma', 'Layla', 'Amira'], ['Khalid', 'Rashid', 'Saeed', 'Hamdan']),
    C('eg', 'Mısır', '🇪🇬', 'arap', ['Kahire', 'İskenderiye', 'Hurgada', 'Şarm El-Şeyh'],
      ['Nada', 'Habiba', 'Malak', 'Farida', 'Jana', 'Mona', 'Dina', 'Yara', 'Shahd'], ['Ahmed', 'Mostafa', 'Tarek', 'Sherif', 'Amr'])
  ];
  const low = s => String(s || '').toLocaleLowerCase('tr').trim();
  const pickW = list => { let r = Math.random() * list.reduce((a, c) => a + c.w, 0); return list.find(c => (r -= c.w) < 0) || list[0]; };
  const any = a => a[Math.floor(Math.random() * a.length)];
  // şehirden (ya da "Şehir, Ülke" / ülke adından) ülke; bilinmeyen şehir → null
  function countryOf(city) {
    const parts = String(city || '').split(/[,/·]/).map(low).filter(Boolean);
    if (!parts.length) return null;
    return countries.find(c => parts.some(p => low(c.name) === p || c.cities.some(x => low(x) === p))) || null;
  }
  const regionOf = city => { const c = countryOf(city); return c ? REGIONS[c.r] : ''; };
  // 🎲 ülke (ağırlıklı) → şehir; isim o ülkenin havuzundan
  const randCountry = () => pickW(countries.filter(c => c.cities.length));
  const randCity = c => any((c || randCountry()).cities);
  const randName = (c, g) => { const l = c && (c.names[g] || c.names['♀']); return l && l.length ? any(l) : ''; };
  return { REGIONS, countries, countryOf, regionOf, randCountry, randCity, randName };
})();
