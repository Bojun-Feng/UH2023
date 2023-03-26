import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { API, graphqlOperation } from 'aws-amplify';
import { createTodo } from '../src/graphql/mutations';

const Input = ({ navigation }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [building, setBuilding] = useState('Cobb');
  const [location, setLocation] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [date, setDate] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const createEvent = async () => {
    try {
      const input = {
        name: name,
        description: description,
        building: building,
        location: location,
        organizer_contact: organizer,
        date: date,
        start: start + ":00Z",
        end: end + ":00Z",
        open: true,
        attendants: 1,
      };
      const response = await API.graphql(graphqlOperation(createTodo, { input }));
      const event = response.data.createTodo;
      console.log(event);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <ScrollView style={styles.container}>
      <View style={{ height: 50 }}></View>
      
      <Text style={styles.label}>Building:</Text>
      <Picker
        style={styles.input}
        selectedValue={building}
        onValueChange={(value) => setBuilding(value)}
      >
        <Picker.Item label="Cobb" value="Cobb" />
        <Picker.Item label="Quad" value="Quad" />
        <Picker.Item label="Crerar" value="Crerar" />
        <Picker.Item label="Harper" value="Harper" />
      </Picker>

      <Text style={styles.label}>Name:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Description:</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription} />

      <Text style={styles.label}>Location:</Text>
      <TextInput style={styles.input} value={location} onChangeText={setLocation} />

      <Text style={styles.label}>Organizer Contact:</Text>
      <TextInput style={styles.input} value={organizer} onChangeText={setOrganizer} />

      <Text style={styles.label}>Date (YYYY-MM-DD):</Text>
      <TextInput style={styles.input} value={date} onChangeText={setDate} />

      <Text style={styles.label}>Start Time (HH:MM):</Text>
      <TextInput style={styles.input} value={start} onChangeText={setStart} />

      <Text style={styles.label}>End Time (HH:MM):</Text>
      <TextInput style={styles.input} value={end} onChangeText={setEnd} />

      <View style={[styles.buttonContainer]}>
        <TouchableOpacity
            style={[styles.createButton]}
            onPress={createEvent}
          >
            <Text style={styles.createButtonText}>Create Event</Text>
          </TouchableOpacity>
      </View>

      <View style={{height: 150}}></View>
    </ScrollView>

    
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    marginBottom: 10,
  },
  createButton: {
    flex: 1,
    width: 300,
    height: 100,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    backgroundColor: 'maroon',
    borderColor: 'maroon',
    borderWidth: 2,
    bottom: '15%'
  },
  createButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  buttonContainer: {
    height: 200, 
    alignItems: "center",
  },
  
});

export default Input;
