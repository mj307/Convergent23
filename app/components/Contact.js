import {
    Linking,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    Image,
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
        <View style={styles.ClassmateContainer}>
            <View style={styles.topContain}>
                <Text style={[styles.SectionHeader]}>you're 20x more productive
                {'\n'}by taking notes on the materials.
                </Text>
                <Text style={[styles.bigNum]}>
                    56%
                </Text>
                <Text style={[styles.DarkerSectionHeader]}> of students share this with you!
                </Text>
            </View>

            <Text style={styles.mainHeader}> your results </Text>

            <View style={styles.classContain}>
                <Text style={[styles.SectionHeader]}> suggested groups </Text>
                <View styles={styles.GroupRecs}>
                    <View style={styles.ClassmateLayout}>
                        <View>
                            <Text style={[styles.ClassmateHeader]}> Government </Text>
                            <Text style={[styles.ClassmateSubheader]}> visual </Text>
                            <Text style={[styles.ClassmateSubheader]}> PCL Thursdays @ 4 </Text>
                        </View>

                        <Image
                            style={styles.dropDown}
                            source={{
                                uri: "https://img.icons8.com/ios-glyphs/90/4e75eb/circled-chevron-down.png"
                            }}
                        />
                    </View>
                    <View style={styles.ClassmateLayout}>
                        <View>
                            <Text style={[styles.ClassmateHeader]}> Biology </Text>
                            <Text style={[styles.ClassmateSubheader]}> visual </Text>
                            <Text style={[styles.ClassmateSubheader]}> Welch Monday @ 6 </Text>
                        </View>
                        <Image
                            style={styles.dropDown}
                            source={{
                                uri: "https://img.icons8.com/ios-glyphs/90/4e75eb/circled-chevron-down.png"
                            }}
                        />
                    </View>
                </View>

                <Text style={[styles.SectionHeader]}> suggested friends </Text>

                <View style={styles.menuContainer}>
                    <Menu />
                </View>
            </View>
        </View>
    );
                    }


const styles = StyleSheet.create({
    ClassmateContainer: {
        display: "flex",
        flex: 2,
        backgroundColor: '#4E75EB',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bigNum: {
        color: '#4e75eb',
        fontSize: '100px',
    },
    GroupRecs: {
        paddingHorizontal: 20,
        marginVertical: 20,
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center', 
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },

    imgStyle: {
        width: 42,
        height: 42,
    },

    SectionHeader: {
        fontSize: 20,
        color: "#A3A3A3",
        fontWeight: "500",
        lineHeight: "24.3px",
    },

    DarkerSectionHeader: {
        fontSize: 20,
        color: "#434343",
        fontWeight: "500",
        lineHeight: "24.3px",
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
    topContain: {
        width: '332px',
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: '30px',
        padding: '20px',
    },
    ClassmateLayout: {
        backgroundColor: "#F4F4F4",
        width: '325px',
        height: '75px',
        paddingHorizontal: 20,
        marginVertical: 20,
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center', 
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: "center",
    },
    ClassmateHeader: {
        fontSize: 20,
        color: "#5E5E5E",
        fontWeight: "500",
        lineHeight: "24.3px",
        alignSelf: "center",
    },
    ClassmateSubheader: {
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

export default Contact;