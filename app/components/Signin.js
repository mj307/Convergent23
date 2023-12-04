import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import QuizQuestion1 from "./QuizQuestion1";
import {useNavigation} from "@react-navigation/native";

const Signin = () => {
  const [classCode, setClassCode] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleSignin = () => {
    // Add your Signin logic here
    navigation.navigate(QuizQuestion1);
  };

  return (
    <View style={styles.container}>
      
      <Image style = {styles.mainImage}
      source={require('../Assets/LearnLink_Logo_White.png')}/>
    
      <Text style={styles.title}>sign in</Text>

      <View style={styles.popupcontainer}>
        <View style = {styles.inputContainer}>
          <View style = {styles.inputImageContainer}>
            <Image style={styles.inputImage}
            source={{uri: 'https://img.icons8.com/material-rounded/96/5e5e5e/guest-male.png'}}
            resizeMode={'contain'} // cover or contain its upto you view look
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder=""
            value={classCode}
            onChangeText={text => setClassCode(text)}
          />
        </View>
        <View style = {styles.inputContainer}>
        <View style = {styles.inputImageContainer}>
          <Image style={styles.inputImage}
            source={{uri: "https://img.icons8.com/material-rounded/96/5e5e5e/email.png"}}
            resizeMode={'cover'}
          />
          </View>
          
          <TextInput
            style={styles.input}
            placeholder=""
            value={username}
            onChangeText={text => setUsername(text)}
          />
        </View>

        <View style = {styles.inputContainer}>
        <View style = {styles.inputImageContainer}>
        <Image style={styles.inputImage}
            source={{uri: "https://img.icons8.com/material-rounded/192/5e5e5e/lock--v1.png"}}
            resizeMode={'cover'}
          />
          </View>
          
          <TextInput
            style={styles.input}
            placeholder=""
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
        
        <TouchableOpacity style={styles.SigninButton} onPress={handleSignin}>
            <Text style={styles.SigninButtonText}>log in</Text>
        </TouchableOpacity>

        <Text style={styles.forgotPassword}>forgot your password?</Text>
      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4E75EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImage: {
    alignContent: 'center',
    width: 137.83, 
    height: 125,
  },
  popupcontainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 315,
    padding: 20,
  },
  title: {
    fontSize: 50,
    color: 'white',
    marginBottom: 20,
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center', 
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  inputImageContainer: {
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: '#F4F4F4',
    alignContent: 'space-between',
    width: 48, 
    height: 43,
    padding: 10,
    marginBottom: 10,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  inputImage: {
    width: 25, 
    height: 25,
  },
  input: {
    height: 43,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: '#F4F4F4',
    width: 264,
  },
  SigninButton: {
    backgroundColor: '#4E75EB',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  SigninButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  forgotPassword: {
    color: '#B3B3B3',
    fontSize: 10,
    textAlign: 'center',
    paddingTop: 6,
    textDecorationLine: 'underline',
  },
});

export default Signin;
