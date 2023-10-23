import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

class SideMenu extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
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
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        marginVertical: 20, // Add margin to move content down
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
