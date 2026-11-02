import { View, Text, Button } from "react-native";
import TombolAntrian from "./TombolAntrian";
import React, { useState } from "react";

const AntrianPasienComponent = ({ NoAntrianPasien, setNoAntrianPasien }) => {
  const clicked = () => {
    setNoAntrianPasien({
      ...NoAntrianPasien,
      totalAntrian: NoAntrianPasien.totalAntrian + 1,
      sisaAntrian: NoAntrianPasien.sisaAntrian - 1,
    });
  };

  return (
    <View
      style={{
        backgroundColor: "#ffffff",
        width: "100%",
        maxWidth: 600,
        padding: 20,
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 8,
              height: 8,
              backgroundColor: "#006b44",
              borderRadius: 4,
              marginRight: 8,
            }}
          />
          <Text style={{ fontWeight: "bold", color: "#111111", fontSize: 14 }}>
            ANTREAN POLI 03
          </Text>
        </View>
        <View style={{ gap: 3}}>
          <Text style={{ color: "#555555", fontSize: 13 }}>
            Sisa Kuota: {NoAntrianPasien.sisaAntrian} Pasien
          </Text>
          <Text
            style={{
              color: "#006b44",
              fontSize: 13,
              fontWeight: "bold",
              flexDirection: "column",
            }}
          >
            Total Antrean: {NoAntrianPasien.totalAntrian}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <View>
          <Text style={{ color: "#555555", fontSize: 13, marginBottom: 4 }}>
            Sedang Diperiksa
          </Text>
          <Text style={{ color: "#006b44", fontSize: 28, fontWeight: "bold" }}>
            A-018
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <TombolAntrian clicked={clicked} />
      </View>
    </View>
  );
};

export default AntrianPasienComponent;
