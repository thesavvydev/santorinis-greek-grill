import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react-native";
import CateringButton from "../CateringButton";
import * as Router from "expo-router";

jest.mock("expo-router", () => ({ useRouter: jest.fn() }));

describe("CateringButton", () => {
  it(`matches snapshot`, () => {
    const tree = render(
      <CateringButton cateringPackage="boxed-meals" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders text`, () => {
    render(<CateringButton cateringPackage="boxed-meals" />).toJSON();

    screen.getByText("Request Catering");
  });

  it("on press routes to catering-form-modal", () => {
    const push = jest.fn();
    (Router.useRouter as jest.Mock).mockReturnValue({ push });

    render(<CateringButton cateringPackage="boxed-meals" />);

    fireEvent.press(screen.getByText("Request Catering"));
    expect(push).toHaveBeenCalledWith(
      "/(tabs)/catering/catering-form-modal?cateringPackage=boxed-meals"
    );
  });
});
