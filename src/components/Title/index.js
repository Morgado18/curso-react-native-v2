

import React from "react";
import { View, Text } from "react-native"
import style from "./styles"

export default function Title(){
    return (
        <View style={style.boxTitle}>
            <Text style={style.textTitle}>
                SAÚDE ÚNICA
            </Text>
        </View>
    );
}