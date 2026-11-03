import { View, Button } from 'react-native'
import React from 'react'

const TombolTambahKeluhan = ({klikKirim}) => {
  return (
     <View style={{ width: "100%", borderRadius: 9, overflow: "hidden" }}>
      <Button
        title="Kirim Keluhan"
        color="#427A43"
        onPress={klikKirim}
      />
    </View>
  )
}

export default TombolTambahKeluhan