import Card from "@/components/atoms/card/card";
import CustomHeading from "@/components/atoms/heading/heading";
import SegmentedControl from "@/components/segmented-control";
import { appStyles } from "@/constants/styles";
import { theme } from "@/constants/theme";
import React from "react"
import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";

const eventsList = [
  {
    _id: '1',
    image: 'https://a.storyblok.com/f/165154/1280x720/473a62377a/01_top-print-trade-shows.jpg/m/',
    title: 'trade shows'
  },
  {
    _id: '1',
    image: 'https://cdn.prod.website-files.com/61f29c609f84a86e418fbcfb/642539192fee17d73ff34f84_how%20to%20increase%20conference%20participation.webp',
    title: 'Conferences and seminars'
  },
  {
    _id: '1',
    image: 'https://hubspot.com/hs-fs/hubfs/business-networking-fi%20%281%29.jpg?width=595&height=400&name=business-networking-fi%20%281%29.jpg',
    title: 'Networking'
  },
]

const BusinessScreen = ({props}) => {
  const {
    segments,
  } = props;
  return (
    <ScrollView style={[appStyles.screen]}>
      <SegmentedControl segments={segments}>
        {/* Landing content */}
        <View
          style={[appStyles.section, {
            borderRadius: theme.borderRadius.small,
            overflow: 'hidden'
          }]}
        >
          <ImageBackground
            source={{uri: 'https://travelguide.net/media/c/dz.jpeg'}}
            style={styles.imageBackground}
          >
          <View
            style={{
              marginTop: 'auto',
              padding: theme.spacing.small,
              flex: 1,
              backgroundColor: 'rgba(52, 52, 52, 0.4)',
            }}
          >
            <Text style={[styles.landingText, {marginTop: 'auto'}]}>
              Weather:28 °/cloudy
            </Text>
            <Text style={styles.landingText}>
              Internet speed: 1gbps
            </Text>
            <Text style={styles.landingText}>
              Time:12pm
            </Text>
          </View>
          </ImageBackground>
        </View>

        {/* Upcoming Events */}
        <View>
          <CustomHeading>
            <View style={[appStyles.rowContainer]}>
              <CustomHeading.Title>
                Upcoming *Events*
              </CustomHeading.Title>
              <CustomHeading.Button onPress={() => {}}>
                Advertise Your Event
              </CustomHeading.Button>
            </View>
          </CustomHeading>
          <FlatList
            data={eventsList}
            numColumns={2}
            contentContainerStyle={{
              gap: theme.spacing.small
            }}
            columnWrapperStyle={{
              gap: theme.spacing.small
            }}
            renderItem={(data) => (
              <Card
                data={data.item}
                cardStyle={{
                  flex: 1/2
                }}
                onPress={() => {}}
              />
            )}
          />
        </View>
      </SegmentedControl>
    </ScrollView>
  )
};

export default BusinessScreen;

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: undefined,
    aspectRatio: 2,
  },
  landingText: {
    fontFamily: theme.fonts.poppins.semiBold,
    fontSize: theme.fonts.fontSize.small,
    color: theme.colors.light,
  }
})