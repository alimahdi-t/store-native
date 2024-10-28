import { Text, TouchableOpacity, View } from "react-native";
import icons from "@/constants/icons";
import { Colors } from "@/constants/Colors";

// TODO: Set the href of NavigationLink

const NavigationLink = ({
  label,
  href,
  ...props
}: {
  label: string;
  href: string;
}) => {
  const { ArrowLeft } = icons;
  return (
    <TouchableOpacity {...props}>
      <View className="flex-row-reverse items-center justify-center gap-1">
        <Text className="text-xs font-ISans_Regular leading-5 text-secondary">
          {label}
        </Text>
        <ArrowLeft
          width={16}
          height={16}
          stroke={Colors.light.secondary}
          strokeWidth={"2"}
        />
      </View>
    </TouchableOpacity>
  );
};

export default NavigationLink;
