import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Stack, useRouter } from 'expo-router'
import { AuthProvider, useAuth, } from '../contexts/AuthContext'

import { supabase } from '../lib/supabase'
const _layout = () => {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  )
} 

const MainLayout = () => {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      console.log("session user", session?.user?.id);
      
      if (session) {
        auth.setAuth(session.user);
        router.replace("/home");
      } else {
        auth.setAuth(null);
        router.replace("/welcome");
      }
    })
  }, [])
    
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  )
}

export default _layout;