import { Image, Text } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";

export default function CateringScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image source={require("@/assets/images/partial-react-logo.png")} />
      }
    >
      <Text>Catering</Text>
    </ParallaxScrollView>
  );
}
