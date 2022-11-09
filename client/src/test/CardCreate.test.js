import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import CardCreate from "../components/CardCreate/CardCreate";

xdescribe("<CardCreate />", () => {
  it("should first", () => {
    const component = render(<CardCreate />);

    component.getAllByRole("heading");
  });
});
