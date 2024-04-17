import React from "react";
import { View, Text } from "react-native-web";

export default function Resultado(props)
{
    return (
        <View>
            <Text>{props.mensagem}</Text>
            <Text>{props.imc}</Text>
        </View>
    );
}