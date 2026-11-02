import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";

const InputKeluhan = ({ onTambahKeluhan }) => {
  const [keluhanText, setKeluhanText] = useState("");

  const handleKirim = () => {
    if (keluhanText.trim() === "") return;

    onTambahKeluhan(keluhanText);

    setKeluhanText("");
  };

  return (
    <View
      style={{
        padding: 16,
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#E2E8F0",
      }}
    >
      <Text
        style={{
          fontSize: 14,
          fontWeight: "bold",
          color: "#1A202C",
          marginBottom: 12,
        }}
      >
        Keluhan Utama / Tambah Layanan Medis
      </Text>

      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#E2E8F0",
          borderRadius: 8,
          padding: 50,
          fontSize: 14,
          color: "#2D3748",
          backgroundColor: "#F7FAFC",
          marginBottom: 12,
        }}
        placeholder="Tuliskan nama tindakan medis atau keluhan di sini..."
        placeholderTextColor="#A0AEC0"
        value={keluhanText}
        onChangeText={setKeluhanText}
      />

      <Button title="Tambah Layanan" color="#006b44" onPress={handleKirim} />
    </View>
  );
};

export default InputKeluhan;
