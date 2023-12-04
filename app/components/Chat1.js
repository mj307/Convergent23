import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Chat1 = () => {
  return (
    <View style={styles.chat}>
      <View style={styles.chatChild} />
      <Text style={styles.yourMessages}>your messages</Text>
      <View style={[styles.chatItem, styles.chatChildLayout6]} />
      <Image
        style={styles.notificationIcon}
        contentFit="cover"
        source={require("../Assets/notification.png")}
      />
      <Text style={[styles.rohanPatel, styles.rohanTypo]}>rohan patel</Text>
      <Text style={[styles.thisIsA, styles.thisTypo]}>
        this is a snippet of the last message ...
      </Text>
      <View style={styles.chatInner} />
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
      <View style={styles.rectangleView} />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../Assets/ellipse-28.png")}
      />
      <Image
        style={[styles.homeIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../Assets/home.png")}
      />
      <Image
        style={[styles.settingsIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../Assets/settings.png")}
      />
      <Image
        style={[styles.bookIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../Assets/book.png")}
      />
      <Image
        style={[styles.userIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../Assets/user.png")}
      />
      <Image
        style={styles.plusMathIcon}
        contentFit="cover"
        source={require("../Assets/plus-math.png")}
      />
      <Image
        style={[styles.chatChild1, styles.chatChildLayout5]}
        contentFit="cover"
        source={require("../Assets/ellipse-341.png")}
      />
      <Image
        style={[styles.chatChild2, styles.chatChildLayout5]}
        contentFit="cover"
        source={require("../Assets/ellipse-35.png")}
      />
      <Image
        style={[styles.chatChild3, styles.chatChildLayout5]}
        contentFit="cover"
        source={require("../Assets/ellipse-35.png")}
      />
      <Image
        style={[styles.chatChild4, styles.chatChildLayout5]}
        contentFit="cover"
        source={require("../Assets/ellipse-35.png")}
      />
      <View style={[styles.chatChild5, styles.chatChildLayout4]} />
      <Text style={[styles.classes, styles.groupsTypo]}>classes</Text>
      <Text style={[styles.groups, styles.groupsTypo]}>groups</Text>
      <Text style={[styles.months, styles.groupsTypo]}>months</Text>
      <View style={[styles.chatChild6, styles.chatChildLayout4]} />
      <View style={[styles.chatChild7, styles.chatChildLayout3]} />
      <Image
        style={[styles.maleUserIcon, styles.maleIconLayout]}
        contentFit="cover"
        source={require("../Assets/male-user1.png")}
      />
      <View style={[styles.chatChild8, styles.chatChildLayout6]} />
      <Text style={[styles.rohanPatel1, styles.rohanTypo]}>rohan patel</Text>
      <Text style={[styles.thisIsA1, styles.thisTypo]}>
        this is a snippet of the last message ...
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
      <View style={[styles.chatChild9, styles.chatChildLayout6]} />
      <Text style={[styles.rohanPatel2, styles.rohanTypo]}>rohan patel</Text>
      <Text style={[styles.thisIsA2, styles.thisTypo]}>
        this is a snippet of the last message ...
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
      <View style={[styles.chatChild10, styles.chatChildLayout6]} />
      <Text style={[styles.rohanPatel3, styles.rohanTypo]}>rohan patel</Text>
      <Text style={[styles.thisIsA3, styles.thisTypo]}>
        this is a snippet of the last message ...
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
      <View style={[styles.chatChild11, styles.chatChildLayout6]} />
      <Text style={[styles.rohanPatel4, styles.rohanTypo]}>rohan patel</Text>
      <Text style={[styles.thisIsA4, styles.thisTypo]}>
        this is a snippet of the last message ...
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
      <View style={styles.chatChild12} />
      <Text style={styles.viewDetails}>view details</Text>
      <Text style={[styles.courseLearningStyle, styles.seniorAtUtTypo]}>{`course
learning style
next meeting`}</Text>
      <Text
        style={[styles.seniorAtUt, styles.seniorAtUtTypo]}
      >{`senior at ut austin
learning style`}</Text>
      <Text style={[styles.groups1, styles.groups1Typo]}>groups</Text>
      <View style={[styles.chatChild13, styles.chatChildLayout3]} />
      <Text style={[styles.profile, styles.groups1Typo]}>profile</Text>
      <Text style={styles.text}>1</Text>
      <Image
        style={[styles.chatChild14, styles.chatChildLayout1]}
        contentFit="cover"
        source={require("../Assets/ellipse-40.png")}
      />
      <Text style={[styles.text1, styles.textTypo]}>25</Text>
      <Image
        style={[styles.chatChild15, styles.chatChildLayout1]}
        contentFit="cover"
        source={require("../Assets/ellipse-40.png")}
      />
      <Text style={[styles.text2, styles.textTypo]}>6</Text>
      <Image
        style={[styles.chatChild16, styles.chatChildLayout1]}
        contentFit="cover"
        source={require("../Assets/ellipse-40.png")}
      />
      <Text style={[styles.text3, styles.textTypo]}>3</Text>
      <View style={[styles.chatChild17, styles.chatChildLayout]} />
      <Text style={[styles.biology, styles.biologyTypo]}>biology</Text>
      <Image
        style={[styles.dnaHelixIcon, styles.dnaIconLayout]}
        contentFit="cover"
        source={require("../Assets/dna-helix2.png")}
      />
      <View style={[styles.chatChild18, styles.chatChildLayout]} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  screenshot20231111Layout: {
    height: 802,
    top: 890,
    width: 390,
    position: "absolute",
  },
  screenshot20231111Position: {
    height: 750,
    top: 890,
    position: "absolute",
  },
  chatChildLayout6: {
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
    fontFamily: FontFamily.cabinMedium,
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
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  iconLayout: {
    height: 25,
    width: 25,
    top: 806,
    position: "absolute",
  },
  chatChildLayout5: {
    height: 10,
    width: 10,
    top: 430,
    position: "absolute",
  },
  chatChildLayout4: {
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
    fontFamily: FontFamily.cabinMedium,
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
    fontFamily: FontFamily.cabinMediumItalic,
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
    fontFamily: FontFamily.cabinMedium,
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
    fontFamily: FontFamily.cabinMedium,
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
    fontFamily: FontFamily.cabinMedium,
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
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  chatChild: {
    top: 152,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    height: 693,
    width: 390,
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
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
    fontFamily: FontFamily.cabinMedium,
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
  chatInner: {
    top: 798,
    left: 35,
    width: 320,
    height: 38,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
    position: "absolute",
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
  rectangleView: {
    top: 248,
    height: 202,
    width: 325,
    left: 33,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  ellipseIcon: {
    top: 770,
    left: 163,
    width: 63,
    height: 63,
    position: "absolute",
  },
  homeIcon: {
    left: 63,
  },
  settingsIcon: {
    left: 302,
  },
  bookIcon: {
    left: 117,
  },
  userIcon: {
    left: 247,
  },
  plusMathIcon: {
    top: 777,
    left: 174,
    width: 42,
    height: 42,
    position: "absolute",
  },
  chatChild1: {
    left: 244,
  },
  chatChild2: {
    left: 259,
  },
  chatChild3: {
    left: 275,
  },
  chatChild4: {
    left: 291,
  },
  chatChild5: {
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
  chatChild6: {
    height: 128,
    left: 201,
  },
  chatChild7: {
    top: 254,
    left: 201,
  },
  maleUserIcon: {
    top: 179,
  },
  chatChild8: {
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
  chatChild9: {
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
  chatChild10: {
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
  chatChild11: {
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
  chatChild12: {
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
    fontFamily: FontFamily.cabinMedium,
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
  chatChild13: {
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
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  chatChild14: {
    left: 52,
    height: 35,
    width: 35,
    top: 330,
  },
  text1: {
    left: 56,
  },
  chatChild15: {
    left: 99,
    height: 35,
    width: 35,
    top: 330,
  },
  text2: {
    left: 103,
  },
  chatChild16: {
    left: 146,
    height: 35,
    width: 35,
    top: 330,
  },
  text3: {
    left: 150,
  },
  chatChild17: {
    top: 389,
  },
  biology: {
    top: 394,
  },
  dnaHelixIcon: {
    top: 392,
  },
  chatChild18: {
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
  chat: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorRoyalblue,
  },
});

export default Chat1;
