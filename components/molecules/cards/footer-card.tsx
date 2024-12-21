import CustomButton from "@/components/atoms/button/button";
import { theme } from "@/constants/theme";
import React from "react"
import { Text, View } from "react-native";

interface CardProps {
    title: string,
    subTitle: string;
    buttonPlaceholder: string;
    buttonAction: () => void;
}

const FooterCard = ({
    title,
    subTitle,
    buttonPlaceholder,
    buttonAction
}: CardProps) => {
  return (
    <View
        style={{
            backgroundColor: theme.colors.dark,
            borderWidth: 1/2,
            borderColor: theme.colors.primary,
            borderRadius: theme.borderRadius.small,
            padding: theme.spacing.extraLarge,
            margin: theme.spacing.small,
            marginTop: theme.spacing.medium,
            gap: theme.spacing.medium
        }}
    >
        <Text
            style={{
                color: theme.colors.light,
                fontSize: theme.fonts.fontSize.medium,
                fontFamily: theme.fonts.poppins.semiBold,
                textAlign: 'center'
            }}
        >
            {title}
        </Text>
        <Text
            style={{
                color: theme.colors.light,
                fontSize: theme.fonts.fontSize.small,
                fontFamily: theme.fonts.poppins.regular,
                textAlign: 'center'
            }}
        >
            {subTitle}
        </Text>
        <CustomButton
            onPress={buttonAction}
            style={{
                marginHorizontal: 'auto',
                marginTop: theme.spacing.medium,
            }}
        >
            {buttonPlaceholder}
        </CustomButton>
    </View>
  )
};

export default FooterCard;
