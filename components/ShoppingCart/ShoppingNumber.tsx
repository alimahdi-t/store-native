import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import Icons from "@/constants/icons";
import { Colors } from "@/constants/Colors";
import { convertToPersianNumbers } from "@/utils";

interface Props {
  max: number;
}

const ShoppingNumber = ({ max }: Props) => {
  const [count, setCount] = useState(1);
  const { Delete, Plus } = Icons;
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };
  return (
    <View className="border border-gray-300 flex-row-reverse px-3 py-1.5 rounded-lg items-center">
      <TouchableOpacity onPress={() => handleIncrement()}>
        <Plus width={24} height={24} color={Colors.light.brand} />
      </TouchableOpacity>
      <Text className="w-12 justify-center items-center text-center leading-9 color-brand font-ISans_Medium">
        {convertToPersianNumbers(count)}
      </Text>
      <TouchableOpacity onPress={() => handleDecrement()}>
        <Delete width={24} height={24} color={Colors.light.brand} />
      </TouchableOpacity>
    </View>
  );
};
export default ShoppingNumber;
