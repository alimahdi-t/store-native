import { Image, Text, TouchableOpacity, View } from "react-native";
import Product from "@/constants/Product";
import QuantitySelector from "@/components/ShoppingCart/QuantitySelector";
import PriceText from "@/components/shared/PriceText";
import { useState } from "react";

interface Product {
  name: string;
  price: number;
  discount: number;
}

interface Props {
  product: Product;
}

const CartItem = ({ product, ...props }: Props) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <View className="mt-8 py-4 border-b-[0.5px] border-gray-300" {...props}>
      <View className="flex-row-reverse gap-2">
        <View>
          <Image source={Product.Product1} className="w-32 h-32" />
        </View>
        <View className="flex-1">
          <Text
            className="font-ISans_Medium text-sm leading-7"
            lineBreakMode={"tail"}
          >
            {product.name}
          </Text>
        </View>
      </View>
      <View className="mt-6 flex-row-reverse gap-4 items-center">
        <QuantitySelector
          max={5}
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <View>
          <PriceText
            price={product.price}
            quantity={quantity}
            size={"text-base"}
            discountPercentage={product.discount}
          />
        </View>
      </View>
      <View className="flex-1 flex-row-reverse justify-end mt-1.5">
        <TouchableOpacity>
          <Text className="text-secondary font-ISans_Regular text-sm">
            حذف از سبد خرید
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
