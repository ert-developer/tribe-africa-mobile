import Card from "@/components/atoms/card/card";
import CustomHeading from "@/components/atoms/heading/heading";
import CountryDropdown from "@/components/country-dropdown";
import FooterCard from "@/components/molecules/cards/footer-card";
import SegmentedControl from "@/components/segmented-control";
import { appStyles } from "@/constants/styles";
import { theme } from "@/constants/theme";
import React, { useState } from "react"
import { ImageBackground, ScrollView, StyleSheet, Text, View, Dimensions, FlatList, Modal, TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity } from "react-native";

import AntDesign from '@expo/vector-icons/AntDesign';
import CloseButton from "@/components/molecules/close-button";

const list = [
  {
    _id: '1',
    image: 'https://ik.imgkit.net/3vlqs5axxjf/TAW/ik-seo/uploadedImages/Content-Travel_Types/Adventure_Travel/Features/ATTA%20Trends_HERO/The-Latest-Trends-in-Adventure-Travel.jpg?tr=w-1008%2Ch-567%2Cfo-auto',
    title: 'Coming soon'
  },
  {
    _id: '2',
    image: 'https://static.wixstatic.com/media/ed9266_8b0c08779fda4bb5a2ba61dfdfff47e3~mv2.jpg/v1/fill/w_720,h_432,al_c,lg_1,q_80/ed9266_8b0c08779fda4bb5a2ba61dfdfff47e3~mv2.jpg',
    title: 'Coming soon'
  },
  {
    _id: '3',
    image: 'https://lesroches.edu/wp-content/uploads/2024/02/ATHeader.jpg',
    title: 'Coming soon'
  },
]

const thingsToLookOutFor = [
    {
        _id: '1',
        image: 'https://ik.imgkit.net/3vlqs5axxjf/TAW/ik-seo/uploadedImages/Content-Travel_Types/Adventure_Travel/Features/ATTA%20Trends_HERO/The-Latest-Trends-in-Adventure-Travel.jpg?tr=w-1008%2Ch-567%2Cfo-auto',
        description: 'The place'
      },
      {
        _id: '2',
        image: 'https://static.wixstatic.com/media/ed9266_8b0c08779fda4bb5a2ba61dfdfff47e3~mv2.jpg/v1/fill/w_720,h_432,al_c,lg_1,q_80/ed9266_8b0c08779fda4bb5a2ba61dfdfff47e3~mv2.jpg',
        description: 'Adventure begins'
      },
      {
        _id: '3',
        image: 'https://lesroches.edu/wp-content/uploads/2024/02/ATHeader.jpg',
        description: 'Let\'s go'
      },
      {
        _id: '4',
        image: 'https://res.cloudinary.com/enchanting/q_90,f_auto,c_lfill,g_auto,w_400,h_400/enchanting-web/2023/09/Cairo-Pyramids-fotor-20230810131150.jpg',
        description: 'Damnnnn'
      },
]

const HolidayScreen = ({props}) => {
  const {
    segments,
  } = props;
  const screenWidth = Dimensions.get('window').width;
  const [content, setContent] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView style={[appStyles.screen]}>
      <CountryDropdown action={(country) => {}}/>
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

        {/* Let the adventure begin */}
        <View style={[appStyles.section]}>
          <CustomHeading>
            <CustomHeading.Title>
              Let the *Adventure* Begin
            </CustomHeading.Title>
          </CustomHeading>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={list}
            contentContainerStyle={[{
              gap: theme.spacing.small
            }]}
            renderItem={(data) => (
              <Card
                data={data.item}
                cardStyle={{
                  width: screenWidth/2 - 2 * theme.spacing.small
                }}
                descriptionStyle={{
                    display: 'none'
                }}
                onPress={() => {}}
              />
            )}
          />
        </View>

        {/* Things to Look out for! */}
        <View>
          <CustomHeading>
            <View style={[appStyles.rowContainer]}>
              <CustomHeading.Title>
                Things to *Look out* for!
              </CustomHeading.Title>
              <CustomHeading.Button onPress={() => {}}>
                Advertise Your Event
              </CustomHeading.Button>
            </View>
          </CustomHeading>
          <View style={styles.eventsGrid}>
            {thingsToLookOutFor.slice(0, 4).map((item) => (
              <Card
                key={item._id}
                data={item}
                cardStyle={{
                  marginBottom: theme.spacing.small,
                  width: screenWidth/2 - 3*theme.spacing.small
                }}
                onPress={() => {
                    setModalVisible(true);
                    setContent(item.description);
                }}
              />
            ))}
          </View>
          <Modal
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}
          >
            <View style={[
                appStyles.screen
            ]}>
                <CloseButton onPress={() => setModalVisible(false)}/>
                <Text style={{
                    fontFamily: theme.fonts.poppins.regular
                }}>{content}</Text>
            </View>
          </Modal>
        </View>

        {/* When the Tribe goes out */}
        <View style={[appStyles.section]}>
        <CustomHeading>
            <CustomHeading.Title>
              When the *Tribe* goes out
            </CustomHeading.Title>
          </CustomHeading>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={list}
            contentContainerStyle={[{
              gap: theme.spacing.small
            }]}
            renderItem={(data) => (
              <Card
                data={data.item}
                cardStyle={{
                  width: screenWidth/2 - 2 * theme.spacing.small
                }}
                onPress={() => {}}
              />
            )}
          />
        </View>

        <FooterCard
          title="Send us a promotional video of your country"
          subTitle="Approximately 3-5 mins long"
          buttonPlaceholder="Fill the form"
          buttonAction={() => {}}
        />
        
      </SegmentedControl>
    </ScrollView>
  )
};

export default HolidayScreen;

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