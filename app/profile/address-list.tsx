import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icons from "@/constants/icons";
import { convertToPersianNumbers } from "@/utils";
import { Colors } from "@/constants/Colors";

const { LocationAdd, User, MapsLocation, Location, Call, MoreVertical } = Icons;
interface Address {
  id: number;
  fullAddress: string;
  postcode: string;
  mobileNo: string;
  receiverName: string;
  province: string;
  city: string;
}

const AddressItem = ({ address, ...props }: { address: Address }) => {
  return (
    <View className="bg-white py-6 border-b-[.5px] border-gray-300" {...props}>
      <View className="w-full flex-row-reverse justify-between gap-12">
        <View className="flex-1">
          <Text className="font-ISans_Medium text-sm">
            {address.fullAddress}
          </Text>
        </View>
        <TouchableOpacity>
          <MoreVertical
            width={24}
            height={24}
            color={Colors.light.icons}
            strokeWidth={4}
          />
        </TouchableOpacity>
      </View>
      <View className="mt-4 gap-3">
        <View className="flex-row-reverse gap-2 items-center">
          <Location width={16} height={16} />
          <Text className="font-ISans_Regular text-xs leading-5">
            {`${address.province}، ${address.city}`}
          </Text>
        </View>
        <View className="flex-row-reverse gap-2 items-center">
          <MapsLocation width={16} height={16} />
          <Text className="font-ISans_Regular text-xs leading-5">
            {convertToPersianNumbers(address.postcode)}
          </Text>
        </View>
        <View className="flex-row-reverse gap-2 items-center">
          <Call width={16} height={16} />
          <Text className="font-ISans_Regular text-xs leading-5">
            {convertToPersianNumbers(address.mobileNo)}
          </Text>
        </View>
        <View className="flex-row-reverse gap-2 items-center">
          <User width={16} height={16} />
          <Text className="font-ISans_Regular text-xs leading-5">
            {address.receiverName}
          </Text>
        </View>
      </View>
    </View>
  );
};

const AddressList = () => {
  const addressList = [
    {
      id: 1,
      fullAddress: "بیرجند، دانشگاه بیرجند، مجموعه خوابگاهی سرو",
      postcode: "9717851367",
      mobileNo: "09030579074",
      receiverName: "سید علی مهدی",
      province: "خراسان جنوبی",
      city: "بیرجند",
    },
    {
      id: 2,
      fullAddress: "تهران، خیابان ولیعصر، تقاطع طالقانی، برج تجارت",
      postcode: "1585647891",
      mobileNo: "09121234567",
      receiverName: "رضا حسینی",
      province: "تهران",
      city: "تهران",
    },
    {
      id: 3,
      fullAddress: "مشهد، بلوار وکیل آباد، پردیس دانشگاه فردوسی",
      postcode: "9165872345",
      mobileNo: "09137654321",
      receiverName: "مریم احمدی",
      province: "خراسان رضوی",
      city: "مشهد",
    },
    {
      id: 4,
      fullAddress: "اصفهان، خیابان چهار باغ، میدان امام حسین",
      postcode: "8134567890",
      mobileNo: "09351234567",
      receiverName: "علی صادقی",
      province: "اصفهان",
      city: "اصفهان",
    },
    {
      id: 5,
      fullAddress: "شیراز، بلوار شهید چمران، روبروی پارک آزادی",
      postcode: "7193647852",
      mobileNo: "09134567890",
      receiverName: "زهرا عباسی",
      province: "فارس",
      city: "شیراز",
    },
  ];

  return (
    <SafeAreaView>
      <View className="w-full h-full bg-white">
        <ScrollView showsVerticalScrollIndicator={false} className="px-6">
          {addressList.map((address, index) => (
            <AddressItem key={address.id} address={address} />
          ))}
        </ScrollView>

        {/**/}

        <TouchableOpacity>
          <View
            className="absolute bottom-6 max-w-36 bg-brand items-center justify-center rounded-full mx-6 px-6 py-3
        flex-row-reverse gap-2"
          >
            <Text className="text-white font-ISans_Medium text-sm leading-7">
              آدرس جدید
            </Text>

            <LocationAdd width={20} height={20} color="#fff" />
          </View>
        </TouchableOpacity>

        {/*  */}
      </View>
    </SafeAreaView>
  );
};

export default AddressList;
