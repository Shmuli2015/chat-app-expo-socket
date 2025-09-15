import { TouchableOpacity, ViewStyle, StyleSheet, View, ActivityIndicator } from "react-native";
import { colors, radius } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import Loading from "./Loading";

interface ButtonProps {
    style?: ViewStyle;
    onPress?: () => void;
    loading?: boolean;
    children: React.ReactNode;
}

const Button = ({ style, onPress, loading = false, children }: ButtonProps) => {
    if (loading) {
        return (
            <View style={[styles.button, style, {backgroundColor: "transparent"}]}>
                <Loading />
            </View>
        )
    }
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress} disabled={loading}>
            {children}
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: radius.full,
        borderCurve: "continuous",
        height: verticalScale(55),
        justifyContent: "center",
        alignItems: "center",
    },
});