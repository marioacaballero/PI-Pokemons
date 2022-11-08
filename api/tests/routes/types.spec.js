const supertest = require("supertest");
const server = require("../../src/app");
const { conn } = require("../../src/db.js");

const api = supertest(server);

describe("Type routes", () => {
  beforeAll(() => {
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    });
  });

  xdescribe("GET /pokemons", () => {
    it("should get status code 200 to all types", async () => {
      const resp = await api.get("/types");
      expect(resp.statusCode).toBe(200);
    });
  });
});
