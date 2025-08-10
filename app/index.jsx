import { View } from 'react-native';
import EventList from './../components/EventList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

export default function HomeScreen() {
  return (
    <>
      <StatusBar 
        barStyle="light-content" // Options: 'light-content' or 'dark-content'
        backgroundColor="#1E1E1E" // Change to match your app's header/background
      />
      <SafeAreaView className="flex-1">
        <View className="flex-1">
          <View className="flex-1">
            <EventList />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
