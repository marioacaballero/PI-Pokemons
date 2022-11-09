import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import CardDetail from "../components/CardDetail/CardDetail";

xdescribe("<CardDetail />", () => {
  it("should render heading h2 and img", () => {
    const component = render(<CardDetail />);

    component.getByRole("heading");
    component.getByRole("img");
  });

  it("should contain name, id and types texts", () => {
    const component = render(<CardDetail />);

    component.getByText("mario");
    component.getByText("#1");
    component.getByText("fire");
    component.getByText("normal");
  });
});
