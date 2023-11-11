import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Menu from "./Menu";

const Home = (props) => {
    const description =
        "your groups";

    return (
        <View style={styles.mainContainer}>
            <View style={styles.homeTop}>
                    {/*<Image
                        style={styles.headerImage}
                        resizeMode="contain"
                        source={require("../../assets/logo.jpeg")}
                    />*/}
            </View>
            <Text style={styles.mainHeader}>welcome back,</Text>
                <Text
                    style={[
                        styles.mainHeader,
                        {
                            fontSize: 60,
                            color: "#FBFDFF",
                            marginTop: 0,
                            fontFamily: "Cabin"
                        },
                    ]}>
                    Matias
                </Text>

            <Text style={styles.paraStyle}>{description} </Text>

            <View style={styles.menuStyle}>
                <View style={styles.lineStyle}></View>
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
    mainContainer: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        backgroundColor: "#0059AB",
        textAlign: "center",
    },

    homeTop: {
        // height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
    },

    headerImage: {
        height: undefined,
        width: "100%",
        aspectRatio: 1,
        display: "flex",
        alignItems: "stretch",
        marginTop: 50,
        borderRadius: 20,
    },

    mainHeader: {
        fontSize: 30,
        color: "white",
        fontFamily: "Cabin",
    },

    paraStyle: {
        textAlign: "left",
        fontSize: 19,
        color: "#7d7d7d",
        marginTop: 30,
        paddingBottom: 50,
        lineHeight: 26,
        fontFamily: "JosefinSans_400Regular",
    },

    lineStyle: {
        marginBottom: 10,
        borderWidth: 0.5,
        borderColor: "grey",
    },
});

export default Home;