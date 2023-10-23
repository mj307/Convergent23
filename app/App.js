/*import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {db, auth} from "./Firebase.js"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class SideMenu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.menuHeader}>
                    <Text style={styles.headerText}>Side Menu</Text>
                </View>
                <View style={styles.menuItems}>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text>About Us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text>Services</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text>Contact Us</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        borderRightWidth: 1,
        borderColor: '#DDD',
    },
    menuHeader: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#DDD',
    },
    headerText: {
        fontSize: 20,
    },
    menuItems: {
        flex: 1,
        paddingTop: 20,
    },
    menuItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#DDD',
    },
});

export default SideMenu;
