import { useRouter } from "expo-router";
import { ScrollView, Text, View, Alert, TouchableOpacity, TextInput, Dimensions, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Signup() {
    const router = useRouter();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [businessType, setBusinessType] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const pickerRef = useRef();

    const handleSignup = async () => {
        try {
            const response = await fetch("http://your-server-ip/signup.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullName,
                    email,
                    password,
                    businessType,
                    businessName,
                    city,
                    address,
                }),
            });

            const result = await response.json();
            if (result.message === "Kayıt başarılı!") {
                router.push("/login");
            } else {
                Alert.alert("Hata", result.message);
            }
        } catch (error) {
            console.error("Kayıt hatası:", error);
            Alert.alert("Hata", "Bir hata oluştu. Lütfen tekrar deneyin.");
        }
    };

    return (
        <ScrollView>

            <View style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={30} color="#333" />
                </TouchableOpacity>
                <Text style={styles.text}>Gerekli alanları lütfen kontrol ederek doldurun.</Text>

                <TextInput style={styles.input} placeholder="İşveren Adı ve Soyadı" value={fullName} onChangeText={setFullName} />
                <TextInput style={styles.input} placeholder="E-posta Adresi" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
                <TextInput style={styles.input} placeholder="Şifre" value={password} onChangeText={setPassword} secureTextEntry />
                <TextInput style={styles.input} placeholder="İşletme Adı" value={businessName} onChangeText={setBusinessName} />

                <Text style={styles.text2}>İşletme Türünü Seçin:</Text>
                <Picker selectedValue={businessType} onValueChange={setBusinessType} style={styles.dropdown}>
                    <Picker.Item label="İşletme Türü Seçin" value="" />
                    <Picker.Item label="Restoran" value="restoran" />
                    <Picker.Item label="Market" value="market" />
                    <Picker.Item label="Eczane" value="eczane" />
                </Picker>

                <Text style={styles.text2}>Şehir Seçin:</Text>
                <Picker selectedValue={city} onValueChange={setCity} style={styles.dropdown}>
                    <Picker.Item label="Ankara" value="ankara" />
                    <Picker.Item label="İzmir" value="izmir" />
                    <Picker.Item label="İstanbul" value="istanbul" />
                    <Picker.Item label="Adana" value="adana" />
                </Picker>

                <TextInput style={styles.input} placeholder="Adres" value={address} onChangeText={setAddress} multiline />

                <TouchableOpacity style={styles.button} onPress={handleSignup}>
                    <Text style={styles.buttonText}>Kayıt Ol</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1f1f1",
        padding: screenWidth * 0.05,
        alignItems: "center",
    },
    text: {
        color: "#404040",
        marginBottom: screenHeight * 0.02,
        fontSize: screenWidth * 0.045,
        textAlign: "center",
        fontWeight: "600",
    },
    text2: {
        color: "#404040",
        marginTop: screenHeight * 0.015,
        marginBottom: screenHeight * 0.01,
        fontSize: screenWidth * 0.042,
        textAlign: "center",
        fontWeight: "500",
    },
    input: {
        width: "90%",
        padding: screenHeight * 0.015,
        marginVertical: screenHeight * 0.01,
        borderWidth: 1,
        borderColor: "#cccccc",
        borderRadius: 10,
        backgroundColor: "#ffffff",
        color: "#000000",
        fontSize: screenWidth * 0.045,
    },
    dropdown: {
        width: "90%",
        padding: screenHeight * 0.005,
        marginVertical: screenHeight * 0.01,
        borderWidth: 1,
        borderColor: "#cccccc",
        borderRadius: 10,
        backgroundColor: "#ffffff",
        color: "#000000",
        fontSize: screenWidth * 0.04,
    },
    button: {
        backgroundColor: "#28a745",
        paddingVertical: screenHeight * 0.015,
        borderRadius: 30,
        marginTop: screenHeight * 0.03,
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#ffffff",
        fontSize: screenWidth * 0.045,
        fontWeight: "600",
        textAlign: "center",
    },
    backButton: {
        position: "absolute",
        left: screenWidth * 0.03,
        top: screenHeight * 0.05,
    },
});
