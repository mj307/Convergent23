import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";
import Login from "./Login";
import Signup from "./Signin";
import Contact from "./Contact";
import FindClassmates from "./FindClassmates";
import User from "./User";
import About from "./About";

const Menu = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate(Login)}>
                <Image
                    style={styles.iconStyle}
                    source={{
                        uri: "https://img.icons8.com/material-rounded/192/5e5e5e/home.png",
                    }}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate(Signup)}>
                <Image
                    style={styles.iconStyle}
                    source={{
                        uri: "https://img.icons8.com/material-rounded/100/5e5e5e/book.png",
                    }}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate(Login)}>
                <Image
                    style={styles.centerIcon}
                    source={{
                        uri: "https://img.icons8.com/material-rounded/96/FFFFFF/plus-math--v1.png",
                    }}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate(About)}>
                <Image
                    style={styles.iconStyle}
                    source={{
                        uri: "https://img.icons8.com/material-rounded/192/5e5e5e/user.png",
                    }}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate(Contact)}>
                <Image
                    style={styles.iconStyle}
                    source={{
                        uri: "https://img.icons8.com/material-rounded/192/5e5e5e/settings.png",
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
        height: 30,
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