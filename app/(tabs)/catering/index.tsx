import {
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Href, useRouter } from "expo-router";
import CateringButton from "@/components/CateringButton";

type CateringPackageType = {
  image: ImageSourcePropType;
  info: string;
  name: string;
  more: Href;
  number: number;
};

const CATERING_PACKAGES: CateringPackageType[] = [
  {
    image: require("@/assets/images/catering-bowl-or-pita.png"),
    info: "from $15/Person – Ten Person Minimum ",
    more: "/(tabs)/catering/boxed-meals",
    name: "Boxed Meals",
    number: 1,
  },
  {
    image: require("@/assets/images/catering-bowl-buffet.png"),
    info: "from $16.50/Person – Ten Person Minimum ",
    more: "/(tabs)/catering/bowl-buffet",
    name: "Bowl Buffet",
    number: 2,
  },
  {
    image: require("@/assets/images/catering-bowl-buffet.png"),
    info: "from $16.50/Person – Ten Person Minimum ",
    more: "/(tabs)/catering/pita-buffet",
    name: "Pita Buffet",
    number: 3,
  },
  {
    image: require("@/assets/images/catering-bowl-buffet.png"),
    info: "from $18.50/Person",
    more: "/(tabs)/catering/ultimate-combo",
    name: "Pita and Bowl Buffet",
    number: 4,
  },
];

export default function CateringScreen() {
  const router = useRouter();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <View className="relative flex-1 justify-center flex-col h-full w-full items-center space-y-6">
          <View className="bg-black/70 absolute left-0 top-0 right-0 bottom-0 z-10" />
          <Image
            className="absolute h-full w-full"
            source={require("@/assets/images/catering.png")}
          />
          <Image
            className="h-20 w-20 mx-auto z-10"
            source={require("@/assets/images/icon.png")}
          />

          <Text className="text-4xl font-bold uppercase text-white tracking-tighter z-10 text-center px-4">
            A World of <Text className="text-amber-600">Flavor</Text>, delivered
            to You
          </Text>
        </View>
      }
    >
      <View className="p-8 space-y-8">
        <View>
          <Text className="text-4xl font-bold uppercase text-zinc-700 tracking-tighter">
            Catering
          </Text>
          <Text className="text-base text-zinc-500">
            Have Questions or Need a Custom Package? Our Catering Manager would
            love to help you out! Call us at 385-390-1302
          </Text>
        </View>
        <View>
          <CateringButton cateringPackage="boxed-meals" />
        </View>
        <View>
          <Text className="text-base tracking-tighter text-zinc-600 font-bold">
            BUFFET STYLE OR INDIVIDUAL PACKAGED MEAL OPTIONS
          </Text>
          <Text className="text-base tracking-tighter text-zinc-600">
            Elevate your team lunch, corporate event, or casual get-together
            with Santorini’s catering. We specialize in tailoring our catering
            experience to match your event, taste, and budget. Let’s make your
            occasion exceptional together!
          </Text>
        </View>
        <View>
          <Text className="text-base tracking-tighter text-zinc-600 font-bold">
            DELIVERY INCLUDED
          </Text>
          <Text className="text-base tracking-tighter text-zinc-600">
            To destinations within 5 miles of any of our locations. Please call
            for further distances–we’d love to accomodate you!
          </Text>
        </View>
        <View className="h-2 bg-zinc-600" />
        <View>
          <Text className="text-4xl font-bold uppercase text-zinc-700 tracking-tighter">
            Package Options
          </Text>
          <Text className="text-base text-zinc-500">
            Perfect for unforgettable events. Set-up Service and Full Service
            available (see below for details).
          </Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex-row space-x-10 py-2"
        >
          {CATERING_PACKAGES.map((cateringPackage) => (
            <View className="w-72 space-y-4" key={cateringPackage.number}>
              <Text className="text-3xl font-bold text-center text-amber-600 pb-2">
                {cateringPackage.number}
              </Text>
              <Image
                className="h-64 w-full mx-auto"
                source={cateringPackage.image}
              />
              <View>
                <Text className="text-xl tracking-tighter text-zinc-600 font-bold uppercase">
                  {cateringPackage.name}
                </Text>
                <Text className="text-zinc-500 italic text-sm">
                  {cateringPackage.info}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => router.push(cateringPackage.more)}
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
                <Text className="text-white font-bold uppercase">
                  Learn more
                </Text>
              </TouchableOpacity>
            </View>
          ))}
          <View />
        </ScrollView>
        <View className="h-2 bg-zinc-600" />
        <Text className="text-4xl font-bold uppercase text-zinc-700 tracking-tighter">
          Additional Services
        </Text>
        <View className="space-y-2">
          <Text className="text-base font-bold text-zinc-500">
            Set-up Service
          </Text>
          <Text className="text-base text-zinc-500">
            Upgrade your event experience with our convenient buffet setup
            service! For a small fee, we’ll deliver your favorite dishes right
            to your venue and set up a self-service buffet. Simply clear a space
            and set up some tables, and we’ll take care of the rest. Our team
            will go over the menu details with you, leaving you free to relax
            and enjoy your feast. Plus, we’ll provide complimentary serving
            utensils, disposable plates, cutlery, and napkins. It’s hassle-free
            dining made easy! Service fees apply.
          </Text>
        </View>
        <View className="space-y-2">
          <Text className="text-base font-bold text-zinc-500">
            Full Service
          </Text>
          <Text className="text-base text-zinc-500">
            Introducing our ‘Full Service’ upgrade, where we go above and beyond
            to make your event truly unforgettable! Our dedicated catering team
            is here to guide you every step of the way, ensuring every detail is
            tailored to perfection. From coordinating your menu to providing
            resources for local vendors, we’re committed to making your event
            extraordinary. On the big day, we’ll handle everything from delivery
            to setup, including the convenient buffet setup service you know and
            love. But that’s not all! Our friendly catering staff will stay
            throughout your event, keeping the buffet stocked, tidy, and
            organized, so you can relax and enjoy every moment with your guests.
            With our ‘Full Service’ option, hosting has never been easier or
            more enjoyable! Service fees apply.
          </Text>
        </View>
        <View>
          <CateringButton cateringPackage="boxed-meals" />
        </View>
      </View>
    </ParallaxScrollView>
  );
}
