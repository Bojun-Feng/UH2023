import React from "react";
import {
  Button,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
} from "react-native";

const Home = ({ navigation }) => {
  const imageWidth = 500;
  const imageHeight = 375;

  return (

    <View style={styles.container}>
      <ImageBackground
        style={[styles.image]}
        source={require("../assets/UChicagoMap.webp")}
        resizeMode={"contain"}
      >
        <TouchableOpacity
          style={[styles.button, { left: imageWidth * 0.3, top: imageHeight * 0.3 }]}
          onPress={() => navigation.navigate("Event_list", { building: "Cobb" })}
        >
          <Text style={styles.text}>Cobb</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { left: imageWidth * 0.5, top: imageHeight * 0.85 }]}
          onPress={() => navigation.navigate("Event_list", { building: "Harper" })}
        >
          <Text style={styles.text}>Harper</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { left: imageWidth * 0.15, top: imageHeight * 0.7 }]}
          onPress={() => navigation.navigate("Event_list", { building: "Crerar" })}
        >
          <Text style={styles.text}>Crerar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { left: imageWidth * 0.45, top: imageHeight * 0.5 }]}
          onPress={() => navigation.navigate("Event_list", { building: "Quad" })}
        >
          <Text style={styles.text}>Quad</Text>
        </TouchableOpacity>

      </ImageBackground>

      <TouchableOpacity
      style={[styles.createButton]}
      onPress={() => navigation.navigate("Input")}
      >
      <Text style={styles.createButtonText}>Create Event</Text>
      </TouchableOpacity>

    </View>
    

  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    justifyContent: 'top',
    alignItems: 'center',
    paddingTop: 80
  },
  image: {
    width: 500,
    height: 375,
  },
  button: {
    width: 100,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 3,
  },
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
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
    bottom: '20%'
  },
    createButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
});