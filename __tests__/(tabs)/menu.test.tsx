import MenuScreen, { ENTREES } from "@/app/(tabs)/menu";
import { render, screen } from "@testing-library/react-native";

describe("MenuScreen", () => {
  describe("Entrees", () => {
    ENTREES.forEach((entree) =>
      it(`renders ${entree.name}`, () => {
        render(<MenuScreen />);

        screen.getByText(entree.name);
        screen.getByText(entree.info);
      })
    );
  });
});
