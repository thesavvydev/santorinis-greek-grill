import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";

const ENTREES = [
  {
    id: 1,
    name: "Original Pita (Lamb/Beef or Lemon Chicken)",
    info: 'Warm pita bread filled with beef/lamb or grilled lemon chicken, complemented by feta cheese, juicy tomatoes, crisp onions, refreshing cucumbers, zesty olives, spicy pepperoncini, lettuce mix, and our signature Tzatziki Sauce. Make it "Santorini Style" with Fries +1.00',
    image: require("@/assets/images/food-original-pita.png"),
  },
  {
    id: 2,
    name: "Original Bowl (Beef/Lamb or Lemon Chicken)",
    info: "Loaded with Lamb/Beef or Grilled Lemon Chicken, juicy tomatoes, crunchy cucumbers, zesty onions, tangy feta cheese, flavorful olives, and our signature Tzatziki Sauce, it is served on a bed of fragrant Turmeric Lemon Rice.",
    image: require("@/assets/images/food-original-bowl.png"),
  },
  {
    id: 3,
    name: "Original Greek Salad",
    info: "Your choice of gyro meat or lemon chicken, feta, greek salad, pepperoncini, olives, on a bed of romaine lettuce, served with Santorini's House Dressing.",
    image: require("@/assets/images/food-original-greek-salad.png"),
  },
  {
    id: 4,
    name: "Puffy Pitas",
    info: "Indulge in a trio of deep-fried pitas stuffed with ground gyro meat, lettuce, tomato, onion, feta cheese, roasted corn, and Doner Aioli Sauce.",
    image: require("@/assets/images/menu_gallery_puffy_pitas.png"),
  },
  {
    id: 5,
    name: "Braised Beef Melt",
    info: "Pita, braised beef, mozzarella, roasted garlic, pepperoncini, served with Horseradish Feta Crema.",
    image: require("@/assets/images/entree_bbeef_melt-scaled.png"),
  },
  {
    id: 6,
    name: "The ZEUS",
    info: "This Greek-inspired dish features crispy fries topped with juicy gyro meat, tangy feta cheese, olives, and pickled onions, garnished with pita strips, fresh tomatoes, and pickled cauliflower, and finished with Tzatziki Sauce and zesty Doner Aioli.",
    image: require("@/assets/images/menu_gallery_zeus.png"),
  },
  {
    id: 7,
    name: "The Wasatch Gyro",
    info: "Fresh pita bread, tender gyro meat, crunchy onion rings, fresh onion slices, crisp lettuce, and juicy tomatoes are all combined in this sandwich, which is then covered in a smoky BBQ Sauce.",
    image: require("@/assets/images/menu_gallery_wasatch.png"),
  },
  {
    id: 8,
    name: "Roasted Garlic Chicken Salad",
    info: "This healthy salad features juicy garlic chicken, feta cheese, roasted corn, grilled broccoli, and roasted garlic cloves, drizzled with our zesty Santorini House Dressing.",
    image: require("@/assets/images/menu_gallery_roasted_garlic.png"),
  },
];

const SAUCES = [
  {
    id: 1,
    image: require("@/assets/images/menu_sauces_tzatziki.png"),
    info: "A traditional Greek sauce with cucumbers and flavorful spices, blended in a rich base of fresh sour cream.",
    name: "Tzatziki (tuh•zee•kee) Sauce (GF)",
  },
  {
    id: 2,
    image: require("@/assets/images/menu_sauces_skhug.png"),
    info: "Fresh and brightly flavored middle-eastern blend of herbs, jalapeno, and toasted spices in base of olive oil.",
    name: "Skhug (sh•oog) Sauce (GF, V, DF)",
  },
  {
    id: 3,
    image: require("@/assets/images/menu_sauces_santornishouse.png"),
    info: "Traditional Greek dressing with bold and flavorful olive oil and herb base.",
    name: "Santorini's House Dressing (GF, V, DF)",
  },
  {
    id: 4,
    image: require("@/assets/images/menu_sauces_roasted_pepper.png"),
    info: "Creamy and tangy with a spicy kick, this bold sauce is made with a sour cream base and has a smooth texture.",
    name: "Roasted Pepper (GF)",
  },
  {
    id: 5,
    image: require("@/assets/images/menu_sauces_ranch.png"),
    info: "Creamy and tangy with hint of garlic, onion, dill, and parsley, made with buttermilk and egg.",
    name: "Ranch (GF)",
  },
  {
    id: 6,
    image: require("@/assets/images/menu_sauces_olive_balsamic.png"),
    info: "A match made in heaven, rich olive oil meets tangy balsamic vinegar.",
    name: "Olive Oil & Balsamic (GF, V, DF)",
  },
  {
    id: 7,
    image: require("@/assets/images/mneu_sauces_donor.png"),
    info: "Mayo-based with a thick and creamy texture, sweet tangy flavor with a hint of honey, parsley, and cayenne.",
    name: "Donor Aioli (GF, DF)",
  },
  {
    id: 8,
    image: require("@/assets/images/menu_sauces_creamy_roasted.png"),
    info: "Bold and slightly spicy, made with garlic and lemon juice in a olive oil base.",
    name: "Creamy Roasted Garlic (GF, V, DF)",
  },
];

const FRIES_AND_SIDES = [
  {
    id: 1,
    image: require("@/assets/images/sides_house_fries.png"),
    info: "Golden brown, freshly made to order, with just the right amount of crispness and a hint of lemon-herb seasoning. Served with our Tzatziki and Roasted Pepper Sauces.",
    name: "House Fries",
  },
  {
    id: 2,
    image: require("@/assets/images/sides_feta_fries.png"),
    info: "A very generous amount of feta and crunchy fresh cabbage make these fries one of our most popular. It is served with Roasted Pepper and Tzatziki Sauces and our Lemon-Pepper spice blend. On the spicy side!",
    name: "Loaded Feta Fries",
  },
  {
    id: 3,
    image: require("@/assets/images/sides_streetcart_fries.png"),
    info: "Half sweet potato and half regular fries are the foundation of this flavorful side. Toppings include kalamata olives, feta cheese, roasted corn, onions, and pepperoncini, with just a touch of lemon seasoning and Donor Aioli Sauce.",
    name: "Street Cart Fries",
  },
  {
    id: 4,
    image: require("@/assets/images/sides_greek_garlic.png"),
    info: "Made especially for the garlic LOVER with a generous portion of garlic and feta piled on top. Tossed with fresh parsley and our delicious Santorini House sauce.",
    name: "Greek Garlic Fries",
  },
];

const BUILD_YOUR_OWN = [
  {
    id: 1,
    image: require("@/assets/images/menu_build_your_own_pita.png"),
    info: "Choose white or wheat pita, one protein, up to eight toppings, and one of our signature sauces to create your own, customized pita.",
    name: "Build Your Own Pita",
  },
  {
    id: 2,
    image: require("@/assets/images/menu_build_your_own_bowl.png"),
    info: "Choose one protein, up to eight toppings, and one of our signature Sauces to create your own, customized bowl.",
    name: "Build Your Own Bowl (Regular or Small)",
  },
];

const KIDS_MEALS = [
  {
    id: 1,
    image: require("@/assets/images/menu_pita_kids.png"),
    info: "Warm grilled pita bread stuffed with a delightful blend of melted cheeses, complemented by a choice of fries or lemon rice, provides a well-balanced and satisfying meal guaranteed to please even the pickiest eaters.",
    name: "Cheesy Grilled Pita",
  },
  {
    id: 2,
    image: require("@/assets/images/menu_nuggets.png"),
    info: "Our delicious, golden Olympian Nuggets are made with the finest cuts of juicy chicken, coated in crispy breadcrumbs, and served with crispy fries and Ranch Dressing.",
    name: "Olympian Nuggets",
  },
];

const DESSERTS = [
  {
    id: 1,
    image: require("@/assets/images/menu_bbcake.png"),
    info: "Our warm brown butter cake is a delicious treat with fresh fruit, a sweet vanilla mousse, and a scoop of creamy vanilla ice cream that has been drizzled with honey.",
    name: "Brown Butter Cake",
  },
  {
    id: 2,
    image: require("@/assets/images/menu_donuts.png"),
    info: "A trio of pillowy dough balls, golden fried to perfection and coated in a light dusting of powdered sugar, served with a generous drizzle of golden honey.",
    name: "Loukoumades (loo-koo-maa-dayz)",
  },
  {
    id: 3,
    image: require("@/assets/images/menu_baklava.png"),
    info: "Flaky layers of phyllo pastry are filled with a buttery crumble of chopped nuts and sweetened with honey.",
    name: "Baklava",
  },
];

export default function MenuScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <View className="relative flex-1 justify-center flex-col h-full w-full items-center space-y-6">
          <View className="bg-black/70 absolute left-0 top-0 right-0 bottom-0 z-10" />
          <Image
            className="absolute h-full w-full"
            source={require("@/assets/images/2023-hero-pita.png")}
          />
          <Image
            className="h-20 w-20 mx-auto z-10"
            source={require("@/assets/images/icon.png")}
          />

          <Text className="text-4xl font-bold uppercase text-white tracking-tighter z-10 text-center px-4">
            Discover Our <Text className="text-amber-600">Delicious</Text> menu
          </Text>
        </View>
      }
    >
      <View className="p-8 space-y-8">
        <View>
          <Text className="text-4xl font-bold uppercase text-zinc-700 tracking-tighter">
            New Entrees
          </Text>
          <Text className="text-base text-zinc-500">
            Craving Something? We've Got It
          </Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex-row space-x-8"
        >
          {ENTREES.map((entree) => (
            <View key={entree.id} className="space-y-4 w-72">
              <View className="w-full aspect-video relative">
                <Image
                  className="w-full absolute h-full"
                  source={entree.image}
                  resizeMode="cover"
                />
              </View>
              <View>
                <Text className="font-bold text-xl text-zinc-700">
                  {entree.name}
                </Text>
                <Text className="text-base text-zinc-500">{entree.info}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <View className="bg-amber-300 p-8 space-y-4">
        <Text className="text-4xl font-bold uppercase text-zinc-700 tracking-tighter">
          House Made Sauces
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex-row space-x-8"
        >
          {SAUCES.map((sauce) => (
            <View key={sauce.id} className="space-y-4 w-72">
              <View className="w-full aspect-square relative">
                <Image
                  className="w-full absolute h-full"
                  source={sauce.image}
                  resizeMode="cover"
                />
              </View>
              <View>
                <Text className="font-bold text-xl text-amber-700">
                  {sauce.name}
                </Text>
                <Text className="text-base text-zinc-600">{sauce.info}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <View className="p-8 space-y-8">
        <Text className="text-4xl font-bold uppercase text-zinc-700 tracking-tighter">
          Fries & Sides
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex-row space-x-8"
        >
          {FRIES_AND_SIDES.map((fryAndSide) => (
            <View key={fryAndSide.id} className="space-y-4 w-72">
              <View className="w-full aspect-video relative">
                <Image
                  className="w-full absolute h-full"
                  source={fryAndSide.image}
                  resizeMode="cover"
                />
              </View>
              <View>
                <Text className="font-bold text-xl text-zinc-700">
                  {fryAndSide.name}
                </Text>
                <Text className="text-base text-zinc-500">
                  {fryAndSide.info}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
        <View className="h-2 bg-zinc-600" />
        <Text className="text-4xl font-bold uppercase text-zinc-700 tracking-tighter">
          Build your Own
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex-row space-x-8"
        >
          {BUILD_YOUR_OWN.map((buildable) => (
            <View key={buildable.id} className="space-y-4 w-72">
              <View className="w-full aspect-square relative">
                <Image
                  className="w-full absolute h-full"
                  source={buildable.image}
                  resizeMode="cover"
                />
              </View>
              <View>
                <Text className="font-bold text-xl text-zinc-700">
                  {buildable.name}
                </Text>
                <Text className="text-base text-zinc-500">
                  {buildable.info}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
        <View className="h-2 bg-zinc-600" />
        <Text className="text-4xl font-bold uppercase text-zinc-700 tracking-tighter">
          Kids Meals
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex-row space-x-8"
        >
          {KIDS_MEALS.map((kidsMeal) => (
            <View key={kidsMeal.id} className="space-y-4 w-72">
              <View className="w-full aspect-square relative">
                <Image
                  className="w-full absolute h-full"
                  source={kidsMeal.image}
                  resizeMode="cover"
                />
              </View>
              <View>
                <Text className="font-bold text-xl text-zinc-700">
                  {kidsMeal.name}
                </Text>
                <Text className="text-base text-zinc-500">{kidsMeal.info}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
        <View className="h-2 bg-zinc-600" />
        <Text className="text-4xl font-bold uppercase text-zinc-700 tracking-tighter">
          Desserts
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex-row space-x-8"
        >
          {DESSERTS.map((dessert) => (
            <View key={dessert.id} className="space-y-4 w-72">
              <View className="w-full aspect-square relative">
                <Image
                  className="w-full absolute h-full"
                  source={dessert.image}
                  resizeMode="cover"
                />
              </View>
              <View>
                <Text className="font-bold text-xl text-zinc-700">
                  {dessert.name}
                </Text>
                <Text className="text-base text-zinc-500">{dessert.info}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </ParallaxScrollView>
  );
}
