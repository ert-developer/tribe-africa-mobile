import React from 'react';
import { theme } from "@/constants/theme";
import { Pressable, StyleSheet, Text, ViewStyle, TextStyle } from "react-native";

interface CustomButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  style?: object;
  textStyle?: object;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, onPress, style, textStyle }) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.buttonText, textStyle]}>{children}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    padding: theme.spacing.extraSmall,
    paddingHorizontal: theme.spacing.medium,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.small,
    alignSelf: 'flex-start'
  },
  buttonText: {
    color: theme.colors.light,
    fontFamily: theme.fonts.poppins.semiBold,
    fontSize: theme.fonts.fontSize.small
  },
});
