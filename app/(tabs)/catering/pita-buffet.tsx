import CateringButton from "@/components/CateringButton";
import { Image, ScrollView, Text, View } from "react-native";

export default function CateringPitaBuffet() {
  return (
    <ScrollView
      className="flex-1 bg-amber-300"
      showsVerticalScrollIndicator={false}
    >
      <View className="p-4 space-y-6">
        <View className="space-y-2">
          <Text className="text-zinc-600 italic tracking-wide text-sm">
            from $16.50/Person – Ten Person Minimum Order Includes delivery
            (within 5 milies of location). Set-up Service and Full Service
            available (see below for details).
          </Text>
          <Text className="text-zinc-600 italic font-bold text-sm">
            Includes Utensils and Paper Products
          </Text>
          <Text className="text-zinc-600 italic font-bold text-sm">
            Includes Baklava for Dessert
          </Text>
        </View>
        <View>
          <CateringButton cateringPackage="pita-buffet" />
        </View>
        <Text className="font-bold text-2xl uppercase text-zinc-800">
          BUILD YOUR OWN Pita
        </Text>
        <Image
          className="h-64 w-full mx-auto"
          source={require("@/assets/images/catering-bowl-buffet.png")}
        />
        <Text className="text-zinc-600 italic font-bold">
          Your guests will enjoy being able to assemble a pita with the
          following choices:
        </Text>
        <View>
          <Text className="font-bold text-2xl uppercase text-zinc-800">
            Pita, One per person
          </Text>
          <Text className="text-base text-zinc-700 tracking-wide">
            White or Whole Wheat
          </Text>
        </View>
        <View>
          <Text className="font-bold text-2xl uppercase text-zinc-800">
            One Protein Option
          </Text>
          <Text className="text-base text-zinc-700 tracking-wide">
            Gyro, Lemon Chicken, Garlic-Herb Chicken, or Falafel
          </Text>
        </View>
        <View>
          <Text className="font-bold text-2xl uppercase text-zinc-800">
            Toppings
          </Text>
          <Text className="text-base text-zinc-700 tracking-wide">
            Red Cabbage, Shredded Carrots, Garbanzo Beans, Pepperoncini, and
            Roasted Corn
          </Text>
        </View>
        <View>
          <Text className="font-bold text-2xl uppercase text-zinc-800">
            Two Sauce Options
          </Text>
          <Text className="text-base text-zinc-700 tracking-wide">
            Tzatziki, Skhug, Santorini’s House, Roasted Pepper, Ranch, Olive Oil
            & Balsamic, Donor Aioli, Creamy Roasted Garlic, or Calabrian Chili
          </Text>
        </View>
        <View>
          <CateringButton cateringPackage="pita-buffet" />
        </View>
      </View>
    </ScrollView>
  );
}
