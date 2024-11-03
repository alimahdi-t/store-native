import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import icons from "@/constants/icons";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";

const Settings = () => {
  const {
    HelpSquare,
    Cancel,
    Task,
    ArrowLeft,
    Logout,
    Bug,
    Call,
    DocumentValidation,
  } = icons;

  const SettingOptions = [
    { label: "پرسش‌های متداول", href: "", icon: HelpSquare },
    { label: "حریم خصوصی", href: "", icon: DocumentValidation },
    { label: "شرایط استفاده", href: "", icon: Task },
    { label: "تماس با ما", href: "", icon: Call },
    { label: "گزارش خطا", href: "", icon: Bug },
    { label: "خروج از حساب کاربری", href: "", icon: Logout },
  ];

  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      {/* Header */}

      <View className="flex-row-reverse items-center justify-between px-4 mt-8">
        <Text className="font-ISans_Medium text-lg">تنظیمات</Text>
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <Cancel width={20} height={20} color={Colors.light.icons} />
        </TouchableOpacity>
      </View>

      {/* Body */}

      <ScrollView>
        <View className="mt-8 w-full bg-white">
          {SettingOptions.map((item, index) => (
            <TouchableOpacity key={index}>
              <View className="w-full px-4 flex-row-reverse justify-between  items-center  gap-3">
                <item.icon
                  width={20}
                  height={20}
                  color={
                    index === SettingOptions.length - 1
                      ? Colors.light.brand
                      : Colors.light.icons
                  }
                />
                <View
                  className={`flex-1 flex-row-reverse py-4 items-center justify-between ${
                    index < SettingOptions.length - 1 ? "border-b" : ""
                  }  border-gray-100 gap-3`}
                >
                  <Text
                    className={`font-ISans_Regular leading-7 text-sm ${
                      index === SettingOptions.length - 1 ? "text-red-500" : ""
                    }`}
                  >
                    {item.label}
                  </Text>
                  {index < SettingOptions.length - 1 && (
                    <ArrowLeft
                      width={16}
                      height={16}
                      stroke={Colors.light.icons}
                    />
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
