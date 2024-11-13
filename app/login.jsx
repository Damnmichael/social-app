import { StyleSheet, Text, View,TextInput, Pressable, Alert} from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import Icons from '../assets/icons'
import BackButton from '../components/BackButton'
import { useRouter } from 'expo-router'
import { hp, wp } from '../constant/helpers/common'
import { theme } from '../constant/theme'
import Input from '../components/Input'
import { useState, useRef } from 'react'
import Button from '../components/Button'
const Login = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Login", "Please fill all the fields!")
      return;
      }
   }


  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton router={router} />

        <View>
          <Text style={styles.welcomeText}>Hey,</Text>
          <Text style={styles.welcomeText}>Welcome Back </Text>
        </View>

        <View style={styles.form}>
          <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
            Please login to continue
          </Text>

          <Input
            icon={<Icons name="mail" size={26} strokeWidth={1.6} />}
            placeholder="Enter your email"
            onChangeText={(value) => (emailRef.current = value)}
          />

          <Input
            icon={<Icons name="lock" size={26} strokeWidth={1.6} />}
            placeholder="Enter your password"
            secureTextEntry 
            onChangeText={(value) => (passwordRef.current = value)}
          />
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
          <Button
            title={"Login"}
            loading={loading}
            onPress={onSubmit}
          
          />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <Pressable>
            <Text style={[styles.footerText, {color:theme.colors.primaryDark, fontWeight:theme.font.semiBold}]}>Sign up</Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default Login

const styles = StyleSheet.create({
  container: {
  flex:1,
    gap: 45,
    paddingHorizontal: wp(2),
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: theme.font.bold,
    color: theme.colors.text,
  },
  form: {
    gap: 25,
  },
  forgotPassword: {
    textAlign: "right",
    color: theme.colors.text,
    fontWeight: theme.font.bold,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap:5  
  },
  footerText: {
    textAlign: "center",
    color: theme.colors.text,
    fontSize:hp(1.6)
  }
});