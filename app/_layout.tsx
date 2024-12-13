import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack >
      <Stack.Screen  name="mainScreen" />
      <Stack.Screen  name="index" />
      <Stack.Screen name = '[letter]'/> 

    </Stack>
  );
}
