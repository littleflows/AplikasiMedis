import { View, Text, Image } from "react-native";
import React from "react";

const NavHeader = ({ fotoDokter }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 15,
        alignItems: "center",
      }}
    >
      <View style={{ flex: 1 }} />

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Text style={{ marginRight: 10, fontSize: 16 }}></Text>
        <Image
          source={{ uri: fotoDokter.Url }}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: "#e1e1e1",
          }}
        />
      </View>
    </View>
  );
};

export default NavHeader;
