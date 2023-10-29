import {StyleSheet, Text, View} from "react-native";
import React from 'react'
import Menu from "./Menu";

const Signup = () => {
    return (
        <View style={styles.menuStyle}>
            <View style={styles.lineStyle}></View>
            <Menu />
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
});

export default Signup;

