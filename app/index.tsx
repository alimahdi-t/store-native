import { View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="w-full h-full bg-white items-center justify-center">
      <View
        style={{
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link href={"/store"} className="text-blue-500 text-2xl">
          Go to Store
        </Link>
      </View>
    </SafeAreaView>
  );
}
