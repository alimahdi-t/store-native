import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import PriceText from "@/components/shared/PriceText";
import CustomButton from "@/components/shared/CustomButton";
import ShoppingList from "@/components/ShoppingCart/ShoppingList";

const ShoppingCart = () => {
  return (
    <SafeAreaView>
      <View className="w-full h-full bg-white">
        {/*<ScrollView>*/}
        {/*  <View>*/}
        {/*    <Text>ShoppingCart</Text>*/}
        {/*  </View>*/}
        {/*  <View className="w-full justify-center items-center mt-12">*/}
        {/*    <QuantitySelector max={3} />*/}
        {/*  </View>*/}
        {/*</ScrollView>*/}
        <ShoppingList />
        <View
          style={{
            backgroundColor: "white",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 6,
          }}
          className="bg-white shadow-2xl border-gray-700 px-4 py-4 w-full flex-row-reverse items-center justify-between absolute bottom-0"
        >
          <CustomButton label={"ادامه فرایند خرید"} />

          <View style={styles.sumPriceContainer}>
            <Text className="font-ISans_Regular text-xs text-neutral-500">
              جمع سبد خرید
            </Text>
            <PriceText price={120000000000} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  sumPriceContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 2,
  },
});
