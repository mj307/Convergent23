import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Quiz = () => {
  return (
    <View style={styles.quiz}>
      <Text style={[styles.howDoYou, styles.howDoYouTypo]}>
        how do you typically like to study?
      </Text>
      <View style={styles.quizChild} />
      <Image
        style={styles.undrawReadingTimeRePhf71Icon}
        contentFit="cover"
        source={require("../assets/undraw-reading-time-re-phf7-1.png")}
      />
      <View style={styles.quizItem} />
      <Image
        style={styles.dallE20231101185212PIcon}
        contentFit="cover"
        source={require("../assets/dall-e-20231101-185212--photo-logo-design-for--learnlink--with-a-modern-and-minimalist-aesthetic-13.png")}
      />
      <Image
        style={styles.quizInner}
        contentFit="cover"
        source={require("../assets/ellipse-281.png")}
      />
      <Image
        style={[styles.homeIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/home.png")}
      />
      <Image
        style={[styles.settingsIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/settings.png")}
      />
      <Image
        style={[styles.bookIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/book.png")}
      />
      <Image
        style={[styles.userIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/user.png")}
      />
      <Image
        style={[styles.notificationIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/notification1.png")}
      />
      <Text style={[styles.question1, styles.howDoYouTypo]}>question 1</Text>
      <Image
        style={styles.plusMathIcon}
        contentFit="cover"
        source={require("../assets/plus-math2.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.independently, styles.groupsTypo]}>
          independently
        </Text>
        <Image
          style={[styles.graduateIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/graduate.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.smallGroups, styles.groupsTypo]}>
          small groups
        </Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.largeGroups, styles.groupsTypo]}>
          large groups
        </Text>
      </View>
      <Image
        style={[styles.userGroupsIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/user-groups.png")}
      />
      <Image
        style={[styles.staffIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/staff.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  howDoYouTypo: {
    textAlign: "left",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    left: 47,
    position: "absolute",
  },
  iconLayout1: {
    height: 25,
    width: 25,
    top: 806,
    position: "absolute",
  },
  iconLayout: {
    height: 40,
    width: 40,
    position: "absolute",
  },
  groupChildLayout: {
    height: 81,
    width: 325,
    position: "absolute",
  },
  groupsTypo: {
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  rectanglePosition: {
    left: 32,
    height: 81,
    width: 325,
    position: "absolute",
  },
  howDoYou: {
    top: 358,
    fontSize: FontSize.size_11xl,
    color: Color.colorRoyalblue,
    width: 271,
  },
  quizChild: {
    top: 450,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: Color.colorRoyalblue,
    width: 390,
    height: 394,
    left: 0,
    position: "absolute",
  },
  undrawReadingTimeRePhf71Icon: {
    top: 83,
    left: 43,
    width: 304,
    height: 225,
    position: "absolute",
    overflow: "hidden",
  },
  quizItem: {
    top: 798,
    left: 35,
    backgroundColor: Color.colorWhitesmoke,
    width: 320,
    height: 38,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  dallE20231101185212PIcon: {
    top: 19,
    left: 28,
    width: 58,
    height: 53,
    position: "absolute",
  },
  quizInner: {
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
  notificationIcon: {
    top: 24,
    left: 322,
  },
  question1: {
    top: 335,
    fontSize: FontSize.size_mini,
    color: Color.colorDarkgray_100,
    width: 117,
  },
  plusMathIcon: {
    top: 777,
    left: 174,
    width: 42,
    height: 42,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_3xs,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  independently: {
    top: 31,
    left: 127,
    width: 136,
  },
  graduateIcon: {
    top: 21,
    left: 62,
  },
  rectangleParent: {
    top: 479,
    left: 33,
  },
  smallGroups: {
    top: 33,
    left: 137,
    width: 115,
  },
  rectangleGroup: {
    top: 573,
  },
  largeGroups: {
    top: 30,
    left: 143,
    width: 108,
  },
  rectangleContainer: {
    top: 668,
  },
  userGroupsIcon: {
    top: 693,
    left: 111,
  },
  staffIcon: {
    top: 598,
    left: 105,
  },
  quiz: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Quiz;
