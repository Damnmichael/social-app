import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Icons from "../assets/icons";
import { theme } from "../constant/theme";
import { router } from "expo-router";

const BackButton = ({size=26, router}) => {
  return (
    <Pressable onPress={() => router.back()} style={styles.button}>
     <Icons name="arrowLeft" strokeWidth={2.5} size={size} color={theme.colors.text}/>
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
    padding: 5,
    borderRadius: theme.radius.sm,
    backgroundColor: "rgba(0,0,0,0.07)",
  },  
});
