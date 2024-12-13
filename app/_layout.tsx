import { useEffect } from "react";
import { Stack } from "expo-router";
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
  <Stack>
    <Stack.Screen name='(tabs)' options={{ headerShown: false }}/>
    <Stack.Screen name='screens' options={{ headerShown: false }}/>
    <Stack.Screen name='+not-found'/>
  </Stack>
  );
}
