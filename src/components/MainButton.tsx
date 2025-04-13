import React from "react";
import { Pressable, Text } from "react-native";

type Props = {
  onPress: () => unknown;
  containerClass?: string;
  textClass?: string;
  text: string;
};

const MainButton = ({ onPress, containerClass, textClass, text }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className={`border-2 border-[#140152] p-4 bg-[#22007c] rounded-lg ${containerClass}`}
    >
      <Text className={`text-center text-white ${textClass}`}>{text}</Text>
    </Pressable>
  );
};

export default MainButton;
