import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import background from "../image/background.png"; // Оновіть цей шлях до правильного розташування
import { Dimensions } from "react-native";

const LoginScreen = () => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height; // Змінено з width на height

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LinearGradient
        // Colors визначає градієнт від жовтого (#FFD700) до синього (#0000FF)
        colors={["#C253CC", "#EADDEB"]}
        style={{
          alignItems: "center",
          borderRadius: 5,
        }} // Змінено zIndex на 2, щоб текст був над зображенням
      >
        <Text style={{ padding: 20, fontSize: 60, color: "white" }}>
          Beauty Blossom
        </Text>
      </LinearGradient>

      <Text
        style={{
          marginTop: 20,
          fontWeight: "bold",
          fontSize: 17,
          color: "black",
        }}
      >
        Авторизуйтесь в своєму аккаунті
      </Text>
      <Image
        style={{
          width: screenWidth,
          height: screenHeight,
          position: "absolute",
          zIndex: -1,
        }}
        source={background}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
