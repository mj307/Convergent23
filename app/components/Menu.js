import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";
import Login from "./Login";
import Signup from "./Signup";
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
                        uri: "https://img.icons8.com/ios-glyphs/240/FFFFFF/search-client.png",
                    }}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate(Signup)}>
                <Image
                    style={styles.iconStyle}
                    source={{
                        uri: "https://img.icons8.com/ios-glyphs/240/FFFFFF/smiling.png",
                    }}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate(About)}>
                <Image
                    style={styles.iconStyle}
                    source={{
                        uri: "https://img.icons8.com/ios-glyphs/240/FFFFFF/preschool.png",
                    }}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate(Contact)}>
                <Image
                    style={styles.iconStyle}
                    source={{
                        uri: "https://img.icons8.com/ios-glyphs/240/FFFFFF/book-reading.png",
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
        backgroundColor: '#1e1e1e',
        padding: '10px'
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