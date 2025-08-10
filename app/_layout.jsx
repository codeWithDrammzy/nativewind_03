import { Drawer } from 'expo-router/drawer';
import '../global.css';
import { DrawerContentScrollView, DrawerItemList, DrawerToggleButton } from '@react-navigation/drawer';
import { Text, View, Image} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function CustoomDrawerContent(props) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ flex: 1 }}
      
    >
      {/* Profile Section */}
      <View className="items-center bg-slate-300 py-8">
        <Image
          source={require('@/assets/images/emoji.jpeg')}
          className="w-20 h-20 rounded-full border-2 border-white mb-3"
        />
        <Text className="text-white text-lg font-bold">Dawud Aliyu</Text>
        <Text className="text-gray-300 text-sm">@drammzy</Text>
      </View>

      {/* Drawer Items Section */}
      <View className="flex-1 bg-white pt-3">
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}



export default function RootLayout() {
  return (
    <GestureHandlerRootView className='flex-1'>
    <Drawer
      drawerContent={CustoomDrawerContent}
      screenOptions={{
        headerRight: () => <DrawerToggleButton tintColor="white" />,
        headerLeft: () => (
          <Text className="text-white font-semibold m-4 text-2xl">Logo</Text>
        ),
        headerStyle: { backgroundColor: '#0f172a' },
        headerTintColor: 'white',
        drawerActiveTintColor: 'red', 

      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: true,
          headerTitleStyle: { color: 'white' },
          headerTitleAlign: 'center',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="profile"
        options={{
          title: 'Profile Page',
          headerShown: true,
          headerTitleAlign: 'center',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="stacks"
        options={{
          headerShown: false,
          drawerItemStyle: { display: 'none' },
        }}
      />
    </Drawer>
    </GestureHandlerRootView>
  );
}
