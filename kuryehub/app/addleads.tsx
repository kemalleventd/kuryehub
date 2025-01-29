import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const AddLeads = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  const handleAddLead = () => {
    if (title && description && category && location) {
      // İlan ekleme işlemleri için FastAPI backend'e veri gönder
      const leadData = { title, description, category, location };
      console.log("İlan Eklendi:", leadData);
      // Burada API çağrısını gerçekleştir
    } else {
      alert("Lütfen tüm alanları doldurun.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>İlan Ekle</Text>

      <Text style={styles.label}>İlan Başlığı</Text>
      <TextInput
        style={styles.input}
        placeholder="İlan başlığını girin"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Açıklama</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="İlan açıklamasını girin"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />

      <Text style={styles.label}>İşletme Türü</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Kategori Seçin" value="" />
          <Picker.Item label="Taşımacılık" value="tasimacilik" />
          <Picker.Item label="Gıda Dağıtım" value="gida" />
          <Picker.Item label="Paket Teslimat" value="paket" />
        </Picker>
      </View>

      <Text style={styles.label}>Konum</Text>
      <TextInput
        style={styles.input}
        placeholder="Konum bilgisini girin"
        value={location}
        onChangeText={setLocation}
      />


<Text style={styles.label}>Ödeme Türü</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Odeme Türü Seçin" value="" />
          <Picker.Item label="Taşımacılık" value="tasimacilik" />
          <Picker.Item label="Gıda Dağıtım" value="gida" />
          <Picker.Item label="Paket Teslimat" value="paket" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleAddLead}>
        <Text style={styles.buttonText}>İlan Ekle</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#555",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  picker: {
    height: 50,
    width: "100%",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddLeads;
