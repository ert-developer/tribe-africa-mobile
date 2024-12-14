import { useRef, useState } from "react";
import { View, FlatList, TouchableOpacity, ListRenderItemInfo, ViewToken } from "react-native";

import { theme } from "@/constants/theme";

interface CarouselProps<T> {
  data: T[];
  renderItem: (info: ListRenderItemInfo<T>) => JSX.Element;
}

const Carousel = <T extends { _id: string }>({ data, renderItem }: CarouselProps<T>) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const flatListRef = useRef<FlatList<T>>(null);

  const onViewableItemsChanged = ({ viewableItems }: { viewableItems: ViewToken<T>[] }) => {
    if (viewableItems.length > 0) {
      const index = viewableItems[0].index;
      if (index !== undefined && index !== null) {
        setCurrentIndex(index);
      }
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const handleIndicatorPress = (index: number) => {
    flatListRef.current?.scrollToIndex({ animated: true, index });
    setCurrentIndex(index);
  };

  return (
    <View>
      <FlatList
        ref={flatListRef}
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <View style={styles.indicatorContainer}>
        {data.map((item, index) => (
          <TouchableOpacity
            key={item._id}
            style={[
                styles.indicator,
              index === currentIndex && styles.activeIndicator,
            ]}
            onPress={() => handleIndicatorPress(index)}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;

const styles={
    indicatorContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: theme.spacing.small,
    },
    indicator: {
      width: theme.fonts.fontSize.extraSmall,
      height: theme.fonts.fontSize.extraSmall,
      borderRadius: theme.borderRadius.full,
      backgroundColor: 'gray',
      marginHorizontal: theme.spacing.small,
    },
    activeIndicator: {
      backgroundColor: theme.colors.primary,
    },
}
