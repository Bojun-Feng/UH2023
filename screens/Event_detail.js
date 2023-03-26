import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const EventDetails = ({ route }) => {
  const { eventData } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={{ uri: eventData.imageUrl }} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{eventData.title}</Text>
        <Text style={styles.description}>{eventData.description}</Text>
        <Text style={styles.date}>{eventData.date}</Text>
        <Text style={styles.location}>{eventData.location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#003366', // set background color here
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    marginBottom: 10,
  },
  location: {
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default EventDetails;
