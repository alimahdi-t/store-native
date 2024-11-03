import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "@/constants/Colors";
import PriceText from "@/components/PriceText";

const ShoppingCart = () => {
  return (
    <SafeAreaView>
      <View className="w-full h-full bg-white">
        <ScrollView>
          <View>
            <Text>ShoppingCart</Text>
          </View>
        </ScrollView>
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
          className="border-t-2  shadow-2xl border-gray-700 px-4 py-4 w-full flex-row-reverse items-center justify-between"
        >
          <TouchableOpacity>
            <View style={styles.btnContinue}>
              <Text style={styles.btnContinueText}>ادامه فرایند خرید</Text>
            </View>
          </TouchableOpacity>
          <View className="">
            <Text className="font-ISans_Regular text-xs text-neutral-500">
              جمع سبد خرید
            </Text>
            <PriceText price={1200000} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  btnContinue: {
    backgroundColor: Colors.light.brand,
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 16,
  },

  btnContinueText: {
    fontFamily: "ISans_Regular",
    fontSize: 12,
    color: "white",
  },
});
