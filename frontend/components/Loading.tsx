import { colors } from "@/constants/theme";
import { ActivityIndicator, ActivityIndicatorProps, StyleSheet, View } from "react-native";

const Loading = ({size = "large", color = colors.primaryDark}: ActivityIndicatorProps) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={size} color={color} />
        </View>
    )
}

export default Loading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});