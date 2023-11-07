import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import {
    useFonts,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";
import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";
import Login from "./components/Login";
import Signup from "./components/Signup";
import User from "./components/User";

export default function App() {
    const Stack = createNativeStackNavigator();

    let [fontsLoaded] = useFonts({
        JosefinSans_400Regular,
        JosefinSans_500Medium,
        Nunito_600SemiBold,
        Nunito_700Bold,
    });

    if (!fontsLoaded) {
        <AppLoading />;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                {/* home screen  */}
                <Stack.Screen
                    name="Home"
                    options={{
                        headerShown: false,
                    }}>
                    {(props) => <Home {...props} channelName={"Thapa Technical"} />}
                </Stack.Screen>

                {/* Login Screen  */}
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerTitleStyle: {
                            fontSize: 25,
                            fontFamily: "Nunito_600SemiBold",
                        },
                        headerTitleAlign: "center",
                    }}
                />

                {/* UserData Screen  */}
                <Stack.Screen
                    name="User"
                    component={User}
                    options={{
                        headerTitleStyle: {
                            fontSize: 25,
                            fontFamily: "Nunito_600SemiBold",
                        },
                        headerTitle: "Students Data",
                        headerTitleAlign: "center",
                    }}
                />

                {/* About Screen  */}
                <Stack.Screen
                    name="About"
                    component={About}
                    options={{
                        headerTitleStyle: {
                            fontSize: 25,
                            fontFamily: "Nunito_600SemiBold",
                        },
                        headerTitleAlign: "center",
                    }}
                />

                {/* Contact Screen  */}
                <Stack.Screen
                    name="Contact"
                    component={Contact}
                    options={{
                        headerTitleStyle: {
                            fontSize: 25,
                            fontFamily: "Nunito_600SemiBold",
                        },
                        headerTitleAlign: "center",
                    }}
                />

                {/* CourseDetails Screen  */}
                <Stack.Screen
                    name="Signup"
                    component={Signup}
                    options={{
                        headerTitleStyle: {
                            fontSize: 25,
                            fontFamily: "Nunito_600SemiBold",
                        },
                        headerTitleAlign: "center",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
