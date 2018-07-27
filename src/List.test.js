import React from "react";
import List from "./List";
import ShallowRender from "react-test-renderer/shallow";

const testData = {
    names: ["gordon", "sahil", "david", "sally", "jane", "alice"],
    luckyWinnerIndex: null,
}

it("renders List component", () => {
  const renderer = new ShallowRender();
  renderer.render(<List
    names={testData.names}
          luckyWinnerIndex={testData.luckyWinnerIndex} />);
  const output = renderer.getRenderOutput();

  expect(output).toMatchSnapshot()
});
