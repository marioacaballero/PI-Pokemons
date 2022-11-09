import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Home from "../components/Home copy/Home2";

xdescribe("<Home />", ()=>{
    it("should contain filter", () =>{
        const component = render(<Home />)

        component.getAllByRole("filter")
    })
})
