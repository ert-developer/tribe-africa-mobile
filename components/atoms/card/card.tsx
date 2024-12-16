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
  imageContainerStyle?: object;
  imageStyle?: object;
  textContainerStyle?: object;
  titleStyle?: object;
  descriptionStyle?: object;
}

const Card: React.FC<CardProps> = ({ data, onPress, cardStyle={}, imageContainerStyle={}, imageStyle={},textContainerStyle={}, titleStyle={}, descriptionStyle={} }) => {
  return (
    <TouchableOpacity style={[styles.card, cardStyle]} onPress={onPress}>
      <View style={imageContainerStyle}>
        <Image source={data.imageSource} style={[styles.cardImage, imageStyle]} />
      </View>
      <View
        style={[textContainerStyle, styles.textContainer]}
      >
        <Text style={titleStyle}>{data.title}</Text>
        { data.description && 
          <Text 
            style={[styles.description, descriptionStyle]} 
            numberOfLines={6} 
            ellipsizeMode='tail'
          >
            {data.description}
          </Text> 
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
  textContainer: {
    flexGrow: 1,
  },
  title: {
  },
  description: {
    flexShrink: 1
  }
});

export default Card;
