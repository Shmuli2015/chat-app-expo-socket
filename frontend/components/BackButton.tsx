import { colors, spacingX } from "@/constants/theme";
import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import { CaretLeftIcon } from "phosphor-react-native";
import { verticalScale } from "@/utils/styling";

interface BackButtonProps {
  style?: ViewStyle;
  color?: string;
  iconSize?: number;
}

const BackButton = ({
  style,
  color = colors.white,
  iconSize = 26,
}: BackButtonProps) => {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.back()} style={[styles.button, style]}>
      <CaretLeftIcon size={verticalScale(iconSize)} color={color} weight="bold" />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    // padding: spacingX._10,
  },
});
