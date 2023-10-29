import {StyleSheet, Text, View} from "react-native";
import React from 'react'

const Signup = () => {
    return (
        <Text style={styles.baseText}>
            signup
        </Text>
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

