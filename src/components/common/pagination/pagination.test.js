import React from "react";
import { create } from 'react-test-renderer';
import Pagination from "./pagination";

describe("Paginator component tests", () => {

    test("pages count is 11 but should be shown only 10 items", () => {
        const component = create(<Pagination totalItemsCount={11} pageSize={1} portionSize={10}/>)
        const root = component.root;
        const spansCount = root.findAllByType("span");
        expect(spansCount.length).toBe(10);
    })

    test("if pages count more than 10 next button should be present", () => {
        const component = create(<Pagination totalItemsCount={11} pageSize={1} portionSize={10}/>)
        const root = component.root;
        const button = root.findAllByType("button");
        expect(button.length).toBe(1);
    })
})

