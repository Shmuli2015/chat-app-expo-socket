import ScreenWrapper from "@/components/ScreenWrapper";
import Button from "@/components/Button";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { StyleSheet, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useRouter } from "expo-router";

const Welcome = () => {
    const router = useRouter();

    return (
        <ScreenWrapper showPattern={true} bgOpacity={0.5}>
            <View style={styles.container}>
                <View style={styles.centerItems}>
                    <Typo
                        color={colors.white}
                        size={43}
                        fontWeight="900">
                        Bubbly
                    </Typo>
                </View>

                <Animated.Image
                    source={require("@/assets/images/welcome.png")}
                    entering={FadeInDown.duration(700).springify()}
                    resizeMode="contain"
                    style={styles.welcomeImage}
                />

                <View>
                    <Typo
                        color={colors.white}
                        size={33}
                        fontWeight="800">
                        Stay connected
                    </Typo>
                    <Typo
                        color={colors.white}
                        size={33}
                        fontWeight="800">
                        with your friends
                    </Typo>
                    <Typo
                        color={colors.white}
                        size={33}
                        fontWeight="800">
                        and family
                    </Typo>
                </View>

                <Button style={styles.button} onPress={() => router.push("/(auth)/register")}>
                    <Typo size={23} fontWeight="bold">
                        Get Started
                    </Typo>
                </Button>
            </View>
        </ScreenWrapper>
    );
};

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        paddingHorizontal: spacingX._20,
        paddingVertical: spacingY._10,
    },
    centerItems: {
        alignItems: "center",
    },
    welcomeImage: {
        height: verticalScale(300),
        aspectRatio: 1,
        alignSelf: "center",
    },
    button: {
       backgroundColor: colors.white,
    },
});