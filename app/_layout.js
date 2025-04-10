
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';
import { TouchableOpacity, Text } from 'react-native';

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
        {/* <Stack.Screen
          name="[letter]/index"
          options={{
            headerShown: true, // Show header for dynamic routes
            title: 'Dynamic Letter',
            
          }}
        /> */}

<Stack.Screen
          name="[letter]/index"
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Dynamic Letter',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
            
            <Text style={{ color: 'blue', fontSize: 16, marginLeft: 10 }}>  الرئيسية </Text>
              </TouchableOpacity>
            ),
          })}
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


