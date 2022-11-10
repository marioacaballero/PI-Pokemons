import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

import CardCreate from "../components/CardCreate/CardCreate";

configure({ adapter: new Adapter() });

xdescribe("<CardCreate />", () => {
  let store;
  const mockStore = configureStore([thunk]);
  const state = {
    pokemons: {
      pokemons: [
        {
          id: 1,
          name: "bulbasaur",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
          types: [
            {
              name: "grass",
              img: "https://typedex.app/images/ui/types/dark/grass.svg",
            },
            {
              name: "poison",
              img: "https://typedex.app/images/ui/types/dark/poison.svg",
            },
          ],
          hp: 45,
          attack: 49,
          defense: 49,
          speed: 45,
          height: 7,
          weight: 69,
        },
        {
          id: 2,
          name: "ivysaur",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
          types: [
            {
              name: "grass",
              img: "https://typedex.app/images/ui/types/dark/grass.svg",
            },
            {
              name: "poison",
              img: "https://typedex.app/images/ui/types/dark/poison.svg",
            },
          ],
          hp: 60,
          attack: 62,
          defense: 63,
          speed: 60,
          height: 10,
          weight: 130,
        },
        {
          id: 3,
          name: "venusaur",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
          types: [
            {
              name: "grass",
              img: "https://typedex.app/images/ui/types/dark/grass.svg",
            },
            {
              name: "poison",
              img: "https://typedex.app/images/ui/types/dark/poison.svg",
            },
          ],
          hp: 80,
          attack: 82,
          defense: 83,
          speed: 80,
          height: 20,
          weight: 1000,
        },
      ],
    },
    types: {
      types: [
        {
          id: 1,
          name: "normal",
          img: "https://typedex.app/images/ui/types/dark/normal.svg",
        },
        {
          id: 2,
          name: "fighting",
          img: "https://typedex.app/images/ui/types/dark/fighting.svg",
        },
        {
          id: 3,
          name: "ground",
          img: "https://typedex.app/images/ui/types/dark/ground.svg",
        },
        {
          id: 4,
          name: "flying",
          img: "https://typedex.app/images/ui/types/dark/flying.svg",
        },
      ],
    },
  };

  store = mockStore(state);

  const cardCreate = mount(
    <Provider store={store}>
      <CardCreate />
    </Provider>
  );

  it("should be render a 'form' ", () => {
    expect(cardCreate.find("form").length).toBe(1);
  });

  describe("Name input", () => {
    it('know when input "name" change', () => {
      cardCreate.find('input[name="name"]').simulate("change", {
        target: { name: "name", value: "mario" },
      });

      cardCreate.find('input[name="name"]').simulate("change", {
        target: { name: "name", value: "ratata" },
      });
    });
  });

  describe("hp input", () => {
    it('know when input "hp" change', () => {
      cardCreate.find('input[name="hp"]').simulate("change", {
        target: { name: "hp", value: 100 },
      });

      cardCreate.find('input[name="hp"]').simulate("change", {
        target: { name: "hp", value: 140 },
      });
    });
  });

  describe("attack input", () => {
    it('know when input "attack" change', () => {
      cardCreate.find('input[name="attack"]').simulate("change", {
        target: { name: "attack", value: "121" },
      });

      cardCreate.find('input[name="attack"]').simulate("change", {
        target: { name: "attack", value: "90" },
      });
    });
  });

  describe("weight input", () => {
    it('know when input "weight" change', () => {
      cardCreate.find('input[name="weight"]').simulate("change", {
        target: { name: "weight", value: 100 },
      });

      cardCreate.find('input[name="weight"]').simulate("change", {
        target: { name: "weight", value: 200 },
      });
    });
  });
});
