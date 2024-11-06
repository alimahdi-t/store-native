import { StyleSheet, Text, View } from "react-native";
import Icons from "@/constants/icons";
import { convertToPersianAndFormat } from "@/utils";

const PriceText = ({
  price,
  size = "text-sm",
  ...props
}: {
  price: number;
  size?: "text-lg" | "text-base" | "text-sm" | "text-xs";
}) => {
  const { Toman } = Icons;
  return (
    <View style={styles.priceTextContainer} {...props}>
      <Text className={`leading-7 font-ISans_Bold ${size}`}>
        {convertToPersianAndFormat(price)}
      </Text>
      <Toman width={18} height={18} />
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
