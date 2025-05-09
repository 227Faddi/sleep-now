import "@/global.css";
import "@/src/i18n";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import color from "../constants/colors";
import AppContextProvider from "../contexts/AppContextProvider";
import { useAsyncStorage } from "../hooks/useAsyncStorage";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { getItem } = useAsyncStorage("language");
  const { i18n } = useTranslation();

  const [loaded, error] = useFonts({
    "Fredoka-Regular": require("@/assets/fonts/Fredoka-Regular.ttf"),
    "Fredoka-Medium": require("@/assets/fonts/Fredoka-Medium.ttf"),
    "Fredoka-Bold": require("@/assets/fonts/Fredoka-Bold.ttf"),
  });

  useEffect(() => {
    const loadLanguage = async () => {
      const savedLanguage = await getItem();
      const languageToUse = savedLanguage || "en";
      if (i18n.language !== languageToUse) {
        i18n.changeLanguage(languageToUse);
      }
    };
    loadLanguage();
  }, [i18n]);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView className="flex-1 bg-background">
      <AppContextProvider>
        <Stack
          screenOptions={{
            contentStyle: { backgroundColor: color.background },
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="play/[value]" options={{ headerShown: false }} />
        </Stack>
      </AppContextProvider>
    </GestureHandlerRootView>
  );
}
