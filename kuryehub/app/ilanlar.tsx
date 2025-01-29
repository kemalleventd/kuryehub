import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import globalStyles from '../src/styles/globalStyles';

export default function Ilanlar() {
  const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
  return (
    <ScrollView style={globalStyles.container}>
  <Text style={globalStyles.pageTitle}>İlanlarım</Text>
  
  {[1, 2, 3].map((item, index) => (
    <View key={index} style={globalStyles.jobCard}>
      
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
        <Ionicons name="briefcase" size={screenWidth * 0.05} color="#808f87" />
        <Text style={[globalStyles.title, { marginLeft: 8 }]}>Motorlu Kurye</Text>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}>
              <Ionicons name="location" size={screenWidth * 0.04} color="#808f87" />
              <Text style={[globalStyles.details, { marginLeft: 8 }]}>Antalya</Text>
            </View>


      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}>
        <Ionicons name="time" size={screenWidth * 0.04} color="#808f87" />
        <Text style={[globalStyles.details, { marginLeft: 8 }]}>Tam Zamanlı</Text>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}>
        <Ionicons name="cash" size={screenWidth * 0.04} color="#808f87" />
        <Text style={[globalStyles.details, { marginLeft: 8 }]}>20.000 TL</Text>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}>
        <Ionicons name="fast-food" size={screenWidth * 0.04} color="#808f87" />
        <Text style={[globalStyles.details, { marginLeft: 8 }]}>Yol + Yemek + Prim: Var</Text>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}>
        <Ionicons name="bicycle" size={screenWidth * 0.04} color="#808f87" />
        <Text style={[globalStyles.details, { marginLeft: 8 }]}>Kurye Türü: Motor</Text>
      </View>

      <Text style={[globalStyles.description, { marginTop: 8 }]}>
        İlan açıklaması burada yer alacaktır. İlgili detaylar bu alanda belirtilecektir.
      </Text>

      <View style={globalStyles.buttonContainer}>
        <TouchableOpacity style={globalStyles.editButton}>
          <Ionicons name="create-outline" size={screenWidth * 0.05} color="#ffffff" />
        </TouchableOpacity>

        <TouchableOpacity style={globalStyles.deleteButton}>
          <Ionicons name="trash-outline" size={screenWidth * 0.05} color="#ffffff" />
        </TouchableOpacity>
      </View>

    </View>
  ))}
</ScrollView>
  );
}


