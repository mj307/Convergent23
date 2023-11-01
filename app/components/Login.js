import {StyleSheet, Text, View} from "react-native";
import React from 'react'
import Menu from "./Menu";
const Login = () => {
    return (
        <View style={styles.menuStyle}>
            <View style={styles.lineStyle}></View>
            <Menu />
            <Text style={styles.baseText1}>Hello, this is some text.</Text>
            <View
                style={[
                    styles.lineStyle,
                    {
                        marginVertical: 15,
                    },
                ]}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    baseText: {
        fontWeight: 'bold',
    },
    innerText: {
        color: 'red',
    },
    baseText1: {
        fontWeight: 'bold',
        fontSize: 18, // You can set the font size
        color: 'blue', // You can set the text color
      }
});

export default Login;
