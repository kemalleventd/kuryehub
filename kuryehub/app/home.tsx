import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import globalStyles from '../src/styles/globalStyles';

export default function HomePage() {
    const router = useRouter();
    const { width: screenWidth } = Dimensions.get("window");

    // Calculate responsive icon size
    const iconSize = screenWidth * 0.08; // Icon size based on screen width
    return (
        <ScrollView style={globalStyles.container}>
            {/* Welcome Message */}
            <View style={globalStyles.welcomeSection}>
                <Image source={require("../assets/images/profile.png")} style={globalStyles.profilePhoto} />
                <Text style={globalStyles.welcomeText}>Merhaba, Ahmet!</Text>
                <Text style={globalStyles.subText}>Bugün sana nasıl yardımcı olabiliriz?</Text>
            </View>

            {/* Quick Actions */}
            <View style={globalStyles.quickActions}>
                <TouchableOpacity style={globalStyles.homeCard} onPress={() => router.push("../login")}>
                    <Ionicons name="add-circle" size={iconSize} color="#ffffff" />
                    <Text style={globalStyles.cardText}>Yeni İlan Ekle</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.homeCard} onPress={() => router.push("../ilanlar")}>
                    <Ionicons name="briefcase" size={iconSize} color="#ffffff" />
                    <Text style={globalStyles.cardText}>İlanlarım</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.homeCard} onPress={() => router.push("../login")}>
                    <Ionicons name="chatbubbles" size={iconSize} color="#ffffff" />
                    <Text style={globalStyles.cardText}>Mesajlar</Text>
                </TouchableOpacity>
            </View>

            {/* Notifications */}
            <View style={globalStyles.section}>
                <Text style={globalStyles.sectionTitle}>Bildirimler</Text>
                <Text style={globalStyles.notification}>Yeni başvurularınız var!</Text>
                <Text style={globalStyles.notification}>Profiliniz güncellenmelidir.</Text>
            </View>

            {/* Statistics */}
            <View style={globalStyles.section}>
                <Text style={globalStyles.sectionTitle}>İstatistikler</Text>
                <Text style={globalStyles.stat}>Aktif ilanlar: 3</Text>
                <Text style={globalStyles.stat}>Gelen başvurular: 15</Text>
            </View>
        </ScrollView>
    );
}


