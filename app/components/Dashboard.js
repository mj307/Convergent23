import React from "react";
import { StyleSheet } from 'react-native';

const Dashboard = () => {
  return (
    <View style={styles.dashboard}>
      <View style={styles.div}>
        <Text style={styles['welcome-back']}>
          <Text style={styles['text-wrapper']}>Welcome Back,</Text>
          <Text style={styles.span}>*User Name*!</Text>
        </Text>
        <View style={styles['overlap-group']}>
          <Text style={styles['text-wrapper-2']}>Your Groups</Text>
          <Text style={styles['text-wrapper-3']}>Your Classes</Text>
          <Text style={styles['text-wrapper-4']}>Your Friends</Text>
          <View style={styles.overlap}>
            <Text style={styles['group-members']}>
              Group 1{'\n'}
              *Members*{'\n'}
              *Members Studying*{'\n'}
              *Where Members are*
            </Text>
          </View>
          <View style={styles['overlap-2']}>
            <Text style={styles['text-wrapper-5']}>Group 1</Text>
            <View style={styles.rectangle} />
            <Text style={styles['text-wrapper-6']}>Group 2</Text>
          </View>
          <View style={styles['overlap-3']}>
            <Text style={styles['text-wrapper-7']}>*Class Name*</Text>
            <Text style={styles['text-wrapper-8']}></Text>
            <View style={styles['overlap-4']}>
              <Text style={styles['text-wrapper-9']}>#</Text>
              <Text style={styles['study-groups']}>
                Study{'\n'}
                Groups
              </Text>
            </View>
          </View>
          <Image
            style={styles['female-profile']}
            source={{ uri: 'https://c.animaapp.com/Rl7tNbDQ/img/female-profile-2@2x.png' }}
          />
          <Image
            style={styles['male-user']}
            source={{ uri: 'https://c.animaapp.com/Rl7tNbDQ/img/male-user-1@2x.png' }}
          />
          <Image
            style={styles.img}
            source={{ uri: 'https://c.animaapp.com/Rl7tNbDQ/img/female-profile-2@2x.png' }}
          />
          <Image
            style={styles['female-profile-2']}
            source={{ uri: 'https://c.animaapp.com/Rl7tNbDQ/img/female-profile-2@2x.png' }}
          />
          <Image
            style={styles['male-user-2']}
            source={{ uri: 'https://c.animaapp.com/Rl7tNbDQ/img/male-user@2x.png' }}
          />
          <View style={styles.rectangle-2} />
        </View>
        <Image
          style={styles.notification}
          source={{ uri: 'https://c.animaapp.com/Rl7tNbDQ/img/notification@2x.png' }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dashboard: {
    backgroundColor: '#4e75eb',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  div: {
    backgroundColor: '#4e75eb',
    height: 844,
    position: 'relative',
    width: 390,
  },
  'welcome-back': {
    color: 'transparent',
    fontFamily: 'Cabin, Helvetica',
    fontSize: 30,
    fontWeight: '500',
    left: 37,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 99,
  },
  'text-wrapper': {
    color: '#fbfdff',
  },
  span: {
    color: '#fafdff',
    fontSize: 50,
  },
  'overlap-group': {
    backgroundColor: '#ffffff',
    borderRadius: '30px 30px 0px 0px',
    height: 600,
    left: 0,
    position: 'absolute',
    top: 244,
    width: 390,
  },
  'text-wrapper-2': {
    color: '#9b9b9b',
    fontFamily: 'Cabin, Helvetica',
    fontSize: 20,
    fontWeight: '500',
    left: 32,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 22,
    whiteSpace: 'nowrap',
    width: 101,
  },
  'text-wrapper-3': {
    color: '#9b9b9b',
    fontFamily: 'Cabin, Helvetica',
    fontSize: 20,
    fontWeight: '500',
    left: 32,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 224,
    whiteSpace: 'nowrap',
  },
  'text-wrapper-4': {
    color: '#9b9b9b',
    fontFamily: 'Cabin, Helvetica',
    fontSize: 20,
    fontWeight: '500',
    left: 32,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 425,
    whiteSpace: 'nowrap',
  },
  overlap: {
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    height: 148,
    left: 32,
    position: 'absolute',
    top: 58,
    width: 155,
  },
  'group-members': {
    color: '#5d5d5d',
    fontFamily: 'Cabin, Helvetica',
    fontSize: 15,
    fontWeight: '500',
    left: 25,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 27,
    width: 109,
  },
  'overlap-2': {
    borderRadius: 10,
    height: 148,
    left: 202,
    position: 'absolute',
    top: 58,
    width: 155,
  },
  'text-wrapper-5': {
    color: '#5d5d5d',
    fontFamily: 'Cabin, Helvetica',
    fontSize: 15,
    fontWeight: '500',
    left: 36,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 59,
    whiteSpace: 'nowrap',
    width: 46,
  },
  rectangle: {
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    height: 148,
    left: 0,
    position: 'absolute',
    top: 0,
    width: 155,
  },
  'text-wrapper-6': {
    color: '#5d5d5d',
    fontFamily: 'Cabin, Helvetica',
    fontSize: 15,
    fontWeight: '500',
    left: 53,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 59,
    whiteSpace: 'nowrap',
    width: 50,
  },
  'overlap-3': {
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    height: 44,
    left: 32,
    position: 'absolute',
    top: 259,
    width: 325,
  },
  'text-wrapper-7': {
    color: '#5d5d5d',
    fontFamily: 'Cabin, Helvetica',
    fontSize: 12,
    fontWeight: '500',
    left: 55,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 8,
    width: 50,
  },
  'text-wrapper-8': {
    color: '#b3b3b3',
    fontFamily: 'Cabin, Helvetica',
    fontSize: 8,
    fontWeight: '500',
    left: 55,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 23,
    width: 126,
  },
  'overlap-4': {
    height: 24,
    left: 217,
    position: 'absolute',
    top: 9,
    width: 62,
  },
  'text-wrapper-9': {
    color: '#5d5d5d',
    fontFamily: 'Cabin, Helvetica',
    fontSize: 20,
    fontWeight: '500',
    left: 0,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    textAlign: 'center',
    top: 0,
    width: 35,
  },
  'study-groups': {
    color: '#b3b3b3',
    fontFamily: 'Cabin, Helvetica',
    fontSize: 8,
    fontWeight: '500',
    left: 31,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 2,
    width: 31,
  },
  'female-profile': {
    height: 50,
    left: 32,
    position: 'absolute',
    top: 462,
    width: 55,
  },
  'male-user': {
    height: 50,
    left: 99,
    position: 'absolute',
    top: 462,
    width: 56,
  },
  img: {
    height: 50,
    left: 167,
    position: 'absolute',
    top: 462,
    width: 55,
  },
  'female-profile-2': {
    height: 50,
    left: 302,
    position: 'absolute',
    top: 462,
    width: 55,
  },
  'male-user-2': {
    height: 50,
    left: 233,
    position: 'absolute',
    top: 462,
    width: 55,
  },
  'rectangle-2': {
    backgroundColor: '#f4f4f4',
    height: 38,
    left: 37,
    position: 'absolute',
    top: 546,
    width: 320,
  },
  notification: {
    height: 40,
    left: 322,
    position: 'absolute',
    top: 24,
    width: 40,
  },
});