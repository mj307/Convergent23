import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dashboard}>
      <Text style={styles.welcomeBackAkilContainer}>
        <Text style={styles.welcomeBack}>{`welcome back,
`}</Text>
        <Text style={styles.akil}>akil!</Text>
      </Text>
      <View style={styles.dashboardChild} />
      <Text style={[styles.yourGroups, styles.yourTypo]}>your groups</Text>
      <Text style={[styles.yourClasses, styles.yourTypo]}>your classes</Text>
      <Text style={[styles.yourFriends, styles.yourTypo]}>your friends</Text>
      <View style={[styles.dashboardItem, styles.dashboardLayout]} />
      <Image
        style={[styles.maleUserIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/male-user.png")}
      />
      <Image
        style={[styles.femaleProfileIcon, styles.femaleIconLayout]}
        contentFit="cover"
        source={require("../assets/female-profile.png")}
      />
      <Image
        style={[styles.femaleProfileIcon1, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/female-profile1.png")}
      />
      <View style={[styles.dashboardInner, styles.dashboardChildLayout]} />
      <Image
        style={styles.notificationIcon}
        contentFit="cover"
        source={require("../assets/notification.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.biology, styles.biologyClr]}>biology</Text>
      <Text style={[styles.taughtByDr, styles.taughtLayout]}>
        taught by dr. x
      </Text>
      <Text style={[styles.viewDetails, styles.viewTypo]}>view details</Text>
      <Text style={[styles.courseLearningStyle, styles.courseTypo]}>{`course
learning style
next meeting`}</Text>
      <Text style={[styles.text, styles.textTypo1]}>1</Text>
      <View style={[styles.dashboardChild1, styles.dashboardLayout]} />
      <Image
        style={[styles.maleUserIcon1, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/male-user.png")}
      />
      <Image
        style={[styles.femaleProfileIcon2, styles.femaleIconLayout]}
        contentFit="cover"
        source={require("../assets/female-profile.png")}
      />
      <Image
        style={[styles.femaleProfileIcon3, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/female-profile1.png")}
      />
      <View style={[styles.dashboardChild2, styles.rectangleViewLayout]} />
      <Text style={[styles.viewDetails1, styles.viewTypo]}>view details</Text>
      <Text style={[styles.courseLearningStyle1, styles.courseTypo]}>{`course
learning style
next meeting`}</Text>
      <Text style={[styles.text1, styles.textTypo1]}>2</Text>
      <Text style={[styles.text2, styles.textTypo]}>4</Text>
      <View style={[styles.dashboardChild3, styles.dashboardChildLayout]} />
      <Text style={[styles.studyGroups, styles.studyTypo]}>{`study
groups`}</Text>
      <Image
        style={styles.dallE20231101185212PIcon}
        contentFit="cover"
        source={require("../assets/dall-e-20231101-185212--photo-logo-design-for--learnlink--with-a-modern-and-minimalist-aesthetic-11.png")}
      />
      <Image
        style={[styles.nextPageIcon, styles.nextIconLayout]}
        contentFit="cover"
        source={require("../assets/next-page.png")}
      />
      <Image
        style={[styles.nextPageIcon, styles.nextIconLayout]}
        contentFit="cover"
        source={require("../assets/next-page.png")}
      />
      <Image
        style={[styles.nextPageIcon2, styles.nextIconLayout]}
        contentFit="cover"
        source={require("../assets/next-page.png")}
      />
      <Image
        style={[styles.dnaHelixIcon, styles.dnaIconLayout]}
        contentFit="cover"
        source={require("../assets/dna-helix.png")}
      />
      <Text style={[styles.biology1, styles.biology1Typo]}>biology</Text>
      <Text style={[styles.taughtByDr1, styles.biology1Typo]}>
        taught by dr. x
      </Text>
      <Text style={[styles.text3, styles.textTypo]}>4</Text>
      <Text style={[styles.studyGroups1, styles.studyTypo]}>{`study
groups`}</Text>
      <Image
        style={[styles.dnaHelixIcon1, styles.dnaIconLayout]}
        contentFit="cover"
        source={require("../assets/dna-helix.png")}
      />
      <View style={[styles.dashboardChild4, styles.dashboardChildLayout]} />
      <Text style={[styles.biology2, styles.biologyClr]}>biology</Text>
      <Text style={[styles.taughtByDr2, styles.taughtLayout]}>
        taught by dr. x
      </Text>
      <Text style={[styles.text4, styles.textTypo]}>4</Text>
      <Text style={[styles.studyGroups2, styles.studyTypo]}>{`study
groups`}</Text>
      <Text style={[styles.rohanPatel, styles.rohanTypo]}>rohan patel</Text>
      <Text style={[styles.rohanPatel1, styles.rohanTypo]}>rohan patel</Text>
      <Text style={[styles.rohanPatel2, styles.rohanTypo]}>rohan patel</Text>
      <Text style={[styles.rohanPatel3, styles.rohanTypo]}>rohan patel</Text>
      <Text style={[styles.rohanPatel4, styles.rohanTypo]}>rohan patel</Text>
      <Image
        style={[styles.dnaHelixIcon2, styles.dnaIconLayout]}
        contentFit="cover"
        source={require("../assets/dna-helix.png")}
      />
      <Image
        style={[styles.nextPageIcon3, styles.nextIconLayout]}
        contentFit="cover"
        source={require("../assets/next-page.png")}
      />
      <Image
        style={[styles.maleUserIcon2, styles.maleIconLayout]}
        contentFit="cover"
        source={require("../assets/male-user1.png")}
      />
      <Image
        style={[styles.femaleProfileIcon4, styles.maleIconLayout]}
        contentFit="cover"
        source={require("../assets/female-profile2.png")}
      />
      <Image
        style={[styles.maleUserIcon3, styles.maleIconLayout]}
        contentFit="cover"
        source={require("../assets/male-user1.png")}
      />
      <Image
        style={[styles.femaleProfileIcon5, styles.maleIconLayout]}
        contentFit="cover"
        source={require("../assets/female-profile2.png")}
      />
      <Image
        style={[styles.femaleProfileIcon6, styles.maleIconLayout]}
        contentFit="cover"
        source={require("../assets/female-profile2.png")}
      />
      <Image
        style={[
          styles.screenshot20231111At1221,
          styles.screenshot20231111Layout,
        ]}
        contentFit="cover"
        source={require("../assets/screenshot-20231111-at-1221-1.png")}
      />
      <Image
        style={[
          styles.screenshot20231111At1223,
          styles.screenshot20231111Layout,
        ]}
        contentFit="cover"
        source={require("../assets/screenshot-20231111-at-1223-1.png")}
      />
      <Image
        style={styles.screenshot20231111At1225}
        contentFit="cover"
        source={require("../assets/screenshot-20231111-at-1225-1.png")}
      />
      <Image
        style={styles.screenshot20231111At1226}
        contentFit="cover"
        source={require("../assets/screenshot-20231111-at-1226-1.png")}
      />
      <Image
        style={[
          styles.screenshot20231111At1228,
          styles.screenshot20231111Position,
        ]}
        contentFit="cover"
        source={require("../assets/screenshot-20231111-at-1228-1.png")}
      />
      <Image
        style={[
          styles.screenshot20231111At1229,
          styles.screenshot20231111Position,
        ]}
        contentFit="cover"
        source={require("../assets/screenshot-20231111-at-1229-1.png")}
      />
      <View style={styles.component6}>
        <View style={styles.component6Child} />
        <TouchableHighlight
          style={styles.preschool}
          underlayColor="#fff"
          onPress={() => navigation.navigate("Results")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/preschool.png")}
          />
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.home, styles.homePosition]}
          underlayColor="#fff"
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/home.png")}
          />
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.book, styles.homePosition]}
          underlayColor="#fff"
          onPress={() => navigation.navigate("Classes")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/book.png")}
          />
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.user, styles.homePosition]}
          underlayColor="#fff"
          onPress={() => navigation.navigate("Chat")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/user.png")}
          />
        </TouchableHighlight>
        <View style={[styles.ellipseParent, styles.groupChildPosition]}>
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-28.png")}
          />
          <Image
            style={[styles.plusMathIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/plus-math.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  yourTypo: {
    color: Color.colorDarkgray_300,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  dashboardLayout: {
    height: 132,
    width: 155,
    top: 302,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  iconLayout1: {
    height: 20,
    width: 23,
    left: 143,
    position: "absolute",
  },
  femaleIconLayout: {
    width: 22,
    top: 317,
    height: 20,
    position: "absolute",
  },
  dashboardChildLayout: {
    height: 44,
    width: 325,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 21,
    width: 132,
    top: 406,
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.colorRoyalblue,
  },
  biologyClr: {
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_xs,
    width: 50,
  },
  taughtLayout: {
    width: 126,
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_5xs,
  },
  viewTypo: {
    width: 88,
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_3xs,
    top: 410,
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  courseTypo: {
    width: 61,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.cabinMediumItalic,
    fontStyle: "italic",
    top: 356,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  textTypo1: {
    width: 26,
    color: Color.colorRoyalblue,
    fontSize: FontSize.size_21xl,
    top: 306,
    textAlign: "center",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  iconPosition: {
    left: 312,
    height: 20,
    width: 23,
    position: "absolute",
  },
  textTypo: {
    width: 35,
    left: 241,
    color: Color.colorRoyalblue,
    textAlign: "center",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  studyTypo: {
    width: 31,
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  nextIconLayout: {
    height: 30,
    width: 30,
    left: 310,
    position: "absolute",
  },
  dnaIconLayout: {
    height: 35,
    width: 35,
    position: "absolute",
  },
  biology1Typo: {
    left: 87,
    textAlign: "left",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  rohanTypo: {
    width: 41,
    top: 742,
    color: Color.colorDarkslategray,
    textAlign: "center",
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  maleIconLayout: {
    height: 50,
    top: 689,
    width: 50,
    position: "absolute",
  },
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
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
  welcomeBack: {
    fontSize: FontSize.size_11xl,
    color: Color.colorGray,
  },
  akil: {
    fontSize: FontSize.size_31xl,
    color: Color.colorGray,
  },
  welcomeBackAkilContainer: {
    top: 93,
    left: 38,
    textAlign: "left",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  dashboardChild: {
    top: 244,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    height: 600,
    width: 390,
    left: 0,
    position: "absolute",
  },
  yourGroups: {
    top: 267,
    width: 101,
    height: 24,
    left: 32,
  },
  yourClasses: {
    top: 451,
    left: 31,
  },
  yourFriends: {
    top: 653,
    left: 32,
  },
  dashboardItem: {
    left: 32,
  },
  maleUserIcon: {
    top: 337,
  },
  femaleProfileIcon: {
    left: 123,
  },
  femaleProfileIcon1: {
    top: 317,
  },
  dashboardInner: {
    top: 485,
    left: 31,
  },
  notificationIcon: {
    top: 24,
    left: 322,
    width: 40,
    height: 40,
    position: "absolute",
  },
  rectangleView: {
    left: 45,
  },
  biology: {
    top: 494,
    width: 50,
    left: 86,
    textAlign: "left",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  taughtByDr: {
    top: 509,
    left: 86,
    textAlign: "left",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  viewDetails: {
    left: 66,
  },
  courseLearningStyle: {
    left: 54,
  },
  text: {
    left: 46,
  },
  dashboardChild1: {
    left: 201,
  },
  maleUserIcon1: {
    top: 337,
  },
  femaleProfileIcon2: {
    left: 292,
  },
  femaleProfileIcon3: {
    top: 317,
  },
  dashboardChild2: {
    left: 214,
  },
  viewDetails1: {
    left: 235,
  },
  courseLearningStyle1: {
    left: 223,
  },
  text1: {
    left: 215,
  },
  text2: {
    top: 495,
  },
  dashboardChild3: {
    top: 536,
    left: 32,
  },
  studyGroups: {
    top: 497,
    left: 272,
    width: 31,
    color: Color.colorDarkslategray,
  },
  dallE20231101185212PIcon: {
    top: 19,
    height: 45,
    width: 50,
    left: 32,
    position: "absolute",
  },
  nextPageIcon: {
    top: 492,
  },
  nextPageIcon2: {
    top: 542,
  },
  dnaHelixIcon: {
    top: 490,
    left: 40,
    height: 35,
  },
  biology1: {
    top: 545,
    width: 50,
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_xs,
  },
  taughtByDr1: {
    top: 560,
    width: 126,
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_5xs,
  },
  text3: {
    top: 546,
  },
  studyGroups1: {
    top: 548,
    left: 273,
  },
  dnaHelixIcon1: {
    top: 541,
    left: 41,
  },
  dashboardChild4: {
    top: 586,
    left: 31,
  },
  biology2: {
    top: 595,
    width: 50,
    left: 86,
    textAlign: "left",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  taughtByDr2: {
    top: 610,
    left: 86,
    textAlign: "left",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  text4: {
    top: 596,
  },
  studyGroups2: {
    top: 598,
    left: 272,
    width: 31,
    color: Color.colorDarkslategray,
  },
  rohanPatel: {
    left: 41,
  },
  rohanPatel1: {
    left: 106,
  },
  rohanPatel2: {
    left: 171,
  },
  rohanPatel3: {
    left: 236,
  },
  rohanPatel4: {
    left: 304,
  },
  dnaHelixIcon2: {
    top: 591,
    left: 40,
    height: 35,
  },
  nextPageIcon3: {
    top: 593,
  },
  maleUserIcon2: {
    left: 102,
  },
  femaleProfileIcon4: {
    left: 37,
  },
  maleUserIcon3: {
    left: 232,
  },
  femaleProfileIcon5: {
    left: 167,
  },
  femaleProfileIcon6: {
    left: 297,
  },
  screenshot20231111At1221: {
    left: -430,
  },
  screenshot20231111At1223: {
    left: 0,
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
  component6Child: {
    height: "57.58%",
    top: "42.42%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
    position: "absolute",
    width: "100%",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  preschool: {
    left: "81.25%",
    right: "8.44%",
    bottom: "-4.55%",
    width: "10.31%",
    height: "50%",
    top: "54.55%",
    position: "absolute",
  },
  home: {
    left: "8.75%",
    right: "83.44%",
  },
  book: {
    left: "25.63%",
    right: "66.56%",
  },
  user: {
    left: "66.25%",
    right: "25.94%",
  },
  groupChild: {
    height: "114.55%",
    width: "114.55%",
    right: "-7.27%",
    bottom: "-14.55%",
    left: "-7.27%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  plusMathIcon: {
    height: "76.36%",
    width: "76.36%",
    top: "12.73%",
    right: "10.91%",
    bottom: "10.91%",
    left: "12.73%",
    position: "absolute",
  },
  ellipseParent: {
    height: "83.33%",
    width: "17.19%",
    right: "41.56%",
    bottom: "16.67%",
    left: "41.25%",
  },
  component6: {
    top: 768,
    left: 34,
    width: 320,
    height: 66,
    position: "absolute",
  },
  dashboard: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorRoyalblue,
    width: "100%",
  },
});

export default Dashboard;
