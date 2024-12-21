import React from 'react';
import { Image, StyleProp, View, ViewStyle, StyleSheet } from 'react-native';

// Define a type for the 'icon' prop
type IconifyProps = {
    icon: keyof typeof icons;
    size?: number;
    style?: StyleProp<ViewStyle>;
};

// Define the icons mapping with routes
const icons = {
    'home': require('@/assets/icons/tabs/home.png'),
    'home-outline': require('@/assets/icons/tabs/home-outline.png'),
    'business': require('@/assets/icons/tabs/business.png'),
    'business-outline': require('@/assets/icons/tabs/business-outline.png'),
    'holiday': require('@/assets/icons/tabs/holiday.png'),
    'holiday-outline': require('@/assets/icons/tabs/holiday-outline.png'),
    'chatbot': require('@/assets/icons/tabs/chatbot.png'),
    'chatbot-outline': require('@/assets/icons/tabs/chatbot-outline.png'),
    'profile': require('@/assets/icons/tabs/profile.png'),
    'profile-outline': require('@/assets/icons/tabs/profile-outline.png'),
    'calculator': require('@/assets/icons/header/calculator.png'),
    'notifications': require('@/assets/icons/header/notifications.png'),
    'accomodations': require('@/assets/icons/header/accomodations.png'),
    'flights': require('@/assets/icons/header/flights.png'),
} as const;

// Iconify component with type safety
const Iconify: React.FC<IconifyProps> = ({ icon, size = 24, style = {} }) => {
    const image = icons[icon];
    
    return (
        <View style={[style, styles]}>
        <Image 
            source={image} 
            style={{
                width: size,
                height: size,
                objectFit: 'contain'
            }} 
        />
        </View>
    );
};

export default Iconify;

const styles = StyleSheet.create({ 
    
})
