import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import NavBar from "../components/NavBar/NavBar";

describe("<NavBar />", ()=>{
    it("should", ()=>{
        const component = render(<NavBar />)

        component.getAllByRole("button")
    })
})