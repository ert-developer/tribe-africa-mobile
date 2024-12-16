import { FlatList, ScrollView, View, Dimensions, TouchableOpacity, Text } from "react-native";

import CustomHeading from "@/components/atoms/heading/heading";
import Card from "@/components/atoms/card/card";

import { theme } from "@/constants/theme";
import {appStyles} from '@/constants/styles';
import Carousel from "@/components/carousel";
import CustomButton from "@/components/atoms/button/button";

export default function HomeScreen({props}) {
    const screenWidth = Dimensions.get('window').width;
    const {
        hotelsData
    } = props;

  return (
    <ScrollView
      style={[appStyles.screen]}
    >
        {/* Charming Hotels */}
        <View style={appStyles.section}>
            <CustomHeading>
                <View style={[appStyles.rowContainer]}>
                    <CustomHeading.Title>
                        *Charming* Hotels
                    </CustomHeading.Title>
                    <CustomHeading.Button onPress={() => {}}>
                        Advertise with us
                    </CustomHeading.Button>
                </View>
            </CustomHeading>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={appStyles.contentContainer}
                data={hotelsData}
                renderItem={data => (
                    <Card 
                        data={data.item} 
                        cardStyle={{width: 300}} 
                        onPress={() => {}}
                    />
                )}
                keyExtractor={item => item._id}
            />
        </View>

        {/* Holiday Destinations */}
        <View style={[appStyles.section]}>
            <CustomHeading>
                <View style={[appStyles.rowContainer]}>
                    <CustomHeading.Title>
                        *Favourite* Holiday Destinations
                    </CustomHeading.Title>
                    <CustomHeading.Button onPress={() => {}}>
                        Advertise with us
                    </CustomHeading.Button>
                </View>
            </CustomHeading>
            <Carousel
                data={hotelsData}
                renderItem={data => (
                    <Card 
                        data={data.item} 
                        cardStyle={{
                            width: screenWidth - 2 * theme.spacing.small
                        }} 
                        imageStyle={{
                            aspectRatio: 16/9
                        }}
                        onPress={() => {}}
                    />
                )}
            />
        </View>

        {/* Working Remotely */}
        <View style={[appStyles.section]}>
            <CustomHeading>
                <CustomHeading.Title>
                    Great For *Working Remotely*
                </CustomHeading.Title>
                <CustomHeading.Description>
                    Best Digital Nomad Destinations in africa
                </CustomHeading.Description>
            </CustomHeading>
            <Carousel
                data={hotelsData}
                renderItem={data => (
                    <Card 
                        data={{...data.item, description: 'abcdefghijklmno pqrstuv wxyzabcdefghij klmnopq rstuvwxyzabc defghijklmnopqrstuvwxyz abcdefghijklmno pqrstuv wxyzabcdefghij klmnopq rstuvwxyzabc defghijklmnopqrstuvwxyz abcdefghijklmno pqrstuv wxyzabcdefghij klmnopq rstuvwxyzabc defghijklmnopqrstuvwxyz abcdefghijklmno pqrstuv wxyzabcdefghij klmnopq rstuvwxyzabc defghijklmnopqrstuvwxyz'}} 
                        cardStyle={{
                            width: screenWidth - 2 * theme.spacing.small,
                            aspectRatio: 3/2,
                            display: 'flex',
                            flexDirection: 'row',
                            borderRadius: theme.borderRadius.medium,
                            borderWidth: 1/2,
                            borderColor: theme.colors.primary,
                            overflow: 'hidden',
                        }} 
                        imageContainerStyle={{
                            width: '40%',
                            height: '100%',
                        }}
                        imageStyle={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 0,
                            objectFit: 'cover',
                            aspectRatio: undefined
                        }}
                        textContainerStyle={{
                            padding: theme.spacing.medium,
                            overflow: 'hidden',
                            marginVertical: 'auto',
                            width: '60%'
                        }}
                        titleStyle={{
                            fontWeight: 'bold',
                        }}
                        descriptionStyle={{
                          flexWrap: 'wrap', 
                          overflow: 'hidden',
                        }}
                        onPress={() => {}}
                    />
                )}
            />
        </View>

        {/* Business Friendly */}
        <View style={[appStyles.section]}>
            <CustomHeading>
                <CustomHeading.Title>
                    *Business* Friendly
                </CustomHeading.Title>
                <CustomHeading.Description>
                    Great Work Life Balance
                </CustomHeading.Description>
            </CustomHeading>
            <Carousel
                data={hotelsData}
                renderItem={data => (
                    <Card 
                        data={{...data.item, description: 'abcdefghijklmno pqrstuv wxyzabcdefghij klmnopq rstuvwxyzabc defghijklmnopqrstuvwxyz abcdefghijklmno pqrstuv wxyzabcdefghij klmnopq rstuvwxyzabc defghijklmnopqrstuvwxyz abcdefghijklmno pqrstuv wxyzabcdefghij klmnopq rstuvwxyzabc defghijklmnopqrstuvwxyz abcdefghijklmno pqrstuv wxyzabcdefghij klmnopq rstuvwxyzabc defghijklmnopqrstuvwxyz'}} 
                        cardStyle={{
                            width: screenWidth - 2 * theme.spacing.small,
                            aspectRatio: 3/2,
                            display: 'flex',
                            flexDirection: 'row',
                            borderRadius: theme.borderRadius.medium,
                            borderWidth: 1/2,
                            borderColor: theme.colors.primary,
                            overflow: 'hidden',
                        }} 
                        imageContainerStyle={{
                            width: '40%',
                            height: '100%',
                        }}
                        imageStyle={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 0,
                            objectFit: 'cover',
                            aspectRatio: undefined
                        }}
                        textContainerStyle={{
                            padding: theme.spacing.medium,
                            overflow: 'hidden',
                            marginVertical: 'auto',
                            width: '60%'
                        }}
                        titleStyle={{
                            fontWeight: 'bold',
                        }}
                        descriptionStyle={{
                          flexWrap: 'wrap', 
                          overflow: 'hidden',
                        }}
                        onPress={() => {}}
                    />
                )}
            />
        </View>

        {/* Premier Services */}
        <View style={appStyles.section}>
            <CustomHeading>
                <View style={[appStyles.rowContainer]}>
                    <CustomHeading.Title>
                        *Premier* Services
                    </CustomHeading.Title>
                    <CustomHeading.Button onPress={() => {}}>
                        Advertise with us
                    </CustomHeading.Button>
                </View>
            </CustomHeading>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={appStyles.contentContainer}
                data={hotelsData.map(item => (
                    {
                      ...item,
                      description: 'Algeria'
                    }
                  ))}
                renderItem={data => (
                    <Card 
                        data={data.item} 
                        cardStyle={{width: 300}} 
                        imageContainerStyle={{
                            borderWidth: 1,
                            borderColor: 'gray',
                            borderRadius: theme.borderRadius.medium,
                            padding: theme.spacing.small,
                            aspectRatio: 4/3
                        }}
                        imageStyle={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 0,
                            aspectRatio: undefined
                        }}
                        titleStyle={{fontFamily: theme.fonts.poppins.bold}}
                        descriptionStyle={{fontSize: theme.fonts.fontSize.small}}
                        onPress={() => {}}
                    />
                )}
                keyExtractor={item => item._id}
            />
            <View
                style={{
                    backgroundColor: theme.colors.dark,
                    borderWidth: 1/2,
                    borderColor: theme.colors.primary,
                    borderRadius: theme.borderRadius.small,
                    padding: theme.spacing.extraLarge,
                    margin: theme.spacing.small,
                    marginTop: theme.spacing.medium,
                    gap: theme.spacing.medium
                }}
            >
                <Text
                    style={{
                        color: theme.colors.light,
                        fontSize: theme.fonts.fontSize.medium,
                        fontFamily: theme.fonts.poppins.semiBold,
                    }}
                >
                    Want to List your business on Tribe Africa pages?
                </Text>
                <Text
                    style={{
                        color: theme.colors.light,
                        fontSize: theme.fonts.fontSize.small,
                        textAlign: 'center'
                    }}
                >
                    List your business and get massive traffic !
                </Text>
                <CustomButton
                    onPress={() => {}}
                    style={{
                        marginHorizontal: 'auto',
                        marginTop: theme.spacing.medium,
                    }}
                >
                    List your business
                </CustomButton>
            </View>
        </View>
    </ScrollView>
  );
}
