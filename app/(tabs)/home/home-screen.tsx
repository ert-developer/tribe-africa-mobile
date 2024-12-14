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
                data={hotelsData}
                renderItem={data => (
                    <Card 
                        data={data.item} 
                        cardStyle={{padding: theme.spacing.small, width: 300}} 
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
                            padding: theme.spacing.small,
                            width: screenWidth - theme.spacing.small
                        }} 
                        imageStyle={{
                            aspectRatio: 16/9
                        }}
                        onPress={() => {}}
                    />
                )}
            />
        </View>
    </ScrollView>
  );
}
