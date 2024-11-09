import { router, Stack } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import Icons from "@/constants/icons";
import { Colors } from "@/constants/Colors";

const CustomHeader = ({ headerTitle }: { headerTitle: string }) => {
  const { ArrowRight } = Icons;
  return (
    <View className="flex-row-reverse justify-center items-center gap-4">
      <TouchableOpacity onPress={() => router.back()}>
        <ArrowRight width={24} height={24} stroke={Colors.light.icons} />
      </TouchableOpacity>

      <Text className="font-ISans_Medium text-[16px]">{headerTitle}</Text>
    </View>
  );
};

export default function ProfileLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerBackVisible: false,
        headerTitle: "",
      }}
    >
      <Stack.Screen
        name={"address-list"}
        options={{
          headerRight: () => <CustomHeader headerTitle="آدرس‌ها" />,
        }}
      />
    </Stack>
  );
}
