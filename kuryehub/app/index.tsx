import { useRouter } from "expo-router";
import { Text, View, Image, TouchableOpacity, TextInput, Dimensions, Platform, StyleSheet } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View
      style={styles.container}>
      <Image
        source={require("../assets/images/1.png")}
        style={styles.image} />
      <Text style={styles.text}>Lütfen bize ne aradığını söyle.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.buttonText}>Kurye Arıyorum</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>İş Arıyorum</Text>
      </TouchableOpacity>
      <Image
        source={require("../assets/images/2.png")}
        style={styles.image2} />
    </View>
  );
}
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#afd0bf",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: screenWidth * 0.6, // 60% of screen width
    height: screenWidth * 0.6, // Keep it square
    marginBottom: 20,
    marginTop: -50,
    marginRight: 24,
    resizeMode: "contain",
  },
  image2: {
    width: screenWidth * 0.1, // 10% of screen width
    height: screenWidth * 0.1,
    marginTop: 30,
    resizeMode: "contain",
  },
  text: {
    color: "#808f87",
    marginBottom: 20,
    fontSize: screenWidth * 0.04, // Dynamic font size
    textAlign: "center",
  },
  text2: {
    color: "#808f87",
    marginBottom: 0,
    marginTop: 30,
    fontSize: screenWidth * 0.04,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#d3d3d3",
    paddingVertical: screenHeight * 0.02, // 2% of screen height
    paddingHorizontal: screenWidth * 0.1, // 10% of screen width
    borderRadius: 25,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: screenWidth * 0.6, // 60% of screen width
    alignItems: "center",
  },
  buttonText: {
    color: "#808f87",
    fontSize: screenWidth * 0.045, // Dynamic font size
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    padding: screenHeight * 0.015, // Dynamic padding
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#808f87",
    borderRadius: 8,
    backgroundColor: "#ffffff",
    color: "#000000",
    fontSize: screenWidth * 0.045, // Dynamic font size
  },
  link: {
    color: "#808f87",
    fontSize: screenWidth * 0.04, // Dynamic font size
    textDecorationLine: "underline",
  },

});