import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Classes = () => {
  return (
    <View style={styles.classes}>
      <Text style={styles.yourClasses}>your classes</Text>
      <View style={styles.classesChild} />
      <View style={[styles.classesItem, styles.classesChildLayout2]} />
      <View style={styles.classesInner} />
      <Image
        style={styles.notificationIcon}
        contentFit="cover"
        source={require("../assets/notification.png")}
      />
      <Text style={[styles.biology, styles.biologyLayout]}>biology</Text>
      <Text style={[styles.taughtByDr, styles.taughtLayout]}>
        taught by dr. x
      </Text>
      <Text style={[styles.studyGroups, styles.studyTypo]}>{`study
groups`}</Text>
      <Image
        style={styles.dallE20231101185212PIcon}
        contentFit="cover"
        source={require("../assets/dall-e-20231101-185212--photo-logo-design-for--learnlink--with-a-modern-and-minimalist-aesthetic-11.png")}
      />
      <Image
        style={styles.nextPageIcon}
        contentFit="cover"
        source={require("../assets/next-page1.png")}
      />
      <Image
        style={[styles.dnaHelixIcon, styles.dnaIconLayout]}
        contentFit="cover"
        source={require("../assets/dna-helix1.png")}
      />
      <View style={[styles.rectangleView, styles.classesChildLayout2]} />
      <Text style={[styles.biology1, styles.biology1Position]}>biology</Text>
      <Text style={[styles.taughtByDr1, styles.taughtLayout]}>
        taught by dr. x
      </Text>
      <Text style={[styles.studyGroups1, styles.studyTypo]}>{`study
groups`}</Text>
      <Image
        style={[styles.nextPageIcon1, styles.nextIconLayout]}
        contentFit="cover"
        source={require("../assets/next-page2.png")}
      />
      <Image
        style={[styles.dnaHelixIcon1, styles.dnaIconLayout]}
        contentFit="cover"
        source={require("../assets/dna-helix1.png")}
      />
      <View style={[styles.classesChild1, styles.classesChildLayout2]} />
      <Text style={[styles.biology2, styles.biology2Position]}>biology</Text>
      <Text style={[styles.taughtByDr2, styles.taughtLayout]}>
        taught by dr. x
      </Text>
      <Text style={[styles.studyGroups2, styles.studyTypo]}>{`study
groups`}</Text>
      <Image
        style={[styles.nextPageIcon2, styles.biology2Position]}
        contentFit="cover"
        source={require("../assets/next-page2.png")}
      />
      <Image
        style={[styles.dnaHelixIcon2, styles.dnaIconLayout]}
        contentFit="cover"
        source={require("../assets/dna-helix1.png")}
      />
      <View style={[styles.classesChild2, styles.classesChildLayout2]} />
      <Text style={[styles.biology3, styles.biology3Position]}>biology</Text>
      <Text style={[styles.taughtByDr3, styles.taughtLayout]}>
        taught by dr. x
      </Text>
      <Text style={[styles.studyGroups3, styles.studyTypo]}>{`study
groups`}</Text>
      <Image
        style={[styles.nextPageIcon3, styles.biology3Position]}
        contentFit="cover"
        source={require("../assets/next-page2.png")}
      />
      <Image
        style={[styles.dnaHelixIcon3, styles.dnaIconLayout]}
        contentFit="cover"
        source={require("../assets/dna-helix1.png")}
      />
      <View style={[styles.classesChild3, styles.classesChildLayout2]} />
      <Text style={[styles.biology4, styles.biology4Typo]}>biology</Text>
      <Text style={[styles.taughtByDr4, styles.biology4Typo]}>
        taught by dr. x
      </Text>
      <Text style={[styles.studyGroups4, styles.studyTypo]}>{`study
groups`}</Text>
      <Image
        style={[styles.nextPageIcon4, styles.nextIconLayout]}
        contentFit="cover"
        source={require("../assets/next-page2.png")}
      />
      <Image
        style={[styles.dnaHelixIcon4, styles.dnaIconLayout]}
        contentFit="cover"
        source={require("../assets/dna-helix1.png")}
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
      <Image
        style={[styles.ellipseIcon, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-341.png")}
      />
      <Image
        style={[styles.classesChild4, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-35.png")}
      />
      <Image
        style={[styles.classesChild5, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-35.png")}
      />
      <Image
        style={[styles.classesChild6, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-35.png")}
      />
      <View style={[styles.classesChild7, styles.classesChildLayout1]} />
      <Image
        style={[styles.maleUserIcon, styles.maleIconLayout]}
        contentFit="cover"
        source={require("../assets/male-user.png")}
      />
      <Image
        style={[styles.femaleProfileIcon, styles.femaleIconLayout1]}
        contentFit="cover"
        source={require("../assets/female-profile1.png")}
      />
      <View style={[styles.classesChild8, styles.classesChildLayout]} />
      <Text style={[styles.askToJoin, styles.askTypo]}>ask to join</Text>
      <Text
        style={[styles.learningStyleMeet, styles.learningTypo]}
      >{`learning style
meet place`}</Text>
      <Text style={[styles.spotsLeft, styles.spotsTypo]}>
        <Text style={styles.text}>{`3
`}</Text>
        <Text style={styles.spotsLeft1}>spots left</Text>
      </Text>
      <Text style={[styles.text1, styles.textTypo]}>1</Text>
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-14.png")}
      />
      <View style={[styles.classesChild9, styles.classesChildLayout1]} />
      <Text
        style={[styles.learningStyleMeet1, styles.learningTypo]}
      >{`learning style
meet place`}</Text>
      <Image
        style={[styles.maleUserIcon1, styles.maleIconLayout]}
        contentFit="cover"
        source={require("../assets/male-user.png")}
      />
      <Image
        style={[styles.femaleProfileIcon1, styles.femaleIconLayout]}
        contentFit="cover"
        source={require("../assets/female-profile.png")}
      />
      <Image
        style={[styles.femaleProfileIcon2, styles.femaleIconLayout]}
        contentFit="cover"
        source={require("../assets/female-profile.png")}
      />
      <Image
        style={[styles.femaleProfileIcon3, styles.text3Position]}
        contentFit="cover"
        source={require("../assets/female-profile1.png")}
      />
      <View style={[styles.classesChild10, styles.classesChildLayout]} />
      <Text style={[styles.askToJoin1, styles.askTypo]}>ask to join</Text>
      <Text style={[styles.spotsLeft2, styles.spotsTypo]}>
        <Text style={styles.text}>{`5
`}</Text>
        <Text style={styles.spotsLeft1}>spots left</Text>
      </Text>
      <Text style={[styles.text3, styles.text3Position]}>1</Text>
      <Image
        style={[styles.classesChild11, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-14.png")}
      />
      <Image
        style={[styles.classesChild12, styles.maleIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-38.png")}
      />
      <Image
        style={[styles.plusMathIcon, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/plus-math1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  classesChildLayout2: {
    height: 68,
    width: 325,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  biologyLayout: {
    height: 23,
    width: 85,
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_xl,
  },
  taughtLayout: {
    height: 16,
    width: 126,
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_xs,
  },
  studyTypo: {
    height: 30,
    width: 37,
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  dnaIconLayout: {
    height: 65,
    width: 42,
    position: "absolute",
  },
  biology1Position: {
    top: 476,
    position: "absolute",
  },
  nextIconLayout: {
    width: 61,
    height: 40,
  },
  biology2Position: {
    top: 552,
    position: "absolute",
  },
  biology3Position: {
    top: 629,
    position: "absolute",
  },
  biology4Typo: {
    left: 91,
    textAlign: "left",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
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
  iconChildLayout: {
    height: 10,
    width: 10,
    position: "absolute",
  },
  classesChildLayout1: {
    height: 155,
    width: 144,
    top: 254,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  maleIconLayout: {
    height: 20,
    position: "absolute",
  },
  femaleIconLayout1: {
    top: 304,
    height: 20,
    width: 23,
  },
  classesChildLayout: {
    height: 21,
    width: 132,
    top: 378,
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.colorRoyalblue,
  },
  askTypo: {
    width: 88,
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_3xs,
    top: 382,
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  learningTypo: {
    width: 84,
    textAlign: "right",
    fontFamily: FontFamily.cabinMediumItalic,
    fontStyle: "italic",
    top: 260,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    position: "absolute",
  },
  spotsTypo: {
    width: 43,
    top: 328,
    textAlign: "center",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  textTypo: {
    width: 26,
    fontSize: FontSize.size_21xl,
    top: 255,
    color: Color.colorRoyalblue,
    textAlign: "center",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
  },
  groupIconLayout: {
    height: 108,
    width: 108,
    position: "absolute",
  },
  femaleIconLayout: {
    width: 22,
    height: 20,
    position: "absolute",
  },
  text3Position: {
    left: 208,
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
  yourClasses: {
    top: 90,
    left: 40,
    fontSize: FontSize.size_11xl,
    color: Color.colorGray,
    textAlign: "left",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  classesChild: {
    top: 151,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    height: 693,
    width: 390,
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
  },
  classesItem: {
    top: 171,
    left: 33,
    height: 68,
  },
  classesInner: {
    top: 248,
    height: 202,
    width: 325,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
    left: 33,
    position: "absolute",
  },
  notificationIcon: {
    top: 24,
    left: 322,
    height: 40,
    width: 40,
    position: "absolute",
  },
  biology: {
    top: 185,
    left: 93,
    textAlign: "left",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  taughtByDr: {
    top: 208,
    left: 93,
    textAlign: "left",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  studyGroups: {
    top: 189,
    left: 265,
    height: 30,
    width: 37,
    color: Color.colorDarkslategray,
  },
  dallE20231101185212PIcon: {
    top: 19,
    left: 32,
    width: 50,
    height: 45,
    position: "absolute",
  },
  nextPageIcon: {
    top: 174,
    left: 307,
    height: 61,
    width: 40,
    position: "absolute",
  },
  dnaHelixIcon: {
    top: 172,
    left: 41,
    height: 65,
    width: 42,
  },
  rectangleView: {
    top: 462,
    left: 33,
    height: 68,
  },
  biology1: {
    height: 23,
    width: 85,
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_xl,
    left: 93,
    textAlign: "left",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
  },
  taughtByDr1: {
    top: 499,
    left: 93,
    textAlign: "left",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  studyGroups1: {
    top: 480,
    left: 265,
    height: 30,
    width: 37,
    color: Color.colorDarkslategray,
  },
  nextPageIcon1: {
    left: 296,
    width: 61,
    top: 476,
    position: "absolute",
  },
  dnaHelixIcon1: {
    top: 463,
    left: 41,
    height: 65,
    width: 42,
  },
  classesChild1: {
    top: 538,
    left: 33,
    height: 68,
  },
  biology2: {
    height: 23,
    width: 85,
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_xl,
    left: 93,
    textAlign: "left",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
  },
  taughtByDr2: {
    top: 575,
    left: 93,
    textAlign: "left",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  studyGroups2: {
    top: 556,
    left: 265,
    height: 30,
    width: 37,
    color: Color.colorDarkslategray,
  },
  nextPageIcon2: {
    width: 61,
    height: 40,
    left: 296,
  },
  dnaHelixIcon2: {
    top: 539,
    left: 41,
    height: 65,
    width: 42,
  },
  classesChild2: {
    top: 615,
    left: 33,
    height: 68,
  },
  biology3: {
    height: 23,
    width: 85,
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_xl,
    left: 93,
    textAlign: "left",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
  },
  taughtByDr3: {
    top: 652,
    left: 93,
    textAlign: "left",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  studyGroups3: {
    top: 633,
    left: 265,
    height: 30,
    width: 37,
    color: Color.colorDarkslategray,
  },
  nextPageIcon3: {
    width: 61,
    height: 40,
    left: 296,
  },
  dnaHelixIcon3: {
    top: 616,
    left: 41,
    height: 65,
    width: 42,
  },
  classesChild3: {
    top: 690,
    left: 31,
  },
  biology4: {
    top: 704,
    height: 23,
    width: 85,
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_xl,
  },
  taughtByDr4: {
    top: 726,
    height: 16,
    width: 126,
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_xs,
  },
  studyGroups4: {
    top: 708,
    left: 263,
  },
  nextPageIcon4: {
    left: 294,
    top: 704,
    position: "absolute",
  },
  dnaHelixIcon4: {
    top: 691,
    left: 39,
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
  ellipseIcon: {
    left: 167,
    top: 424,
    width: 10,
  },
  classesChild4: {
    left: 182,
    top: 424,
    width: 10,
  },
  classesChild5: {
    left: 198,
    top: 424,
    width: 10,
  },
  classesChild6: {
    left: 214,
    top: 424,
    width: 10,
  },
  classesChild7: {
    left: 45,
  },
  maleUserIcon: {
    top: 327,
    width: 23,
    height: 20,
    left: 55,
  },
  femaleProfileIcon: {
    left: 55,
    position: "absolute",
  },
  classesChild8: {
    left: 51,
  },
  askToJoin: {
    left: 72,
  },
  learningStyleMeet: {
    left: 89,
  },
  text: {
    fontSize: FontSize.size_mini,
    color: Color.colorRoyalblue,
  },
  spotsLeft1: {
    fontSize: FontSize.size_5xs,
    color: Color.colorDimgray_100,
  },
  spotsLeft: {
    left: 113,
  },
  text1: {
    left: 52,
    position: "absolute",
  },
  groupIcon: {
    top: 289,
    left: 81,
  },
  classesChild9: {
    left: 201,
  },
  learningStyleMeet1: {
    left: 245,
  },
  maleUserIcon1: {
    top: 318,
    left: 223,
    width: 23,
    height: 20,
  },
  femaleProfileIcon1: {
    top: 324,
    left: 206,
  },
  femaleProfileIcon2: {
    top: 337,
    left: 224,
  },
  femaleProfileIcon3: {
    top: 304,
    height: 20,
    width: 23,
  },
  classesChild10: {
    left: 207,
  },
  askToJoin1: {
    left: 228,
  },
  spotsLeft2: {
    left: 269,
  },
  text3: {
    width: 26,
    fontSize: FontSize.size_21xl,
    top: 255,
    color: Color.colorRoyalblue,
    textAlign: "center",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
  },
  classesChild11: {
    top: 293,
    left: 237,
  },
  classesChild12: {
    top: 99,
    left: 312,
    width: 20,
  },
  plusMathIcon: {
    top: 104,
    left: 317,
  },
  classes: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorRoyalblue,
    width: "100%",
  },
});

export default Classes;
