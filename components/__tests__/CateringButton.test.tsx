import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react-native";
import CateringButton from "../CateringButton";
import * as Router from "expo-router";

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
    jest.spyOn(Router, "useRouter").mockReturnValue({
      push,
      back: function (): void {
        throw new Error("Function not implemented.");
      },
      canGoBack: function (): boolean {
        throw new Error("Function not implemented.");
      },
      navigate: function <T extends string | object>(
        href: Router.Href<T>
      ): void {
        throw new Error("Function not implemented.");
      },
      replace: function <T extends string | object>(
        href: Router.Href<T>
      ): void {
        throw new Error("Function not implemented.");
      },
      dismiss: function (count?: number): void {
        throw new Error("Function not implemented.");
      },
      dismissAll: function (): void {
        throw new Error("Function not implemented.");
      },
      canDismiss: function (): boolean {
        throw new Error("Function not implemented.");
      },
      setParams: function <T extends Router.Routes>(
        params: Partial<Router.RouteParamInput<T>>
      ): void {
        throw new Error("Function not implemented.");
      },
    });

    render(<CateringButton cateringPackage="boxed-meals" />);

    fireEvent.press(screen.getByText("Request Catering"));

    expect(push).toHaveBeenCalledWith(
      "/(tabs)/catering/catering-form-modal?cateringPackage=boxed-meals"
    );
  });
});
