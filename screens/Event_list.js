import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { listTodos } from '../src/graphql/queries';


const Event = ({ route, navigation }) => {
  const { building } = route.params;
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await API.graphql(
            graphqlOperation(listTodos, { limit: 100, building: "building" })
            );
        setEventData(response.data.listTodos.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEventData();
  }, []);

  const renderEvent = ({ item }) => {
    if (item.building === building) {
      return (
        <TouchableOpacity
          style={styles.eventContainer}
          onPress={() => navigation.navigate('Event_detail', { eventData: item })}
        >
          <Text style={styles.eventName}>{item.name}</Text>
          <Text style={styles.eventDate}>{item.date}</Text>
          <Text style={styles.eventDate}>{item.start.substring(0,5)} - {item.end.substring(0,5)}</Text>
          <Text style={styles.eventDescription}>{item.description}</Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Events at {building}</Text>
      <FlatList
        data={eventData}
        renderItem={renderEvent}
        keyExtractor={item => item.id}
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
    marginHorizontal: 20,
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
