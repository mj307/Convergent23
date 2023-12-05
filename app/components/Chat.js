import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import Menu from "./Menu";

const Chat = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chat}>
      <View style={styles.chatChild} />
      <Text style={styles.yourMessages}>your messages</Text>
      <View style={[styles.chatItem, styles.chatChildLayout5]} />
      <Image
        style={styles.notificationIcon}
        contentFit="cover"
        source={require("../Assets/notification.png")}
      />
      <Text style={[styles.rohanPatel, styles.rohanTypo]}>Rohan Patel</Text>
      <Text style={[styles.thisIsA, styles.thisTypo]}>
        Yay!
      </Text>
      <Image
        style={styles.dallE20231101185212PIcon}
        contentFit="cover"
        source={require("../Assets/dall-e-20231101-185212--photo-logo-design-for--learnlink--with-a-modern-and-minimalist-aesthetic-11.png")}
      />
      <Image
        style={styles.nextPageIcon}
        contentFit="cover"
        source={require("../Assets/next-page1.png")}
      />
      <View style={styles.chatInner} />
      <Image
        style={[styles.ellipseIcon, styles.chatChildLayout4]}
        contentFit="cover"
        source={require("../Assets/ellipse-341.png")}
      />
      <Image
        style={[styles.chatChild1, styles.chatChildLayout4]}
        contentFit="cover"
        source={require("../Assets/ellipse-35.png")}
      />
      <Image
        style={[styles.chatChild2, styles.chatChildLayout4]}
        contentFit="cover"
        source={require("../Assets/ellipse-35.png")}
      />
      <Image
        style={[styles.chatChild3, styles.chatChildLayout4]}
        contentFit="cover"
        source={require("../Assets/ellipse-35.png")}
      />
      <View style={[styles.rectangleView, styles.chatChild4Layout]} />
      <Text style={[styles.classes, styles.groupsTypo]}>classes</Text>
      <Text style={[styles.groups, styles.groupsTypo]}>groups</Text>
      <Text style={[styles.months, styles.groupsTypo]}>months</Text>
      <View style={[styles.chatChild4, styles.chatChild4Layout]} />
      <View style={[styles.chatChild5, styles.chatChildLayout3]} />
      <Image
        style={[styles.maleUserIcon, styles.maleIconLayout]}
        contentFit="cover"
        source={require("../Assets/male-user1.png")}
      />
      <View style={[styles.chatChild6, styles.chatChildLayout5]} />
      <Text style={[styles.rohanPatel1, styles.rohanTypo]}>Anchit N.</Text>
      <Text style={[styles.thisIsA1, styles.thisTypo]}>
        Good luck on the test!
      </Text>
      <Image
        style={[styles.nextPageIcon1, styles.nextIconPosition]}
        contentFit="cover"
        source={require("../Assets/next-page2.png")}
      />
      <Image
        style={[styles.maleUserIcon1, styles.maleIconLayout]}
        contentFit="cover"
        source={require("../Assets/male-user1.png")}
      />
      <View style={[styles.chatChild7, styles.chatChildLayout5]} />
      <Text style={[styles.rohanPatel2, styles.rohanTypo]}>Anya R.</Text>
      <Text style={[styles.thisIsA2, styles.thisTypo]}>
        See you then!
      </Text>
      <Image
        style={[styles.nextPageIcon2, styles.nextIconPosition]}
        contentFit="cover"
        source={require("../Assets/next-page2.png")}
      />
      <Image
        style={[styles.maleUserIcon2, styles.maleIconLayout]}
        contentFit="cover"
        source={require("../Assets/male-user1.png")}
      />
      <View style={[styles.chatChild8, styles.chatChildLayout5]} />
      <Text style={[styles.rohanPatel3, styles.rohanTypo]}>Asmita K.</Text>
      <Text style={[styles.thisIsA3, styles.thisTypo]}>
        Sounds good!
      </Text>
      <Image
        style={[styles.nextPageIcon3, styles.nextIconPosition]}
        contentFit="cover"
        source={require("../Assets/next-page2.png")}
      />
      <Image
        style={[styles.maleUserIcon3, styles.maleIconLayout]}
        contentFit="cover"
        source={require("../Assets/male-user1.png")}
      />
      <View style={[styles.chatChild9, styles.chatChildLayout5]} />
      <Text style={[styles.rohanPatel4, styles.rohanTypo]}>Mehar P.</Text>
      <Text style={[styles.thisIsA4, styles.thisTypo]}>
        Thanks!
      </Text>
      <Image
        style={[styles.nextPageIcon4, styles.nextIconPosition]}
        contentFit="cover"
        source={require("../Assets/next-page2.png")}
      />
      <Image
        style={[styles.maleUserIcon4, styles.maleIconLayout]}
        contentFit="cover"
        source={require("../Assets/male-user1.png")}
      />
      <Image
        style={styles.maleUserIcon5}
        contentFit="cover"
        source={require("../Assets/male-user.png")}
      />
      <Image
        style={[styles.femaleProfileIcon, styles.femaleIconPosition]}
        contentFit="cover"
        source={require("../Assets/female-profile.png")}
      />
      <Image
        style={[styles.femaleProfileIcon1, styles.femaleIconPosition]}
        contentFit="cover"
        source={require("../Assets/female-profile1.png")}
      />
      <View style={styles.chatChild10} />
      <Text style={styles.viewDetails}>view details</Text>
      <Text style={[styles.courseLearningStyle, styles.seniorAtUtTypo]}>{`course
learning style
next meeting`}</Text>
      <Text
        style={[styles.seniorAtUt, styles.seniorAtUtTypo]}
      >{`senior at ut austin
learning style`}</Text>
      <Text style={[styles.groups1, styles.groups1Typo]}>groups</Text>
      <View style={[styles.chatChild11, styles.chatChildLayout3]} />
      <Text style={[styles.profile, styles.groups1Typo]}>profile</Text>
      <Text style={styles.text}>1</Text>
      <Image
        style={[styles.chatChild12, styles.chatChildLayout1]}
        contentFit="cover"
        source={require("../Assets/ellipse-40.png")}
      />
      <Text style={[styles.text1, styles.textTypo]}>25</Text>
      <Image
        style={[styles.chatChild13, styles.chatChildLayout1]}
        contentFit="cover"
        source={require("../Assets/ellipse-40.png")}
      />
      <Text style={[styles.text2, styles.textTypo]}>6</Text>
      <Image
        style={[styles.chatChild14, styles.chatChildLayout1]}
        contentFit="cover"
        source={require("../Assets/ellipse-40.png")}
      />
      <Text style={[styles.text3, styles.textTypo]}>3</Text>
      <View style={[styles.chatChild15, styles.chatChildLayout]} />
      <Text style={[styles.biology, styles.biologyTypo]}>biology</Text>
      <Image
        style={[styles.dnaHelixIcon, styles.dnaIconLayout]}
        contentFit="cover"
        source={require("../Assets/dna-helix2.png")}
      />
      <View style={[styles.chatChild16, styles.chatChildLayout]} />
      <Text style={[styles.biology1, styles.biologyTypo]}>biology</Text>
      <Image
        style={[styles.dnaHelixIcon1, styles.dnaIconLayout]}
        contentFit="cover"
        source={require("../Assets/dna-helix2.png")}
      />
      <Text style={[styles.taughtByDr, styles.taughtTypo]}>
        taught by dr. x
      </Text>
      <Text style={[styles.taughtByDr1, styles.taughtTypo]}>
        taught by dr. x
      </Text>
        <View style={styles.menuContainer}>
            <Menu />
        </View>

    </View>
  );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f5f5dc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        color: 'black',
        marginBottom: 20,
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    loginButton: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },

  chatChildLayout5: {
    height: 68,
    width: 325,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
    left: 33,
    position: "absolute",
  },
  rohanTypo: {
    height: 23,
    width: 110,
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_xl,
    left: 100,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  thisTypo: {
    height: 16,
    width: 181,
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_3xs,
    left: 100,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  chatChildLayout4: {
    height: 10,
    width: 10,
    top: 430,
    position: "absolute",
  },
  chatChild4Layout: {
    width: 144,
    top: 291,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  groupsTypo: {
    width: 46,
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_5xs,
    top: 369,
    textAlign: "center",
    fontWeight: "500",
    position: "absolute",
  },
  chatChildLayout3: {
    height: 31,
    width: 144,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  maleIconLayout: {
    height: 50,
    left: 42,
    width: 50,
    position: "absolute",
  },
  nextIconPosition: {
    left: 296,
    width: 61,
    height: 40,
    position: "absolute",
  },
  femaleIconPosition: {
    top: 302,
    height: 20,
    position: "absolute",
  },
  seniorAtUtTypo: {
    color: Color.colorDimgray_100,
    fontStyle: "italic",
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    position: "absolute",
  },
  groups1Typo: {
    width: 96,
    fontSize: FontSize.size_sm,
    color: Color.colorDimgray_100,
    textAlign: "center",
    fontWeight: "500",
    position: "absolute",
  },
  chatChildLayout1: {
    height: 35,
    width: 35,
    top: 330,
    position: "absolute",
  },
  textTypo: {
    top: 336,
    width: 26,
    color: Color.colorRoyalblue,
    textAlign: "center",
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    position: "absolute",
  },
  chatChildLayout: {
    width: 129,
    borderRadius: Border.br_8xs,
    left: 52,
    height: 20,
    backgroundColor: Color.colorWhitesmoke,
    position: "absolute",
  },
  biologyTypo: {
    left: 80,
    width: 46,
    fontSize: FontSize.size_5xs,
    color: Color.colorDimgray_200,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  dnaIconLayout: {
    height: 15,
    width: 13,
    left: 62,
    position: "absolute",
  },
  taughtTypo: {
    textAlign: "right",
    fontSize: FontSize.size_7xs,
    left: 136,
    color: Color.colorDarkgray_100,
    width: 40,
    fontWeight: "500",
    position: "absolute",
  },
  iconLayout: {
    height: 25,
    width: 25,
    bottom: 20, // Set this value to position the icons from the bottom
    position: "absolute",
  },
  homePosition: {
    height: "37.88%",
    width: "7.81%",
    bottom: "7.58%",
    top: "54.55%",
    position: "absolute",
  },
  groupChildPosition: {
    top: "0%",
    position: "absolute",
  },
  chatChild: {
    // Example adjustment: make sure the width is sufficient and centered 
    top: 152,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    height: 693,
    width: 390,
    alignSelf: 'center', // Center the box itself
    alignItems: 'center', // Center its children horizontally
    justifyContent: 'center',
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
    paddingLeft: 0,
    marginLeft: 0,
    width: '100%', 
  },
  screenshot20231111At1221: {
    left: -430,
  },
  screenshot20231111At1223: {
    left: 0,
    height: 802,
  },
  screenshot20231111At1225: {
    left: 430,
    width: 726,
    height: 544,
    top: 890,
    position: "absolute",
  },
  screenshot20231111At1226: {
    top: 1665,
    left: 859,
    width: 821,
    height: 614,
    position: "absolute",
  },
  screenshot20231111At1228: {
    left: 1290,
    width: 391,
  },
  screenshot20231111At1229: {
    left: 1720,
    width: 390,
  },
  yourMessages: {
    top: 90,
    left: 40,
    fontSize: FontSize.size_11xl,
    color: Color.colorGray,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  chatItem: {
    top: 171,
  },
  notificationIcon: {
    top: 24,
    left: 322,
    height: 40,
    width: 40,
    position: "absolute",
  },
  rohanPatel: {
    top: 183,
  },
  thisIsA: {
    top: 210,
  },
  dallE20231101185212PIcon: {
    top: 19,
    left: 32,
    height: 45,
    width: 50,
    position: "absolute",
  },
  nextPageIcon: {
    top: 174,
    height: 61,
    left: 307,
    width: 40,
    position: "absolute",
  },
  chatInner: {
    top: 248,
    height: 202,
    width: 325,
    left: 33,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  ellipseIcon: {
    left: 244,
  },
  chatChild1: {
    left: 259,
  },
  chatChild2: {
    left: 275,
  },
  chatChild3: {
    left: 291,
  },
  rectangleView: {
    height: 149,
    left: 45,
  },
  classes: {
    left: 94,
  },
  groups: {
    left: 142,
  },
  months: {
    left: 46,
  },
  chatChild4: {
    height: 128,
    left: 201,
  },
  chatChild5: {
    top: 254,
    left: 201,
  },
  maleUserIcon: {
    top: 179,
  },
  chatChild6: {
    top: 460,
  },
  rohanPatel1: {
    top: 472,
  },
  thisIsA1: {
    top: 499,
  },
  nextPageIcon1: {
    top: 474,
    width: 61,
  },
  maleUserIcon1: {
    top: 468,
  },
  chatChild7: {
    top: 536,
  },
  rohanPatel2: {
    top: 548,
  },
  thisIsA2: {
    top: 575,
  },
  nextPageIcon2: {
    top: 550,
    width: 61,
  },
  maleUserIcon2: {
    top: 544,
  },
  chatChild8: {
    top: 612,
  },
  rohanPatel3: {
    top: 624,
  },
  thisIsA3: {
    top: 651,
  },
  nextPageIcon3: {
    top: 626,
    width: 61,
  },
  maleUserIcon3: {
    top: 620,
  },
  chatChild9: {
    top: 687,
  },
  rohanPatel4: {
    top: 699,
  },
  thisIsA4: {
    top: 726,
  },
  nextPageIcon4: {
    top: 701,
    width: 61,
  },
  maleUserIcon4: {
    top: 695,
  },
  maleUserIcon5: {
    top: 322,
    height: 20,
    width: 23,
    left: 307,
    position: "absolute",
  },
  femaleProfileIcon: {
    left: 287,
    width: 22,
  },
  femaleProfileIcon1: {
    width: 23,
    top: 302,
    left: 307,
  },
  chatChild10: {
    top: 391,
    left: 209,
    width: 132,
    height: 21,
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.colorRoyalblue,
  },
  viewDetails: {
    left: 230,
    color: Color.colorWhite,
    width: 88,
    top: 395,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    position: "absolute",
  },
  courseLearningStyle: {
    top: 341,
    left: 218,
    width: 61,
    textAlign: "left",
  },
  seniorAtUt: {
    top: 298,
    width: 120,
    left: 56,
    textAlign: "center",
  },
  groups1: {
    top: 260,
    left: 225,
  },
  chatChild11: {
    top: 253,
    left: 45,
  },
  profile: {
    top: 259,
    left: 69,
  },
  text: {
    left: 210,
    fontSize: FontSize.size_21xl,
    width: 26,
    color: Color.colorRoyalblue,
    textAlign: "center",
    top: 291,
    fontWeight: "500",
    position: "absolute",
  },
  chatChild12: {
    left: 52,
    height: 35,
    width: 35,
    top: 330,
  },
  text1: {
    left: 56,
  },
  chatChild13: {
    left: 99,
    height: 35,
    width: 35,
    top: 330,
  },
  text2: {
    left: 103,
  },
  chatChild14: {
    left: 146,
    height: 35,
    width: 35,
    top: 330,
  },
  text3: {
    left: 150,
  },
  chatChild15: {
    top: 389,
  },
  biology: {
    top: 394,
  },
  dnaHelixIcon: {
    top: 392,
  },
  chatChild16: {
    top: 411,
  },
  biology1: {
    top: 416,
  },
  dnaHelixIcon1: {
    top: 414,
  },
  taughtByDr: {
    top: 395,
  },
  taughtByDr1: {
    top: 417,
  },
  menuContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%', // Full width of the screen
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  menuItemStyle: {
    // Example style for individual menu items
    // Adjust padding or margin to increase space between items
    marginHorizontal: 10, // Adjust as needed
  },
  chat: {
    flex: 1,
    height: 800,
    backgroundColor: Color.colorRoyalblue,
    width: "100%",
  },
});

export default Chat;
