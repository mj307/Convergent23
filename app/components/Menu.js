import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";
import Login from "./Login";
import Signin from "./Signin";
import Contact from "./Contact";
import Home from "./Home";
import Classmate from "./ClassCode";
import Messages from "./Messages";
import User from "./User";
import Class from "./Classes";
import Chat1 from "./Chat1";
import Quiz from "./Quiz";
import Chat from "./Chat";
import QuizQuestion2 from "./QuizQuestion2";
import QuizQuestion3 from "./QuizQuestion3";
import QuizQuestion4 from "./QuizQuestion4";
import QuizQuestion5 from "./QuizQuestion5";
import QuizQuestion6 from "./QuizQuestion6";
import QuizQuestion7 from "./QuizQuestion7";
import QuizQuestion8 from "./QuizQuestion8";
import QuizQuestion13 from "./QuizQuestion13";
import QuizQuestion12 from "./QuizQuestion12";
import QuizQuestion11 from "./QuizQuestion11";
import QuizQuestion10 from "./QuizQuestion10";
import QuizQuestion9 from "./QuizQuestion9";
import QuizQuestion1 from "./QuizQuestion1";

const Menu = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate(Home)}>
                <Image
                    style={styles.iconStyle}
                    source={{
                        uri: "https://img.icons8.com/material-rounded/192/5e5e5e/home.png",
                    }}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate(Contact)}>
                <Image
                    style={styles.iconStyle}
                    source={{
                        uri: "https://img.icons8.com/material-rounded/100/5e5e5e/book.png",
                    }}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate(Signin)}>
                <Image
                    style={styles.centerIcon}
                    source={{
                        uri: "https://img.icons8.com/material-rounded/96/FFFFFF/plus-math--v1.png",
                    }}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate(Chat)}>
                <Image
                    style={styles.iconStyle}
                    source={{
                        uri: "https://img.icons8.com/material-rounded/192/5e5e5e/user.png",
                    }}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate(Class)}>
                <Image
                    style={styles.iconStyle}
                    source={{
                        uri: "https://img.icons8.com/ios-glyphs/192/5e5e5e/preschool.png",
                    }}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: '#F4F4F4',
        borderRadius: '10px',
    },
    textStyle: {
        textTransform: "uppercase",
    },
    iconStyle: {
        width: "100%",
        height: 25,
        aspectRatio: 1,
        bottom: 0,
    },
    centerIcon: {
        backgroundColor: '#4E75EB',
        height: 60,
        aspectRatio: 1,
        borderRadius: 60,
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        bottom: 20,
    },
});

export default Menu;