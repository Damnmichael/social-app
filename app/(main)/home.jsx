import { Button, StyleSheet, Text, View, Alert, Pressable } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/ScreenWrapper'
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import { wp } from '../../constant/helpers/common';
import { hp } from '../../constant/helpers/common';
import { theme } from '../../constant/theme';
import Icons from '../../assets/icons';
import { useRouter } from 'expo-router';
import Avatar from '../../components/Avatar';

const Home = () => {

  const { user, auth } = useAuth();
  const router = useRouter();
  console.log("user", user);

// const onLogout = async () => {
//   // auth.setAuth(null);
//   const { error } = await supabase.auth.signOut();
//   if (error) {
//     Alert.alert("sign  out", "Error Signing out!");
//   }
// }
  return (
    <ScreenWrapper bg="white">
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Mhill</Text>
          <View style={styles.icons}>
            <Pressable onPress={() => router.push("notifications")}>
              <Icons
                name="heart"
                size={hp(3.2)}
                strokeWidth={2}
                color={theme.colors.text}
              />
            </Pressable>
            <Pressable onPress={() => router.push("newPost")}>
              <Icons
                name="plus"
                size={hp(3.2)}
                strokeWidth={2}
                color={theme.colors.text}
              />
            </Pressable>
            <Pressable onPress={() => router.push("profile")}>
              <Avatar
              uri={user?.image}
                size={hp(4.3)}
                rounded={theme.radius.sm}
                style={{borderWidth: 0.1}}
              />
            </Pressable>
          </View>
        </View>
      </View>
      {/* <Button title="logout" onPress={onLogout} /> */}
    </ScreenWrapper>
  );
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: wp(2),
  },
  title: {
    fontSize: hp(3.2),
    fontWeight: theme.font.bold,
    color: theme.colors.text,
  },
  avatarImage: {
    width: hp(4.3),
    height: hp(4.3),
    borderRadius: theme.radius.sm,
    borderCurve: 'continuous',
    borderColor: theme.colors.gray,
    borderWidth: 3,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 18,
  },
})
