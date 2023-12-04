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
            <View style={styles.topbar}>
                <Image style = {styles.imgStyle}
                    source={require('../Assets/LearnLink_Logo_White.png')}/>
                    {/* Add some space between the images */}
                    <View style={styles.space} />
                    <Image
                    style={styles.imgStyle}
                    source={{ uri: 'https://c.animaapp.com/Rl7tNbDQ/img/notification@2x.png' }}
                    />
            </View>
            <View style={styles.topContain}>
                <Text style={[styles.SectionHeader]}>you're more productive studying
                {'\n'}in silence.
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
                
                
                <View style={styles.GroupRecs}>
                <View style={styles.ClassmateLayout}>
                        <View>
                            <View styles={styles.GroupRecs}>
                                <Text style={[styles.ClassmateHeader]}> 1 </Text>
                            </View>
                            
                            <Text style={[styles.ClassmateSubheader]}> visual </Text>
                            <Text style={[styles.ClassmateSubheader]}> PCL Thursdays @ 4 </Text>
                        </View>

                        
                    </View>
                    <View style={styles.ClassmateLayout}>
                        <View>
                            <Text style={[styles.ClassmateHeader]}> 2 </Text>
                            <Text style={[styles.ClassmateSubheader]}> visual </Text>
                            <Text style={[styles.ClassmateSubheader]}> Welch Monday @ 6 </Text>
                        </View>
                    </View>
            </View>
                    
                <Text style={[styles.SectionHeader]}> suggested friends </Text>
                
                
                <View style={styles.GroupRecs}>
                <View style={styles.FriendLayout}>
                        <View>
                        <Image
                        style={styles.imgStyle}
                            source={require("../Assets/female-profile.png")}
                        />
                            
                            <Text style={[styles.ClassmateSubheader]}> 
                            rohan patel{'\n'} 
                            60% similarity {'\n'}
                            biology
                            </Text>
                        </View>

                        
                    </View>
                    <View style={styles.FriendLayout}>
                        <View>
                        <Image
                        style={styles.imgStyle}
                            source={require("../Assets/female-profile.png")}
                        />
                            <Text style={[styles.ClassmateSubheader]}> 
                            rohan patel{'\n'} 
                            60% similarity {'\n'}
                            biology
                            </Text>
                        </View>

                        
                    </View>
                    <View style={styles.FriendLayout}>
                        <View>
                        <Image
                        style={styles.imgStyle}
                            source={require("../Assets/female-profile.png")}
                        />
                            <Text style={[styles.ClassmateSubheader]}> 
                            rohan patel{'\n'} 
                            60% similarity {'\n'}
                            biology
                            </Text>
                        </View>
                    
                </View>
                </View>
                    <View style={styles.menuContainer}>
                    <Menu />
                    </View>
            </View>

               
            </View>
    );
                    }


const styles = StyleSheet.create({
    topbar: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Aligns items at each end of the container
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 20, // Optional: Add horizontal padding for spacing from the edges
    },
    imgStyle: {
        width: 42,
        height: 42,
    },
    space: {
        width: 280, // Adjust the width for the space between the images
    },
    headercontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ClassmateContainer: {
        display: "flex",
        flex: 2,
        backgroundColor: '#4E75EB',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bigNum: {
        color: '#4e75eb',
        fontSize: 100,
    },
    GroupRecs: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // marginVertical: 20,
        // borderRadius: 20,
        //display: 'flex',
        //alignItems: 'center', 
        //position: 'relative',
        flex: 1,
    },

    imgStyle: {
        width: 42,
        height: 42,
    },

    SectionHeader: {
        fontSize: 20,
        marginTop: 10,
        color: "#A3A3A3",
        fontWeight: "500",
        lineHeight: 24.3,
    },

    DarkerSectionHeader: {
        fontSize: 20,
        color: "#434343",
        fontWeight: "500",
        lineHeight: 24.3,
    },

    mainHeader: {
        fontSize: 30,
        color: "#ffffff",
        fontWeight: "550",
        marginTop: 30,
        marginBottom: 10,
        alignContent: 'flex-end',
        textAlign: 'left',
    },
    classContain: {
        width: 425,
        height: 510,
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        marginBottom: -40,
    },
    topContain: {
        width: 332,
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 30,
        padding: 20,
    },
    ClassmateLayout: {
        margin: 10,
        backgroundColor: "#F4F4F4",
        paddingHorizontal: 20,
        marginVertical: 0,
        borderRadius: 20,
        width: 175,
        height: 132,
        display: 'flex',
        alignItems: 'center', 
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    FriendLayout: {
        margin: 10,
        backgroundColor: "#F4F4F4",
        paddingHorizontal: 20,
        marginVertical: 20,
        borderRadius: 20,
        width: 110,
        height: 137,
        display: 'flex',
        alignItems: 'center', 
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ClassmateHeader: {
        fontSize: 40,
        color: "#4E75EB",
        fontWeight: "500",
        lineHeight: 48.6,
        alignSelf: "center",
    },
    ClassmateSubheader: {
        fontSize: 12,
        color: "#B3B3B3",
        fontWeight: "500",
        lineHeight: 14.58,
        marginVertical: 5,
        alignSelf: "center",
    },
    studyGroupsHeading: {
        fontSize: 12,
        color: "#5E5E5E",
        fontWeight: "500",
        lineHeight: 14.58,
    },
    dropDown: {
        width: 42,
        height: 42,

    },
    menuContainer: {
        marginTop: 20,
        width: 320,
        height: 60,
        justifyContent: "space-evenly",
    },

    iconStyle: {
        width: "100%",
        height: 50,
        aspectRatio: 1,
    },
});

export default Contact;