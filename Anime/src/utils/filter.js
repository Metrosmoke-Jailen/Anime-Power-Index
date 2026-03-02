// src/utils/filter.js

// Calculate overall power score
export const calculateOverallScore = (character, votes = {}) => {
  if (!character || !character.stats) return 0;

  const { strength, speed, intelligence } = character.stats;

  const avg = (strength + speed + intelligence) / 3;
  const voteBonus = votes?.[character.id] || 0;

  return Math.round(avg + voteBonus * 0.5);
};


// Search by name
export const searchCharacters = (characters, query) => {
  if (!query) return characters;

  return characters.filter((char) =>
    char.name.toLowerCase().includes(query.toLowerCase())
  );
};


// Filter by universe
export const filterByUniverse = (characters, universe) => {
  if (!universe) return characters;

  return characters.filter((char) => char.universe === universe);
};


// Filter by alignment
export const filterByAlignment = (characters, alignment) => {
  if (!alignment) return characters;

  return characters.filter((char) => char.alignment === alignment);
};


// Filter by power type
export const filterByPowerType = (characters, powerType) => {
  if (!powerType) return characters;

  return characters.filter((char) => char.powerType === powerType);
};


// Sort by overall score
export const sortByPower = (characters, votes) => {
  return [...characters].sort(
    (a, b) =>
      calculateOverallScore(b, votes) -
      calculateOverallScore(a, votes)
  );
};


// Master filter pipeline (recommended)
export const applyAllFilters = (
  characters,
  { searchQuery, universe, alignment, powerType },
  votes
) => {
  let filtered = searchCharacters(characters, searchQuery);
  filtered = filterByUniverse(filtered, universe);
  filtered = filterByAlignment(filtered, alignment);
  filtered = filterByPowerType(filtered, powerType);

  return sortByPower(filtered, votes);
};