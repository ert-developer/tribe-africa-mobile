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
                borderRadius: 10,
                height: 75,
                paddingHorizontal: theme.spacing.small,
                margin: theme.spacing.small
            },
            tabBarActiveBackgroundColor: '#fff',
            tabBarItemStyle: {
                margin: theme.spacing.extraSmall,
                marginVertical: theme.spacing.small,
                borderRadius: 10,
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
            {
                ignore.map(tab => (
                    <Tabs.Screen 
                        key={tab}
                        name={tab}
                        options={{ 
                            href: null
                        }}
                    />
                ))
            }
        </Tabs>
    )
}

const ignore = [
    "home/home-screen",
    "business/business-screen",
]