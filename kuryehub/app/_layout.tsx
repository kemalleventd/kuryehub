import { Stack, useRouter, useSegments } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // İkon kütüphanesi

export default function RootLayout() {
  const router = useRouter();
  const segments = useSegments() as unknown as string[];

  
  // Alt menüyü gizlemek istediğiniz sayfaları tanımlayın
  const hideMenuOn: string[] = ["index", "login", "signup"];
  // Alt menüyü gösterip göstermeme kontrolü
  const currentPath = `/${segments.join("/")}`;
  const showBottomMenu = segments.length > 0 && !hideMenuOn.some((path) => segments.includes(path));

  return (
    <View style={styles.container}>
      {/* Sayfa İçeriği */}
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="ilanlar" />
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" />
      </Stack>

      {/* Sabit Alt Menü */}
      {showBottomMenu && (
        <View style={styles.bottomMenu}>
          {/* Anasayfa Butonu */}
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push("/home")} // ../src/pages/home
          >
            <Ionicons name="home"  size={screenWidth * 0.07} color="#808f87" />
            <Text style={styles.menuText}>Anasayfa</Text>
          </TouchableOpacity>

          {/* İlanlar Butonu */}
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push("/ilanlar")} // ../src/pages/ilanlar
          >
            <Ionicons name="list"  size={screenWidth * 0.07} color="#808f87" />
            <Text style={styles.menuText}>İlanlarım</Text>
          </TouchableOpacity>

          {/* Profil Butonu */}
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push("/profile")} // ../src/pages/profile
          >
            <Ionicons name="person"  size={screenWidth * 0.07} color="#808f87" />
            <Text style={styles.menuText}>Profil</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  bottomMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingVertical: screenHeight * 0.01, // Responsive padding
    borderTopWidth: 1,
    borderTopColor: "#d3d3d3",
    shadowColor: "#000", // Gölge efekti
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10, // Gölge derinliği
  },
  menuItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  menuText: {
    fontSize: screenWidth * 0.035, // Responsive font size
    color: "#808f87",
    marginTop: 2,
  },
});
