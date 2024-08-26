import { Picker } from "@react-native-picker/picker";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CateringFormModal() {
  const { bottom } = useSafeAreaInsets();
  const { cateringPackage } = useLocalSearchParams<{
    cateringPackage: string;
  }>();
  const [selectedCateringPackage, setSelectedCateringPackage] =
    useState(cateringPackage);

  return (
    <ScrollView
      className="bg-zinc-800 p-8 space-y-4"
      showsVerticalScrollIndicator={false}
    >
      <Text className="text-3xl font-bold uppercase text-white">
        Request Catering
      </Text>
      <View className="space-y-2">
        <Text className="text-zinc-200 text-sm">
          Name - <Text className="text-red-400 text-xs italic">Required</Text>
        </Text>
        <TextInput
          className="w-full bg-white border-2 text-[18px] border-zinc-400  p-2 text-zinc-700"
          placeholder="John Doe"
        />
      </View>
      <View className="space-y-2">
        <Text className="text-zinc-200 text-sm">
          Email - <Text className="text-red-400 text-xs italic">Required</Text>
        </Text>
        <TextInput
          className="w-full bg-white border-2 text-[18px] border-zinc-400  p-2 text-zinc-700"
          placeholder="email@example.com"
        />
      </View>
      <View className="space-y-2">
        <Text className="text-zinc-200 text-sm">
          Phone - <Text className="text-red-400 text-xs italic">Required</Text>
        </Text>
        <TextInput
          className="w-full bg-white border-2 text-[18px] border-zinc-400  p-2 text-zinc-700"
          placeholder="555-555-5555"
        />
      </View>
      <View className="space-y-2">
        <Text className="text-zinc-200 text-sm">Party Size</Text>
        <Picker itemStyle={{ color: "white", fontWeight: "600" }}>
          <Picker.Item value={5} label="5 people" />
          <Picker.Item value={6} label="6 people" />
          <Picker.Item value={7} label="7 people" />
          <Picker.Item value={8} label="8 people" />
          <Picker.Item value={9} label="9 people" />
          <Picker.Item value={10} label="10 people" />
          <Picker.Item value={11} label="10+ people" />
        </Picker>
      </View>
      <View className="space-y-2">
        <Text className="text-zinc-200 text-sm">Catering Package</Text>
        <Picker
          itemStyle={{ color: "white", fontWeight: "600" }}
          selectedValue={selectedCateringPackage}
          onValueChange={(val) => setSelectedCateringPackage(val)}
        >
          <Picker.Item value="bowl-buffet" label="Bowl Buffet" />
          <Picker.Item value="pita-buffet" label="Pita Buffet" />
          <Picker.Item value="boxed-meals" label="Boxed Meals" />
          <Picker.Item value="ultimate-combo" label="Ultimate Combo" />
        </Picker>
      </View>
      <TouchableOpacity
        className="bg-amber-600 p-4 px-6"
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
      <View className="h-20" style={{ paddingBottom: bottom }} />
    </ScrollView>
  );
}
