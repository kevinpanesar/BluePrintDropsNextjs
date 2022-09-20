import React from "react";
import TestRenderer from "react-test-renderer";
import MyApp from "../pages/_app";

test("renders learn react link", () => {
  const tree = TestRenderer.create(<MyApp />).toJSON();
  expect(tree).toMatchSnapshot();
});
