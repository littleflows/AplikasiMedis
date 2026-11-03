import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import TombolKeluhan from './TombolTambahKeluhan'

const InputKeluhan = ({ onTambahKeluhan }) => {
  const [keluhanText, setKeluhanText] = useState("");

  const klikKirim = () => {
    if (keluhanText.trim() === "") return;

    onTambahKeluhan(keluhanText);

    setKeluhanText("");
  };

  return (
    <View
      style={{
        padding: 16,
        backgroundColor: '#fffce9',
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

      <TombolKeluhan klikTambahKeluhan={klikKirim} />
    </View>
  );
};

export default InputKeluhan;
