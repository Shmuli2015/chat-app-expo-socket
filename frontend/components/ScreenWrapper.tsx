import { colors } from "@/constants/theme";
import { Dimensions, ImageBackground, Platform, StatusBar, StyleSheet, View, ViewStyle } from "react-native";

interface ScreenWrapperProps {
    children: React.ReactNode;
    style?: ViewStyle;
    showPattern?: boolean;
    isModal?: boolean;
    bgOpacity?: number;
}

const { height } = Dimensions.get("window");

const ScreenWrapper = ({ children, style, showPattern = false, isModal = false, bgOpacity = 1 }: ScreenWrapperProps) => {
    const patternImage = require("@/assets/images/bgPattern.png");
    const paddingTop = Platform.OS === "ios" ? (isModal ? height * 0.02 : height * 0.06) : (isModal ? 45 : 40);
    const paddingBottom = isModal ? height * 0.02 : 0;

    return (
        <ImageBackground
            source={patternImage}
            style={[styles.container, isModal && styles.modalContainer]}
            imageStyle={{ opacity: showPattern ? bgOpacity : 0 }}
        >
            <View style={[
                {
                    paddingTop,
                    paddingBottom,
                    flex: 1
                },
                style
            ]}>
                <StatusBar barStyle={"light-content"} backgroundColor={"transparent"} />
                {children}
            </View>
        </ImageBackground>
    );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.neutral900,
    },
    modalContainer: {
        backgroundColor: colors.white,
    },
});