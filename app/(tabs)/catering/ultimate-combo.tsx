import CateringButton from "@/components/CateringButton";
import { Image, ScrollView, Text, View } from "react-native";

export default function CateringUltimateCombo() {
  return (
    <ScrollView
      className="flex-1 bg-amber-300"
      showsVerticalScrollIndicator={false}
    >
      <View className="p-4 space-y-6">
        <View className="space-y-2">
          <Text className="text-zinc-600 italic tracking-wide text-sm">
            from $18.50/Person – Ten Person Minimum Order Includes delivery
            (within 5 milies of location) Set-up Service and Full Service
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
          <CateringButton cateringPackage="ultimate-combo" />
        </View>
        <Text className="font-bold text-2xl uppercase text-zinc-800">
          BUILD YOUR OWN BOWL or PITA – THE ULTIMATE EXPERIENCE
        </Text>
        <Image
          className="h-64 w-full mx-auto"
          source={require("@/assets/images/catering-ultimate.png")}
        />
        <Text className="text-zinc-600 italic font-bold">
          MORE CHOICES for your guests with a variety of options for BOWLS AND
          PITAS. Includes:
        </Text>
        <View>
          <Text className="font-bold text-2xl uppercase text-zinc-800">
            Pitas, one per person
          </Text>
          <Text className="text-base text-zinc-700 tracking-wide">
            White or wheat
          </Text>
        </View>
        <View>
          <Text className="font-bold text-2xl uppercase text-zinc-800">
            Two Base Options
          </Text>
          <Text className="text-base text-zinc-700 tracking-wide">
            Rice or Lettuce
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
            Four Sauce Options
          </Text>
          <Text className="text-base text-zinc-700 tracking-wide">
            Tzatziki, Skhug, Santorini’s House, Roasted Pepper, Ranch, Olive Oil
            & Balsamic, Donor Aioli, Creamy Roasted Garlic, or Calabrian Chili
          </Text>
        </View>
        <View>
          <CateringButton cateringPackage="ultimate-combo" />
        </View>
      </View>
    </ScrollView>
  );
}
