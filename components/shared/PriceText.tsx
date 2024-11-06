import { StyleSheet, Text, View } from "react-native";
import Icons from "@/constants/icons";
import {
  calculateDiscount,
  calculatePriceAfterDiscount,
  convertToPersianAndFormat,
} from "@/utils";

interface Props {
  price: number;
  size?: "text-lg" | "text-base" | "text-sm" | "text-xs";
  discountPercentage?: number;
  quantity?: number;
}

const PriceText = ({
  price,
  size = "text-sm",
  discountPercentage = 0,
  quantity,
  ...props
}: Props) => {
  const { Toman } = Icons;

  return (
    <View {...props}>
      {discountPercentage !== 0 && (
        <View style={styles.priceTextContainer}>
          <Text className={`leading-7 font-ISans_Medium color-brand text-xs`}>
            {` ${convertToPersianAndFormat(
              calculateDiscount(price, discountPercentage),
            )} تومان تخفیف`}
          </Text>
        </View>
      )}
      <View style={styles.priceTextContainer}>
        <Text className={`leading-7 font-ISans_Bold ${size}`}>
          {convertToPersianAndFormat(
            calculatePriceAfterDiscount(price, discountPercentage),
          )}
        </Text>
        <Toman width={18} height={18} />
      </View>
    </View>
  );
};

export default PriceText;

const styles = StyleSheet.create({
  priceTextContainer: {
    flexDirection: "row-reverse",
    gap: 6,
    alignItems: "center",
  },

  price: {
    fontFamily: "ISans_Bold",
    fontSize: 12,
    lineHeight: 32,
  },
});
