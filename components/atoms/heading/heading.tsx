import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import {fonts} from '@/constants/fonts';
import { theme } from '@/constants/theme';

interface CustomHeadingProps {
  children: string;
  style?: object;
}

const CustomHeading: React.FC<CustomHeadingProps> = ({ children, style }) => {
  const parts = children.split('*');

  return (
    <View>
      <Text style={[styles.heading, style]}>
        {parts.map((part, index) => (
          index % 2 === 1 ? (
            <Text key={index} style={styles.highlightedText}>
              {part}
            </Text>
          ) : (
            <Text key={index}>{part}</Text>
          )
        ))}
      </Text>
    </View>
  );
};

export default CustomHeading;

const styles = StyleSheet.create({
    heading: {
        fontSize: fonts.fontSize.large,
    },
    highlightedText: {
        fontFamily: fonts.rufina.bold,
        color: theme.colors.primary
    }
})