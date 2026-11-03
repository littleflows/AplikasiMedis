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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginBottom: 12,
          }}
        >
          <Image
            source={{ uri: dataDokter.ppDokter }}
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              marginRight: 12,
              backgroundColor: '#E2E8F0',
            }}
          />

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
                  flex: 1,
                  marginRight: 8,
                }}
              >
                {dataDokter.nama}, {dataDokter.gelar}
              </Text>

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
