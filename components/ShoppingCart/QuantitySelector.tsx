import { Text, TouchableOpacity, View } from "react-native";
import Icons from "@/constants/icons";
import { Colors } from "@/constants/Colors";
import { convertToPersianNumbers } from "@/utils";

// TODO: Add dots loader

interface Props {
  max: number;
  quantity: number;
  setQuantity: (quantity: number) => void;
  discountPercentage: number;
}

const QuantitySelector = ({ max, quantity, setQuantity, ...props }: Props) => {
  const { Delete, Plus, Minus } = Icons;
  const handleIncrement = () => {
    if (max > quantity) {
      setQuantity(quantity + 1);
    } else {
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View
      className="w-32 h-12 border border-gray-300 flex-row-reverse px-3 py-1.5 rounded-lg items-center justify-center"
      {...props}
    >
      <TouchableOpacity onPress={() => handleIncrement()}>
        <Plus
          width={24}
          height={24}
          color={max > quantity ? Colors.light.brand : Colors.light.neutral}
        />
      </TouchableOpacity>
      <View className="w-12 justify-center items-center gap-0">
        <Text className=" justify-center items-center text-center leading-7 color-brand font-ISans_Medium">
          {convertToPersianNumbers(quantity)}
        </Text>
        {max <= quantity && (
          <Text className="font-ISans_Regular text-[8px] -mt-2">حداکثر</Text>
        )}
      </View>
      <TouchableOpacity onPress={() => handleDecrement()}>
        {quantity > 1 ? (
          <Minus width={24} height={24} color={Colors.light.brand} />
        ) : (
          <Delete width={24} height={24} color={Colors.light.brand} />
        )}
      </TouchableOpacity>
    </View>
  );
};
export default QuantitySelector;
