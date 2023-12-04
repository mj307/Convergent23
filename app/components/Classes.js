import {
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    ImageBackground,
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
            <View style={styles.headercontainer}>
                
                <Text style={styles.mainHeader}> your classes </Text>
                <Image
                    style={styles.plusicon}
                    source={{
                    uri: "https://img.icons8.com/ios-glyphs/90/FFFFFF/plus--v1.png",
                }}/>
            </View>
            
            

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
                <View style={styles.aboutLayout2}>
                    <View>
                        <View style={[styles.headercontainer]}>
                        <View style={[styles.whitebox]}>
                            <View style={[styles.headercontainer]}>
                                <Text style={styles.bigNum}>1</Text>
                                <View style={styles.space2} />
                                <Text style={styles.imgtxt2}>visual{'\n'}
                                PCL</Text>
                            </View>
                            
                            <ImageBackground style = {styles.dashimg}
                            source={require('../Assets/ClassesDash.png')}>
                                <View style={styles.overlay}>
                                    <Text style={styles.imgnumtxt}>3</Text>
                                    <Text style={styles.imgtxt}>spots left</Text>
                                </View>
                            </ImageBackground>
                            
                            <View style={[styles.asktojoin]}>
                                <Text style={[styles.asktojointxt]}> ask to join</Text>
                            </View>
                        </View>
                        
                        <View style={[styles.whitebox]}>
                            <View style={[styles.headercontainer]}>
                                <Text style={styles.bigNum}>1</Text>
                                <View style={styles.space2} />
                                <Text style={styles.imgtxt2}>visual{'\n'}
                                Welch</Text>
                            </View>
                            
                            <ImageBackground style = {styles.dashimg}
                            source={require('../Assets/ClassesDash.png')}>
                                <View style={styles.overlay}>
                                    <Text style={styles.imgnumtxt}>5</Text>
                                    <Text style={styles.imgtxt}>spots left</Text>
                                </View>
                            </ImageBackground>
                            
                            <View style={[styles.asktojoin]}>
                                <Text style={[styles.asktojointxt]}> ask to join</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.headercontainer2]}>
                        <Image style = {styles.imgSmall}
                            source={require('../Assets/ellipse-341.png')}/>
                        <Image style = {styles.imgSmall}
                            source={require('../Assets/ellipse-35.png')}/>
                        <Image style = {styles.imgSmall}
                            source={require('../Assets/ellipse-35.png')}/>
                        <Image style = {styles.imgSmall}
                            source={require('../Assets/ellipse-35.png')}/>
                    </View>
                    </View>
                    
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
    topbar: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Aligns items at each end of the container
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 50, // Optional: Add horizontal padding for spacing from the edges
      },
      icon: {
        width: 30, // Adjust the width as needed
        height: 30, // Adjust the height as needed
        // Add additional styles for the icons as needed
      },
      space: {
        width: 280, // Adjust the width for the space between the images
      },
      space2: {
        width: 75, // Adjust the width for the space between the images
      },
    headercontainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headercontainer2: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    plusicon: {
        marginRight: 10,
        width: 30,
        height: 30,
        marginTop: 10,
        marginBottom: 20,
        // Add additional styles for the icon as needed
      },
      whitebox: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginLeft: 5,
        marginRight: 5,
        paddingTop: 2,
        padding: 8,
      },
      bigNum: {
        color: '#4E75EB',
        fontSize: 40,
    },
    imgtxt2: {
        color: '#666666',
        fontSize: 8,
        textAlign: 'right',
    },
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
    imgSmall: {
        width: 10,
        height: 10,
        marginLeft: 2,
        marginRight: 2,
    },
    dashimg: {
        marginLeft: 20,
        marginTop: -25,
        width: 109,
        height: 109,
        marginBottom: -25,
    },

    mainHeader: {
        fontSize: 30,
        color: "#ffffff",
        fontWeight: "550",
        marginTop: 10,
        marginBottom: 20,
        alignContent: 'flex-end',
    },
    asktojoin: {
        backgroundColor: '#4E75EB',
        width: 132,
        height: 21,
        borderRadius: 10,
    },
    asktojointxt: {
        color: 'white',
        fontSize: 10,
        padding: 3,
        textAlign: 'center',
    },
    imgtxt: {
        color: '#666666',
        fontSize: 8,
    },
    imgnumtxt: {
        color: '#4E75EB',
        fontSize: 15,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.0)', // Adjust the alpha (last value) for transparency
        justifyContent: 'center',
        alignItems: 'center',
      },
    classContain: {
        width: 425,
        backgroundColor: 'white',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 10,
        marginBottom: -55,
    },
    aboutLayout: {
        backgroundColor: "#F4F4F4",
        width: 325,
        height: 68,
        paddingHorizontal: 20,
        marginVertical: 10,
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center', 
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    aboutLayout2: {
        backgroundColor: "#F4F4F4",
        width: 325,
        paddingVertical: 10,
        paddingHorizontal: 5,
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
        lineHeight: 24.3,
        alignSelf: "center",
    },
    aboutSubheader: {
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

export default About;