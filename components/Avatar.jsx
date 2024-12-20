import {  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp } from '../constant/helpers/common'
import { theme } from '../constant/theme'
import { Image } from 'expo-image'
import { getUserImageSrc } from '../services/imageService'

const Avatar = ({
  uri,
  size = hp(4.5),
  rounded = theme.radius.md,
  style = {}
}) => {
  return (
    <Image
      source={getUserImageSrc(uri)}
      transition={100}
      style={[styles.avatar, { width: size, height: size, borderRadius: rounded }, style]}
    />
  )
}

export default Avatar

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: theme.colors.darkLight,
    borderCurve: 'continuous',
    borderWidth: 0.1,
  },
})
