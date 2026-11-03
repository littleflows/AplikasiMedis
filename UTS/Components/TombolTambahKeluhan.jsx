import { View, Button } from 'react-native'
import React from 'react'

const TombolTambahKeluhan = ({klikTambahKeluhan}) => {
  return (
     <View style={{ width: "100%", borderRadius: 9, overflow: "hidden" }}>
      <Button
        title="Kirim Keluhan"
        color="#427A43"
        onPress={klikTambahKeluhan}
      />
    </View>
  )
}

export default TombolTambahKeluhan