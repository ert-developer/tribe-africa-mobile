import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { theme } from '@/constants/theme';

interface CardProps {
  imageSource: { uri: string };
  title: string;
  cardStyle?: object;
  imageStyle?: object;
  titleStyle?: object;
}

const Card: React.FC<CardProps> = ({ imageSource, title, cardStyle, imageStyle, titleStyle }) => {
  return (
    <View style={[styles.card, cardStyle]}>
      <Image source={imageSource} style={[styles.cardImage, imageStyle]} />
      <View>
        <Text style={titleStyle}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  cardImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: theme.borderRadius.medium
  },
});

export default Card;
