import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Tabs } from 'expo-router/tabs';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons for icons

export const unstable_settings = {
  drawer: null,
};


export default function TabsLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false, // Hides the header for all tabs
          tabBarStyle: styles.tabBar, // Custom tab bar style
          tabBarLabelStyle: styles.tabBarLabel, // Custom label style
          tabBarActiveTintColor: '#00796B', // Active tab text/icon color
          tabBarInactiveTintColor: '#90A4AE', // Inactive tab text/icon color
          position: 'absolute',
        }}
      >
        {/* Home Tab */}
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: 'الرئيسية', // Text for Home tab
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? 'home' : 'home-outline'} // Filled icon when active, outlined when inactive
                size={size || 24} // Icon size
                color={color} // Icon color (active/inactive is managed automatically)
              />
            ),
          }}
        />

        {/* Letters Tab */}
        <Tabs.Screen
          name="(letterScreens)"
          options={{
            tabBarLabel: 'الحروف', // Arabic label for Letters tab
            title: 'الحروف',
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? 'grid' : 'grid-outline'} // Filled grid icon for active tab, outlined for inactive
                size={size || 24}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
}

// Custom styles
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#E0F7FA', // Light blue background for the tab bar
    borderTopWidth: 1, // Optional border for the top of the tab bar
    borderTopColor: '#B0BEC5', // Border color
    height: 60, // Height of the tab bar
    position: 'absolute',
  },
  tabBarLabel: {
    fontSize: 14, // Font size for tab labels
    fontWeight: 'bold', // Bold text
    fontFamily: 'NotoNaskhArabic', // Font family for Arabic labels (if applicable)
  },
});
