import React from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native';
import { Dummy_Data } from '../data/dummy_data';
import EventItems from './EventItems';

const EventList = () => {
  const renderItem = ({ item }) => (
    <EventItems id={item.id} title={item.title} description={item.description} />
  );

  return (
    <View className="flex-1 ">  
     <FlatList
        data={Dummy_Data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl 
          refreshing= {false}
          onRefresh={()=> console.log('refreshong')}
          />
        }
        
      />
    </View>
  );
};

export default EventList;
