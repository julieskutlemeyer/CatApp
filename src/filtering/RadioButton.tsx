import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

// Simple radiobutton
export default function RadioButton(props: any) {
    
    var textField;

    if (props.texts.includes(".")) {
    const direction = props.texts.split(".")[0][0] === "-" ? "↑" : "↓"
    const text = props.texts.split(".")[1];
    var betterText = text[0].toUpperCase() + text.slice(1)
    const betterBetter = betterText == "Firstname" ? "Name" : betterText
    textField = direction + betterBetter
    }
    else {
        textField = props.texts
    }
    return (
        <TouchableOpacity
            onPress={() => props.callback(props.texts)}
            style={[(props.selected ? styles.active : styles.inactive), {marginHorizontal: 2}]}>
            <Text style={{fontSize: 20, textAlign: "center"}}>
                {textField}
                </Text>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    active: {
        backgroundColor: "#e3e3e3",
        padding: 5,
        borderRadius: 10,
        margin: 5,
        borderWidth: 0.5,
        width: "100%",
    },
    inactive: {
        backgroundColor: "white",
        padding: 6,
        borderRadius: 10,
        margin: 5,
        borderWidth: 0.5,
        width: "100%",
    }
})