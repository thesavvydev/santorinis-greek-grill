import HomeScreen from "@/app/(tabs)";
import { fireEvent, render, screen } from "@testing-library/react-native";
import * as Router from "expo-router";

jest.mock("expo-router", () => ({ useRouter: jest.fn() }));

const push = jest.fn();
(Router.useRouter as jest.Mock).mockReturnValue({ push });

describe("HomeScreen", () => {
  it("renders intro section", () => {
    render(<HomeScreen />);

    screen.getByText("Fresh and Fast Mediterranean-Inspired Food");
    screen.getByText("Try our new, chef-created Entrees!");

    screen.getByText("Flavorful and Varied");
    screen.getByText("Entrees");

    screen.getByText("Build your own");
    screen.getByText("Pita or Bowl");

    screen.getByText("Mouth-watering");
    screen.getByText("Sides and Desserts");

    fireEvent.press(screen.getByText("Go to menu"));
    expect(push).toHaveBeenCalledWith("/(tabs)/menu");
  });

  it("renders catering section", () => {
    render(<HomeScreen />);

    screen.getByText("Catering");
    screen.getByText(`Bring the sizzling flavors of the Mediterranean right to your party,
            making it a breeze to entertain with style and taste! Our team
            serves up a mouthwatering buffet or boxed meals, guaranteed to
            elevate any event to the next level. So, get ready to indulge in a
            culinary adventure that’ll have your guests talking long after the
            last bite!`);

    fireEvent.press(screen.getByText("Learn More About Catering"));
    expect(push).toHaveBeenCalledWith("/(tabs)/catering");
  });
});
