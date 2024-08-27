import { useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

export default function CateringButton({
  cateringPackage,
}: {
  cateringPackage: string;
}) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() =>
        router.push(
          `/(tabs)/catering/catering-form-modal?cateringPackage=${cateringPackage}`
        )
      }
      className="bg-amber-700 p-4 px-6"
      style={{
        shadowOffset: {
          width: 5,
          height: 5,
        },
        shadowOpacity: 10,
        shadowRadius: 0,
      }}
    >
      <Text className="text-white font-bold uppercase">Request Catering</Text>
    </TouchableOpacity>
  );
}
