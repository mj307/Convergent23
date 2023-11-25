import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Results1 = () => {
  return (
    <View style={styles.results}>
      <View style={[styles.resultsChild, styles.resultsBg]} />
      <View style={[styles.resultsItem, styles.resultsBg]} />
      <Text style={[styles.suggestedGroups, styles.suggestedTypo]}>
        suggested groups
      </Text>
      <Text style={[styles.suggestedFriends, styles.suggestedTypo]}>
        suggested friends
      </Text>
      <View style={[styles.resultsInner, styles.resultsLayout]} />
      <Image
        style={[styles.maleUserIcon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/male-user.png")}
      />
      <Image
        style={[styles.femaleProfileIcon, styles.femaleIconLayout]}
        contentFit="cover"
        source={require("../assets/female-profile.png")}
      />
      <Image
        style={[styles.femaleProfileIcon1, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/female-profile1.png")}
      />
      <Image
        style={styles.notificationIcon}
        contentFit="cover"
        source={require("../assets/notification.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.join, styles.joinTypo]}>join</Text>
      <Text style={[styles.courseLearningStyle, styles.courseTypo]}>{`course
learning style
next meeting`}</Text>
      <Text style={[styles.text, styles.textTypo]}>1</Text>
      <View style={[styles.resultsChild1, styles.resultsLayout]} />
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
      <View style={[styles.resultsChild2, styles.rectangleViewLayout]} />
      <Text style={[styles.join1, styles.joinTypo]}>join</Text>
      <Text style={[styles.courseLearningStyle1, styles.courseTypo]}>{`course
learning style
next meeting`}</Text>
      <Text style={[styles.text1, styles.textTypo]}>2</Text>
      <View style={styles.resultsChild3} />
      <Image
        style={[styles.dallE20231101185212PIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/dall-e-20231101-185212--photo-logo-design-for--learnlink--with-a-modern-and-minimalist-aesthetic-11.png")}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-28.png")}
      />
      <Image
        style={[styles.homeIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/home.png")}
      />
      <Image
        style={[styles.settingsIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/settings.png")}
      />
      <Image
        style={[styles.bookIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/book.png")}
      />
      <Image
        style={[styles.userIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/user.png")}
      />
      <Image
        style={styles.plusMathIcon}
        contentFit="cover"
        source={require("../assets/plus-math.png")}
      />
      <Text style={[styles.yourResults, styles.suggestedTypo]}>
        your results
      </Text>
      <Text style={[styles.youre20xMoreContainer, styles.suggestedTypo]}>
        <Text style={styles.youre}>{`you’re `}</Text>
        <Text style={styles.x}>20x</Text>
        <Text style={styles.youre}>{` more productive by 
taking notes on the materials`}</Text>
      </Text>
      <Text style={[styles.ofStudentsShare, styles.suggestedTypo]}>
        of students share this with you!
      </Text>
      <Text style={styles.text2}>56%</Text>
      <Image
        style={[styles.resultsChild4, styles.resultsChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-29.png")}
      />
      <Image
        style={[styles.resultsChild5, styles.resultsChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-30.png")}
      />
      <Image
        style={[styles.resultsChild6, styles.resultsChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-30.png")}
      />
      <Image
        style={[styles.resultsChild7, styles.resultsChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-30.png")}
      />
      <Image
        style={[styles.resultsChild8, styles.resultsChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-30.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-23.png")}
      />
      <Image
        style={[styles.resultsChild9, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-24.png")}
      />
      <View style={[styles.resultsChild10, styles.resultsChildLayout]} />
      <Text style={[styles.rohanPatel, styles.rohanTypo]}>rohan patel</Text>
      <Text
        style={[styles.similaritySharedClasses, styles.similarityTypo]}
      >{`% similarity
shared classes`}</Text>
      <View style={[styles.femaleProfileParent, styles.femaleLayout]}>
        <Image
          style={[styles.femaleProfileIcon4, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/female-profile2.png")}
        />
        <Image
          style={[styles.groupChild, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/ellipse-34.png")}
        />
        <Image
          style={[styles.plusMathIcon1, styles.resultsChildLayout1]}
          contentFit="cover"
          source={require("../assets/plus-math1.png")}
        />
      </View>
      <View style={[styles.resultsChild11, styles.resultsChildLayout]} />
      <Text style={[styles.rohanPatel1, styles.rohanTypo]}>rohan patel</Text>
      <Text
        style={[styles.similaritySharedClasses1, styles.similarityTypo]}
      >{`% similarity
shared classes`}</Text>
      <View style={[styles.femaleProfileGroup, styles.femaleLayout]}>
        <Image
          style={[styles.femaleProfileIcon4, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/female-profile2.png")}
        />
        <Image
          style={[styles.groupChild, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/ellipse-34.png")}
        />
        <Image
          style={[styles.plusMathIcon1, styles.resultsChildLayout1]}
          contentFit="cover"
          source={require("../assets/plus-math1.png")}
        />
      </View>
      <View style={[styles.resultsChild12, styles.resultsChildLayout]} />
      <Text style={[styles.rohanPatel2, styles.rohanTypo]}>rohan patel</Text>
      <Text
        style={[styles.similaritySharedClasses2, styles.similarityTypo]}
      >{`% similarity
shared classes`}</Text>
      <View style={[styles.femaleProfileContainer, styles.femaleLayout]}>
        <Image
          style={[styles.femaleProfileIcon4, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/female-profile2.png")}
        />
        <Image
          style={[styles.groupChild, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/ellipse-34.png")}
        />
        <Image
          style={[styles.plusMathIcon1, styles.resultsChildLayout1]}
          contentFit="cover"
          source={require("../assets/plus-math1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  resultsBg: {
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  suggestedTypo: {
    textAlign: "left",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  resultsLayout: {
    height: 132,
    width: 155,
    top: 458,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  iconLayout2: {
    height: 20,
    position: "absolute",
  },
  femaleIconLayout: {
    width: 22,
    top: 473,
    height: 20,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 21,
    width: 132,
    top: 562,
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.colorRoyalblue,
  },
  joinTypo: {
    width: 88,
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_3xs,
    top: 566,
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  courseTypo: {
    width: 61,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.cabinMediumItalic,
    fontStyle: "italic",
    top: 512,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  textTypo: {
    width: 26,
    fontSize: FontSize.size_21xl,
    top: 462,
    color: Color.colorRoyalblue,
    textAlign: "center",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  iconPosition: {
    left: 310,
    height: 20,
    width: 23,
    position: "absolute",
  },
  iconLayout1: {
    width: 50,
    position: "absolute",
  },
  iconLayout: {
    height: 25,
    width: 25,
    top: 806,
    position: "absolute",
  },
  resultsChildLayout1: {
    height: 10,
    width: 10,
    position: "absolute",
  },
  vectorIconLayout: {
    width: 135,
    position: "absolute",
  },
  resultsChildLayout: {
    height: 107,
    width: 100,
    top: 647,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  rohanTypo: {
    width: 65,
    fontSize: FontSize.size_xs,
    top: 706,
    color: Color.colorDarkslategray,
    textAlign: "center",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  similarityTypo: {
    top: 722,
    width: 61,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.cabinMediumItalic,
    fontStyle: "italic",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  femaleLayout: {
    height: 52,
    width: 52,
    top: 654,
    position: "absolute",
  },
  resultsChild: {
    top: 408,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    width: 390,
    height: 436,
    left: 0,
  },
  resultsItem: {
    top: 82,
    borderRadius: Border.br_11xl,
    width: 332,
    height: 265,
    left: 30,
  },
  suggestedGroups: {
    top: 420,
    left: 29,
    width: 169,
    height: 24,
    color: Color.colorDarkgray_300,
    textAlign: "left",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  suggestedFriends: {
    top: 609,
    color: Color.colorDarkgray_300,
    textAlign: "left",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    left: 30,
  },
  resultsInner: {
    left: 30,
  },
  maleUserIcon: {
    width: 23,
    left: 141,
    height: 20,
    top: 493,
  },
  femaleProfileIcon: {
    left: 121,
  },
  femaleProfileIcon1: {
    top: 473,
    width: 23,
    left: 141,
    height: 20,
  },
  notificationIcon: {
    top: 24,
    left: 322,
    width: 40,
    height: 40,
    position: "absolute",
  },
  rectangleView: {
    left: 43,
  },
  join: {
    left: 64,
  },
  courseLearningStyle: {
    left: 52,
  },
  text: {
    left: 44,
  },
  resultsChild1: {
    left: 199,
  },
  maleUserIcon1: {
    top: 493,
  },
  femaleProfileIcon2: {
    left: 290,
  },
  femaleProfileIcon3: {
    top: 473,
  },
  resultsChild2: {
    left: 212,
  },
  join1: {
    left: 233,
  },
  courseLearningStyle1: {
    left: 221,
  },
  text1: {
    left: 213,
  },
  resultsChild3: {
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
    height: 45,
    left: 32,
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
  yourResults: {
    top: 366,
    left: 33,
    color: Color.colorGray,
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  youre: {
    color: Color.colorDarkgray_200,
  },
  x: {
    color: Color.colorDarkslategray,
  },
  youre20xMoreContainer: {
    top: 102,
    left: 62,
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  ofStudentsShare: {
    top: 304,
    color: Color.colorDarkslategray,
    left: 63,
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  text2: {
    top: 179,
    left: 95,
    fontSize: FontSize.size_81xl,
    color: Color.colorRoyalblue,
    textAlign: "left",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  resultsChild4: {
    left: 281,
    top: 373,
    height: 10,
    width: 10,
  },
  resultsChild5: {
    left: 296,
    top: 373,
    height: 10,
    width: 10,
  },
  resultsChild6: {
    left: 312,
    top: 373,
    height: 10,
    width: 10,
  },
  resultsChild7: {
    left: 328,
    top: 373,
    height: 10,
    width: 10,
  },
  resultsChild8: {
    left: 344,
    top: 373,
    height: 10,
    width: 10,
  },
  vectorIcon: {
    top: 170,
    left: 58,
    height: 6,
  },
  resultsChild9: {
    top: 164,
    left: 197,
    height: 7,
  },
  resultsChild10: {
    left: 30,
  },
  rohanPatel: {
    left: 47,
  },
  similaritySharedClasses: {
    left: 49,
  },
  femaleProfileIcon4: {
    top: 2,
    height: 50,
    left: 0,
  },
  groupChild: {
    top: 0,
    width: 20,
    left: 32,
  },
  plusMathIcon1: {
    top: 5,
    left: 37,
  },
  femaleProfileParent: {
    left: 52,
  },
  resultsChild11: {
    left: 145,
  },
  rohanPatel1: {
    left: 162,
  },
  similaritySharedClasses1: {
    left: 164,
  },
  femaleProfileGroup: {
    left: 167,
  },
  resultsChild12: {
    left: 260,
  },
  rohanPatel2: {
    left: 277,
  },
  similaritySharedClasses2: {
    left: 279,
  },
  femaleProfileContainer: {
    left: 282,
  },
  results: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorRoyalblue,
  },
});

export default Results1;
