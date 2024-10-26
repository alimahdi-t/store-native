import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import "@/global.css";
import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    ISans_UltraLight: require("../assets/fonts/IRANSansWeb_UltraLight.ttf"),
    ISans_Light: require("../assets/fonts/IRANSansWeb_Light.ttf"),
    ISans_Regular: require("../assets/fonts/IRANSansWeb.ttf"),
    ISans_Medium: require("../assets/fonts/IRANSansWeb_Medium.ttf"),
    ISans_Bold: require("../assets/fonts/IRANSansWeb_Bold.ttf"),
    ISans_Black: require("../assets/fonts/IRANSansWeb_Black.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
