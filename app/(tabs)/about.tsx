import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Image, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <View className="relative flex-1 justify-center flex-col h-full w-full items-center space-y-6">
          <View className="bg-black/70 absolute left-0 top-0 right-0 bottom-0 z-10" />
          <Image
            className="absolute h-full w-full"
            source={require("@/assets/images/community-hero.png")}
          />
          <Image
            className="h-20 w-20 mx-auto z-10"
            source={require("@/assets/images/icon.png")}
          />

          <Text className="text-4xl font-bold uppercase text-white tracking-tighter z-10 text-center px-4">
            Together, we <Text className="text-amber-600">strengthen</Text> our
            community.
          </Text>
        </View>
      }
    >
      <View className="p-8 space-y-8">
        <View>
          <Text className="text-4xl font-bold uppercase text-zinc-700 tracking-tighter">
            Our Mission
          </Text>
          <Text className="text-base text-zinc-500">
            Good food, good vibes, good community.
          </Text>
        </View>
        <Text className="text-base tracking-tighter text-zinc-600">
          We’re all about making a positive impact on our community. We believe
          that everyone has a role to play, and we are proud to be a part of the
          community. We bring people together through fundraisers, local events,
          and by wholeheartedly supporting local charities. Together, we’re
          creating a stronger, more vibrant community that thrives on the power
          of togetherness.
        </Text>
        <Text className="text-base tracking-tighter text-zinc-600">
          At Santorini's, our unwavering commitment to community shines through
          active engagement in local events and steadfast support for important
          causes. By wholeheartedly participating in community initiatives, we
          forge meaningful connections and cultivate a robust presence within
          our neighborhood. These efforts not only foster goodwill and trust but
          also foster enduring relationships, enhancing brand loyalty and
          elevating customer satisfaction to new heights.
        </Text>
        <View className="h-2 bg-zinc-600" />
        <View>
          <Text className="text-4xl font-bold uppercase text-zinc-700 tracking-tighter">
            Meet the Team
          </Text>
          <Text className="text-base text-zinc-500">
            The People Who Make It Happen
          </Text>
        </View>
        <Image
          className="h-64 w-full mx-auto"
          source={require("@/assets/images/sean-dehghani.png")}
        />
        <View>
          <Text className="text-base font-bold text-zinc-700">
            Sean Dehghani
          </Text>
          <Text className="font-semibold tracking-tighter text-zinc-600">
            Founder & Co-Owner
          </Text>
        </View>
        <Text className="text-base tracking-tighter text-zinc-600">
          Sean is the backbone of Santorini’s from concept to creation, with
          over eighteen years of experience and expertise in the restaurant
          industry. The menu development, restaurant layout, operations, as well
          as marketing strategy has all been originated and managed by Sean. His
          involvement in a commercial construction company means every detail of
          each location has been overseen and customized to his high standards.
        </Text>
        <Text className="text-base tracking-tighter text-zinc-600">
          If he’s not at the restaurant, you will find Sean spending time with
          his wife and three children. They love to cook together and play
          together. He is active in his community, often serving as a board
          member for organizations such as the Davis County Republican Party. He
          supports law enforcement and health care professionals and is always
          willing to participate in community fundraisers.
        </Text>
        <Text className="text-base tracking-tighter text-zinc-600">
          Sean’s desire to give back to the community is one of the
          differentiating aspects of the Santorini brand. “When my wife and I
          started this, we told each other that we would make sure we give back
          to the community as much as possible and not be a typical
          restaurant—not just take, take, take. Being a part of our community
          and our employees’ lives’ is very important to us.”
        </Text>
        <View />
        <Image
          className="h-64 w-full mx-auto"
          source={require("@/assets/images/massoud-shafizadeh.png")}
        />
        <View>
          <Text className="text-base font-bold text-zinc-700">
            Massoud Shafizadeh
          </Text>
          <Text className="font-semibold tracking-tighter text-zinc-600">
            Co-Owner
          </Text>
        </View>
        <Text className="text-base tracking-tighter text-zinc-600">
          Massoud brings depth and a wealth of knowledge and experience to
          Santorini’s. He has over thirty years in several businesses, including
          a home building business as a general contractor and owning twenty-two
          Ambassador Pizza locations. His educational background is in
          Engineering with a Bachelor’s and Master’s Degrees from the University
          of Utah.
        </Text>
        <Text className="text-base tracking-tighter text-zinc-600">
          He and his wife enjoy traveling and attending concerts together. They
          have four children and seven grandchildren.
        </Text>
        <Text className="text-base tracking-tighter text-zinc-600">
          Together, Sean and Massoud share their passion for quality, fresh food
          served fast-casual for today’s busy families.
        </Text>
      </View>
    </ParallaxScrollView>
  );
}
