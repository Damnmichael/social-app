import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { theme } from '../constant/theme'

const Loading = ({ size = "large", color = theme.colors.primary }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center",  }}>
      <ActivityIndicator size={size} color={color} />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({})