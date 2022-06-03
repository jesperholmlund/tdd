const fetch = require("./fetch");

/**
 * testing fetching by looking first to se if defined, then if response is an object
 * Since we know how many teams are in NHL, we check if we get 32 teams
 */
describe("fetch", () => {
  it("should return list of teams", async () => {
    const teams = await fetch.fetchTeams();
    expect(teams).toBeDefined();
    expect(typeof teams === "object").toBeTruthy();
    expect(teams.length).toBe(32);
  });
  /**
   * Checking if the response actually contains NHL teams by looking for a specific team
   */
  it("should contain Edmonton Oilers", async () => {
    const teams = await fetch.fetchTeams();
    const team = await teams.map((t) => {
      return t.name;
    });
    expect(team).toContain("Edmonton Oilers");
  });
  /**
   * Check each team to see if the team is actually an active NHL
   */
  it("should be actives team", async () => {
    const teams = await fetch.fetchTeams();
    await teams.map((t) => {
      expect(t.active).toBeTruthy();
    });
  });
});
/**
 * controlls if a chosen teams properties
 * first what typeof properties
 * then if the team belongs to a division
 */
describe("single team", () => {
  it("should return", async () => {
    const team = await fetch.fetchTeams();
    expect(typeof team[1].id === "number").toBeTruthy();
    expect(typeof team[1].name === "string").toBeTruthy();
    expect(team[1]).toHaveProperty("division");
  });
});
