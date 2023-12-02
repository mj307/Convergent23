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
            <Text style={styles.mainHeader}> your classes </Text>

            <View style={styles.classContain}>
                <View style={styles.aboutLayout}>
                    <Image
                        style={styles.imgStyle}
                        source={{
                            uri: "https://img.icons8.com/ios-glyphs/190/5e5e5e/museum.png",
                        }}
                    />
                    <View>
                        <Text style={[styles.aboutHeader]}> Government </Text>
                        <Text style={[styles.aboutSubheader]}> taught by Dr. G </Text>
                    </View>
                    <View>
                        <Text style={[styles.studyGroupsHeading]}> study </Text>
                        <Text style={[styles.studyGroupsHeading]}> groups </Text>
                    </View>
                    <Image
                        style={styles.dropDown}
                        source={{
                            uri: "https://img.icons8.com/ios-glyphs/90/4e75eb/circled-chevron-right.png"
                        }}
                    />
                </View>
                <View style={styles.aboutLayout}>

                </View>
                <View style={styles.aboutLayout}>
                    <Image
                        style={styles.imgStyle}
                        source={{
                            uri: "https://img.icons8.com/ios-glyphs/190/5e5e5e/easel.png",
                        }}
                    />
                    <View>
                        <Text style={[styles.aboutHeader]}> Art History </Text>
                        <Text style={[styles.aboutSubheader]}> taught by Dr. X </Text>
                    </View>
                    <View>
                        <Text style={[styles.studyGroupsHeading]}> study </Text>
                        <Text style={[styles.studyGroupsHeading]}> groups </Text>
                    </View>
                    <Image
                        style={styles.dropDown}
                        source={{
                            uri: "https://img.icons8.com/ios-glyphs/90/4e75eb/circled-chevron-down.png"
                        }}
                    />
                </View>
                <View style={styles.aboutLayout}>
                    <Image
                        style={styles.imgStyle}
                        source={{
                            uri: "https://img.icons8.com/ios-glyphs/190/5e5e5e/book.png",
                        }}
                    />
                    <View>
                        <Text style={[styles.aboutHeader]}> Literature </Text>
                        <Text style={[styles.aboutSubheader]}> taught by Dr. U </Text>
                    </View>
                    <View>
                        <Text style={[styles.studyGroupsHeading]}> study </Text>
                        <Text style={[styles.studyGroupsHeading]}> groups </Text>
                    </View>
                    <Image
                        style={styles.dropDown}
                        source={{
                            uri: "https://img.icons8.com/ios-glyphs/90/4e75eb/circled-chevron-right.png"
                        }}
                    />
                </View>
                <View style={styles.aboutLayout}>
                    <Image
                        style={styles.imgStyle}
                        source={{
                            uri: "https://img.icons8.com/ios-glyphs/190/5e5e5e/dna-helix--v1.png",
                        }}
                    />
                    <View>
                        <Text style={[styles.aboutHeader]}> Biology </Text>
                        <Text style={[styles.aboutSubheader]}> taught by Dr. A </Text>
                    </View>
                    <View>
                        <Text style={[styles.studyGroupsHeading]}> study </Text>
                        <Text style={[styles.studyGroupsHeading]}> groups </Text>
                    </View>
                    <Image
                        style={styles.dropDown}
                        source={{
                            uri: "https://img.icons8.com/ios-glyphs/90/4e75eb/circled-chevron-right.png"
                        }}
                    />
                </View>
                <View style={styles.aboutLayout}>
                    <Image
                        style={styles.imgStyle}
                        source={{
                            uri: "https://img.icons8.com/ios-glyphs/190/5e5e5e/test-tube.png",
                        }}
                    />
                    <View>
                        <Text style={[styles.aboutHeader]}> Chemistry </Text>
                        <Text style={[styles.aboutSubheader]}> taught by Dr. W </Text>
                    </View>
                    <View>
                        <Text style={[styles.studyGroupsHeading]}> study </Text>
                        <Text style={[styles.studyGroupsHeading]}> groups </Text>
                    </View>
                    <Image
                        style={styles.dropDown}
                        source={{
                            uri: "https://img.icons8.com/ios-glyphs/90/4e75eb/circled-chevron-right.png"
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
    aboutContainer: {
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
    aboutLayout: {
        backgroundColor: "#F4F4F4",
        width: '325px',
        height: '68px',
        paddingHorizontal: 20,
        marginVertical: 10,
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center', 
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    aboutHeader: {
        fontSize: 20,
        color: "#5E5E5E",
        fontWeight: "500",
        lineHeight: "24.3px",
        alignSelf: "center",
    },
    aboutSubheader: {
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
    },
});

export default About;