import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const EventItems = ({ id, title, description }) => {
    const router = useRouter();
  return (
    <TouchableOpacity  
       onPress={() => router.push(`/stacks/event?eventID=${id}&title=${title}&description=${description}`)}
      className="p-4 border border-gray-300 rounded-lg m-4"
    >
      
      <Text className="text-lg">{id} {title}</Text>
      <Text className="text-gray-600">{description}</Text>
    </TouchableOpacity> 
  );
};

export default EventItems;
