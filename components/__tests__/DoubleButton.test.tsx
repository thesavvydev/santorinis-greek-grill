import * as React from "react";

import { fireEvent, render, screen } from "@testing-library/react-native";
import DoubleButton from "../DoubleButton";
import { Text } from "react-native";

const onPress = jest.fn();

describe("DoubleButton", () => {
  it("matches snapshot", () => {
    const tree = render(
      <DoubleButton onPress={onPress}>Test</DoubleButton>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`handles onPress event`, () => {
    render(
      <DoubleButton onPress={onPress}>
        <Text>Testing Double Button</Text>
      </DoubleButton>
    );

    fireEvent.press(screen.getByText("Testing Double Button"));
    expect(onPress).toHaveBeenCalled();
  });
});
