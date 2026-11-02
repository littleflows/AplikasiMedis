import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import NavHeader from "./Components/NavHeader";
import DoctorInfo from "./DoctorInfo";
import AntrianPasien from "./Components/AntrianPasien";
import InputKeluhan from "./Components/InputKeluhan";
import React from "react";

const MainPage = () => {
  const fotoDokter = {
    Url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFz-U4CMIuVb8uMPYTo_rFt0AK3n8mufdRzVHLbp7Wz-fewPsnquV0XYJo&s=10",
  };
  const [FotoDokter, setFotoDokter] = useState(fotoDokter);

  const dataDokter = {
    nama: "Aisyah Putri",
    gelar: "Sp.Ort",
    spesialis: "Spesialis Ortodonsia",
    rumahSakit: "Rumah Sakit Dokter Clinic",
  };
  const [DataDokter, setDataDokter] = useState(dataDokter);

  const status = { aktif: "Aktif Praktik", nonaktif: "Tidak Aktif Praktik" };
  const [StatusPraktik, setStatusPraktik] = useState(status);

  const [NoAntrianPasien, setNoAntrianPasien] = useState({
    totalAntrian: 3,
    sisaAntrian: 3,
  });

  const [listKeluhan, setListKeluhan] = useState([
    {
      id: 1,
      namaLayanan: "Pemeriksaan Gigi Awal",
      estimasi: "15 Menit",
      ruangan: "Poli 03",
    },
  ]);

  const tambahKeluhanBaru = (keluhanBaru) => {
    const objekLayananBaru = {
      id: Date.now(),
      namaLayanan: keluhanBaru,
      estimasi: "20 Menit",
      ruangan: "Poli 03",
    };

    setListKeluhan((prevKeluhan) => {
      return [...prevKeluhan, objekLayananBaru];
    });
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        <View style={{ height: 70, justifyContent: "center" }}>
          <NavHeader fotoDokter={FotoDokter} />
        </View>

        <View style={{ paddingHorizontal: 15, marginBottom: 15 }}>
          <DoctorInfo dataDokter={DataDokter} status={StatusPraktik} />
        </View>

        <View style={{ paddingHorizontal: 15, marginBottom: 15 }}>
          <AntrianPasien
            NoAntrianPasien={NoAntrianPasien}
            setNoAntrianPasien={setNoAntrianPasien}
          />
        </View>

        <View style={{ paddingHorizontal: 15, marginBottom: 20 }}>
          <InputKeluhan onTambahKeluhan={tambahKeluhanBaru} />
        </View>

        <View style={{ paddingHorizontal: 15 }}>
          {listKeluhan.map((item) => (
            <View
              key={item.id}
              style={{
                backgroundColor: "#ffffff",
                padding: 14,
                borderRadius: 8,
                marginBottom: 8,
                borderWidth: 1,
                borderColor: "#E2E8F0",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text style={{ fontWeight: "600", color: "#2D3748" }}>
                  {item.namaLayanan}
                </Text>
                <Text style={{ fontSize: 12, color: "#718096", marginTop: 2 }}>
                  Estimasi: {item.estimasi}
                </Text>
              </View>
              <Text
                style={{ fontSize: 12, fontWeight: "bold", color: "#4A5568" }}
              >
                {item.ruangan}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainPage;
