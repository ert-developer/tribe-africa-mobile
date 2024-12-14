import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { theme } from '@/constants/theme';

export interface CardProps {
  data: {
    _id: string,
    imageSource: { uri: string };
    title: string;
    description?: string;
  },
  onPress: () => void;
  cardStyle?: object;
  imageStyle?: object;
  titleStyle?: object;
  descriptionStyle?: object;
}

const Card: React.FC<CardProps> = ({ data, onPress, cardStyle={}, imageStyle={}, titleStyle={}, descriptionStyle={} }) => {
  return (
    <TouchableOpacity style={[styles.card, cardStyle]} onPress={onPress}>
      <Image source={data.imageSource} style={[styles.cardImage, imageStyle]} />
      <View>
        <Text style={titleStyle}>{data.title}</Text>
        { data.description && 
          <Text style={descriptionStyle}>{data.description}</Text> 
        }
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
  },
  cardImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: theme.borderRadius.medium
  },
});

export default Card;
