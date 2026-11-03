import { View, Text, Button } from "react-native";
import React from "react";

const TombolAntrian = ({clicked}) => {
  return (
    <View style={{ width: "100%", borderRadius: 9, overflow: "hidden" }}>
      <Button
        title="AMBIL ANTREAN"
        color="#427A43"
        onPress={clicked}
      />
    </View>
  );
};

export default TombolAntrian;
