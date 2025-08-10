import { Stack } from "expo-router";

import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable } from "react-native";
import { router } from "expo-router";
export default function EventStackLayout() {
  return (
    <Stack screenOptions={{
        headerTitleStyle: { color: 'white' },  
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#0f172a' }
        }}>

      <Stack.Screen name="event" options={{ headerLeft: ()=>(
          <Pressable   onPress={()=> router.push('/')}>
            <Ionicons  name="arrow-back" size={20} color="white" className="m-2" />
          </Pressable>
        ),
         title: 'Event Page'}}/>

      <Stack.Screen name="profile-detail" options={{ headerLeft: ()=>(
          <Pressable   onPress={() => router.push('/profile')}>
            <Ionicons  name="arrow-back" size={20} color="white" className="m-2" />
          </Pressable>
        ),
        title: 'Profile Detail'
        
      }}/>
    </Stack>
  );
}
