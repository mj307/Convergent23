<<<<<<< HEAD
import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
//import {  createUserWithEmailAndPassword  } from 'firebase/auth';
//import { auth } from '../firebase';
//import { getAnalytics } from "firebase/analytics";
//import { getAuth } from "firebase/auth";
//import { getFirestore } from "firebase/firestore";
=======
>>>>>>> ad2deccf440ebf5586743bcac5e89324811981e7
import {StyleSheet, Text, View} from "react-native";
import React from 'react'
import { Button } from 'react-native'
import Menu from "./Menu";


const Signup = () => {
    return (
        <View style={styles.menuStyle}>
            <View style={styles.lineStyle}></View>
            <Menu />
            <Text style={styles.baseText1}>This is temp</Text>
            <Button style={styles.button}
  
                // Some properties given to Button 
                title="Hello"
                onPress={() => Alert.alert( 
                    'Sign Up!')} 
            /> 

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
    button: {
        color: "pink",
    },
    baseText1: {
        fontWeight: 'bold',
        fontSize: 18, // You can set the font size
        color: 'blue', // You can set the text color
      },
});

export default Signup;

