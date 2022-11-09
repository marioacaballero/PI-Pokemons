import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Card from "../components/Card copy/Card2";

xdescribe("<Card />", () => {
  const data = {
    name: "mario",
    img: "http://www.poke.com",
    id: 1,
    types: [{ name: "fire" }, { name: "normal" }],
  };

  it("should render heading h2 and img", () => {
    const component = render(
      <Card name={data.name} img={data.img} id={data.id} types={data.types} />
    );

    component.getByRole("heading");
    component.getByRole("img");
  });

  it("should contain name, id and types texts", () => {
    const component = render(
      <Card name={data.name} img={data.img} id={data.id} types={data.types} />
    );

    component.getByText("mario");
    component.getByText("#1");
    component.getByText("fire");
    component.getByText("normal");
  });
});
