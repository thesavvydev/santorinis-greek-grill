import { useRouter } from "expo-router";
import { Text } from "react-native";
import DoubleButton from "./DoubleButton";

enum CATERING_PACKAGES {
  "bowl-buffet",
  "pita-buffet",
  "boxed-meals",
  "ultimate-combo",
}

type CateringButtonType = {
  cateringPackage: keyof typeof CATERING_PACKAGES;
};

export default function CateringButton({
  cateringPackage,
}: CateringButtonType) {
  const router = useRouter();

  return (
    <DoubleButton
      onPress={() => {
        router.push(
          `/(tabs)/catering/catering-form-modal?cateringPackage=${cateringPackage}`
        );
      }}
    >
      <Text className="text-white font-bold uppercase">Request Catering</Text>
    </DoubleButton>
  );
}
