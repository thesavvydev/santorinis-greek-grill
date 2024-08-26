import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Text, TouchableNativeFeedback, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CateringLayout() {
  const { top } = useSafeAreaInsets();
  return (
    <Stack
      screenOptions={{
        header(props) {
          return (
            <TouchableNativeFeedback onPress={props.navigation.goBack}>
              <View
                className="px-4 flex-row items-center space-x-2 bg-amber-300 shadow-md pb-4"
                style={{
                  paddingTop: top + 10,
                }}
              >
                <Ionicons name="chevron-back" size={24} />
                <Text className="text-4xl text-slate-800 uppercase font-extrabold text-center">
                  {props.options.title}
                </Text>
              </View>
            </TouchableNativeFeedback>
          );
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="boxed-meals" options={{ title: "Boxed Meals" }} />
      <Stack.Screen name="bowl-buffet" options={{ title: "Bowl Buffet" }} />
      <Stack.Screen name="pita-buffet" options={{ title: "Pita Buffet" }} />
      <Stack.Screen
        name="ultimate-combo"
        options={{ title: "Ultimate Combo" }}
      />
      <Stack.Screen
        name="catering-form-modal"
        options={{
          headerShown: false,
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
