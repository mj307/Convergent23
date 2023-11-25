import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import About from "./components/Classes";
import Contact from "./components/Contact";
import {
    useFonts,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";
// import Cabin from "@fontsource/cabin"; // Defaults to weight 400
import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";
import Login from "./components/Login";
import Signin from "./components/Signin";
import User from "./components/User";
import Classmate from "./components/ClassCode";
import Messages from "./components/Messages";

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
                        headerShown: false,
                    }}
                />

                {/* UserData Screen  */}
                <Stack.Screen
                    name="User"
                    component={User}
                    options={{
                        headerShown: false,
                    }}
                />

                {/* About Screen  */}
                <Stack.Screen
                    name="About"
                    component={About}
                    options={{
                        headerShown: false,
                    }}
                />

                {/* Find Classmates Screen  */}
                <Stack.Screen
                    name="Find Classmates"
                    component={Classmate}
                    options={{
                        headerShown: false,
                    }}
                />

                {/* Contact Screen  */}
                <Stack.Screen
                    name="Contact"
                    component={Contact}
                    options={{
                        headerShown: false,
                    }}
                />

                {/* Signin Screen  */}
                <Stack.Screen
                    name="Signin"
                    component={Signin}
                    options={{
                        headerShown: false,
                    }}
                />

                {/* Message Screen  */}
                <Stack.Screen
                    name="Message"
                    component={Messages}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
