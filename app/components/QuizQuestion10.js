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

const QuizQuestion10 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.quizQuestion10}>
      <View style={styles.quizQuestion10Child} />
      <Image
        style={styles.dallE20231101185212PIcon}
        contentFit="cover"
        source={require("../Assets/dall-e-20231101-185212--photo-logo-design-for--learnlink--with-a-modern-and-minimalist-aesthetic-13.png")}
      />
      <Image
        style={styles.notificationIcon}
        contentFit="cover"
        source={require("../Assets/notification1.png")}
      />
      <Image
        style={styles.component4Icon}
        contentFit="cover"
        source={require("../Assets/component-410.png")}
      />
      <Pressable
        style={[styles.component3, styles.componentLayout]}
        onPress={() => navigation.navigate("QuizQuestion11")}
      >
        <Pressable style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Text style={[styles.largeGroups, styles.groupsTypo]}>
            large groups
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
        onPress={() => navigation.navigate("QuizQuestion11")}
      >
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Text style={[styles.smallGroups, styles.groupsTypo]}>
            small groups
          </Text>
          <ImageBackground
            style={[styles.staffIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../Assets/staff.png")}
          />
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.wrapper}
        underlayColor="#fff"
        onPress={() => navigation.navigate("QuizQuestion11")}
      >
        <>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Text style={[styles.independently, styles.groupsTypo]}>
            independently
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

const styles = StyleSheet.create({
  componentLayout: {
    height: 81,
    width: 325,
    left: 32,
    position: "absolute",
  },
  groupChildPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  groupsTypo: {
    textAlign: "left",
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.cabinMedium,
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
    top: "30.86%",
  },
  quizQuestion10Child: {
    top: 450,
    left: 0,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: Color.colorRoyalblue,
    width: 390,
    height: 394,
    position: "absolute",
  },
  dallE20231101185212PIcon: {
    top: 19,
    left: 28,
    width: 58,
    height: 53,
    position: "absolute",
  },
  notificationIcon: {
    top: 24,
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
    top: "0%",
    height: "100%",
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
    top: "30.86%",
  },
  component3: {
    top: 668,
  },
  smallGroups: {
    width: "35.38%",
    top: "40.74%",
    left: "42.15%",
  },
  staffIcon: {
    right: "65.23%",
    left: "22.46%",
    width: "12.31%",
    height: "49.38%",
    top: "30.86%",
    position: "absolute",
  },
  component2: {
    top: 573,
  },
  independently: {
    width: "41.85%",
    top: "38.27%",
    left: "39.08%",
  },
  graduateIcon: {
    top: "25.93%",
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
  quizQuestion10: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default QuizQuestion10;
