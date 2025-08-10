import { useRoute } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { StatusBar } from 'react-native';
export default function EventScreen() {
  const route = useRoute();
  const { eventID, title, description } = route.params;

  return (
    <>
   
    <View className="flex-1 p-4 bg-white">
      <Text className="text-lg font-bold text-gray-800 mb-2">
        This is the Event Screen for {eventID}
      </Text>

      <Text className="text-base text-blue-600 mb-1">
        {title}
      </Text>

      <Text className="text-sm text-gray-600">
        {description}
      </Text>
    </View>
    </>
  );
}
