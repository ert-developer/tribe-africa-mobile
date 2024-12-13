import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <View>
        <Link href="/(tabs)/home">
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}