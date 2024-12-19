import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home"; // Tela principal
import ImageDetails from "./screens/ImageDetails"; // Tela de detalhes

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          orientation: "default",
        }}
      >
        <Stack.Screen
          component={Home}
          name="Home"
          options={{
            orientation: "all",
          }}
        />
        <Stack.Screen
          component={ImageDetails}
          name="ImageDetails"
          options={{
            orientation: "all",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
