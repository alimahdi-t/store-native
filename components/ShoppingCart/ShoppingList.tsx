// import { Text, TouchableOpacity, View } from "react-native";
// import Icons from "@/constants/icons";
// import { Colors } from "@/constants/Colors";
// import { useState } from "react";
// import { convertToPersianNumbers } from "@/utils";
// import CartItem from "@/components/ShoppingCart/CartItem";
//
// const ShoppingList = () => {
//
//     <View className="pb-30">
//       <View className="px-4 bg-white">
//         {/* Shopping List Header */}
//         <View className="mt-4 flex-row-reverse justify-between items-center leading-7">
//           <View>
//             <Text className="font-ISans_Medium">سبد خرید شما</Text>
//
//             <Text className="text-sm leading-7 font-ISans_Regular text-gray-500">
//               <Text className="text-sm font-ISans_Medium leading-7">
//                 {convertToPersianNumbers(`${quantity} `)}
//               </Text>
//               کالا
//             </Text>
//           </View>
//           <View>
//             <TouchableOpacity>
//               <Cancel width={24} height={24} color={Colors.light.icons} />
//             </TouchableOpacity>
//           </View>
//         </View>
//
//         {/*  Shopping List Body  */}
//         <CartItem />
//         <CartItem />
//         <CartItem />
//         <CartItem />
//         <CartItem />
//       </View>
//       {/* Shopping List Footer*/}
//       <View className="border-t border-gray-200"></View>
//     </View>
//   );
// };
//
// export default ShoppingList;
