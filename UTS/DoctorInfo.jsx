import { View, Text, Image } from 'react-native';
import React from 'react';

const DoctorInfo = ({ dataDokter, status }) => {
  return (
    <View
      style={{
        backgroundColor: '#fffce9',
        width: '100%',
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',
        shadowColor: '#000',
        elevation: 3,
      }}
    >
      <View style={{ width: '100%' }}>
        {/* BAGIAN ATAS: Foto dan Informasi Dokter */}
        <View
          style={{
            flexDirection: 'row', // Menyejajarkan foto (kiri) dan teks kontainer (kanan)
            alignItems: 'flex-start',
            marginBottom: 12,
          }}
        >
          {/* 1. FOTO DOKTER */}
          <Image
            source={{ uri: dataDokter.ppDokter }}
            style={{
              width: 60,
              height: 60,
              borderRadius: 30, // Membuat lingkaran sempurna
              marginRight: 12, // Memberikan jarak ke teks di kanannya
              backgroundColor: '#E2E8F0', // Warna cadangan saat loading gambar
            }}
          />

          {/* 2. KONTAINER TEKS (Nama, Spesialis, RS) */}
          <View style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#111111',
                  flex: 1, // Agar nama panjang tidak menabrak status aktif
                  marginRight: 8,
                }}
              >
                {dataDokter.nama}, {dataDokter.gelar}
              </Text>

              {/* STATUS AKTIF */}
              <View
                style={{
                  backgroundColor: '#e6f7f2',
                  paddingVertical: 4,
                  paddingHorizontal: 10,
                  borderRadius: 12,
                }}
              >
                <Text
                  style={{ color: '#00875a', fontSize: 11, fontWeight: 'bold' }}
                >
                  {status.aktif}
                </Text>
              </View>
            </View>

            <Text
              style={{
                fontSize: 13,
                color: '#00875a',
                fontWeight: '600',
                marginTop: 4,
                marginBottom: 2,
              }}
            >
              {dataDokter.spesialis}
            </Text>

            <Text style={{ fontSize: 12, color: '#777777' }}>
              {dataDokter.rumahSakit}
            </Text>
          </View>
        </View>

        {/* BAGIAN BAWAH: Informasi Poli & Jam Praktik */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderTopWidth: 1,
            borderTopColor: '#eee',
            paddingTop: 8,
          }}
        >
          <Text style={{ fontSize: 12, color: '#666666', paddingRight: 8 }}>
            Poli 03
          </Text>
          <Text style={{ fontSize: 12, color: '#666666' }}>
            │ Jam Praktik: 14:00 - 18:30 WIB
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DoctorInfo;
