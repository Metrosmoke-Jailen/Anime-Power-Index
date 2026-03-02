const characters = [
  // Dragon Ball
  { id: 1, name: "Goku", universe: "Dragon Ball", powerType: "Ki", alignment: "Hero", stats: { strength: 100, speed: 95, intelligence: 80 } },
  { id: 2, name: "Vegeta", universe: "Dragon Ball", powerType: "Ki", alignment: "Anti-Hero", stats: { strength: 95, speed: 92, intelligence: 85 } },
  { id: 3, name: "Frieza", universe: "Dragon Ball", powerType: "Ki", alignment: "Villain", stats: { strength: 98, speed: 90, intelligence: 88 } },
  { id: 4, name: "Piccolo", universe: "Dragon Ball", powerType: "Ki", alignment: "Hero", stats: { strength: 88, speed: 85, intelligence: 90 } },
  { id: 5, name: "Beerus", universe: "Dragon Ball", powerType: "Godly Ki", alignment: "Anti-Hero", stats: { strength: 100, speed: 97, intelligence: 90 } },

  // Naruto
  { id: 6, name: "Naruto Uzumaki", universe: "Naruto", powerType: "Chakra", alignment: "Hero", stats: { strength: 92, speed: 91, intelligence: 85 } },
  { id: 7, name: "Sasuke Uchiha", universe: "Naruto", powerType: "Chakra", alignment: "Anti-Hero", stats: { strength: 85, speed: 90, intelligence: 95 } },
  { id: 8, name: "Madara Uchiha", universe: "Naruto", powerType: "Chakra", alignment: "Villain", stats: { strength: 98, speed: 88, intelligence: 90 } },
  { id: 9, name: "Itachi Uchiha", universe: "Naruto", powerType: "Chakra", alignment: "Anti-Hero", stats: { strength: 85, speed: 87, intelligence: 95 } },
  { id: 10, name: "Kakashi Hatake", universe: "Naruto", powerType: "Chakra", alignment: "Hero", stats: { strength: 88, speed: 86, intelligence: 92 } },

  // One Piece
  { id: 11, name: "Monkey D. Luffy", universe: "One Piece", powerType: "Devil Fruit", alignment: "Hero", stats: { strength: 90, speed: 88, intelligence: 80 } },
  { id: 12, name: "Roronoa Zoro", universe: "One Piece", powerType: "Swordsmanship", alignment: "Hero", stats: { strength: 92, speed: 85, intelligence: 82 } },
  { id: 13, name: "Sanji", universe: "One Piece", powerType: "Martial Arts", alignment: "Hero", stats: { strength: 88, speed: 90, intelligence: 83 } },
  { id: 14, name: "Blackbeard", universe: "One Piece", powerType: "Devil Fruit", alignment: "Villain", stats: { strength: 95, speed: 82, intelligence: 88 } },
  { id: 15, name: "Shanks", universe: "One Piece", powerType: "Haki", alignment: "Hero", stats: { strength: 93, speed: 90, intelligence: 85 } },

  // Bleach
  { id: 16, name: "Ichigo Kurosaki", universe: "Bleach", powerType: "Spiritual Energy", alignment: "Hero", stats: { strength: 90, speed: 85, intelligence: 82 } },
  { id: 17, name: "Aizen", universe: "Bleach", powerType: "Spiritual Energy", alignment: "Villain", stats: { strength: 95, speed: 90, intelligence: 95 } },
  { id: 18, name: "Rukia Kuchiki", universe: "Bleach", powerType: "Spiritual Energy", alignment: "Hero", stats: { strength: 80, speed: 82, intelligence: 88 } },
  { id: 19, name: "Kenpachi Zaraki", universe: "Bleach", powerType: "Spiritual Energy", alignment: "Hero", stats: { strength: 97, speed: 83, intelligence: 75 } },
  { id: 20, name: "Byakuya Kuchiki", universe: "Bleach", powerType: "Spiritual Energy", alignment: "Hero", stats: { strength: 85, speed: 87, intelligence: 92 } },

  // Seven Deadly Sins
  { id: 21, name: "Meliodas", universe: "Seven Deadly Sins", powerType: "Demon", alignment: "Hero", stats: { strength: 95, speed: 90, intelligence: 85 } },
  { id: 22, name: "Escanor", universe: "Seven Deadly Sins", powerType: "Sun Power", alignment: "Hero", stats: { strength: 100, speed: 80, intelligence: 82 } },
  { id: 23, name: "Ban", universe: "Seven Deadly Sins", powerType: "Immortality", alignment: "Anti-Hero", stats: { strength: 88, speed: 90, intelligence: 78 } },
  { id: 24, name: "Merlin", universe: "Seven Deadly Sins", powerType: "Magic", alignment: "Hero", stats: { strength: 82, speed: 80, intelligence: 100 } },
  { id: 25, name: "King", universe: "Seven Deadly Sins", powerType: "Fairy Magic", alignment: "Hero", stats: { strength: 83, speed: 85, intelligence: 88 } },

  // Demon Slayer
  { id: 26, name: "Tanjiro Kamado", universe: "Demon Slayer", powerType: "Breath Style", alignment: "Hero", stats: { strength: 85, speed: 88, intelligence: 80 } },
  { id: 27, name: "Nezuko Kamado", universe: "Demon Slayer", powerType: "Demon", alignment: "Hero", stats: { strength: 80, speed: 85, intelligence: 78 } },
  { id: 28, name: "Muzan Kibutsuji", universe: "Demon Slayer", powerType: "Demon", alignment: "Villain", stats: { strength: 98, speed: 95, intelligence: 92 } },
  { id: 29, name: "Zenitsu Agatsuma", universe: "Demon Slayer", powerType: "Breath Style", alignment: "Hero", stats: { strength: 78, speed: 90, intelligence: 75 } },
  { id: 30, name: "Inosuke Hashibira", universe: "Demon Slayer", powerType: "Beast Breathing", alignment: "Hero", stats: { strength: 88, speed: 87, intelligence: 70 } },

  // Jujutsu Kaisen
  { id: 31, name: "Gojo Satoru", universe: "Jujutsu Kaisen", powerType: "Cursed Energy", alignment: "Hero", stats: { strength: 95, speed: 98, intelligence: 90 } },
  { id: 32, name: "Suguru Geto", universe: "Jujutsu Kaisen", powerType: "Cursed Energy", alignment: "Villain", stats: { strength: 90, speed: 88, intelligence: 92 } },
  { id: 33, name: "Megumi Fushiguro", universe: "Jujutsu Kaisen", powerType: "Cursed Energy", alignment: "Hero", stats: { strength: 85, speed: 85, intelligence: 88 } },
  { id: 34, name: "Nobara Kugisaki", universe: "Jujutsu Kaisen", powerType: "Cursed Energy", alignment: "Hero", stats: { strength: 82, speed: 83, intelligence: 85 } },
  { id: 35, name: "Yuta Okkotsu", universe: "Jujutsu Kaisen", powerType: "Cursed Energy", alignment: "Hero", stats: { strength: 92, speed: 90, intelligence: 88 } },

  // My Hero Academia
  { id: 36, name: "Deku", universe: "My Hero Academia", powerType: "Quirk", alignment: "Hero", stats: { strength: 88, speed: 85, intelligence: 90 } },
  { id: 37, name: "Bakugo", universe: "My Hero Academia", powerType: "Quirk", alignment: "Anti-Hero", stats: { strength: 90, speed: 88, intelligence: 82 } },
  { id: 38, name: "All Might", universe: "My Hero Academia", powerType: "Quirk", alignment: "Hero", stats: { strength: 100, speed: 85, intelligence: 85 } },
  { id: 39, name: "Shigaraki Tomura", universe: "My Hero Academia", powerType: "Quirk", alignment: "Villain", stats: { strength: 95, speed: 82, intelligence: 88 } },
  { id: 40, name: "Endeavor", universe: "My Hero Academia", powerType: "Quirk", alignment: "Hero", stats: { strength: 98, speed: 85, intelligence: 87 } },

  // Attack on Titan
  { id: 41, name: "Eren Yeager", universe: "Attack on Titan", powerType: "Titan", alignment: "Hero", stats: { strength: 90, speed: 85, intelligence: 80 } },
  { id: 42, name: "Mikasa Ackerman", universe: "Attack on Titan", powerType: "Combat", alignment: "Hero", stats: { strength: 88, speed: 90, intelligence: 85 } },
  { id: 43, name: "Levi Ackerman", universe: "Attack on Titan", powerType: "Combat", alignment: "Hero", stats: { strength: 95, speed: 95, intelligence: 88 } },
  { id: 44, name: "Armin Arlert", universe: "Attack on Titan", powerType: "Tactical", alignment: "Hero", stats: { strength: 78, speed: 80, intelligence: 95 } },
  { id: 45, name: "Zeke Yeager", universe: "Attack on Titan", powerType: "Titan", alignment: "Villain", stats: { strength: 90, speed: 85, intelligence: 88 } },

  // Fairy Tail
  { id: 46, name: "Natsu Dragneel", universe: "Fairy Tail", powerType: "Fire Magic", alignment: "Hero", stats: { strength: 90, speed: 88, intelligence: 75 } },
  { id: 47, name: "Erza Scarlet", universe: "Fairy Tail", powerType: "Magic Armor", alignment: "Hero", stats: { strength: 92, speed: 85, intelligence: 82 } },
  { id: 48, name: "Gray Fullbuster", universe: "Fairy Tail", powerType: "Ice Magic", alignment: "Hero", stats: { strength: 85, speed: 82, intelligence: 80 } },
  { id: 49, name: "Zeref", universe: "Fairy Tail", powerType: "Magic", alignment: "Villain", stats: { strength: 98, speed: 88, intelligence: 95 } },

  // Magi
  { id: 50, name: "Morgiana", universe: "Magi", powerType: "Martial Arts", alignment: "Hero", stats: { strength: 88, speed: 87, intelligence: 80 } },
  { id: 51, name: "Alibaba Saluja", universe: "Magi", powerType: "Magic", alignment: "Hero", stats: { strength: 85, speed: 83, intelligence: 85 } },
  { id: 52, name: "Judal", universe: "Magi", powerType: "Magic", alignment: "Villain", stats: { strength: 90, speed: 85, intelligence: 88 } },

  // Sword Art Online
  { id: 53, name: "Kirito", universe: "Sword Art Online", powerType: "Dual Blades", alignment: "Hero", stats: { strength: 88, speed: 92, intelligence: 85 } },
  { id: 54, name: "Asuna", universe: "Sword Art Online", powerType: "Rapier Combat", alignment: "Hero", stats: { strength: 85, speed: 94, intelligence: 88 } },
  { id: 55, name: "Sinon", universe: "Sword Art Online", powerType: "Sniper Combat", alignment: "Hero", stats: { strength: 78, speed: 90, intelligence: 88 } },
  { id: 56, name: "Alice Zuberg", universe: "Sword Art Online", powerType: "Integrity Knight", alignment: "Hero", stats: { strength: 92, speed: 88, intelligence: 85 } },
  { id: 57, name: "Eugeo", universe: "Sword Art Online", powerType: "Sacred Arts", alignment: "Hero", stats: { strength: 85, speed: 82, intelligence: 84 } },
  { id: 58, name: "Kayaba Akihiko", universe: "Sword Art Online", powerType: "System Authority", alignment: "Villain", stats: { strength: 80, speed: 75, intelligence: 98 } },

  // Hunter x Hunter
  { id: 59, name: "Gon Freecss", universe: "Hunter x Hunter", powerType: "Nen", alignment: "Hero", stats: { strength: 90, speed: 88, intelligence: 75 } },
  { id: 60, name: "Killua Zoldyck", universe: "Hunter x Hunter", powerType: "Nen", alignment: "Hero", stats: { strength: 88, speed: 95, intelligence: 85 } },
  { id: 61, name: "Meruem", universe: "Hunter x Hunter", powerType: "Nen", alignment: "Villain", stats: { strength: 100, speed: 95, intelligence: 95 } },
  { id: 62, name: "Hisoka Morow", universe: "Hunter x Hunter", powerType: "Nen", alignment: "Anti-Hero", stats: { strength: 92, speed: 90, intelligence: 90 } },
  { id: 63, name: "Kurapika", universe: "Hunter x Hunter", powerType: "Nen", alignment: "Hero", stats: { strength: 88, speed: 87, intelligence: 95 } },
  { id: 64, name: "Chrollo Lucilfer", universe: "Hunter x Hunter", powerType: "Nen", alignment: "Villain", stats: { strength: 93, speed: 88, intelligence: 96 } },
  { id: 65, name: "Netero", universe: "Hunter x Hunter", powerType: "Nen", alignment: "Hero", stats: { strength: 98, speed: 92, intelligence: 90 } },

  // Chainsaw Man
  { id: 66, name: "Denji", universe: "Chainsaw Man", powerType: "Devil Hybrid", alignment: "Anti-Hero", stats: { strength: 88, speed: 85, intelligence: 70 } },
  { id: 67, name: "Makima", universe: "Chainsaw Man", powerType: "Control Devil", alignment: "Villain", stats: { strength: 95, speed: 85, intelligence: 98 } },
  { id: 68, name: "Power", universe: "Chainsaw Man", powerType: "Blood Devil", alignment: "Anti-Hero", stats: { strength: 85, speed: 80, intelligence: 65 } },
  { id: 69, name: "Aki Hayakawa", universe: "Chainsaw Man", powerType: "Devil Contract", alignment: "Hero", stats: { strength: 85, speed: 83, intelligence: 88 } },
  { id: 70, name: "Katana Man", universe: "Chainsaw Man", powerType: "Devil Hybrid", alignment: "Villain", stats: { strength: 90, speed: 87, intelligence: 75 } },
  { id: 71, name: "Quanxi", universe: "Chainsaw Man", powerType: "Devil Hybrid", alignment: "Anti-Hero", stats: { strength: 95, speed: 92, intelligence: 85 } },
  { id: 72, name: "Darkness Devil", universe: "Chainsaw Man", powerType: "Primal Devil", alignment: "Villain", stats: { strength: 100, speed: 95, intelligence: 95 } },

  // Solo Leveling
  { id: 73, name: "Sung Jin-Woo", universe: "Solo Leveling", powerType: "Shadow Monarch", alignment: "Hero", stats: { strength: 98, speed: 95, intelligence: 90 } },
  { id: 74, name: "Cha Hae-In", universe: "Solo Leveling", powerType: "Hunter", alignment: "Hero", stats: { strength: 90, speed: 92, intelligence: 85 } },
  { id: 75, name: "Thomas Andre", universe: "Solo Leveling", powerType: "Nation-Level Hunter", alignment: "Hero", stats: { strength: 98, speed: 85, intelligence: 80 } },
  { id: 76, name: "Antares", universe: "Solo Leveling", powerType: "Dragon Monarch", alignment: "Villain", stats: { strength: 100, speed: 95, intelligence: 90 } },
  { id: 77, name: "Ashborn", universe: "Solo Leveling", powerType: "Shadow Monarch", alignment: "Anti-Hero", stats: { strength: 100, speed: 95, intelligence: 95 } },

  // Black Clover
  { id: 78, name: "Asta", universe: "Black Clover", powerType: "Anti-Magic", alignment: "Hero", stats: { strength: 92, speed: 85, intelligence: 75 } },
  { id: 79, name: "Yuno", universe: "Black Clover", powerType: "Magic", alignment: "Hero", stats: { strength: 90, speed: 90, intelligence: 88 } },
  { id: 80, name: "Lucius Zogratis", universe: "Black Clover", powerType: "Soul Magic", alignment: "Villain", stats: { strength: 98, speed: 92, intelligence: 95 } },

  // Tokyo Ghoul
  { id: 81, name: "Ken Kaneki", universe: "Tokyo Ghoul", powerType: "Ghoul", alignment: "Anti-Hero", stats: { strength: 92, speed: 90, intelligence: 88 } },
  { id: 82, name: "Kishou Arima", universe: "Tokyo Ghoul", powerType: "CCG Combat", alignment: "Hero", stats: { strength: 95, speed: 93, intelligence: 92 } },

  // JoJo's Bizarre Adventure
  { id: 83, name: "Jotaro Kujo", universe: "JoJo's Bizarre Adventure", powerType: "Stand", alignment: "Hero", stats: { strength: 95, speed: 93, intelligence: 90 } },
  { id: 84, name: "Dio Brando", universe: "JoJo's Bizarre Adventure", powerType: "Stand", alignment: "Villain", stats: { strength: 97, speed: 95, intelligence: 92 } },

  // Code Geass
  { id: 85, name: "Lelouch Lamperouge", universe: "Code Geass", powerType: "Geass", alignment: "Anti-Hero", stats: { strength: 70, speed: 75, intelligence: 100 } },

  // One Punch Man
  { id: 86, name: "Saitama", universe: "One Punch Man", powerType: "Limitless Strength", alignment: "Hero", stats: { strength: 100, speed: 100, intelligence: 75 } },
  { id: 87, name: "Genos", universe: "One Punch Man", powerType: "Cyborg", alignment: "Hero", stats: { strength: 90, speed: 88, intelligence: 85 } },

  // Death Note
  { id: 88, name: "Light Yagami", universe: "Death Note", powerType: "Death Note", alignment: "Villain", stats: { strength: 65, speed: 70, intelligence: 100 } },
  { id: 89, name: "L Lawliet", universe: "Death Note", powerType: "Detective Genius", alignment: "Hero", stats: { strength: 60, speed: 65, intelligence: 100 } },

  // Blue Exorcist
  { id: 90, name: "Rin Okumura", universe: "Blue Exorcist", powerType: "Demon Flames", alignment: "Hero", stats: { strength: 88, speed: 85, intelligence: 78 } },

  // Fate
  { id: 91, name: "Gilgamesh", universe: "Fate", powerType: "Gate of Babylon", alignment: "Anti-Hero", stats: { strength: 97, speed: 90, intelligence: 95 } },

  // Yu Yu Hakusho
  { id: 92, name: "Yusuke Urameshi", universe: "Yu Yu Hakusho", powerType: "Spirit Energy", alignment: "Hero", stats: { strength: 92, speed: 88, intelligence: 80 } },

  // Mob Psycho 100
  { id: 93, name: "Shigeo Kageyama", universe: "Mob Psycho 100", powerType: "Psychic", alignment: "Hero", stats: { strength: 95, speed: 85, intelligence: 85 } },
];

export default characters;