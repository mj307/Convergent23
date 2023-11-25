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
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Results = () => {
  const navigation = useNavigation();

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
      <Text style={[styles.askToJoin, styles.askTypo]}>ask to join</Text>
      <Text style={[styles.courseLearningStyle, styles.courseTypo]}>{`course
learning style
meet place`}</Text>
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
      <Text style={[styles.askToJoin1, styles.askTypo]}>ask to join</Text>
      <Text style={[styles.courseLearningStyle1, styles.courseTypo]}>{`course
learning style
meet place`}</Text>
      <Text style={[styles.text1, styles.textTypo]}>2</Text>
      <Image
        style={[styles.dallE20231101185212PIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/dall-e-20231101-185212--photo-logo-design-for--learnlink--with-a-modern-and-minimalist-aesthetic-11.png")}
      />
      <Text style={[styles.yourResults, styles.suggestedTypo]}>
        your results
      </Text>
      <Text style={[styles.youreMoreProductive, styles.suggestedTypo]}>
        you’re more productive studying in silence
      </Text>
      <Text style={styles.ofStudentsShare}>
        of students share this with you!
      </Text>
      <Text style={styles.text2}>56%</Text>
      <Image
        style={[styles.ellipseIcon, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-29.png")}
      />
      <Image
        style={[styles.resultsChild3, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-30.png")}
      />
      <Image
        style={[styles.resultsChild4, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-30.png")}
      />
      <Image
        style={[styles.resultsChild5, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-30.png")}
      />
      <Image
        style={[styles.resultsChild6, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-30.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-23.png")}
      />
      <Image
        style={[styles.resultsChild7, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-24.png")}
      />
      <View style={[styles.resultsChild8, styles.resultsChildLayout]} />
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
          style={[styles.plusMathIcon, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/plus-math1.png")}
        />
      </View>
      <View style={[styles.resultsChild9, styles.resultsChildLayout]} />
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
          style={[styles.plusMathIcon, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/plus-math1.png")}
        />
      </View>
      <View style={[styles.resultsChild10, styles.resultsChildLayout]} />
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
          style={[styles.plusMathIcon, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/plus-math1.png")}
        />
      </View>
      <View style={styles.component7}>
        <View style={styles.component7Child} />
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
        <View style={[styles.ellipseParent, styles.groupChild1Position]}>
          <Image
            style={[styles.groupChild1, styles.groupChild1Position]}
            contentFit="cover"
            source={require("../assets/ellipse-28.png")}
          />
          <Image
            style={[styles.plusMathIcon3, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/plus-math.png")}
          />
        </View>
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
  askTypo: {
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
  iconChildLayout: {
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
  groupChild1Position: {
    top: "0%",
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
  askToJoin: {
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
  askToJoin1: {
    left: 233,
  },
  courseLearningStyle1: {
    left: 221,
  },
  text1: {
    left: 213,
  },
  dallE20231101185212PIcon: {
    top: 19,
    height: 45,
    left: 32,
  },
  yourResults: {
    top: 366,
    left: 33,
    color: Color.colorGray,
    textAlign: "left",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  youreMoreProductive: {
    top: 102,
    left: 57,
    color: Color.colorDarkgray_200,
    width: 281,
    height: 62,
    textAlign: "left",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  ofStudentsShare: {
    top: 304,
    left: 63,
    color: Color.colorDarkslategray,
    textAlign: "left",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    position: "absolute",
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
  ellipseIcon: {
    left: 281,
    top: 373,
    width: 10,
  },
  resultsChild3: {
    left: 296,
    top: 373,
    width: 10,
  },
  resultsChild4: {
    left: 312,
    top: 373,
    width: 10,
  },
  resultsChild5: {
    left: 328,
    top: 373,
    width: 10,
  },
  resultsChild6: {
    left: 344,
    top: 373,
    width: 10,
  },
  vectorIcon: {
    top: 170,
    left: 58,
    height: 6,
  },
  resultsChild7: {
    top: 164,
    left: 197,
    height: 7,
  },
  resultsChild8: {
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
  plusMathIcon: {
    top: 5,
    left: 37,
  },
  femaleProfileParent: {
    left: 52,
  },
  resultsChild9: {
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
  resultsChild10: {
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
  component7Child: {
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
  groupChild1: {
    height: "114.55%",
    width: "114.55%",
    right: "-7.27%",
    bottom: "-14.55%",
    left: "-7.27%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  plusMathIcon3: {
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
  component7: {
    top: 768,
    left: 36,
    width: 320,
    height: 66,
    position: "absolute",
  },
  results: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorRoyalblue,
    width: "100%",
  },
});

export default Results;
