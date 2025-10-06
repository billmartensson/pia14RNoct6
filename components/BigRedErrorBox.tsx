import { Text, View } from "react-native";

export default function BigRedErrorBox() {

    return (
        <View style={{
            backgroundColor: "red",
            width: 200,
            height: 50,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text style={{
                color: "white"
            }}>INTE EN SIFFRA!!!!</Text>
        </View>
    )
}