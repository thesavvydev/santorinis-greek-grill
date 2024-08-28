import * as React from "react";

import { render, screen } from "@testing-library/react-native";
import { ThemedText } from "../ThemedText";

describe("ThemedText", () => {
  it("matches snapshot", () => {
    const tree = render(<ThemedText>Test</ThemedText>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders text`, () => {
    render(<ThemedText>Test</ThemedText>);

    expect(screen.getByText("Test"));
  });
});
