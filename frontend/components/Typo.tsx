import { colors } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { Text, TextProps, TextStyle, } from "react-native";

interface TypoProps {
    size?: number;
    color?: string;
    fontWeight?: TextStyle["fontWeight"];
    children: React.ReactNode;
    style?: TextStyle;
    textProps?: TextProps;
}

const Typo = ({
    size = 16,
    color = colors.text,
    fontWeight = "400",
    children,
    style,
    textProps = {},
}: TypoProps) => {
    const textStyle: TextStyle = {
        fontSize: verticalScale(size),
        color,
        fontWeight,
        ...style,
    };
    return (
        <Text style={textStyle} {...textProps}>
            {children}
        </Text>
    );
};

export default Typo;