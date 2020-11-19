import React, { useState } from 'react';
import { View, Button } from 'react-native';
import RadioButton from './RadioButton'
import { useDispatch, useSelector } from 'react-redux';
import { filterClicked } from '../state/ParamsSlice';

export function Filter() {

    const dispatch = useDispatch()
    const sort = useSelector((state: any) => state.params.category)
    const [selected, setSelected] = useState(sort)
    
    const changeSelected = (name: string) => {
        if (name === selected) {
            setSelected("")
            dispatch(filterClicked(""))
        }
        else {
            setSelected(name)
            dispatch(filterClicked(name.toLowerCase()))
        }
    }

    return (
        <View style={{flexDirection: "column", alignItems: "center", justifyContent:"center"}}>
            <RadioButton selected={selected === "Female"} texts="Female" callback={changeSelected} />
            <RadioButton selected={selected === "Male"} texts="Male" callback={changeSelected} />
        </View>
    )
}
// owner.first_name"
//                 break;
//             case types[1]:
//                 filter ="post.likes"
//                 break;
//             case types[2]:
//                 filter = "-post.likes"