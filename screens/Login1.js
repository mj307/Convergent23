import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Login1 = () => {
  const [rectangleTextInput, setRectangleTextInput] = useState("username");
  const [rectangleTextInput1, setRectangleTextInput1] = useState("email");
  const [rectangleTextInput2, setRectangleTextInput2] = useState("password");

  return (
    <View style={styles.login}>
      <Text style={styles.signIn}>sign in</Text>
      <View style={[styles.frame, styles.framePosition2]}>
        <View style={[styles.frame1, styles.framePosition2]}>
          <View style={[styles.frame2, styles.framePosition1]} />
          <View style={[styles.frame3, styles.framePosition1]} />
          <View style={[styles.frame2, styles.framePosition1]}>
            <View style={[styles.frame5, styles.frameLayout]}>
              <TextInput
                style={[styles.frameChild, styles.frameLayout]}
                value={rectangleTextInput}
                onChangeText={setRectangleTextInput}
                placeholder="username"
                autoCapitalize="none"
              />
              <View style={[styles.frameItem, styles.framePosition]} />
              <Image
                style={styles.accountIcon}
                contentFit="cover"
                source={require("../assets/account.png")}
              />
            </View>
            <View style={[styles.frame6, styles.frameLayout]}>
              <TextInput
                style={[styles.frameChild, styles.frameLayout]}
                value={rectangleTextInput1}
                onChangeText={setRectangleTextInput1}
                placeholder="email"
                autoCapitalize="none"
              />
              <View style={[styles.frameItem, styles.framePosition]} />
              <Image
                style={styles.accountIcon}
                contentFit="cover"
                source={require("../assets/at-sign.png")}
              />
            </View>
            <View style={[styles.frame7, styles.frameLayout]}>
              <TextInput
                style={[styles.frameChild, styles.frameLayout]}
                value={rectangleTextInput2}
                onChangeText={setRectangleTextInput2}
                placeholder="password"
                secureTextEntry={true}
              />
              <View style={[styles.frame8, styles.framePosition]}>
                <View style={[styles.frameItem, styles.framePosition]} />
                <Image
                  style={styles.accountIcon}
                  contentFit="cover"
                  source={require("../assets/lock.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.frame3, styles.framePosition1]}>
            <Text style={[styles.forgotYourPassword, styles.logInTypo]}>
              forgot your password?
            </Text>
            <View style={[styles.frame5, styles.frameLayout]}>
              <Pressable
                style={[styles.rectanglePressable, styles.frameLayout]}
                Login="Login"
              />
              <Text style={[styles.logIn, styles.logInTypo]}>log in</Text>
            </View>
          </View>
        </View>
        <Image
          style={styles.dallE20231101185212PIcon}
          contentFit="cover"
          source={require("../assets/dall-e-20231101-185212--photo-logo-design-for--learnlink--with-a-modern-and-minimalist-aesthetic-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition2: {
    width: 390,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  framePosition1: {
    left: 37,
    width: 315,
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout: {
    height: 43,
    position: "absolute",
  },
  framePosition: {
    width: 48,
    height: 43,
    top: 0,
    left: 0,
    position: "absolute",
  },
  logInTypo: {
    textAlign: "center",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  signIn: {
    top: 288,
    left: 127,
    fontSize: FontSize.size_31xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  frame2: {
    top: 28,
    height: 149,
    width: 315,
  },
  frame3: {
    top: 187,
    height: 62,
    width: 315,
  },
  frameChild: {
    left: 51,
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    width: 264,
    backgroundColor: Color.colorWhitesmoke,
    top: 0,
  },
  frameItem: {
    borderTopLeftRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
  },
  accountIcon: {
    top: 9,
    left: 11,
    width: 25,
    height: 25,
    position: "absolute",
  },
  frame5: {
    top: 0,
    width: 315,
    left: 0,
    height: 43,
    overflow: "hidden",
  },
  frame6: {
    top: 53,
    width: 315,
    left: 0,
    height: 43,
    overflow: "hidden",
  },
  frame8: {
    overflow: "hidden",
  },
  frame7: {
    top: 106,
    width: 315,
    left: 0,
    height: 43,
    overflow: "hidden",
  },
  forgotYourPassword: {
    top: 50,
    left: 94,
    fontSize: FontSize.size_3xs,
    textDecoration: "underline",
    color: Color.colorDarkgray_100,
    width: 126,
  },
  rectanglePressable: {
    borderRadius: Border.br_3xs,
    top: 0,
    width: 315,
    left: 0,
    height: 43,
    backgroundColor: Color.colorRoyalblue,
  },
  logIn: {
    top: 11,
    left: 91,
    fontSize: FontSize.size_lg,
    width: 132,
    color: Color.colorWhite,
  },
  frame1: {
    top: 238,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    height: 450,
  },
  dallE20231101185212PIcon: {
    left: 126,
    width: 138,
    height: 125,
    top: 0,
    position: "absolute",
  },
  frame: {
    top: 156,
    height: 688,
  },
  login: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorRoyalblue,
  },
});

export default Login1;
