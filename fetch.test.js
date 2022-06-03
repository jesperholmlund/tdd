const fetch = require("./fetch");

describe("fetch", () => {
  it("should return list of teams", async () => {
    const teams = await fetch.fetchTeams();
    expect(teams).toBeDefined();
    expect(typeof teams === "object").toBeTruthy();
    expect(teams.length).toBe(32);
  });
  it("should contain Edmonton Oilers", async () => {
    const teams = await fetch.fetchTeams();
    const team = await teams.map((t) => {
      return t.name;
    });
    expect(team).toContain("Edmonton Oilers");
  });
  it("should be actives team", async () => {
    const teams = await fetch.fetchTeams();
    await teams.map((t) => {
      expect(t.active).toBeTruthy();
    });
  });
});

describe("single team", () => {
  it("should return", async () => {
    const team = await fetch.fetchTeams();
    expect(typeof team[1].id === "number").toBeTruthy();
    expect(typeof team[1].name === "string").toBeTruthy();
    expect(team[1]).toHaveProperty("division");
  });
});
