import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Menu from "./Menu";


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
      
      <Image source={require('./Assets/LearnLink_Logo_White.png')}/>
    
      <Text style={styles.title}>sign in</Text>

      <View style={styles.popupcontainer}>
        
        <Image
            style={styles.inputImage}
            source={{ uri: 'https://c.animaapp.com/Rl7tNbDQ/img/female-profile-2@2x.png' }}
          />
        <TextInput
          style={styles.input}
          placeholder=""
          value={classCode}
          onChangeText={text => setClassCode(text)}
        />
        <TextInput
          style={styles.input}
          placeholder=""
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder=""
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.SigninButton} onPress={handleSignin}>
            <Text style={styles.SigninButtonText}>log in</Text>
        </TouchableOpacity>
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
  popupcontainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    width: '80%',
    padding: '20px',
  },
  title: {
    fontSize: 50,
    color: 'white',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',

  },
  inputImage: {
    borderColor: 'white',
    backgroundColor: '#F4F4F4',
  },
  input: {
    height: 40,
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
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Signin;
