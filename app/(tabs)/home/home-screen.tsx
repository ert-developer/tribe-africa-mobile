import { FlatList, View } from "react-native";

import CustomHeading from "@/components/atoms/heading/heading";
import Card from "@/components/atoms/card/card";

import { theme } from "@/constants/theme";
import {appStyles} from '@/constants/styles';

export default function HomeScreen({props}) {
    const {
        hotelsData
    } = props;
  return (
    <View
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
                <CustomHeading.Description>
                    List of hotels
                </CustomHeading.Description>
            </CustomHeading>
            <FlatList
                horizontal
                data={hotelsData}
                renderItem={data => <Card data={data.item} cardStyle={{padding: theme.spacing.small, width: 300}} onPress={() => console.log('clicked' + data.item._id)}/>}
                keyExtractor={item => item._id}
            />
        </View>
    </View>
  );
}
