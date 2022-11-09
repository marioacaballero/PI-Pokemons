import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Card from "./Card2";

test("should first", () => {
  const data = {
    name: "Mario",
    img: "http://",
    id: 1,
    types: [{ name: "Fire" }],
  };

  const component = render(
    <Card name={data.name} img={data.img} id={data.id} types={data.types} />
  );

  console.log(component);
});
