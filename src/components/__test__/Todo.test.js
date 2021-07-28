import React from "react";
import { shallow } from "enzyme";
import Todo from "../Todo";

describe("Todo App Component", () => {
  test("Component Renders without Errors", () => {
    const component = shallow(<Todo />);
    // console.log(component.debug());
    const wrapper = component.find(`[data-testid="notes-container"]`);
    expect(wrapper.length).toBe(1);
  });
});
