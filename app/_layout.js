

// import { Stack } from 'expo-router';
// import { TouchableOpacity, Text } from 'react-native';

// export default function RootLayout() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <Stack>
//         {/* Tabs Navigator */}
//         <Stack.Screen
//           name="(tabs)"
//           options={{
//             headerShown: false, // Hide header for tabs
//           }}
//         />

// <Stack.Screen
//           name="[letter]/index"
//           options={({ navigation }) => ({
//             headerShown: true,
//             title: 'Dynamic Letter',
//             headerLeft: () => (
//               <TouchableOpacity onPress={() => navigation.goBack()}>
            
//             <Text style={{ color: 'blue', fontSize: 16, marginLeft: 10 }}>  الرئيسية </Text>
//               </TouchableOpacity>
//             ),
//           })}
//         />

//       </Stack>
//     </GestureHandlerRootView>
//   );
// }


import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { router } from 'expo-router';
const CustumDrawerContent = (props)=>{
  return (
    <DrawerContentScrollView {...props}>

    <DrawerItem
       
        icon={({ color, size }) => (
        <Ionicons name="home-outline" size={size} color={color} />
        )}
        label="الرئيسية"
         onPress={() =>{
          router.push('/');
          props.navigation.closeDrawer();
         }}
/>
      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons name="book-outline" size={size} color={color} />
        )}
        label="أتعلم الحروف"
        onPress={() => router.push('/learn')}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons name="create-outline" size={size} color={color} />
        )}
        label="أكتب الحروف"
        onPress={() => router.push('/write')}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons name="mic-outline" size={size} color={color} />
        )}
        label="أنطق الحروف"
        onPress={() => router.push('/pronounce')}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons name="school-outline" size={size} color={color} />
        )}
        label="الإختبارات"
        onPress={() => router.push('/quizzes')}
      />
    </DrawerContentScrollView>
  );
}


export default function Layout() {
  return (
    <Drawer drawerContent={(props)=> <CustumDrawerContent {...props}/> }>
        <Drawer.Screen
        name="index"
        options={{
          title: 'الرئيسية',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen name="learn/index" options={{ title: 'أتعلم الحروف' }} />
      <Drawer.Screen name="write/index" options={{ title: 'أكتب الحروف' }} />
      <Drawer.Screen name="pronounce/index" options={{ title: 'أنطق الحروف' }} />
      <Drawer.Screen name="quizzes/index" options={{ title: 'الإختبارات' }} />
    </Drawer>
  );
}
