import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { fonts } from '@/constants/fonts';
import { theme } from '@/constants/theme';

import CustomButton from '@/components/atoms/button/button';

interface CustomHeadingProps {
  children: React.ReactNode;
  style?: object;
}

interface TextProps {
  children: string,
  style?: object
}

interface CustomButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  style?: object;
}

const CustomHeading: React.FC<CustomHeadingProps> & {
  Title: React.FC<{ children: string }>;
  Description: React.FC<{ children: string }>;
  Button: React.FC<CustomButtonProps>;
} = ({ children, style }) => {
  return (
    <View style={[style]}>
      {children}
    </View>
  );
};

// Title component - Handles the highlighting logic for the title text
CustomHeading.Title = ({ children, style }: TextProps) => {
  const parts = children.split('*');

  return (
    <Text style={[styles.title, style]}>
      {parts.map((part, index) => (
        <Text key={index} style={index % 2 === 1 ? styles.highlightedText : undefined}>
          {part}
        </Text>
      ))}
    </Text>
  );
};

// Description component - Simple component for rendering description text
CustomHeading.Description = ({ children, style }: TextProps) => (
  <Text style={[styles.description, style]}>{children}</Text>
);

CustomHeading.Button = ({ onPress, children }: { onPress: () => void, children: React.ReactNode }) => {
  return (
    <CustomButton onPress={onPress} style={styles.button}>
      <Text>{children}</Text>
    </CustomButton>
  );
};

export default CustomHeading;

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.poppins.regular,
    fontSize: fonts.fontSize.large,
    flex: 1,
    alignSelf: 'flex-start',
  },
  highlightedText: {
    fontFamily: fonts.rufina.regular,
    color: theme.colors.primary,
  },
  description: {
    fontFamily: fonts.poppins.regular,
    fontSize: fonts.fontSize.small,
    color: theme.colors.secondary,
  },
  button: {
    alignSelf: 'flex-start',
    marginVertical: 'auto'
  },
});
