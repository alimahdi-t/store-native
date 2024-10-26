import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View } from "react-native";

const Profile = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text className="text-red-500">Profile</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
