import { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {

    const [mynumber, setMynumber] = useState(0)

    const [enteredtext, setEnteredtext] = useState("")

    const [showbigrederror, setShowbigrederror] = useState(false)

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

    function addfromtext() {

        var numbertoadd = Number(enteredtext)

        if (isNaN(numbertoadd)) {
            // INTE EN SIFFRA
            setShowbigrederror(true)
        } else {
            // ÄR EN SIFFRA
            setMynumber(mynumber + numbertoadd)
            setShowbigrederror(false)
        }

        setEnteredtext("")
    }

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >

            {mynumber == 5 &&
                <Text>STOR SIFFRA!!!</Text>
            }

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


            {showbigrederror &&

                <TouchableOpacity onPress={() => setShowbigrederror(false)}>
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
                </TouchableOpacity>
            }


            <TextInput
                style={{
                    backgroundColor: "lightgray",
                    width: "100%"
                }}
                onChangeText={setEnteredtext}
                value={enteredtext}
            />

            <Button
                title="ADD"
                onPress={addfromtext}
            />

        </View>
    );
}
