import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';


const Signin = () => {
  const [classCode, setClassCode] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignin = () => {
    // Add your Signin logic here
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
    width: '137.83px', 
    height: '125px',
  },
  popupcontainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    width: '315px',
    padding: '20px',
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
    padding: '10px',
    marginBottom: 10,
    borderBottomRightRadius: '0px',
    borderTopRightRadius: '0px',
    borderTopLeftRadius: '10px',
    borderBottomLeftRadius: '10px',
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
    borderBottomRightRadius: '10px',
    borderTopRightRadius: '10px',
    borderTopLeftRadius: '0px',
    borderBottomLeftRadius: '0px',
    backgroundColor: '#F4F4F4',
    width: '264px',
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