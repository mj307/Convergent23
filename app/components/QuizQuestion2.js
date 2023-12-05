import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  ImageBackground,
  TouchableHighlight,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import Results from "./QuizQuestion3";

const QuizQuestion2 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.quizQuestion1}>
      <View style={styles.quizQuestion1Child} />
      
      <Image
        style={styles.dallE20231101185212PIcon}
        contentFit="cover"
        source={require("../Assets/dall-e-20231101-185212--photo-logo-design-for--learnlink--with-a-modern-and-minimalist-aesthetic-12.png")}
      />
      <Image
        style={styles.notificationIcon}
        contentFit="cover"
        source={require("../Assets/notification1.png")}
      />
      <Image
        style={styles.component4Icon}
        contentFit="cover"
        source={require("../Assets/component-4.png")}
      />
      <Pressable
        style={[styles.component3, styles.componentLayout]}
        onPress={() => navigation.navigate(Results)}
      >
        <Pressable style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Text style={[styles.largeGroups, styles.groupsTypo]}>
            Write it out
          </Text>
        </Pressable>
        <Image
          style={[styles.userGroupsIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../Assets/user-groups.png")}
        />
      </Pressable>
      <TouchableHighlight
        style={[styles.component2, styles.componentLayout]}
        underlayColor="#fff"
        onPress={() => navigation.navigate(Results)}
      >
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Text style={[styles.smallGroups, styles.groupsTypo]}>
            Spell it out
          </Text>
          <ImageBackground
            style={[styles.staffIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../Assets/staff.png")}
          />
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.wrapper, styles.componentLayout]} // Adjusted this line
        underlayColor="#fff"
        onPress={() => navigation.navigate(Results)}
      >
        <>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Text style={[styles.independently, styles.groupsTypo]}>
            Trace it in the air
          </Text>
          <Image
            style={[styles.graduateIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../Assets/graduate.png")}
          />
        </>
      </TouchableHighlight>
    </View>
  );
};

const buttonGap = 20; // Adjust this value to control the gap
const increasedGap = 40;
const styles = StyleSheet.create({
  componentLayout: {
    height: 81,
    width: 325,
    left: 32,
    position: "absolute",
  },
  component3: {
    top: 1200, // Position of the "large groups" button
  },
  component2: {
    top: 700 + 81 + buttonGap, // Increased gap between the first two buttons
  },
  wrapper: {
    // Inherits size from componentLayout and adjusts position
    top: 700 + 81 * 2 + increasedGap + buttonGap, // Decreased the top value to move up
    right: "8.97%",
    bottom: "33.77%",
    left: "7.69%",
    position: "absolute",
  },
  groupChildPosition: {
    left: "0.5%",
    bottom: "0%",
    right: "0%",
    top: "30%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  groupsTypo: {
    textAlign: "left",
    color: Color.colorDimgray_200,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "12.31%",
    height: "49.38%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    bottom: "19.75%",
    top: "65.86%",
  },
  quizQuestion1Child: {
    top: 450,
    left: 0,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: Color.colorRoyalblue,
    width: 430,
    height: 490,
    position: "absolute",
  },
  dallE20231101185212PIcon: {
    top: 38,
    left: 28,
    width: 58,
    height: 53,
    position: "absolute",
  },
  notificationIcon: {
    top: 40,
    left: 322,
    width: 40,
    height: 40,
    position: "absolute",
  },
  component4Icon: {
    top: 83,
    left: 43,
    width: 304,
    height: 347,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    bottom: "0%",
    right: "0%",
    top: 500,
    height: "100%",
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 300, // Adjust this based on total height available for buttons
    marginTop: 20, // Adjust as needed
  },
  button: {
    height: 81,
    width: 325,
  },
  largeGroups: {
    width: "33.23%",
    top: "37.04%",
    left: "44%",
  },
  userGroupsIcon: {
    right: "63.38%",
    left: "24.31%",
    bottom: "19.75%",
    top: "75.86%",
  },
  component3: {
    top: 700,
  },
  smallGroups: {
    width: "35.38%",
    top: "64%",
    left: "42.15%",
  },
  staffIcon: {
    right: "65.23%",
    left: "22.46%",
    width: "12.31%",
    height: "49.38%",
    top: "60.86%",
    position: "absolute",
  },
  component2: {
    top: 600,
  },
  independently: {
    width: "41.85%",
    top: "58.27%",
    left: "39.08%",
  },
  graduateIcon: {
    top: "50.93%",
    right: "68.62%",
    bottom: "24.69%",
    left: "19.08%",
  },
  wrapper: {
    height: "9.6%",
    width: "83.33%",
    top: "56.64%",
    right: "8.97%",
    bottom: "33.77%",
    left: "7.69%",
    position: "absolute",
  },
  quizQuestion1: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default QuizQuestion2;
