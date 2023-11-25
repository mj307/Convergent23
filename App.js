const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import Results from "./screens/Results";
import Classes from "./screens/Classes";
import Chat from "./screens/Chat";
import QuizQuestion2 from "./screens/QuizQuestion2";
import QuizQuestion3 from "./screens/QuizQuestion3";
import QuizQuestion4 from "./screens/QuizQuestion4";
import QuizQuestion5 from "./screens/QuizQuestion5";
import QuizQuestion6 from "./screens/QuizQuestion6";
import QuizQuestion7 from "./screens/QuizQuestion7";
import QuizQuestion8 from "./screens/QuizQuestion8";
import QuizQuestion13 from "./screens/QuizQuestion13";
import QuizQuestion12 from "./screens/QuizQuestion12";
import QuizQuestion11 from "./screens/QuizQuestion11";
import QuizQuestion10 from "./screens/QuizQuestion10";
import QuizQuestion9 from "./screens/QuizQuestion9";
import QuizQuestion1 from "./screens/QuizQuestion1";
import Login1 from "./screens/Login1";
import Dashboard1 from "./screens/Dashboard1";
import Quiz from "./screens/Quiz";
import Results1 from "./screens/Results1";
import Classes1 from "./screens/Classes1";
import Chat1 from "./screens/Chat1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Cabin-Medium": require("./assets/fonts/Cabin-Medium.ttf"),
    "Cabin-MediumItalic": require("./assets/fonts/Cabin-MediumItalic.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Results"
              component={Results}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Classes"
              component={Classes}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chat"
              component={Chat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QuizQuestion2"
              component={QuizQuestion2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QuizQuestion3"
              component={QuizQuestion3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QuizQuestion4"
              component={QuizQuestion4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QuizQuestion5"
              component={QuizQuestion5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QuizQuestion6"
              component={QuizQuestion6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QuizQuestion7"
              component={QuizQuestion7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QuizQuestion8"
              component={QuizQuestion8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QuizQuestion13"
              component={QuizQuestion13}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QuizQuestion12"
              component={QuizQuestion12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QuizQuestion11"
              component={QuizQuestion11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QuizQuestion10"
              component={QuizQuestion10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QuizQuestion9"
              component={QuizQuestion9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QuizQuestion1"
              component={QuizQuestion1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login1"
              component={Login1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dashboard1"
              component={Dashboard1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Quiz"
              component={Quiz}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Results1"
              component={Results1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Classes1"
              component={Classes1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chat1"
              component={Chat1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
