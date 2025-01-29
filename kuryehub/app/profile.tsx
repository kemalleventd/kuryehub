import { View, Image, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // İkon kütüphanesi
import { useRouter } from "expo-router";

export default function Profile() {
    // Example state with user information
    const userData = {
        fullName: "Ahmet Yılmaz",
        email: "ahmet@example.com",
        password: "******",
        businessType: "Restoran",
        businessName: "Yıldız Restoran",
        city: "İstanbul",
        address: "Fatih Mah. 123 Sok. No:45",
        leads: ["İlan 1", "İlan 2", "İlan 3"], // Açık ilanlar burada
        
    };
    const router = useRouter();

    const handleLogout = () => {
        // Buraya çıkış işlemlerini ekle (örneğin token temizleme, yönlendirme vb.)
        console.log("Kullanıcı çıkış yaptı");
        router.push("/login"); // Kullanıcıyı giriş sayfasına yönlendir
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Profil</Text>
            </View>

            <View style={styles.photoContainer}>
                <Image
                    source={require("../assets/images/profile.png")}
                    style={styles.profilePhoto}
                />
                <Text style={styles.photoLabel}>Profil Fotoğrafı</Text>
                <TouchableOpacity style={styles.editIcon} onPress={() => { /* Fotoğraf düzenleme işlemi */ }}>
                    <Ionicons name="pencil" size={screenWidth * 0.05} color="#808f87" />
                </TouchableOpacity>
            </View>

            {/* İşletme Photo Section */}
            <View style={styles.photoContainer}>
                <Image
                    source={require("../assets/images/isletme.png")}
                    style={styles.businessPhoto}
                />
                <Text style={styles.photoLabel}>İşletme Fotoğrafı</Text>
                <TouchableOpacity style={styles.editIcon} onPress={() => { /* Fotoğraf düzenleme işlemi */ }}>
                    <Ionicons name="pencil" size={screenWidth * 0.05} color="#808f87" />
                </TouchableOpacity>
            </View>

            {/* User Information */}
            <View style={styles.infoContainer}>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Ad ve Soyad:</Text>
                    <Text style={styles.value}>{userData.fullName}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>E-posta:</Text>
                    <Text style={styles.value}>{userData.email}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Şifre:</Text>
                    <Text style={styles.value}>{userData.password}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>İşletme Türü:</Text>
                    <Text style={styles.value}>{userData.businessType}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>İşletme Adı:</Text>
                    <Text style={styles.value}>{userData.businessName}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Şehir:</Text>
                    <Text style={styles.value}>{userData.city}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Adres:</Text>
                    <Text style={styles.value}>{userData.address}</Text>
                </View>
                <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.editButtonText}>Profili Düzenle</Text>
                </TouchableOpacity>
            </View>

            {/* Open Leads */}
            <View style={styles.leadsContainer}>
                <Text style={styles.leadsTitle}>Açık İlanlar:</Text>
                {userData.leads && userData.leads.length > 0 ? (
                    userData.leads.map((lead, index) => (
                        <View key={index} style={styles.leadItem}>
                            <Text style={styles.leadText}>{lead}</Text>
                        </View>
                    ))
                ) : (
                    <Text style={styles.noLeadsText}>Henüz açık ilan yok.</Text>
                )}
            </View>

            {/* Add New Job Lead Button */}
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>İlan Ekle</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutButtonText}>Çıkış Yap</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1f1f1",
        padding: screenWidth * 0.05,
    },
    header: {
        marginBottom: screenHeight * 0.03,
    },
    title: {
        fontSize: screenWidth * 0.06,
        fontWeight: "bold",
        color: "#404040",
        textAlign: "center",
    },
    infoContainer: {
        backgroundColor: "#ffffff",
        borderRadius: 10,
        padding: screenWidth * 0.05,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    infoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: screenHeight * 0.01,
    },
    label: {
        fontSize: screenWidth * 0.045,
        fontWeight: "600",
        color: "#808f87",
    },
    value: {
        fontSize: screenWidth * 0.045,
        fontWeight: "400",
        color: "#404040",
        textAlign: "right",
    },
    editButton: {
        backgroundColor: "#28a745",
        marginTop: screenHeight * 0.03,
        paddingVertical: screenHeight * 0.015,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
    },
    editButtonText: {
        color: "#ffffff",
        fontSize: screenWidth * 0.045,
        fontWeight: "600",
        paddingHorizontal: screenWidth * 0.02, // Sağdan ve soldan %2 boşluk
    },
    editIcon: {
        position: "absolute",
        bottom: 5,
        right: 5,
        backgroundColor: "#ffffff",
        borderRadius: 50,
        padding: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    photoContainer: {
        alignItems: "center",
        marginVertical: screenHeight * 0.025,
    },
    profilePhoto: {
        width: screenWidth * 0.3,
        height: screenWidth * 0.3,
        borderRadius: (screenWidth * 0.3) / 2,
        borderWidth: 2,
        borderColor: "#808f87",
        marginBottom: screenHeight * 0.01,
    },
    businessPhoto: {
        width: screenWidth * 0.6,
        height: screenWidth * 0.3,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#808f87",
        marginBottom: screenHeight * 0.01,
    },
    photoLabel: {
        fontSize: screenWidth * 0.045,
        color: "#808f87",
        marginBottom: screenHeight * 0.01,
    },
    leadsContainer: {
        marginTop: screenHeight * 0.03,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        padding: screenWidth * 0.05,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    leadsTitle: {
        fontSize: screenWidth * 0.045,
        fontWeight: "bold",
        color: "#404040",
        marginBottom: screenHeight * 0.015,
    },
    leadItem: {
        backgroundColor: "#f9f9f9",
        padding: screenWidth * 0.03,
        marginVertical: screenHeight * 0.005,
        borderRadius: 8,
    },
    leadText: {
        fontSize: screenWidth * 0.04,
        color: "#404040",
    },
    noLeadsText: {
        fontSize: screenWidth * 0.04,
        color: "#808f87",
        textAlign: "center",
    },
    addButton: {
        backgroundColor: "#007bff",
        marginTop: screenHeight * 0.03,
        paddingVertical: screenHeight * 0.015,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
        
    },
    addButtonText: {
        color: "#ffffff",
        fontSize: screenWidth * 0.045,
        fontWeight: "600",
    },
    logoutButton: {
        backgroundColor: '#d9534f',  // Kırmızı renk (tehlike göstergesi)
        paddingVertical: screenHeight * 0.015,
        paddingHorizontal: 20,
        borderRadius: 25,
        alignItems: 'center',
        marginTop: screenHeight * 0.03,
        marginBottom: screenHeight * 0.05,
    },
    logoutButtonText: {
        color: '#fff',
        fontSize: screenWidth * 0.045,
        fontWeight: 'bold',
    },

});
