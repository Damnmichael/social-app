import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { useAuth } from '../../contexts/AuthContext';
import { useRouter } from 'expo-router';
import Header from '../../components/Header';
import { hp, wp } from '../../constant/helpers/common';
import { theme } from '../../constant/theme';
import Icons from "../../assets/icons";
import { supabase } from '../../lib/supabase';
const Profile = () => {
  const { user, auth } = useAuth();
  const router = useRouter();
  
  const onLogout = async () => {
    // auth.setAuth(null);
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert("sign  out", "Error Signing out!");
    }
  }
  const handleLogout = async() => {
    //confirm modal
    Alert.alert("Confirm", "Are you sure you want to log out?", [
      {
        text: "Cancel",
        onPress: () => console.log("modal cancelled"),
        style:"cancel"
      },
      {
        text: "Logout",
        onPress: () => onLogout(),
        style:"destructive"
      }
    ])
  }
  return (
    <ScreenWrapper bg="white">
     <UserHeader user = {user} router= {router} handleLogout = {handleLogout}/>
    </ScreenWrapper>
  )
}

const UserHeader = ({ user, router, handleLogout }) => {
  return (
    <View style={{flex:1, backgroundColor:"white", paddingHorizontal:wp(2)}}>
      <Header title="Profile" showBackButton={true} />
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout} >
       <Icons name="logout" color={theme.colors.rose} />
      </TouchableOpacity>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginHorizontal: wp(4),
    marginBottom: 20,
  },
  headerShape: {
    width: wp(100),
    height: hp(20),
  },
  avatarContainer: {
    height: hp(12),
    width: hp(12),
    alignItems: "center",
  },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: -12,
    padding: 7,
    borderRadius: 50,
    backgroundColor: "white",
    shadowColor: theme.colors.textLight,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 7,
  },
  userName: {
    fontSize: hp(3),
    fontWeight: 500,
    color: theme.colors.textDark,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  infoText: {
    fontSize: hp(1.6),
    fontWeight: 500,
    color: theme.colors.textLight,
  },
  logoutButton: {
    position: "absolute",
    right: wp(2),
    padding: 10,
    borderRadius: theme.radius.sm,
    backgroundColor: "#fee2e2",
  },
  listStyles: {
    paddingHorizontal: wp(4),
    paddingBottom: 30,
  },
  noPost: {
    fontSize: hp(2),
    textAlign: "center",
    color: theme.colors.text,
   
  },
});
