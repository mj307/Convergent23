import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import Menu from "./Menu";


const Contact = ({ navigation }) => {
    const [classCode, setClassCode] = useState('');

    const [agree, setAgree] = useState(false);

    const submit = () => {
        if (!classCode) {
            Alert.alert("Please fill all the fields");
        } else {
            Alert.alert(`Thank You`);
            navigation.navigate("Home");
        }
    };

    return (
        <View style={styles.mainContainer}>


            <View style={styles.inputContainer}>
                <TextInput
                style={styles.input}
                placeholder="Class Code"
                value={classCode}
                onChangeText={text => setClassCode(text)}
                />
            </View>

            <TouchableOpacity
                style={[
                    styles.buttonStyle,
                    {
                        backgroundColor: agree ? "#0059AB" : "#0059AB",
                    },
                ]}
                disabled={!agree}
                onPress={submit}>
                <Text style={styles.buttonText}> Enter </Text>
            </TouchableOpacity>

            
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        paddingHorizontal: 30,
        backgroundColor: "#fff",
    },
    mainHeader: {
        fontSize: 20,
        color: "#344055",
        fontWeight: "500",
        paddingTop: 20,
        paddingBottom: 15,
        fontFamily: "JosefinSans_500Medium",
        textTransform: "capitalize",
    },
    description: {
        fontSize: 20,
        color: "#7d7d7d",
        paddingBottom: 20,
        fontFamily: "JosefinSans_400Light",
        lineHeight: 25,
    },

    inputContainer: {
        marginTop: 20,
        backgroundColor: "#d9d9d9"
    },
    labels: {
        fontWeight: "bold",
        // fontSize: 15,
        color: "#7d7d7d",
        paddingBottom: 5,
        fontFamily: "JosefinSans_300Light",
        lineHeight: 25,
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.3)",
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderRadius: 2,
    },
    multiineStyle: {
        paddingVertical: 4,
    },
    buttonStyle: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 18,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 30,
    },
    buttonText: {
        color: "#eee",
    },
    wrapper: {
        display: "flex",
        flexDirection: "row",
        marginTop: 20,
        fontFamily: "JosefinSans_300Light",
    },
    wrapperText: {
        marginLeft: 10,
        color: "#7d7d7d",
        fontFamily: "JosefinSans_300Light",
    },
});

export default Contact;