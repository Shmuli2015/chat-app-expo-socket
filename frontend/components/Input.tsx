import {
  TextStyle,
  ViewStyle,
  TextInputProps,
  View,
  StyleSheet,
  Text,
} from "react-native";
import { TextInput } from "react-native";
import { colors, radius, spacingX } from "@/constants/theme";
import { useState } from "react";
import { verticalScale } from "@/utils/styling";

interface InputProps extends TextInputProps {
  icon?: React.ReactNode;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  inputRef?: React.RefObject<TextInput>;
}

const Input = ({
  icon,
  containerStyle,
  inputStyle,
  inputRef,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View
      style={[
        styles.container,
        containerStyle,
        isFocused && styles.primaryBorder,
      ]}
    >
      {icon && icon}
      <TextInput
        style={[styles.input, inputStyle]}
        {...props}
        placeholderTextColor={colors.neutral400}
        ref={inputRef}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: verticalScale(56),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.neutral200,
    borderRadius: radius.full,
    borderCurve: "continuous",
    paddingHorizontal: spacingX._15,
    backgroundColor: colors.neutral100,
    gap: spacingX._10,
  },
  primaryBorder: {
    borderColor: colors.primary,
  },
  input: {
    flex: 1,
    color: colors.text,
    fontSize: verticalScale(16),
  },
});
