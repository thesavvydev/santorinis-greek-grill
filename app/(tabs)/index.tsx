import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <View className="relative flex-1 justify-center flex-col h-full w-full">
          <View className="bg-black/50 absolute left-0 top-0 right-0 bottom-0 z-10" />
          <Image
            className="absolute w-full h-full"
            source={require("@/assets/images/2023-hero-pita.png")}
          />
          <Image
            className="mx-auto z-20 w-full"
            source={require("@/assets/images/logo-white.png")}
            resizeMode="contain"
          />
        </View>
      }
    >
      <View className="p-8 space-y-8">
        <Text className="text-4xl font-bold uppercase text-zinc-700 tracking-tighter">
          Fresh and Fast Mediterranean-Inspired Food
        </Text>
        <View className="space-y-2">
          <Text className="text-xl font-semibold">
            Try our new, chef-created Entrees!
          </Text>
          <ScrollView
            horizontal
            className="flex-row space-x-6 my-2"
            showsHorizontalScrollIndicator={false}
          >
            <View className="relative space-y-2">
              <Image
                resizeMode="cover"
                source={require("@/assets/images/food-entrees.png")}
                style={{ width: 250, height: 250 }}
              />
              <View>
                <Text>Flavorful and Varied</Text>
                <Text className="text-2xl font-bold uppercase text-zinc-700">
                  Entrees
                </Text>
              </View>
            </View>
            <View className="relative space-y-2">
              <Image
                resizeMode="cover"
                source={require("@/assets/images/food-pita-or-bowl.png")}
                style={{ width: 250, height: 250 }}
              />
              <View>
                <Text>Build your own</Text>
                <Text className="text-2xl font-bold uppercase text-zinc-700">
                  Pita or Bowl
                </Text>
              </View>
            </View>
            <View className="relative space-y-2">
              <Image
                resizeMode="cover"
                source={require("@/assets/images/food-sides-and-dessert.png")}
                style={{ width: 250, height: 250 }}
              />
              <View>
                <Text>Mouth-watering</Text>
                <Text className="text-2xl font-bold uppercase text-zinc-700">
                  Sides and Desserts
                </Text>
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity
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
            <Text className="text-white font-bold uppercase">Go to menu</Text>
          </TouchableOpacity>
        </View>
        <View className="h-2 bg-zinc-600" />
        <View>
          <Text className="text-4xl font-bold uppercase text-zinc-700 tracking-tighter">
            Catering
          </Text>
          <Image
            className="mx-auto w-full"
            source={require("@/assets/images/catering.png")}
            resizeMode="contain"
            style={{ height: 250 }}
          />
          <Text className="text-lg font-semibold text-zinc-500 tracking-tighter">
            Bring the sizzling flavors of the Mediterranean right to your party,
            making it a breeze to entertain with style and taste! Our team
            serves up a mouthwatering buffet or boxed meals, guaranteed to
            elevate any event to the next level. So, get ready to indulge in a
            culinary adventure that’ll have your guests talking long after the
            last bite!
          </Text>
          <TouchableOpacity
            className="bg-amber-700 p-4 px-6 mt-4"
            style={{
              shadowOffset: {
                width: 5,
                height: 5,
              },
              shadowOpacity: 10,
              shadowRadius: 0,
            }}
          >
            <Text className="text-white font-bold uppercase">
              Learn More About Catering
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ParallaxScrollView>
  );
}
