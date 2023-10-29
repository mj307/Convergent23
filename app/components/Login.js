import {StyleSheet, Text, View} from "react-native";
import React from 'react'
const Login = () => {
    return (
        <Text style={styles.baseText}>
            Login
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

export default Login;
