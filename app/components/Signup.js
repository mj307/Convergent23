import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {StyleSheet, Text, View} from "react-native";
import Menu from "./Menu";
 
const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
 
  return (
    <View style={styles.menuStyle}>
        <View style={styles.lineStyle}>
             <Menu />
             <View
                 style={[
                     styles.lineStyle,
                     {
                         marginVertical: 15,
                     },
                 ]}></View>
        </View>
    </View>
  )
}

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
 
export default Signup