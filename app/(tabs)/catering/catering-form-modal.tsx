import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useLocalSearchParams, useRouter } from "expo-router";
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
  const router = useRouter();
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
      <TouchableOpacity className="flex-row items-center" onPress={router.back}>
        <Text className="text-zinc-200">
          <Ionicons name="chevron-back" size={18} />
        </Text>
        <Text className="font-semibold uppercase text-zinc-200">Go Back</Text>
      </TouchableOpacity>
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
          placeholderTextColor="#CCC"
        />
      </View>
      <View className="space-y-2">
        <Text className="text-zinc-200 text-sm">
          Email - <Text className="text-red-400 text-xs italic">Required</Text>
        </Text>
        <TextInput
          className="w-full bg-white border-2 text-[18px] border-zinc-400  p-2 text-zinc-700"
          placeholder="email@example.com"
          placeholderTextColor="#CCC"
        />
      </View>
      <View className="space-y-2">
        <Text className="text-zinc-200 text-sm">
          Phone - <Text className="text-red-400 text-xs italic">Required</Text>
        </Text>
        <TextInput
          className="w-full bg-white border-2 text-[18px] border-zinc-400  p-2 text-zinc-700"
          placeholder="555-555-5555"
          placeholderTextColor="#CCC"
        />
      </View>
      <View className="space-y-2">
        <View>
          <Text className="text-zinc-200 text-sm">
            Party Size -{" "}
            <Text className="text-red-400 text-xs italic">Required</Text>
          </Text>
          <Text className="text-zinc-300 text-xs">
            Select the anticipated number of party attendees
          </Text>
        </View>
        <Picker itemStyle={{ color: "white", fontWeight: "600" }}>
          <Picker.Item value={10} label="10 people" />
          <Picker.Item value={11} label="11 people" />
          <Picker.Item value={12} label="12 people" />
          <Picker.Item value={13} label="13 people" />
          <Picker.Item value={14} label="14 people" />
          <Picker.Item value={15} label="15 people" />
          <Picker.Item value={16} label="15+ people" />
        </Picker>
      </View>
      <View className="space-y-2">
        <View>
          <Text className="text-zinc-200 text-sm">
            Catering Package -{" "}
            <Text className="text-red-400 text-xs italic">Required</Text>
          </Text>
          <Text className="text-zinc-300 text-xs">
            What package are you considering?
          </Text>
        </View>
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
