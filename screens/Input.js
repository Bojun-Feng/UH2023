import Amplify from 'aws-amplify';
import API, { graphqlOperation } from '@aws-amplify/api';
import React, { useState } from "react";

const config = {
  aws_appsync_graphqlEndpoint: 'https://r2y3723b2jfttpnjgweqjdpdvy.appsync-api.us-east-1.amazonaws.com/graphql',
  aws_appsync_region: 'us-east-1',
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
  aws_appsync_apiKey: 'da2-uyzndfkzmvecplnre32kgl2zwa',
};

Amplify.configure(config);

const Input = ({ navigation }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [building, setBuilding] = useState('');
  const [location, setLocation] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [date, setDate] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const createEvent = async () => {
    try {
      const mutation = `mutation createEvent($input: CreateEventInput!) {
        createEvent(input: $input) {
          id
          name
          description
          building
          location
          organizer_contact
          date
          start
          end
        }
      }`;

      const input = {
        name,
        description,
        building,
        location,
        organizer_contact: organizer,
        date,
        start,
        end,
      };

      const response = await API.graphql(graphqlOperation(mutation, { input }));

      const event = response.data.createEvent;

      console.log(event);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Text>Name:</Text>
      <TextInput value={name} onChangeText={setName} />

      <Text>Description:</Text>
      <TextInput value={description} onChangeText={setDescription} />

      <Text>Building:</Text>
      <TextInput value={building} onChangeText={setBuilding} />

      <Text>Location:</Text>
      <TextInput value={location} onChangeText={setLocation} />

      <Text>Organizer Contact:</Text>
      <TextInput value={organizer} onChangeText={setOrganizer} />

      <Text>Date:</Text>
      <TextInput value={date} onChangeText={setDate} />

      <Text>Start Time:</Text>
      <TextInput value={start} onChangeText={setStart} />

      <Text>End Time:</Text>
      <TextInput value={end} onChangeText={setEnd} />

      <Button title="Create Event" onPress={createEvent} />
    </>
  );
};

export default Input
