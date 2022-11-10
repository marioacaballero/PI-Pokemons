import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import LandingPage from "../components/LandingPage/LandingPage";
import { Link } from "react-router-dom";

xdescribe("<LandingPage />", () => {
  it("should be render", () => {
    const component = render(<LandingPage />);

    component.getAllByRole("heading");
    component.getAllByRole("button");
    component.getAllByRole("img");
    component.findByRole(Link);
  });

  it("should contain text", () => {
    const component = render(<LandingPage />);

    component.getAllByText("Pokemon is an amazing world ! Let's check it!");
    component.getAllByText("PRESS START");
    component.getAllByText("© 2022");
    component.getAllByText("MARIO CABALLERO inc.");
  });
});
