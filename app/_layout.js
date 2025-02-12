// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return (
//     <Stack >
//       <Stack.Screen options={{headerTitleAlign:'center', title:'حروفي العربية' }} name="index" />
      

//     </Stack>
//   );
// }

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        {/* Tabs Navigator */}
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false, // Hide header for tabs
          }}
        />

        {/* Dynamic [letter] Route */}
        <Stack.Screen
          name="[letter]/index"
          options={{
            headerShown: true, // Show header for dynamic routes
            title: 'Dynamic Letter',
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}



{/* <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: 'Home',
            title: 'حروفي العربية',
          }}
        />
        <Tabs.Screen
          name="(letterScreens)"
          options={{
            tabBarLabel: 'Letters',
            title: 'Letter Navigation',
          }}
        />
      </Tabs>
    </GestureHandlerRootView> */}


