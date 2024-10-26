import { Tabs } from "expo-router";
import React from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Image, Text, View } from "react-native";
import images from "@/constants/images";

const TabIcon = ({
  icon,
  color,
  name,
  focused,
}: {
  icon: any;
  name: string;
  focused: boolean;
  color: string;
}) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image source={icon} className="w-6 h-6" tintColor={color} />
      <Text
        className={`${
          focused ? "font-ISans_Medium" : "font-ISans_Regular"
        } text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#333",
        tabBarInactiveTintColor: "#94a3b8",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#f3f4f6",
          height: 84,
        },
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",

          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={images.userFill}
              color={color}
              name="پروفایل"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="shopping-cart"
        options={{
          title: "Shopping Cart",

          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={images.shoppingCartFill}
              color={color}
              name="سبد خرید"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          title: "Category",

          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={images.menuSquareFill}
              color={color}
              name="دسته‌بندی"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="store"
        options={{
          title: "Store",

          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={images.storeFill}
              color={color}
              name="فروشگاه"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
