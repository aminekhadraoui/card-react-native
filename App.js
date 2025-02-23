import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const App = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#642a7c", "#3498db", "#2ecc71"]}
        style={styles.background}
      >
        <View style={styles.card}>
          <Image
            source={{ uri: "https://avatars.githubusercontent.com/u/43656863?v=4" }} // Replace with your image URL
            style={styles.image}
          />
          <View style={styles.content}>
            <Text style={styles.name}>Amiral</Text>
            <Text style={styles.title}>React Native Engineer</Text>
            <Text style={styles.description}>
              Transforming ideas into realities, creating interfaces that inspire
              and engage users' dreams.
            </Text>
            <View style={styles.socials}>
              <TouchableOpacity style={styles.socialButton}>
                <FontAwesome name="github" size={24} color="#f8f8f8" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <FontAwesome name="codepen" size={24} color="#f8f8f8" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <FontAwesome name="linkedin" size={24} color="#f8f8f8" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    width: width * 0.75,
    maxWidth: 650,
    padding: 44,
    backgroundColor: "#d4d3d3",
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  image: {
    width: width * 0.36,
    maxWidth: 280,
    height: 300,
    borderRadius: 16,
    marginLeft: -60,
    marginRight: 30,
    resizeMode: "cover",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 22,
    fontWeight: "400",
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "400",
    opacity: 0.75,
    marginBottom: 20,
  },
  description: {
    fontSize: 13,
    fontWeight: "400",
    opacity: 0.5,
    marginBottom: 30,
  },
  socials: {
    flexDirection: "row",
    gap: 8,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#3f3b39",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#d4d3d3",
  },
});

export default App;