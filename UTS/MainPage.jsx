import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import DoctorInfo from "./DoctorInfo";
import AntrianPasien from "./Components/AntrianPasien";
import InputKeluhan from "./Components/InputKeluhan";
import React from "react";

const MainPage = () => {
  const dataDokter = {
    ppDokter: "https://png.pngtree.com/png-vector/20250415/ourmid/pngtree-female-doctor-portrait-in-white-png-image_15971053.png",
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
    <SafeAreaView style={{backgroundColor: "#7caa7d" }}>
          <View style={{ paddingHorizontal: 15, marginBottom: 20 }}>
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

        <View style={{ backgroundColor: "#7caa7d", paddingHorizontal: 15, paddingBottom: 150 }}>
          {listKeluhan.map((item) => (
            <View
              key={item.id}
              style={{
                 backgroundColor: "#fcf6cf",
                padding: 14,
                borderRadius: 8,
                marginBottom: 10,
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
    </SafeAreaView>
  );
};

export default MainPage;
