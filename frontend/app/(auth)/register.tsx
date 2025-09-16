import ScreenWrapper from "@/components/ScreenWrapper";
import BackButton from "@/components/BackButton";
import { colors, radius, spacingX, spacingY } from "@/constants/theme";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  Alert,
} from "react-native";
import Typo from "@/components/Typo";
import Input from "@/components/Input";
import { useRef, useState } from "react";
import * as Icons from "phosphor-react-native";
import { verticalScale } from "@/utils/styling";
import { useRouter } from "expo-router";
import Button from "@/components/Button";

const Register = () => {
  const router = useRouter();
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (nameRef.current === "" || emailRef.current === "" || passwordRef.current === "") {
        Alert.alert("Sign up failed", "Please fill in all fields");
        return;
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.fullSize}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScreenWrapper showPattern={true}>
        <View style={styles.container}>
          <View style={styles.header}>
            <BackButton iconSize={28} />
            <Typo color={colors.white} size={27}>
              Need some help?
            </Typo>
          </View>
          <View style={styles.content}>
            <ScrollView
              contentContainerStyle={styles.form}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.formHeader}>
                <Typo fontWeight="600" size={28}>
                  Getting Started
                </Typo>
                <Typo color={colors.neutral600}>
                  Create an account to continue
                </Typo>
              </View>

              <Input
                placeholder="Enter your name"
                onChangeText={(text) => (nameRef.current = text)}
                value={nameRef.current}
                icon={
                  <Icons.UserIcon
                    size={verticalScale(26)}
                    color={colors.neutral600}
                  />
                }
              />
              <Input
                placeholder="Enter your email"
                onChangeText={(text) => (emailRef.current = text)}
                value={emailRef.current}
                icon={
                  <Icons.AtIcon size={verticalScale(26)} color={colors.neutral600} />
                }
              />
              <Input
                placeholder="Enter your password"
                onChangeText={(text) => (passwordRef.current = text)}
                value={passwordRef.current}
                secureTextEntry={true}
                icon={<Icons.LockIcon size={verticalScale(26)} color={colors.neutral600} />}
              />
              <View style={styles.buttonContainer}>
                <Button onPress={handleSubmit} loading={isLoading}>
                  <Typo size={20} fontWeight="bold" color={colors.black}>
                    Sign Up
                  </Typo>
                </Button>

                <View style={styles.footer}>
                  <Typo>
                    Already have an account?
                  </Typo>
                  <Pressable onPress={() => router.push("/(auth)/login")}>
                    <Typo color={colors.primary} fontWeight="bold">
                      Login
                    </Typo>
                  </Pressable>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScreenWrapper>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  fullSize: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    paddingHorizontal: spacingX._20,
    paddingTop: spacingY._15,
    paddingBottom: spacingY._25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: radius._50,
    borderTopRightRadius: radius._50,
    borderCurve: "continuous",
    paddingHorizontal: spacingX._20,
    paddingVertical: spacingY._20,
  },
  form: {
    gap: spacingY._15,
    marginTop: spacingY._20,
  },
  formHeader: {
    gap: spacingY._10,
    marginBottom: spacingY._15,
  },
  buttonContainer: {
    marginTop: spacingY._25,
    gap: spacingY._15,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
