const supertest = require("supertest");
const server = require("../../src/app");
const { Pokemon, conn } = require("../../src/db.js");

const api = supertest(server);

describe("Pokemon routes", () => {
  beforeAll(() => {
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    });
    Pokemon.sync({ force: true });
  });

  jest.setTimeout(10000);

  xdescribe("GET /pokemons", () => {
    it("should get status code 200 to all pokemons", async () => {
      const resp = await api.get("/pokemons");
      expect(resp.statusCode).toBe(200);
    });

    it("should get status code 200 search by name if pokemon exist", async () => {
      const resp = await api.get("/pokemons?name=pikachu");
      expect(resp.statusCode).toBe(200);
    });

    it("should get status code 404 search by name if pokemon doesn't exist", async () => {
      const resp = await api.get("/pokemons?name=pepe");
      expect(resp.statusCode).toBe(404);
    });

    it("should get status code 200 search by id", async () => {
      const resp = await api.get("/pokemons/1");
      expect(resp.statusCode).toBe(200);
      expect(resp.body[0].name).toBe("bulbasaur");
    });

    it("should get status code 404 if id doesn't exist", async () => {
      const resp = await api.get("/pokemons/-1");
      expect(resp.statusCode).toBe(404);
      expect(resp.text).toBe("Pokemon not found");
    });
  });

  xdescribe("POST /pokemons", () => {
    it("should get 201 if pokemon created", async () => {
      const resp = await api.post("/pokemons").send({
        name: "Mario",
        hp: 12,
        attack: 15,
        defense: 15,
        speed: 20,
        height: 20,
        weight: 400,
        types: ["fire"],
      });
      expect(resp.statusCode).toBe(201);
    });

    it("should get 404 if some data is missing", async () => {
      const resp = await api.post("/pokemons").send({
        hp: "12",
        attack: "15",
        weight: "400",
      });
      expect(resp.statusCode).toBe(404);
    });

    it("should get 404 if pokemon name already exist", async () => {
      const resp = await api.post("/pokemons").send({
        name: "pikachu",
        hp: 12,
        attack: 15,
        defense: 15,
        speed: 20,
        height: 20,
        weight: 400,
        types: ["fire"],
      });
      expect(resp.statusCode).toBe(404);
    });
  });
});
