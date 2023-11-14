import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Menu from "./Menu";

const Quiz = () => {
    return (
        <View style={styles.aboutContainer}>
            <Text style={styles.mainHeader}> Quiz </Text>


            <View style={styles.aboutLayout}>
                <Text style={styles.question}>Question 1 </Text>
                <Button style={styles.answer}>answer choice 1</Button>
                <Button>answer choice 2</Button>
                <Button>answer choice 3</Button>
            </View>

            <View style={styles.menuStyle}>
                <View style={styles.menuContainer}></View>
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
    );
};

const styles = StyleSheet.create({
    aboutContainer: {
        display: "flex",
        alignItems: "center",
        backgroundColor: '#1e1e1e'
    },

    question:{
        fontSize: 40,
    },
    answer: {
        fontSize: 20,
    },

    imgStyle: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    mainHeader: {
        fontSize: 50,
        color: "#ffffff",
        fontWeight: "550",
        marginTop: 50,
        marginBottom: 10,
        fontFamily: "Cabin",
    },
    paraStyle: {
        fontSize: 20,
        color: "#ffffff",
        paddingBottom: 30,
    },
    aboutLayout: {
        backgroundColor: "#0059AB",
        paddingHorizontal: 30,
        marginVertical: 30,
        borderRadius: 20,
    },
    aboutLayout2: {
        backgroundColor: "#ffc300",
        paddingHorizontal: 30,
        marginVertical: 30,
        borderRadius: 20,
    },
    aboutSubHeader: {
        fontSize: 40,
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "500",
        marginVertical: 15,
        fontFamily: "Cabin",
        alignSelf: "center",
    },
    aboutPara: {
        color: "#fff",
    },
    menuContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },

    iconStyle: {
        width: "100%",
        height: 50,
        aspectRatio: 1,
    },
});

export default Quiz;