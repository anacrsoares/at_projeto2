import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home"; // Tela principal
import ImageDetails from "./screens/ImageDetails"; // Tela de detalhes

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          component={Home}
          name="Home"
          options={{ headerShown: false }}
        />
        <Stack.Screen component={ImageDetails} name="ImageDetails" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
