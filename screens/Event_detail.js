import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EventDetails = ({ route }) => {
  const { eventData } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{eventData.name}</Text>
        <Text style={styles.date}>{eventData.date}</Text>
        <Text style={styles.organizer_contact}>Contact: {eventData.organizer_contact}</Text>
        <Text style={styles.start}>Time: {eventData.start.substring(0,5)} - {eventData.end.substring(0,5)}</Text>
        <Text style={styles.location}>Location: {eventData.location}</Text>
        <Text style={styles.open}>{eventData.open}</Text>
        <Text style={styles.description}>Description:</Text>
        <Text style={styles.description}>{eventData.description}</Text>
      </View>
      <Text style={styles.createdAt}>First Created: {eventData.createdAt.replace("Z", "").replace("T", " ")}</Text>
      <Text style={styles.updatedAt}>Last Updated: {eventData.updatedAt.replace("Z", "").replace("T", " ")}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 10,
  },
  organizer_contact: {
    fontSize: 16,
    marginBottom: 10,
  },
  start: {
    fontSize: 16,
    marginBottom: 10,
  },
  end: {
    fontSize: 16,
    marginBottom: 10,
  },
  open: {
    fontSize: 16,
    marginBottom: 10,
  },
  attendants: {
    fontSize: 16,
    marginBottom: 10,
  },
  createdAt: {
    color: "#A2A2A2",
    fontSize: 10,
    marginLeft: 20,
  },
  updatedAt: {
    color: "#A2A2A2",
    fontSize: 10,
    marginLeft: 20,
    marginBottom: 20,
  },
});

export default EventDetails;
