import { Stack } from "expo-router";

export default function ScreensLayout() {
  return (
    <Stack screenOptions={{
      headerTitleAlign: 'center',
      headerBackTitle: 'Back',
    }}>
      {/* This layout applies to all nested routes under /screens */}
      <Stack.Screen 
        name="blogs/index" 
        options={{
            title: "All Blogs",
          }}
      />
      <Stack.Screen 
        name="blogs/[id]"
        options={{
          title: "Blog Details",
          headerBackTitle: "Back",
        }}
      />
    </Stack>
  );
}