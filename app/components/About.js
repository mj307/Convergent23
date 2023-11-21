import {
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
} from "react-native";
import React from "react";
import Menu from "./Menu";
// import {
//     Cabin
// } from  "@fontsource/cabin";


const About = () => {
    return (
        <View style={styles.aboutContainer}>
            <Text style={styles.mainHeader}> My Classes </Text>

            <View style={styles.aboutLayout}>
                <Text style={[styles.aboutSubHeader]}> GOV 310L </Text>
            </View>

            <View style={styles.aboutLayout2}>
                <Text style={[styles.aboutSubHeader]}> ARH 302 </Text>
            </View>

            <View style={styles.menuStyle}>
                <View style={styles.menuContainer}></View>
                <Menu />
            </View>
            </View>
    )
}
                    
    const styles = StyleSheet.create({
    mainHeader: {
        fontSize: 50,
        color: "#ffffff",
        fontWeight: "550",
        marginTop: 50,
        marginBottom: 10,
        fontFamily: "Cabin",
        alignItems: "center",
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
        alignItems: "center",
    },
    aboutLayout2: {
        backgroundColor: "#ffc300",
        paddingHorizontal: 30,
        marginVertical: 30,
        borderRadius: 20,
        alignItems: "center",
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

export default About;