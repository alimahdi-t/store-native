import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import PriceText from "@/components/shared/PriceText";
import CustomButton from "@/components/shared/CustomButton";
import { convertToPersianNumbers } from "@/utils";
import { Colors } from "@/constants/Colors";
import CartItem from "@/components/ShoppingCart/CartItem";
import { useState } from "react";
import Icons from "@/constants/icons";

const ShoppingCart = () => {
  const [quantity, SetQuantity] = useState(4);
  const { Cancel, ClubPoint, InformationCircle } = Icons;

  return (
    <SafeAreaView>
      <View className="w-full h-full bg-gray-100">
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="px-4 bg-white">
            {/* Shopping List Header */}
            <View className="mt-4 flex-row-reverse justify-between items-center leading-7">
              <View>
                <Text className="font-ISans_Medium">سبد خرید شما</Text>

                <Text className="text-sm leading-7 font-ISans_Regular text-gray-500">
                  <Text className="text-sm font-ISans_Medium leading-7">
                    {convertToPersianNumbers(`${quantity} `)}
                  </Text>
                  کالا
                </Text>
              </View>
              <View>
                <TouchableOpacity>
                  <Cancel width={24} height={24} color={Colors.light.icons} />
                </TouchableOpacity>
              </View>
            </View>

            {/*  Shopping List Body  */}
            <CartItem
              product={{
                name: "کتاب اثر مرکب اثر دارن هاردی نشر کتیبه پارسی",
                price: 80000,
                discount: 5,
              }}
            />
            <CartItem
              product={{
                name: "کتاب اثر مرکب اثر دارن هاردی نشر کتیبه پارسی",
                price: 80000,
                discount: 5,
              }}
            />
            <CartItem
              product={{
                name: "کتاب اثر مرکب اثر دارن هاردی نشر کتیبه پارسی",
                price: 80000,
                discount: 50,
              }}
            />
            <CartItem
              product={{
                name: "کتاب اثر مرکب اثر دارن هاردی نشر کتیبه پارسی",
                price: 80000,
                discount: 20,
              }}
            />
            <CartItem
              product={{
                name: "کتاب اثر مرکب اثر دارن هاردی نشر کتیبه پارسی",
                price: 120000,
                discount: 30,
              }}
            />
          </View>
          {/* Shopping List Footer*/}
          <View className="px-4 mt-2 bg-white py-6">
            <View className="flex-row-reverse justify-between items-center">
              <Text className="font-ISans_Medium">خلاصه سبد</Text>
              <Text className="font-ISans_Regular text-sm color-secondary">
                {convertToPersianNumbers(`${5} کالا`)}
              </Text>
            </View>
            <View className="mt-6 gap-4">
              <View className="flex-row-reverse justify-between items-center">
                <Text className="font-extralight text-sm text-gray-500">
                  قیمت کالاها
                </Text>
                <PriceText price={88200} />
              </View>
              <View className="flex-row-reverse justify-between items-center">
                <Text className="font-extralight text-sm text-gray-500">
                  تخفیف کالاها
                </Text>
                <PriceText price={88200} />
              </View>
              <View className="flex-row-reverse justify-between items-center">
                <Text className="font-extralight text-sm text-gray-500">
                  جمع سبد خرید
                </Text>
                <PriceText price={88200} />
              </View>
            </View>
            <View>
              <View className="flex-row-reverse justify-between items-center border-t-[.5px] border-gray-300 mt-8 py-8">
                <View className="flex-row-reverse gap-2 items-center">
                  <ClubPoint />
                  <Text className="text-xs font-ISans_Regular leading-5 color-gray-500">
                    امتیاز دیجی‌کلاب
                  </Text>
                </View>
                <Text className="text-xs font-ISans_Regular leading-5 color-gray-500">
                  <Text className="text-xs font-ISans_Medium leading-5 text-black">
                    {convertToPersianNumbers(`${150} `)}
                  </Text>
                  امتیاز
                </Text>
              </View>
              <Text className="font-ISans_Regular text-xs color-gray-500">
                بعد از پایان مهلت مرجوعی، برای دریافت امتیاز به صحفه ماموریت های
                کلابی سر بزنید
              </Text>
            </View>
          </View>
          <View className="py-12 px-4 flex-row-reverse gap-4 justify-center items-center">
            <InformationCircle
              width={24}
              height={24}
              color={Colors.light.icon}
            />
            <Text className="font-ISans_Regular text-sm">
              کالاهای موجود در سبد شما ثبت و رزرو نشده‌اند‌، برای ثبت سفارش
              مراحل بعدی را تکمیل کنید.
            </Text>
          </View>
        </ScrollView>

        {/* Fixed */}

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
            height: 100,
          }}
          className="bg-white shadow-2xl border-gray-700 px-4 py-4 w-full flex-row-reverse items-center justify-between fixed bottom-0"
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
