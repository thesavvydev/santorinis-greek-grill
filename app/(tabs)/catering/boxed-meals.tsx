import CateringButton from "@/components/CateringButton";
import { Image, ScrollView, Text, View } from "react-native";

export default function CateringBoxedMeals() {
  return (
    <ScrollView
      className="flex-1 bg-amber-300"
      showsVerticalScrollIndicator={false}
    >
      <View className="p-4 space-y-6">
        <View className="space-y-2">
          <Text className="text-zinc-600 italic tracking-wide text-sm">
            $15/Person – Ten Person Minimum Order Includes delivery (within 5
            milies of location). Set-up Service available (see below for
            details).
          </Text>
          <Text className="text-zinc-600 italic font-bold text-sm">
            Includes Utensils and Paper Products
          </Text>
        </View>
        <View>
          <CateringButton cateringPackage="boxed-meals" />
        </View>
        <Text className="font-bold text-2xl uppercase text-zinc-800">
          BOWL OR PITA
        </Text>
        <Image
          className="h-64 w-full mx-auto"
          source={require("@/assets/images/catering-bowl-or-pita.png")}
        />
        <View>
          <Text className="font-bold text-2xl uppercase text-zinc-800">
            Original Pita
          </Text>
          <Text className="text-base text-zinc-700 tracking-wide">
            Warm pita bread filled with your choice of grilled gyro meat
            (beef/lamb) or grilled lemon chicken complemented by feta cheese,
            juicy tomatoes, crisp onions, refreshing cucumbers, zesty olives,
            spicy pepperoncini, lettuce mix, and our signature Tzatziki Sauce.
          </Text>
        </View>
        <View>
          <Text className="font-bold text-2xl uppercase text-zinc-800">
            Original Bowl
          </Text>
          <Text className="text-base text-zinc-700 tracking-wide">
            Loaded with your choice of gyro (beef/lamb) or lemon chicken with
            grilled lemon chicken, juicy tomatoes, crunchy cucumbers, zesty
            onions, tangy feta cheese, flavorful olives, and our signature
            Tzatziki Sauce. Served on a bed of fragrant turmeric lemon rice.
          </Text>
        </View>
        <View>
          <CateringButton cateringPackage="boxed-meals" />
        </View>
      </View>
    </ScrollView>
  );
}
