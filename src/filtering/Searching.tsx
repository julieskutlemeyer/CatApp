import React, { useState, useEffect } from 'react';
import { TextInput, Button, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { searchClicked } from "../state/ParamsSlice";

function SearchBar() {
    const dispatch = useDispatch()
    const searched = (text: string) => {
        dispatch(searchClicked(text))
    }
    return (
        <View style={{flex: 2}}>
            <TextInput placeholder="Search on race"
                style={{
                    fontSize: 20, marginTop: 20, height: 40, borderColor: 'gray', borderWidth: 1,
                    marginLeft: 10, borderRadius: 20,
                    paddingLeft: 10
                }}
                onChangeText={searched} />
        </View>
    )
}




export default SearchBar;