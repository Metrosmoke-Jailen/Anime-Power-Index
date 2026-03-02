import characters from "./characters"; // make sure path is correct

// Get unique power types from characters
const uniquePowerTypes = [
  ...new Set(characters.map((c) => c.powerType))
];

export const powerSystems = uniquePowerTypes.map((powerType) => {
  const users = characters.filter((c) => c.powerType === powerType);

  const avgStats = users.length
    ? {
        strength: Math.round(
          users.reduce((sum, c) => sum + c.stats.strength, 0) / users.length
        ),
        speed: Math.round(
          users.reduce((sum, c) => sum + c.stats.speed, 0) / users.length
        ),
        intelligence: Math.round(
          users.reduce((sum, c) => sum + c.stats.intelligence, 0) / users.length
        ),
      }
    : { strength: 0, speed: 0, intelligence: 0 };

  return {
    id: powerType.toLowerCase().replace(/\s+/g, "-"),
    name: powerType,
    rules: `${powerType} is powered by its users.`,
    strengths: "Excels in combat depending on users.",
    weaknesses: "Limited by opponents and environment.",
    notableUsers: users.map((u) => u.name),
    comparison: `${powerType} compared to other power types.`,
    avgStats,
  };
});