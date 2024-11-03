import { SafeAreaView } from "react-native-safe-area-context";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { convertToPersianNumbers } from "@/utils";
import { Colors } from "@/constants/Colors";
import { EditIcon } from "@/constants/myIcons";
import icons from "@/constants/icons";
import NavigationLink from "@/components/shared/NavigationLink";
import { router } from "expo-router";

const Profile = () => {
  const {
    StatusDelivered,
    StatusCanceled,
    StatusReturned,
    StatusProcessing,
    ArrowLeft,
    Favorite,
    Direction,
    GiftCard,
    User,
    Comment,
    Settings,
    CustomerSupport,
    Notification,
    ProfileWallet,
    ClubPoint,
  } = icons;

  const orderStatus = [
    { id: "1", component: StatusProcessing, label: "جاری" },
    { id: "2", component: StatusDelivered, label: "تحویل شده" },
    { id: "3", component: StatusCanceled, label: "لغو شده" },
    { id: "4", component: StatusReturned, label: "مرجوع شده" },
  ];

  const userOptionList = [
    { label: "لیست‌های من", href: "", icon: Favorite },
    { label: "دیدگاه ها", href: "", icon: Comment },
    { label: "آدرس‌ها", href: "", icon: Direction },
    { label: "کارت‌های هدیه", href: "", icon: GiftCard },
    { label: "اطلاعات حساب کاربری", href: "", icon: User },
  ];

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}

        <View className="bg-white">
          <View className="flex-row-reverse px-4 mt-4 justify-between items-center">
            <TouchableOpacity
              //@ts-ignore
              onPress={() => router.push({ pathname: "/settings" })}
            >
              <Settings width={24} height={24} color={Colors.light.icons} />
            </TouchableOpacity>
            <View className="flex-row-reverse gap-4">
              <TouchableOpacity>
                <CustomerSupport
                  width={24}
                  height={24}
                  color={Colors.light.icons}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Notification
                  width={24}
                  height={24}
                  color={Colors.light.icons}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View className="mt-8">
            <TouchableOpacity>
              <View style={styles.userDetailInfo}>
                <View>
                  <Text className="font-ISans_Medium">سید علی مهدی</Text>
                  <Text style={styles.number}>
                    {convertToPersianNumbers("09030579074")}
                  </Text>
                </View>
                <EditIcon
                  styles={styles.editInfoStyle}
                  color={Colors.light.secondary}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View className="flex-row-reverse items-center justify-between px-4 mt-6 mb-8">
            <View className="flex-row-reverse items-center gap-2">
              <ClubPoint width={60} height={60} />
              <View className="justify-center gap-1">
                <Text className="text-xs font-ISans_Regular text-neutral-500">
                  <Text className="text-neutral-900">
                    {convertToPersianNumbers(1350)}
                  </Text>{" "}
                  امتیاز
                </Text>
                <NavigationLink label={"لیست ماموریت ها"} href={""} />
              </View>
            </View>

            <View className="flex-row-reverse items-center gap-2">
              <ProfileWallet width={60} height={60} />
              <View className="justify-center gap-1">
                <Text className="text-xs font-ISans_Regular text-neutral-500">
                  <Text className="text-neutral-900">
                    {convertToPersianNumbers("37,500,000")}
                  </Text>{" "}
                  تومان
                </Text>
                <NavigationLink label={"مدیریت کیف پول"} href={""} />
              </View>
            </View>
          </View>
        </View>

        {/* Body*/}

        <View className="bg-white py-8 mt-2 items-center">
          <View className="w-full flex-row-reverse justify-between items-center px-4">
            <Text className="font-ISans_Medium">سفارش‌های من</Text>
            <NavigationLink label={"مشاهده همه"} href={""} />
          </View>

          <FlatList
            horizontal
            data={orderStatus}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
            renderItem={({ item }) => (
              <View className="items-center gap-2">
                <item.component width={72} height={72} />
                <Text className="font-ISans_Regular text-xs text-neutral-500">
                  {item.label}
                </Text>
              </View>
            )}
          />

          {/* Banner*/}

          {/*<View*/}
          {/*  style={{ paddingHorizontal: 16, width: "100%", paddingTop: 48 }}*/}
          {/*>*/}
          {/*  <View*/}
          {/*    style={{*/}
          {/*      backgroundColor: "#ee00ee",*/}
          {/*      width: "100%",*/}
          {/*      paddingHorizontal: 16,*/}
          {/*      height: 168,*/}
          {/*      borderRadius: 24,*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    <Text>Hey</Text>*/}
          {/*  </View>*/}
          {/*</View>*/}

          <View className="mt-8 w-full">
            {userOptionList.map((item, index) => (
              <TouchableOpacity key={index}>
                <View className="w-full px-4 flex-row-reverse justify-between  items-center  gap-3">
                  <item.icon
                    width={20}
                    height={20}
                    color={Colors.light.icons}
                  />
                  <View
                    className={`flex-1 flex-row-reverse items-center justify-between py-6 ${
                      index < userOptionList.length - 1 ? "border-b" : ""
                    }  border-gray-100 gap-3`}
                  >
                    <Text
                      className={`font-ISans_Regular leading-7 text-sm ${
                        index === userOptionList.length - 1
                      }`}
                    >
                      {item.label}
                    </Text>
                    <ArrowLeft
                      width={16}
                      height={16}
                      stroke={Colors.light.icons}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "row-reverse",
    gap: 32,
    paddingHorizontal: 16,
    marginTop: 16,
    justifyContent: "space-between",
  },

  userDetailInfo: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  number: {
    fontFamily: "ISans_Regular",
    textAlign: "right",
    fontSize: 12,
    color: Colors.light.neutral,
  },

  editInfoStyle: {
    width: 24,
    height: 24,
  },

  orderMetricSection: {
    marginTop: 8,
    paddingTop: 24,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
});
