import { Text, View } from "react-native";
import { Tabs } from "expo-router";

import Iconify from "@/components/iconify";

import {theme} from '@/constants/theme';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerTitle: () => <Text>Tribe Africa</Text>,
            headerTitleAlign: 'center',
            tabBarStyle: {
                backgroundColor: theme.colors.secondary,
                borderRadius: theme.spacing.small,
                height: 75,
                paddingHorizontal: theme.spacing.small,
                margin: theme.spacing.small
            },
            tabBarActiveBackgroundColor: '#fff',
            tabBarItemStyle: {
                margin: theme.spacing.extraSmall,
                marginVertical: theme.spacing.small,
                borderRadius: theme.spacing.small,
                overflow: 'hidden',
            },
            tabBarActiveTintColor: theme.colors.primary,
            headerLeft: () => (
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: theme.spacing.small,
                    marginLeft: theme.spacing.small,
                }}
            >
                <Iconify icon="calculator"/>
                <Iconify icon="notifications"/>
            </View>
            ),
            headerRight: () => (
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: theme.spacing.small,
                    marginRight: theme.spacing.small,
                }}
            >
                <Iconify icon="flights"/>
                <Iconify icon="accomodations"/>
            </View>
            ),
        }}>
            <Tabs.Screen 
                name="home/index" 
                options={{ 
                    tabBarLabel: 'Home',
                    tabBarIcon: ({focused}) => <Iconify icon={focused ? 'home' : 'home-outline'}/>,
                }}
            />
            <Tabs.Screen 
                name="business/index" 
                options={{ 
                    headerShown: false,
                    tabBarLabel: 'Business',
                    tabBarIcon: ({focused}) => <Iconify icon={focused ? 'business' : 'business-outline'} />,
                }}
            />
            <Tabs.Screen 
                name="holiday/index" 
                options={{ 
                    headerShown: false,
                    tabBarLabel: 'Holiday',
                    tabBarIcon: ({focused}) => <Iconify icon={focused ? 'holiday' : 'holiday-outline'} />,
                }}
            />
            <Tabs.Screen 
                name="chatbot/index" 
                options={{ 
                    headerShown: false,
                    tabBarLabel: 'Chatbot',
                    tabBarIcon: ({focused}) => <Iconify icon={focused ? 'chatbot' : 'chatbot-outline'} />,
                }}
            />
            <Tabs.Screen 
                name="profile/index" 
                options={{ 
                    headerShown: false,
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({focused}) => <Iconify icon={focused ? 'profile' : 'profile-outline'} />,
                }}
            />
            {/* Hiding other screens */}
            <Tabs.Screen 
                name="home/home-screen" 
                options={{
                    href: null
                }}
            />
        </Tabs>
    )
}