import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Home from "../screens/Home";
import Event_list from "../screens/Event_list";
import Event_detail from "../screens/Event_detail";

const Stack = createNativeStackNavigator();

const MainNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Event_list" component={Event_list} />
      <Stack.Screen name="Event_detail" component={Event_detail} />
    </Stack.Navigator>
  );
};

export default MainNav;
