import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {

    const [mynumber, setMynumber] = useState(0)

    function doplus() {
        if (mynumber == 5) {
            setMynumber(0)
        } else {
            setMynumber(mynumber + 1)
        }
    }

    function dominus() {
        if (mynumber > 0) {
            setMynumber(mynumber - 1)
        }
    }

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>{mynumber}</Text>

            <View style={{
                flexDirection: "row"
            }}>

                <Button
                    title="PLUS"
                    onPress={doplus}
                />

                <Button
                    title="MINUS"
                    onPress={dominus}
                />
            </View>

        </View>
    );
}
