import { FlatList, ScrollView, View, Dimensions, TouchableOpacity } from "react-native";

import CustomHeading from "@/components/atoms/heading/heading";
import Card from "@/components/atoms/card/card";

import { theme } from "@/constants/theme";
import {appStyles} from '@/constants/styles';
import Carousel from "@/components/carousel";

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
                        onPress={() => console.log('clicked' + data.item._id)}
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
                        imageStyle={{
                            width: '40%',
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
    </ScrollView>
  );
}
