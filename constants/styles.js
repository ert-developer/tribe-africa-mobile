import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const appStyles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: theme.spacing.small,
    },
    section: {
        marginVertical: theme.spacing.small
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: theme.spacing.small
      },
})