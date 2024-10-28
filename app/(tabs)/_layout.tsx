import { Tabs } from "expo-router";
import React from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Text, View } from "react-native";
import { Colors } from "@/constants/Colors";
import icons from "@/constants/icons";

const TabIcon = ({
  icon: Icon,
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
      <Icon
        color={"#A1A3A8"}
        fill={focused ? Colors.light.brand : Colors.light.neutral}
      />
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

  const { DashboardSquareSolid, UserSolid, StoreSolid, ShoppingBagSolid } =
    icons;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.light.brand,
        tabBarInactiveTintColor: Colors.light.neutral,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#f3f4f6",
          height: 72,
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
              icon={UserSolid}
              color={color}
              name="حساب کاربری"
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
              icon={ShoppingBagSolid}
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
              icon={DashboardSquareSolid}
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
              icon={StoreSolid}
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
