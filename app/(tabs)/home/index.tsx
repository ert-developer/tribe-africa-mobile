import { ScrollView, Text } from "react-native";

import CustomHeading from "@/components/atoms/heading/heading";

import {styles} from '@/constants/styles';

export default function Index() {
  return (
    <ScrollView
      style={[styles.screen]}
    >
      <CustomHeading>
        *Charming* Hotels
      </CustomHeading>
    </ScrollView>
  );
}