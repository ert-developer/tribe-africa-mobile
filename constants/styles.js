import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const appStyles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: theme.spacing.small,
    },
    section: {
        marginVertical: theme.spacing.extraSmall
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: theme.spacing.small
    },
    contentContainer: {
      marginVertical: theme.spacing.extraSmall,
      gap: theme.spacing.small,
    },
})