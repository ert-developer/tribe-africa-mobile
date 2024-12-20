import { theme } from "@/constants/theme";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react"
import { TouchableOpacity } from "react-native";

const CloseButton = ({onPress}: {onPress: () => void}) => {
  return (
    <TouchableOpacity 
        style={{
            alignSelf: 'flex-end',
            marginTop: theme.spacing.small
        }}
        onPress={onPress}
    >
        <AntDesign name="closecircleo" size={24} color="black" />
    </TouchableOpacity>
  )
};

export default CloseButton;