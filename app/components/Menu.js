import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";
import Login from "./Login";
//import Signup from "./Signup";
import Contact from "./Contact";
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
                        uri: "https://img.icons8.com/stickers/90/000000/training.png",
                    }}
                />
            </TouchableOpacity>

<<<<<<< HEAD
           
=======
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate(Signup)}>
                <Image
                    style={styles.iconStyle}
                    source={{
                        uri: "https://img.icons8.com/stickers/100/000000/conference.png",
                    }}
                />
            </TouchableOpacity>
>>>>>>> ad2deccf440ebf5586743bcac5e89324811981e7

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate(About)}>
                <Image
                    style={styles.iconStyle}
                    source={{
                        uri: "https://img.icons8.com/stickers/100/000000/about.png",
                    }}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate(Contact)}>
                <Image
                    style={styles.iconStyle}
                    source={{
                        uri: "https://img.icons8.com/stickers/100/000000/phone-office.png",
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
    },
    textStyle: {
        textTransform: "uppercase",
    },
    iconStyle: {
        width: "100%",
        height: 50,
        aspectRatio: 1,
    },
});

export default Menu;