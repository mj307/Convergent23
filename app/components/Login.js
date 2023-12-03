import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Menu from "./Menu";
import {useNavigation} from "@react-navigation/native";
import QuizQuestion1 from "./QuizQuestion1";

const Login = () => {
  const [classCode, setClassCode] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Add your login logic here
    navigation.navigate(QuizQuestion1)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to LearnLink</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Class Code"
          value={classCode}
          onChangeText={text => setClassCode(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Username (utexas.edu email)"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5dc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: 'black',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Login;