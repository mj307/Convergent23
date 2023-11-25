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

const Messages = () => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}> your messages </Text>

            <View style={styles.classContain}>
                <View style={styles.messageLayout}>
                    <Image
                        style={styles.imgStyle}
                        source={{
                            uri: "https://img.icons8.com/material/190/5e5e5e/user-male-circle--v1.png",
                        }}
                    />
                    <View>
                        <Text style={[styles.messageHeader]}> Rohan Patel </Text>
                        <Text style={[styles.messageSubheader]}> Yo .... </Text>
                    </View>
                    <View>
                    </View>
                    <Image
                        style={styles.dropDown}
                        source={{
                            uri: "https://img.icons8.com/ios-glyphs/90/4e75eb/circled-chevron-right.png"
                        }}
                    />
                </View>
                <View style={styles.messageLayout}>
                    <Image
                        style={styles.imgStyle}
                        source={{
                            uri: "https://img.icons8.com/material/190/5e5e5e/user-male-circle--v1.png",
                        }}
                    />
                    <View>
                        <Text style={[styles.messageHeader]}> Rohan Patel </Text>
                        <Text style={[styles.messageSubheader]}> ... </Text>
                    </View>
                    <View>
                    </View>
                    <Image
                        style={styles.dropDown}
                        source={{
                            uri: "https://img.icons8.com/ios-glyphs/90/4e75eb/circled-chevron-right.png"
                        }}
                    />
                </View>
                <View style={styles.messageLayout}>
                    <Image
                        style={styles.imgStyle}
                        source={{
                            uri: "https://img.icons8.com/material/190/5e5e5e/user-female-circle--v1.png",
                        }}
                    />
                    <View>
                        <Text style={[styles.messageHeader]}> Rohan Patel </Text>
                        <Text style={[styles.messageSubheader]}> meet at pcl @ 3:00 ? </Text>
                    </View>
                    <View>
                    </View>
                    <Image
                        style={styles.dropDown}
                        source={{
                            uri: "https://img.icons8.com/ios-glyphs/90/4e75eb/circled-chevron-down.png"
                        }}
                    />
                </View>

                <View style={styles.menuContainer}>
                    <Menu />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        flex: 1,
        backgroundColor: '#4E75EB',
        justifyContent: 'center',
        alignItems: 'center',
    },

    imgStyle: {
        width: 42,
        height: 42,
    },

    mainHeader: {
        fontSize: 30,
        color: "#ffffff",
        fontWeight: "550",
        marginTop: 50,
        marginBottom: 10,
        alignContent: 'flex-end',
    },
    classContain: {
        width: '390px',
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: '10px',
    },
    messageLayout: {
        backgroundColor: "#F4F4F4",
        width: '325px',
        height: '68px',
        paddingHorizontal: 20,
        marginVertical: 20,
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center', 
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    messageHeader: {
        fontSize: 20,
        color: "#5E5E5E",
        fontWeight: "500",
        lineHeight: "24.3px",
        alignSelf: "center",
    },
    messageSubheader: {
        fontSize: 12,
        color: "#B3B3B3",
        fontWeight: "500",
        lineHeight: "14.58px",
        marginVertical: 5,
        alignSelf: "center",
    },
    studyGroupsHeading: {
        fontSize: 12,
        color: "#5E5E5E",
        fontWeight: "500",
        lineHeight: '14.58px',
    },
    dropDown: {
        width: 42,
        height: 42,

    },
    menuContainer: {
        marginTop: '20px',
        width: "320px",
        height: '60px',
        justifyContent: "space-evenly",
    },

    iconStyle: {
        width: "100%",
        height: 50,
        aspectRatio: 1,
    }
});

export default Messages;