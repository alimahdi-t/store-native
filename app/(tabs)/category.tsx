import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View } from "react-native";

const Category = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text className="text-red-500">Category</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Category;
