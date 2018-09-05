import React from "react";
import RandomButton from "./RandomButton";
import ShallowRender from "react-test-renderer/shallow";

it("renders div with some text", () => {
  const renderer = new ShallowRender();
  renderer.render(<RandomButton />);
  const output = renderer.getRenderOutput();

  expect(output).toMatchSnapshot();
});

it("renders div with a button ", () => {});
