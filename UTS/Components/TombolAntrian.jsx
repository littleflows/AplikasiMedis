import { View, Text, Button } from "react-native";
import React from "react";

const TombolAntrian = ({clicked}) => {
  return (
    <View style={{ width: "100%", borderRadius: 15, overflow: "hidden" }}>
      <Button
        title="AMBIL ANTREAN"
        color="#ff416d"
        onPress={clicked}
      />
    </View>
  );
};

export default TombolAntrian;
