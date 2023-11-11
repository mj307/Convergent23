import {StyleSheet, Text, TouchableOpacity, View, Image,} from "react-native";
import React from "react";
import Menu from "./Menu";

const findClassmates = () => {
    return (
        <View style={styles.findClassmatesContainer}>
            <Text style={styles.mainHeader}> Find Classmates </Text>
            <Text style={styles.paraStyle}> People to study and form groups with </Text>

            {/*<View>
                <Image
                    style={styles.imgStyle}
                    source={{
                        uri: "",
                    }}
                />
            </View>*/}

            <View style={styles.findClassmatesLayout}>
                <Text style={styles.findClassmatesSubHeader}> Find Classmates! </Text>
                <Text style={[styles.paraStyle, styles.findClassmatesPara]}>
                    add classes here
                </Text>
            </View>


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
    findClassmatesContainer: {
        display: "flex",
        alignItems: "center",
    },

    imgStyle: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    mainHeader: {
        fontSize: 18,
        color: "#344055",
        textTransform: "uppercase",
        fontWeight: "500",
        marginTop: 50,
        marginBottom: 10,
        fontFamily: "Cabin",
    },
    paraStyle: {
        fontSize: 18,
        color: "#7d7d7d",
        paddingBottom: 30,
    },
    findClassmatesLayout: {
        backgroundColor: "#4c5dab",
        paddingHorizontal: 30,
        marginVertical: 30,
    },
    findClassmatesSubHeader: {
        fontSize: 18,
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "500",
        marginVertical: 15,
        fontFamily: "cabin500",
        alignSelf: "center",
    },
    findClassmatesPara: {
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

export default findClassmates;