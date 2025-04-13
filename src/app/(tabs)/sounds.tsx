import SoundCard from "@/src/components/SoundCard.";
import { Text, View } from "react-native";

const sounds = () => {
  // to put in a single file like the icon
  const sounds = [
    { title: "Rainfall", value: "rainfall" },
    { title: "Ocean Waves", value: "oceanWaves" },
    { title: "Brown Noise", value: "brownNoise" },
  ];

  return (
    <View className="flex-1 pb-32 pt-20 px-16 gap-4 items-center">
      <View className="gap-3">
        <Text className="text-4xl text-center">Soothing Sounds</Text>
        <Text className="text-xl text-center">
          Create your perfect sleep atmosphere. Pick a sound, close your eyes,
          and relax.
        </Text>
      </View>
      <View className="flex-1 w-full gap-4 justify-center">
        {sounds.map((item, index) => (
          <SoundCard key={index} title={item.title} value={item.value} />
        ))}
      </View>
    </View>
  );
};

export default sounds;
