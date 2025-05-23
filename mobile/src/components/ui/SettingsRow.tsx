import iconsData from "@/src/constants/iconsData";
import { Href, router } from "expo-router";
import { Platform, TouchableOpacity, View } from "react-native";
import MyText from "./MyText";

export type SettingsRowType = {
  title: string;
  icon: keyof typeof iconsData;
  route: Href;
  index: number;
};

const SettingsRow = ({ title, icon, route, index }: SettingsRowType) => {
  return (
    <TouchableOpacity
      onPress={() => router.push(route)}
      className={`p-6 flex-row gap-4 items-center justify-between ${
        index !== 0 ? "border-t border-[#ffffff09]" : ""
      }`}
    >
      <View className="flex-row gap-4">
        {iconsData[icon]({ justifySelf: "flex-end" })}
        <MyText className="text-xl text-textPrimary">{title}</MyText>
      </View>
      {Platform.OS === "ios" && iconsData["arrowForward"]()}
    </TouchableOpacity>
  );
};

export default SettingsRow;
