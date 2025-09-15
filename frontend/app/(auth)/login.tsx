import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors } from "@/constants/theme";

const Login = () => {
    return (
        <ScreenWrapper showPattern={true}>
            <Typo color={colors.white}>Login</Typo>
        </ScreenWrapper>
    )
}

export default Login;