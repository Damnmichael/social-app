import { StyleSheet, Text, View , Image, Pressable} from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { wp } from '../constant/helpers/common'
import { hp } from '../constant/helpers/common'
import { theme } from '../constant/theme'
import Button from '../components/Button'
 import { useRouter } from 'expo-router'
const Welcome = () => {

  const router = useRouter()

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Image
          style={styles.welcomeImage}
          resizeMode="contain"
          source={require("../assets/images/welcome.png")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Mhill&apos;s Social</Text>
          <Text style={styles.subTitle}>
            Mhill is here to help you connect with your friends and family
          </Text>
        </View>
        <View style={styles.footer}>
          <Button
            title='Get Started'
            buttonStyle={{ marginHorizontal: wp(3) }}
            onPress={()=> router.push("signUp")}
          />
          <View style={styles.bottomTextContainer}>
            <Text style={styles.loginText}>
              Already have an account?
            </Text>
            <Pressable onPress={() => router.push("login")}>
              <Text style={[styles.loginText, { color: theme.colors.primaryDark, fontWeight: theme.font.semiBold  }]}>
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingHorizontal: wp(4),
  },
  textContainer: {
    gap: 20,
    marginTop: hp(4),
  },
  welcomeImage: {
    height: hp(30),
    width: wp(100),
    alignSelf: 'center'
  }, 
  title: {
    color: theme.colors.text,
    fontSize: hp(4),
    textAlign: "center",
    fontWeight: theme.font.extraBold,
  },
  subTitle: {
    textAlign: "center",
    paddingHorizontal: wp(3),
    fontSize: hp(1.7),
    color: theme.colors.text
  },
  footer: {
    gap: 30,
    width: "120%"
  },
  bottomTextContainer: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  loginText: {
    textAlign: "center",
    fontSize: hp(1.6),
    color: theme.colors.text
  }
})