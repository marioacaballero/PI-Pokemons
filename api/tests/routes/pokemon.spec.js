/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Pokemon, conn } = require("../../src/db.js");

const agent = session(app);
const pokemon = {
  name: "Pikachu",
};

describe("Pokemon routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Pokemon.sync({ force: true }).then(() => Pokemon.create(pokemon))
  );

  describe("GET /pokemons", () => {
    it("should get 200", (done) => {
      agent.get("/pokemons").expect(200);
      done();
    }).timeout(2000);
  });

  describe("GET /pokemons/:id", () => {
    it("should get 200", (done) => {
      agent.get("/pokemons/:id").expect(200);
      done();
    }).timeout(2000);
  });

  describe("POST /pokemons", () => {
    it("should get 200 if pokemon created", (done) => {
      agent
        .post("/pokemons")
        .send({
          name: "Mario",
          hp: "12",
          attack: "15",
          defense: "15",
          height: "20",
          weight: "400",
        })
        .expect(201),
        done();
    }).timeout(2000);

    it("should get 404 if name is missing", (done) => {
      agent
        .post("/pokemons")
        .send({
          hp: "12",
          attack: "15",
          defense: "15",
          height: "20",
          weight: "400",
        })
        .expect(404),
        done();
    });
  });
});
