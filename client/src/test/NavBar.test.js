import React from "react";
import { Link } from "react-router-dom";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import NavBar from "../components/NavBar/NavBar";

configure({ adapter: new Adapter() });

xdescribe("<NavBar />", () => {
  const nav = shallow(<NavBar location={{ pathname: "/home" }} />);

  it('should be render two <Link to="" />. The first go to "/home", and the second go to "/home/newpokemon"', () => {
    expect(nav.find(Link).length).toBeGreaterThanOrEqual(2);
    expect(nav.find(Link).at(0).prop("to")).toEqual("/home");
    expect(nav.find(Link).at(1).prop("to")).toEqual("/home/newpokemon");
  });

  it("should be render a button", () => {
    expect(nav.find("button").length).toEqual(1);
  });
});
