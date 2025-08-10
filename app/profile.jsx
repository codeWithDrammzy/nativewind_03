import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const Profile = () => {
  const router = useRouter();

  return (
    <View>
      <Text>hello this is our profile page</Text>
      <Pressable onPress={() => router.push('/stacks/profile-detail')}>
        <Text>Some profile</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
