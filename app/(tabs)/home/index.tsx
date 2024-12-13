import { ScrollView } from "react-native";

import { theme } from "@/constants/theme";
import {styles} from '@/constants/styles';

export default function Index() {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: theme.spacing.large
      }}
      style={[styles.screen]}
    >
    </ScrollView>
  );
}