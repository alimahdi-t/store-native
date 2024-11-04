import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "@/constants/Colors";

const CustomButton = ({ label, ...props }: { label: string }) => {
  return (
    <TouchableOpacity>
      <View style={styles.btnContainer} {...props}>
        <Text style={styles.btnText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: Colors.light.brand,
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 16,
  },
  btnText: {
    fontFamily: "ISans_Regular",
    fontSize: 12,
    color: "white",
  },
});
