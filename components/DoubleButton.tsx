import { PropsWithChildren } from "react";
import { GestureResponderEvent, TouchableOpacity } from "react-native";

type DoubleButtonPropTypes = PropsWithChildren & {
  onPress: (event: GestureResponderEvent) => void;
};

export default function DoubleButton({
  children,
  onPress,
}: DoubleButtonPropTypes) {
  return (
    <TouchableOpacity
      onPress={onPress}
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
      {children}
    </TouchableOpacity>
  );
}
