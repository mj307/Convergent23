import * as React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.login, styles.loginLayout]}>
      <View style={styles.loginChild} />
      <TextInput
        style={[styles.loginItem, styles.loginPosition]}
        placeholder="username or email"
        autoCapitalize="none"
      />
      <View style={[styles.loginInner, styles.loginInnerLayout]} />
      <TextInput
        style={[styles.rectangleTextinput, styles.rectanglePosition]}
        placeholder="password"
        autoCapitalize="none"
      />
      <View style={[styles.rectangleView, styles.rectanglePosition]} />
      <Image
        style={styles.dallE20231101185212PIcon}
        contentFit="cover"
        source={require("../assets/dall-e-20231101-185212--photo-logo-design-for--learnlink--with-a-modern-and-minimalist-aesthetic-1.png")}
      />
      <Text style={styles.signIn}>sign in</Text>
      <TouchableHighlight
        style={styles.component9}
        underlayColor="#fff"
        onPress={() => navigation.navigate("QuizQuestion1")}
      >
        <>
          <Pressable
            style={[styles.component9Child, styles.loginLayout]}
            onPress={() => navigation.navigate("QuizQuestion1")}
          />
          <Text style={[styles.logIn, styles.logInTypo]}>log in</Text>
        </>
      </TouchableHighlight>
      <Image
        style={[styles.accountIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/account.png")}
      />
      <Image
        style={[styles.lockIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/lock.png")}
      />
      <Text style={[styles.forgotYourPassword, styles.logInTypo]}>
        forgot your password?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loginLayout: {
    width: "100%",
    backgroundColor: Color.colorRoyalblue,
  },
  loginPosition: {
    height: 43,
    backgroundColor: Color.colorWhitesmoke,
    top: 422,
    position: "absolute",
  },
  loginInnerLayout: {
    width: 48,
    borderBottomLeftRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    left: 37,
  },
  rectanglePosition: {
    top: 472,
    height: 43,
    backgroundColor: Color.colorWhitesmoke,
    position: "absolute",
  },
  logInTypo: {
    textAlign: "center",
    fontFamily: FontFamily.cabinMedium,
    fontWeight: "500",
    position: "absolute",
  },
  iconLayout: {
    height: 25,
    width: 25,
    left: 48,
    position: "absolute",
  },
  loginChild: {
    top: 394,
    left: 0,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    width: 390,
    height: 450,
    position: "absolute",
  },
  loginItem: {
    width: 264,
    borderBottomRightRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    left: 88,
  },
  loginInner: {
    height: 43,
    backgroundColor: Color.colorWhitesmoke,
    top: 422,
    position: "absolute",
  },
  rectangleTextinput: {
    width: 264,
    borderBottomRightRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    left: 88,
  },
  rectangleView: {
    width: 48,
    borderBottomLeftRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    left: 37,
  },
  dallE20231101185212PIcon: {
    top: 156,
    left: 126,
    width: 138,
    height: 125,
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
  component9Child: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  logIn: {
    width: "41.9%",
    top: "25.58%",
    left: "28.89%",
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
  },
  component9: {
    top: 525,
    width: 315,
    left: 37,
    height: 43,
    position: "absolute",
  },
  accountIcon: {
    top: 431,
  },
  lockIcon: {
    top: 481,
  },
  forgotYourPassword: {
    top: 575,
    left: 131,
    fontSize: FontSize.size_3xs,
    textDecoration: "underline",
    color: Color.colorDarkgray_100,
    width: 126,
  },
  login: {
    flex: 1,
    height: 844,
    overflow: "hidden",
  },
});

export default Login;
