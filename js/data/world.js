/*
 * 🌍 Memleketler: ülke → şehirler + o ülkeye göre isimler (🎲 rastgele karakter önce ülkeyi, sonra şehri ve ismi seçer)
 *   r: kültür bölgesi → bot kurallarında "Memleket: <bölge>" özelliği (bkz. js/bot.js originTrait; kurallar "=memleket")
 *   w: ağırlık (hepsi eşit). Türkiye'nin şehirleri / isimleri js/data/pools.js'ten gelir (rastgele seçimde ilk 6'sı: pick)
 */
window.Stories = window.Stories || {};

Stories.World = (() => {
  const P = Stories.Pools || { cities: [], names: {} };
  const REGIONS = { tr: 'Türk', latin: 'Latin', akdeniz: 'Akdeniz', fransiz: 'Fransız', slav: 'Slav', kuzey: 'Kuzey Avrupa', anglo: 'Anglo', asya: 'Doğu Asya', arap: 'Arap' };
  const C = (id, name, flag, r, cities, f, m, w = 1) => ({ id, name, flag, r, w, cities, names: { '♀': f, '♂': m } });
  const countries = [
    // 🎲 rastgele seçimde diğer ülkeler kadar şehir (pick); tüm liste yalnızca şehir → ülke tanıma için
    { ...C('tr', 'Türkiye', '🇹🇷', 'tr', P.cities || [], P.names['♀'] || [], P.names['♂'] || []), pick: (P.cities || []).slice(0, 6) },
    // 💃 Latin
    C('br', 'Brezilya', '🇧🇷', 'latin', ['Rio de Janeiro', 'São Paulo', 'Salvador', 'Florianópolis', 'Recife'],
      ['Isabela', 'Larissa', 'Camila', 'Fernanda', 'Bianca', 'Gabriela', 'Juliana', 'Letícia', 'Rafaela', 'Thaís', 'Bruna', 'Mariana',
        'Ana Clara', 'Beatriz', 'Carolina', 'Débora', 'Eduarda', 'Giovanna', 'Lívia', 'Luana', 'Manuela', 'Natália', 'Patrícia', 'Tainá', 'Vitória', 'Yasmin'],
      ['Thiago', 'Lucas', 'Rafael', 'Gustavo', 'Bruno', 'Felipe', 'Pedro', 'Matheus', 'Gabriel', 'Rodrigo', 'Caio', 'Vinícius', 'Leonardo', 'André']),
    C('mx', 'Meksika', '🇲🇽', 'latin', ['Mexico City', 'Guadalajara', 'Cancún', 'Monterrey', 'Tulum'],
      ['Valeria', 'Ximena', 'Guadalupe', 'Fernanda', 'Daniela', 'Paola', 'Itzel', 'Renata', 'Mariana', 'Lupita', 'Karla',
        'Andrea', 'Regina', 'Citlali', 'Abril', 'Alondra', 'Brenda', 'Jimena', 'Marisol', 'Nayeli', 'Sofía', 'Yaretzi', 'Elena', 'Araceli'],
      ['Diego', 'Alejandro', 'Santiago', 'Mateo', 'Emiliano', 'Carlos', 'Luis', 'Miguel', 'Ricardo', 'Javier', 'Eduardo', 'Rodrigo']),
    C('ar', 'Arjantin', '🇦🇷', 'latin', ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza'],
      ['Martina', 'Sofía', 'Agustina', 'Lucía', 'Florencia', 'Milagros', 'Delfina', 'Camila', 'Valentina',
        'Micaela', 'Rocío', 'Julieta', 'Belén', 'Candela', 'Antonella', 'Malena', 'Pilar', 'Josefina', 'Abril', 'Catalina', 'Ludmila', 'Guadalupe'],
      ['Facundo', 'Joaquín', 'Lautaro', 'Tomás', 'Nicolás', 'Matías', 'Santino', 'Gonzalo', 'Franco', 'Ignacio', 'Bautista', 'Federico']),
    C('co', 'Kolombiya', '🇨🇴', 'latin', ['Medellín', 'Bogotá', 'Cartagena', 'Cali'],
      ['Valentina', 'Mariana', 'Daniela', 'Natalia', 'Salomé', 'Manuela', 'Juliana', 'Catalina', 'Isabella',
        'Luisa', 'Sara', 'Paula', 'Laura', 'Alejandra', 'Carolina', 'Ángela', 'Gabriela', 'Jimena', 'Marcela', 'Tatiana', 'Antonia', 'Susana'],
      ['Andrés', 'Sebastián', 'Juan', 'Camilo', 'Esteban', 'Santiago', 'Felipe', 'Julián', 'Mauricio', 'Cristian', 'David', 'Óscar']),
    // 🍷 Akdeniz
    C('it', 'İtalya', '🇮🇹', 'akdeniz', ['Roma', 'Milano', 'Napoli', 'Floransa', 'Venedik', 'Palermo'],
      ['Giulia', 'Chiara', 'Francesca', 'Alessia', 'Martina', 'Sofia', 'Aurora', 'Ginevra', 'Bianca', 'Valentina', 'Elena', 'Serena',
        'Federica', 'Ilaria', 'Beatrice', 'Camilla', 'Noemi', 'Arianna', 'Greta', 'Ludovica', 'Vittoria', 'Rebecca', 'Gaia', 'Alice', 'Carlotta', 'Silvia'],
      ['Luca', 'Marco', 'Matteo', 'Lorenzo', 'Alessandro', 'Giovanni', 'Andrea', 'Francesco', 'Riccardo', 'Davide', 'Simone', 'Federico', 'Gabriele', 'Stefano']),
    C('es', 'İspanya', '🇪🇸', 'akdeniz', ['Madrid', 'Barselona', 'Sevilla', 'Valencia', 'Malaga', 'İbiza'],
      ['Lucía', 'Carmen', 'Paula', 'Alba', 'Marta', 'Nerea', 'Inés', 'Claudia', 'Elena', 'Sara', 'Rocío', 'Noelia',
        'Irene', 'Andrea', 'Cristina', 'Laura', 'Blanca', 'Ainhoa', 'Leire', 'Triana', 'Macarena', 'Pilar', 'Lola', 'Esther', 'Julia', 'Celia'],
      ['Pablo', 'Javier', 'Álvaro', 'Hugo', 'Sergio', 'Diego', 'Adrián', 'Daniel', 'Iván', 'Raúl', 'Marcos', 'Rubén', 'Íker', 'Carlos']),
    C('gr', 'Yunanistan', '🇬🇷', 'akdeniz', ['Atina', 'Selanik', 'Mikonos', 'Girit', 'Rodos'],
      ['Eleni', 'Katerina', 'Maria', 'Sofia', 'Despina', 'Ioanna', 'Anastasia', 'Christina', 'Dimitra', 'Zoe',
        'Georgia', 'Vasiliki', 'Athena', 'Evangelia', 'Konstantina', 'Paraskevi', 'Myrto', 'Eirini', 'Nefeli', 'Danae', 'Kalliopi', 'Fotini'],
      ['Nikos', 'Giorgos', 'Kostas', 'Dimitris', 'Yannis', 'Alexandros', 'Panagiotis', 'Stavros', 'Christos', 'Vasilis', 'Thanos', 'Petros']),
    C('pt', 'Portekiz', '🇵🇹', 'akdeniz', ['Lizbon', 'Porto', 'Faro', 'Madeira'],
      ['Beatriz', 'Inês', 'Leonor', 'Matilde', 'Mariana', 'Carolina', 'Joana', 'Rita', 'Margarida',
        'Ana', 'Catarina', 'Francisca', 'Sofia', 'Marta', 'Teresa', 'Raquel', 'Filipa', 'Constança', 'Benedita', 'Lara', 'Madalena', 'Vera'],
      ['João', 'Tiago', 'Rodrigo', 'Duarte', 'Miguel', 'Gonçalo', 'Afonso', 'Diogo', 'Rui', 'Nuno', 'Bernardo', 'Henrique']),
    // 🥐 Fransız
    C('fr', 'Fransa', '🇫🇷', 'fransiz', ['Paris', 'Lyon', 'Marsilya', 'Nice', 'Bordeaux', 'Cannes'],
      ['Camille', 'Chloé', 'Léa', 'Manon', 'Inès', 'Juliette', 'Margaux', 'Élise', 'Clémence', 'Amélie', 'Océane', 'Céline',
        'Sarah', 'Pauline', 'Mathilde', 'Lucie', 'Anaïs', 'Maëlle', 'Coralie', 'Émilie', 'Justine', 'Zoé', 'Lou', 'Capucine', 'Solène', 'Agathe'],
      ['Louis', 'Hugo', 'Antoine', 'Julien', 'Théo', 'Maxime', 'Nicolas', 'Baptiste', 'Romain', 'Thomas', 'Mathis', 'Bastien', 'Alexandre', 'Gabriel']),
    C('be', 'Belçika', '🇧🇪', 'fransiz', ['Brüksel', 'Liège', 'Namur', 'Brugge'],
      ['Louise', 'Elise', 'Charlotte', 'Margaux', 'Noémie', 'Juliette', 'Clara', 'Lisa',
        'Emma', 'Lotte', 'Fien', 'Marie', 'Manon', 'Camille', 'Justine', 'Laure', 'Axelle', 'Sofie', 'Hélène', 'Pauline', 'Romy'],
      ['Arthur', 'Noah', 'Victor', 'Jules', 'Louis', 'Lucas', 'Maxime', 'Thibault', 'Wout', 'Arnaud', 'Simon', 'Cédric']),
    // 🪆 Slav
    C('ru', 'Rusya', '🇷🇺', 'slav', ['Moskova', 'St. Petersburg', 'Soçi', 'Kazan', 'Novosibirsk'],
      ['Anastasia', 'Natasha', 'Svetlana', 'Ekaterina', 'Olga', 'Daria', 'Polina', 'Ksenia', 'Alina', 'Irina', 'Yulia', 'Tatiana',
        'Sofia', 'Viktoria', 'Elena', 'Valeria', 'Kristina', 'Veronika', 'Arina', 'Milana', 'Nadia', 'Lyudmila', 'Vera', 'Margarita', 'Alyona', 'Oksana'],
      ['Dmitri', 'Ivan', 'Aleksei', 'Sergei', 'Nikolai', 'Mikhail', 'Andrei', 'Pavel', 'Artyom', 'Maxim', 'Vladimir', 'Yuri', 'Kirill', 'Roman']),
    C('ua', 'Ukrayna', '🇺🇦', 'slav', ['Kiev', 'Odessa', 'Lviv', 'Harkov'],
      ['Oksana', 'Olena', 'Viktoria', 'Kateryna', 'Sofia', 'Yana', 'Anastasia', 'Khrystyna', 'Iryna',
        'Daryna', 'Solomiya', 'Mariya', 'Yulia', 'Nataliya', 'Tetiana', 'Halyna', 'Lesya', 'Zlata', 'Vira', 'Svitlana', 'Alina', 'Uliana'],
      ['Andriy', 'Taras', 'Oleksandr', 'Bohdan', 'Mykola', 'Dmytro', 'Serhiy', 'Yaroslav', 'Volodymyr', 'Maksym', 'Ostap', 'Vitaliy']),
    C('pl', 'Polonya', '🇵🇱', 'slav', ['Varşova', 'Krakov', 'Gdansk', 'Wrocław'],
      ['Agnieszka', 'Kasia', 'Magda', 'Zofia', 'Natalia', 'Aleksandra', 'Weronika', 'Julia', 'Marta',
        'Joanna', 'Paulina', 'Karolina', 'Monika', 'Ewa', 'Justyna', 'Dominika', 'Patrycja', 'Gabriela', 'Oliwia', 'Maja', 'Hanna', 'Iwona'],
      ['Piotr', 'Tomasz', 'Kacper', 'Jakub', 'Michał', 'Paweł', 'Krzysztof', 'Mateusz', 'Łukasz', 'Bartek', 'Wojciech', 'Marek']),
    C('cz', 'Çekya', '🇨🇿', 'slav', ['Prag', 'Brno', 'Karlovy Vary'],
      ['Tereza', 'Kateřina', 'Lucie', 'Veronika', 'Petra', 'Klára', 'Adéla', 'Eliška',
        'Barbora', 'Anna', 'Markéta', 'Nikola', 'Kristýna', 'Michaela', 'Zuzana', 'Simona', 'Denisa', 'Natálie', 'Šárka', 'Pavla', 'Eva'],
      ['Jakub', 'Tomáš', 'Ondřej', 'Lukáš', 'Jan', 'Petr', 'Martin', 'Vojtěch', 'Filip', 'Matěj', 'David', 'Radek']),
    // ❄️ Kuzey Avrupa
    C('se', 'İsveç', '🇸🇪', 'kuzey', ['Stockholm', 'Göteborg', 'Malmö', 'Uppsala'],
      ['Astrid', 'Freja', 'Ebba', 'Linnea', 'Saga', 'Elsa', 'Maja', 'Ingrid', 'Alva', 'Wilma',
        'Agnes', 'Klara', 'Moa', 'Tilda', 'Sara', 'Emma', 'Julia', 'Ellen', 'Matilda', 'Hanna', 'Sofie', 'Elin'],
      ['Erik', 'Oskar', 'Lars', 'Anders', 'Gustav', 'Axel', 'Viktor', 'Johan', 'Nils', 'Emil', 'Henrik', 'Filip']),
    C('no', 'Norveç', '🇳🇴', 'kuzey', ['Oslo', 'Bergen', 'Tromsø', 'Stavanger'],
      ['Ingrid', 'Nora', 'Sigrid', 'Tuva', 'Thea', 'Ida', 'Silje', 'Hedda', 'Solveig',
        'Emilie', 'Maren', 'Kari', 'Ragnhild', 'Live', 'Frida', 'Marte', 'Vilde', 'Synne', 'Helene', 'Ane', 'Kaja', 'Iselin'],
      ['Magnus', 'Henrik', 'Sindre', 'Jonas', 'Leif', 'Ole', 'Kristian', 'Eirik', 'Håkon', 'Sander', 'Even', 'Torstein']),
    C('dk', 'Danimarka', '🇩🇰', 'kuzey', ['Kopenhag', 'Aarhus', 'Odense'],
      ['Freja', 'Ida', 'Mathilde', 'Karla', 'Signe', 'Laura', 'Clara', 'Josefine',
        'Emma', 'Sofie', 'Anna', 'Nanna', 'Caroline', 'Cecilie', 'Line', 'Maja', 'Astrid', 'Liva', 'Mette', 'Pernille', 'Trine'],
      ['Mads', 'Rasmus', 'Mikkel', 'Frederik', 'Christian', 'Jesper', 'Søren', 'Anders', 'Kasper', 'Emil', 'Oliver', 'Magnus']),
    C('de', 'Almanya', '🇩🇪', 'kuzey', ['Berlin', 'Münih', 'Hamburg', 'Köln', 'Frankfurt'],
      ['Lena', 'Hannah', 'Laura', 'Lea', 'Johanna', 'Katharina', 'Greta', 'Mia', 'Charlotte', 'Anja', 'Sophie', 'Leonie',
        'Marie', 'Emma', 'Clara', 'Julia', 'Lisa', 'Sarah', 'Nina', 'Franziska', 'Paula', 'Helena', 'Amelie', 'Svenja', 'Lina', 'Jana'],
      ['Lukas', 'Felix', 'Jonas', 'Maximilian', 'Paul', 'Tobias', 'Leon', 'Niklas', 'Moritz', 'Florian', 'Jan', 'Stefan', 'Sebastian', 'Tim']),
    C('nl', 'Hollanda', '🇳🇱', 'kuzey', ['Amsterdam', 'Rotterdam', 'Utrecht', 'Lahey'],
      ['Sanne', 'Fleur', 'Anouk', 'Lotte', 'Femke', 'Noor', 'Iris', 'Lieke', 'Eva',
        'Sophie', 'Julia', 'Emma', 'Tess', 'Isa', 'Roos', 'Fenna', 'Floor', 'Maud', 'Marloes', 'Esmée', 'Lisa', 'Jade'],
      ['Daan', 'Sem', 'Bram', 'Thijs', 'Ruben', 'Lars', 'Jesse', 'Stijn', 'Joris', 'Niels', 'Sven', 'Luuk']),
    // 🗽 Anglo
    C('us', 'ABD', '🇺🇸', 'anglo', ['New York', 'Los Angeles', 'Miami', 'Las Vegas', 'Chicago', 'Austin'],
      ['Ashley', 'Madison', 'Brittany', 'Kayla', 'Taylor', 'Jessica', 'Hailey', 'Brooke', 'Savannah', 'Amber', 'Megan', 'Jasmine',
        'Emily', 'Sophia', 'Olivia', 'Abigail', 'Natalie', 'Samantha', 'Lauren', 'Kylie', 'Mackenzie', 'Paige', 'Riley', 'Destiny', 'Harper', 'Alexis'],
      ['Jake', 'Tyler', 'Ryan', 'Brandon', 'Josh', 'Chris', 'Michael', 'Matt', 'Austin', 'Kevin', 'Justin', 'Mason', 'Dylan', 'Cody']),
    C('gb', 'İngiltere', '🇬🇧', 'anglo', ['Londra', 'Manchester', 'Liverpool', 'Brighton', 'Edinburgh'],
      ['Olivia', 'Amelia', 'Emily', 'Charlotte', 'Poppy', 'Isla', 'Grace', 'Lily', 'Evie', 'Freya', 'Holly', 'Imogen',
        'Sophie', 'Jessica', 'Ella', 'Millie', 'Daisy', 'Phoebe', 'Rosie', 'Harriet', 'Lucy', 'Eleanor', 'Florence', 'Abbie', 'Megan', 'Chloe'],
      ['Oliver', 'Harry', 'George', 'Jack', 'Alfie', 'James', 'Charlie', 'Thomas', 'William', 'Callum', 'Archie', 'Henry', 'Freddie', 'Joe']),
    C('au', 'Avustralya', '🇦🇺', 'anglo', ['Sidney', 'Melbourne', 'Brisbane', 'Gold Coast', 'Perth'],
      ['Chloe', 'Mia', 'Ruby', 'Zoe', 'Matilda', 'Sienna', 'Tahlia', 'Isabella', 'Jade',
        'Charlotte', 'Olivia', 'Ava', 'Georgia', 'Grace', 'Indi', 'Willow', 'Ella', 'Harper', 'Lily', 'Kiara', 'Skye', 'Brianna'],
      ['Lachlan', 'Cooper', 'Liam', 'Jack', 'Riley', 'Hamish', 'Mitchell', 'Bailey', 'Kai', 'Harrison', 'Flynn', 'Jayden']),
    C('ca', 'Kanada', '🇨🇦', 'anglo', ['Toronto', 'Vancouver', 'Montreal', 'Calgary'],
      ['Emma', 'Avery', 'Madison', 'Brooklyn', 'Claire', 'Abigail', 'Sarah', 'Mackenzie',
        'Olivia', 'Charlotte', 'Chloé', 'Léa', 'Hailey', 'Megan', 'Sophie', 'Jenna', 'Kaitlyn', 'Rachel', 'Amélie', 'Stephanie', 'Rebecca'],
      ['Liam', 'Owen', 'Ethan', 'Logan', 'Nathan', 'Noah', 'Connor', 'Hunter', 'Tristan', 'Félix', 'Mathieu', 'Evan']),
    // 🌸 Doğu Asya
    C('jp', 'Japonya', '🇯🇵', 'asya', ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Sapporo', 'Fukuoka'],
      ['Yuki', 'Sakura', 'Hana', 'Aiko', 'Mei', 'Rin', 'Yui', 'Haruka', 'Miyu', 'Nanami', 'Akari', 'Emi',
        'Ayaka', 'Misaki', 'Mio', 'Natsumi', 'Saki', 'Yuna', 'Kaori', 'Momoka', 'Hinata', 'Reina', 'Chihiro', 'Asuka', 'Kanna', 'Riko'],
      ['Haruto', 'Ren', 'Sota', 'Kaito', 'Takeshi', 'Yuto', 'Riku', 'Daiki', 'Kenta', 'Shota', 'Hiroshi', 'Ryo', 'Takumi', 'Yamato']),
    C('kr', 'Güney Kore', '🇰🇷', 'asya', ['Seul', 'Busan', 'İncheon', 'Jeju'],
      ['Ji-woo', 'Seo-yeon', 'Min-ji', 'Ha-eun', 'Soo-ah', 'Yuna', 'Ji-ah', 'Chae-won', 'Da-eun', 'Eun-bi',
        'Ji-min', 'Su-bin', 'Ye-jin', 'Hye-jin', 'Na-yeon', 'So-hee', 'Ye-rin', 'Seo-ah', 'Hae-won', 'Bo-ra', 'Min-seo', 'Ga-eun'],
      ['Min-jun', 'Ji-ho', 'Seo-jun', 'Hyun-woo', 'Do-yun', 'Jae-hyun', 'Tae-yang', 'Joon-young', 'Woo-jin', 'Sung-min', 'Dong-hyun', 'Ji-hoon']),
    C('cn', 'Çin', '🇨🇳', 'asya', ['Şanghay', 'Pekin', 'Hong Kong', 'Shenzhen', 'Chengdu'],
      ['Mei', 'Xiao', 'Lian', 'Ling', 'Yan', 'Jing', 'Hui', 'Xin', 'Fang', 'Lan',
        'Yu', 'Ying', 'Qing', 'Xia', 'Lili', 'Wen', 'Shu', 'Yue', 'Zhen', 'Ning', 'Ruolan', 'Xiaoyu', 'Jiayi', 'Meiling'],
      ['Wei', 'Jun', 'Hao', 'Lei', 'Chen', 'Ming', 'Tao', 'Long', 'Bo', 'Zhihao', 'Yichen', 'Kai']),
    C('th', 'Tayland', '🇹🇭', 'asya', ['Bangkok', 'Phuket', 'Pattaya', 'Chiang Mai'],
      ['Ploy', 'Mint', 'Nok', 'Fah', 'Ying', 'Kanya', 'Malee', 'Pim', 'Dao',
        'Ploypailin', 'Nam', 'Fern', 'Bow', 'Aom', 'Pang', 'May', 'Noon', 'Kwan', 'Mai', 'Busaba', 'Siriporn', 'Lalisa'],
      ['Arthit', 'Somchai', 'Krit', 'Niran', 'Tawan', 'Nat', 'Pong', 'Chai', 'Bank', 'Ton', 'Win', 'Phum']),
    // 🌙 Arap
    C('lb', 'Lübnan', '🇱🇧', 'arap', ['Beyrut', 'Trablus', 'Sayda', 'Byblos'],
      ['Nour', 'Yasmin', 'Lara', 'Maya', 'Rania', 'Lina', 'Rima', 'Haifa', 'Nadine',
        'Rana', 'Dana', 'Joëlle', 'Christelle', 'Carla', 'Myriam', 'Tala', 'Sara', 'Ghada', 'Reem', 'Hiba', 'Zeina', 'Nancy'],
      ['Karim', 'Rami', 'Ziad', 'Fadi', 'Nabil', 'Elie', 'Georges', 'Marwan', 'Tony', 'Jad', 'Wael', 'Samir']),
    C('ma', 'Fas', '🇲🇦', 'arap', ['Kazablanka', 'Marakeş', 'Rabat', 'Tanca', 'Fes'],
      ['Salma', 'Imane', 'Khadija', 'Samira', 'Leila', 'Zineb', 'Houda', 'Sanaa', 'Meryem',
        'Nisrine', 'Hajar', 'Ghita', 'Kenza', 'Soukaina', 'Fatima Zahra', 'Asmae', 'Loubna', 'Hind', 'Siham', 'Yasmine', 'Ikram', 'Amal'],
      ['Youssef', 'Hamza', 'Mehdi', 'Amine', 'Omar', 'Anas', 'Ayoub', 'Rachid', 'Karim', 'Said', 'Ilyas', 'Othmane']),
    C('ae', 'BAE', '🇦🇪', 'arap', ['Dubai', 'Abu Dabi', 'Şarika'],
      ['Aisha', 'Mariam', 'Fatima', 'Noor', 'Hessa', 'Shamma', 'Layla', 'Amira',
        'Mahra', 'Alya', 'Sheikha', 'Latifa', 'Moza', 'Hind', 'Reem', 'Salama', 'Maitha', 'Afra', 'Ghaya', 'Dana', 'Sara'],
      ['Khalid', 'Rashid', 'Saeed', 'Hamdan', 'Mohammed', 'Sultan', 'Majid', 'Faisal', 'Ahmed', 'Zayed', 'Mansour', 'Obaid']),
    C('eg', 'Mısır', '🇪🇬', 'arap', ['Kahire', 'İskenderiye', 'Hurgada', 'Şarm El-Şeyh'],
      ['Nada', 'Habiba', 'Malak', 'Farida', 'Jana', 'Mona', 'Dina', 'Yara', 'Shahd',
        'Nour', 'Salma', 'Mariam', 'Rana', 'Heba', 'Aya', 'Laila', 'Nesma', 'Rehab', 'Sherine', 'Yasmin', 'Menna', 'Hana'],
      ['Ahmed', 'Mostafa', 'Tarek', 'Sherif', 'Amr', 'Mahmoud', 'Karim', 'Omar', 'Hassan', 'Youssef', 'Khaled', 'Hossam'])
  ];
  const low = s => String(s || '').toLocaleLowerCase('tr').trim();
  const pickW = list => { let r = Math.random() * list.reduce((a, c) => a + c.w, 0); return list.find(c => (r -= c.w) < 0) || list[0]; };
  const any = a => a[Math.floor(Math.random() * a.length)];
  // şehirden (ya da "Şehir, Ülke" / ülke adından) ülke; bilinmeyen şehir → null
  function countryOf(city) {
    const parts = String(city || '').split(/[,/·]/).map(low).filter(Boolean);
    if (!parts.length) return null;
    // Türkiye listesinde yabancı şehirler de var (pools.js moreCities): önce kendi ülkesi
    const has = c => parts.some(p => low(c.name) === p || c.cities.some(x => low(x) === p));
    return countries.find(c => c.id !== 'tr' && has(c)) || countries.find(has) || null;
  }
  const regionOf = city => { const c = countryOf(city); return c ? REGIONS[c.r] : ''; };
  // 🎲 ülke (ağırlıklı) → şehir; isim o ülkenin havuzundan
  const randCountry = () => pickW(countries.filter(c => c.cities.length));
  const randCity = c => { c = c || randCountry(); return any(c.pick && c.pick.length ? c.pick : c.cities); };
  const randName = (c, g) => { const l = c && (c.names[g] || c.names['♀']); return l && l.length ? any(l) : ''; };
  return { REGIONS, countries, countryOf, regionOf, randCountry, randCity, randName };
})();
