import CustomButton from "@/components/atoms/button/button";
import Card from "@/components/atoms/card/card";
import CustomHeading from "@/components/atoms/heading/heading";
import SegmentedControl from "@/components/segmented-control";
import { appStyles } from "@/constants/styles";
import { theme } from "@/constants/theme";
import React from "react"
import { ImageBackground, Image, ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";

const eventsList = [
  {
    _id: '1',
    image: 'https://a.storyblok.com/f/165154/1280x720/473a62377a/01_top-print-trade-shows.jpg/m/',
    title: 'trade shows'
  },
  {
    _id: '2',
    image: 'https://cdn.prod.website-files.com/61f29c609f84a86e418fbcfb/642539192fee17d73ff34f84_how%20to%20increase%20conference%20participation.webp',
    title: 'Conferences and seminars'
  },
  {
    _id: '3',
    image: 'https://hubspot.com/hs-fs/hubfs/business-networking-fi%20%281%29.jpg?width=595&height=400&name=business-networking-fi%20%281%29.jpg',
    title: 'Networking'
  },
]

const BusinessScreen = ({props}) => {
  const {
    segments,
  } = props;
  const screenWidth = Dimensions.get('window').width;
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

        {/* Key Investment Sectors */}
        <View
          style={[appStyles.section, {
            padding: theme.spacing.small,
            paddingVertical: theme.spacing.medium,
            borderWidth: 1,
            borderColor: theme.colors.primary,
            borderRadius: theme.borderRadius.medium
          }]}
        >
          <CustomHeading>
            <CustomHeading.Title>
              Key *Investment Sectors*
            </CustomHeading.Title>
          </CustomHeading>
          <Card
            data={{
              _id: '1',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Wind_turbines_in_southern_California_2016.jpg/330px-Wind_turbines_in_southern_California_2016.jpg',
              description: 'Including endless opportunities for small and medium enterprises (SMEs) across all sectors'
            }}
            imageStyle={{
              aspectRatio: 3/2
            }}
            descriptionStyle={{
              fontFamily: theme.fonts.poppins.italic
            }}
            onPress={() => {}}
          />
        </View>

        {/* Investment agency */}
        <View
          style={[ appStyles.section, {
            padding: theme.spacing.small,
            paddingVertical: theme.spacing.medium,
            borderRadius: theme.borderRadius.medium,
            backgroundColor: theme.colors.secondary,
          }]}
        >
          <CustomHeading>
            <CustomHeading.Title
              style={{
                color: theme.colors.light
              }}
            >
              For more information about *Investments* in algeria
            </CustomHeading.Title>
          </CustomHeading>
          <View style={[appStyles.section, {
            flexDirection: 'row'
          }]}>
            <Image 
              source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMrMalx8iqdL51yoEjyNMIwY_HtOApGQdG4A&s'}}
              style={{
                width: '25%',
                height: undefined,
                aspectRatio: 1
              }}
            />
            <View style={{
              width: '75%',
              paddingHorizontal: theme.spacing.small
            }}>
              <Text
                style={{
                  color: theme.colors.light,
                  fontSize: theme.fonts.fontSize.medium,
                  fontFamily: theme.fonts.poppins.semiBold
                }}
              >The Algerian Investment Promotion Agency</Text>
              <View style={{
                flexDirection: 'row'
              }}>
                <Text style={{
                  flex: 1,
                  fontSize: theme.fonts.fontSize.small,
                  color: theme.colors.light,
                  marginVertical: 'auto',
                }}>
                  For more information: 
                </Text>
                <CustomButton onPress={() => {}}>
                  Contact
                </CustomButton>
              </View>
            </View>
          </View>
          <View style={[appStyles.section, {
            borderWidth: 1,
            borderColor: theme.colors.light,
            borderRadius: theme.borderRadius.medium,
            padding: theme.spacing.small
          }]}>
            <View style={{
              flexDirection: 'row'
            }}>
              <Text style={{
                color: theme.colors.light,
                fontFamily: theme.fonts.poppins.semiBold,
                flex: 1
              }}>Great Consultancy</Text>
              <Text style={{
                color: theme.colors.primary,
                textDecorationLine: 'underline',
                fontSize: theme.fonts.fontSize.small
              }}>More Reviews</Text>
            </View>
            <Text style={{
              color: theme.colors.light
            }}>My comment</Text>
          </View>
        </View>

        {/* Natural Resources */}
        <View
          style={[appStyles.section, {
            padding: theme.spacing.small,
            paddingVertical: theme.spacing.medium,
            borderWidth: 1,
            borderColor: theme.colors.primary,
            borderRadius: theme.borderRadius.medium
          }]}
        >
          <CustomHeading>
            <CustomHeading.Title>
              Natural *Resources*
            </CustomHeading.Title>
          </CustomHeading>
          <Card
            data={{
              _id: '1',
              image: 'https://tmafrica.co.ug/sites/default/files/2024-09/Natural%20Resources.jpg',
              description: 'Committing to local beneficiation & enhancing the value addition of the continent\'s abundant resources'
            }}
            imageStyle={{
              aspectRatio: 3/2
            }}
            descriptionStyle={{
              fontFamily: theme.fonts.poppins.italic
            }}
            onPress={() => {}}
          />
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
          <View style={styles.eventsGrid}>
            {eventsList.map((item) => (
              <Card
                key={item._id}
                data={item}
                cardStyle={{
                  marginBottom: theme.spacing.small,
                  width: screenWidth/2 - 2*theme.spacing.small
                }}
                onPress={() => {}}
              />
            ))}
          </View>
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
  },
  eventsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.small,
    justifyContent: 'space-between',
  },
})