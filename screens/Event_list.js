import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';


const Event = ({ navigation }) => {
  const [eventData, setEventData] = useState([
    {
      key: '1',
      name: 'Spring Festival',
      date: 'April 10th, 2023',
      location: 'Campus Green',
      description: 'Join us for the annual Spring Festival featuring live music, food trucks, and games!',
    },
    {
      key: '2',
      name: 'Career Fair',
      date: 'April 20th, 2023',
      location: 'Student Center',
      description: 'Meet with top companies and recruiters to find your dream job or internship.',
    },
  ]);

  const renderEvent = ({ item }) => (
    <TouchableOpacity
      style={styles.eventContainer}
      onPress={() => navigation.navigate('Event_detail', { eventData: item })}
    >
      <Text style={styles.eventName}>{item.name}</Text>
      <Text style={styles.eventDate}>{item.date}</Text>
      <Text style={styles.eventLocation}>{item.location}</Text>
      <Text style={styles.eventDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Events</Text>
      <FlatList
        data={eventData}
        renderItem={renderEvent}
        keyExtractor={item => item.key}
      />
    </View>
  );
};
export default Event;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  eventContainer: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventDate: {
    fontSize: 14,
  },
  eventLocation: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  eventDescription: {
    fontSize: 14,
    marginTop: 5,
  },
  detailDate: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  detailLocation: {
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 10,
  },
  detailDescription: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
});
