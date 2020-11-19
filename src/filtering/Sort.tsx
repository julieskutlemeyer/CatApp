import React, { useState } from 'react';
import { View, Button } from 'react-native';
import RadioButton from './RadioButton'
import { useDispatch, useSelector } from 'react-redux';
import { sortClicked } from '../state/ParamsSlice';

export function Sort() {

    const dispatch = useDispatch()
    const sort = useSelector((state: any) => state.params.category)
    const [selected, setSelected] = useState(sort)
    
    const changeSelected = (name: string) => {
        if (name === selected) {
            setSelected("")
            dispatch(sortClicked(""))
        }
        else {
            setSelected(name)
            dispatch(sortClicked(name))
        }
    }

    return (
        <View style={{flexDirection: "row"}}>
            <View style={{flexDirection: "column", marginRight: 20}}>
            <RadioButton selected={selected === "-post.likes"} texts="-post.likes" callback={changeSelected} />
            <RadioButton selected={selected === "post.likes"} texts="post.likes" callback={changeSelected} />
            </View>
            <View style={{flexDirection: "column"}}>
            <RadioButton selected={selected === "-owner.firstname"} texts="-owner.firstname" callback={changeSelected} />
            <RadioButton selected={selected === "owner.firstname"} texts="owner.firstname" callback={changeSelected} />
            </View>
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