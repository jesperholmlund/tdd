const scripts = require("./script");

describe("Mail ", () => {
  const mails = scripts.inbox();
  describe("inbox", () => {
    it("should return three entires", () => {
      expect(mails.length).toBe(3);
    });
    it("should return unique id for every mail", () => {
      const ids = [];
      mails.map((mail) => {
        ids.push(mail._id);
      });
      const duplicates = ids.some((item, i) => i !== ids.indexOf(item));
      expect(duplicates).toBeFalsy();
    });
    it("should be able to search inbox", () => {
      expect(scripts.searchMail("dolor").length).toBe(3);
    });
  });
  describe("new mail", () => {
    it("should have unique id", () => {
      const found = scripts
        .inbox()
        .find((mail) => mail._id == scripts.newMail[0]._id);
      expect(found).toBeUndefined();
    });
    it("should have all fields not empty", () => {
      scripts.newMail.map((row) => {
        expect(row._id).not.toEqual(0);
        expect(row.author.length).toBeGreaterThan(1);
        expect(row.title.length).toBeGreaterThan(1);
        expect(row.content.length).toBeGreaterThan(1);
      });
    });
  });
});
