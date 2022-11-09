import "@testing-library/jest-dom/extend-expect";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

import App from "../App";
import NavBar from "../components/NavBar/NavBar";
import Home from "../components/Home copy/Home2";
import CardDetail from "../components/CardDetail/CardDetail";
import CardCreate from "../components/CardCreate/CardCreate";
import LandingPage from "../components/LandingPage/LandingPage";

configure({ adapter: new Adapter() });

xdescribe("<App />", () => {
  let store;
  const routes = ["/", "/home", "/home/pokemon/1", "/home/newpokemon"];
  const mockStore = configureStore([thunk]);
  const state = {
    pokemons: {
      pokemons: [
        { name: "mario", img: "", id: 1, types: [{ name: "fire", id: 1 }] },
      ],
    },
    types: { types: [{ name: "fire", id: 1 }] },
    pokemon: {
      pokemon: [
        { name: "mario", img: "", id: 1, types: [{ name: "fire", id: 1 }] },
      ],
    },
  };

  store = mockStore(state);

  const componentToUse = (route) => {
    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
  };

  describe("<LandingPage />", () => {
    it('should be only render on path "/"', () => {
      const app = mount(componentToUse(routes[0]));
      expect(app.find(CardDetail)).toHaveLength(0);
      expect(app.find(CardCreate)).toHaveLength(0);
      expect(app.find(Home)).toHaveLength(0);
      expect(app.find(NavBar)).toHaveLength(0);
      expect(app.find(LandingPage)).toHaveLength(1);
    });

    it("shouldn't be render in any other route", () => {
      const app = mount(componentToUse(routes[1]));
      expect(app.find(LandingPage)).toHaveLength(0);

      const app2 = mount(componentToUse(routes[2]));
      expect(app2.find(LandingPage)).toHaveLength(0);

      const app3 = mount(componentToUse(routes[3]));
      expect(app3.find(LandingPage)).toHaveLength(0);
    });
  });

  describe("<NavBar />", () => {
    it('should be render on path "/home"', () => {
      const app = mount(componentToUse(routes[1]));
      expect(app.find(NavBar)).toHaveLength(1);
    });

    it('should be render on path "/home/pokemon/:id"', () => {
      const app = mount(componentToUse(routes[2]));
      expect(app.find(NavBar)).toHaveLength(1);
    });

    it('should be render on path "/home/newpokemon"', () => {
      const app = mount(componentToUse(routes[3]));
      expect(app.find(NavBar)).toHaveLength(1);
    });

    it("shouldn't be render on path '/'", () => {
      const app = mount(componentToUse(routes[0]));
      expect(app.find(NavBar)).toHaveLength(0);
    });
  });

  describe("<Home />", () => {
    it('should be only render on path "/home"', () => {
      const app = mount(componentToUse(routes[1]));
      expect(app.find(CardDetail)).toHaveLength(0);
      expect(app.find(CardCreate)).toHaveLength(0);
      expect(app.find(LandingPage)).toHaveLength(0);
      expect(app.find(Home)).toHaveLength(1);
      expect(app.find(NavBar)).toHaveLength(1);
    });

    it("shouldn't be render in any other route", () => {
      const app = mount(componentToUse(routes[0]));
      expect(app.find(Home)).toHaveLength(0);

      const app2 = mount(componentToUse(routes[2]));
      expect(app2.find(Home)).toHaveLength(0);

      const app3 = mount(componentToUse(routes[3]));
      expect(app3.find(Home)).toHaveLength(0);
    });
  });

  describe("<CardDetail />", () => {
    it('the route "/home/pokemon/:id" should be render only CardDetail', () => {
      const app = mount(componentToUse(routes[2]));
      expect(app.find(Home)).toHaveLength(0);
      expect(app.find(CardCreate)).toHaveLength(0);
      expect(app.find(LandingPage)).toHaveLength(0);
      expect(app.find(CardDetail)).toHaveLength(1);
      expect(app.find(NavBar)).toHaveLength(1);
    });
  });

  describe("<CardCreate />", () => {
    it('the route "/home/newpokemon" should be render only CardCreate"', () => {
      const app = mount(componentToUse(routes[3]));
      expect(app.find(CardCreate)).toHaveLength(1);
      expect(app.find(NavBar)).toHaveLength(1);
      expect(app.find(CardDetail)).toHaveLength(0);
      expect(app.find(Home)).toHaveLength(0);
      expect(app.find(LandingPage)).toHaveLength(0);
    });
  });
});
