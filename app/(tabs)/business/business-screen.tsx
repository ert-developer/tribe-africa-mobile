import SegmentedControl from "@/components/segmented-control";
import { appStyles } from "@/constants/styles";
import React from "react"
import { ScrollView, Text, View } from "react-native";

const BusinessScreen = ({props}) => {
  const {
    segments,
  } = props;
  return (
    <ScrollView style={[appStyles.screen]}>
      <SegmentedControl segments={segments}>
        <Text>Business Screen</Text>
      </SegmentedControl>
    </ScrollView>
  )
};

export default BusinessScreen;
