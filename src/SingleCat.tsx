import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StackScreenProps } from '@react-navigation/stack';
import { Props } from "./AppNavigator";
import { putLike } from './state/CatsSlice';

export default function CatsList({ route }: Props) {
    const dispatch = useDispatch()
    const props = route.params
    const cat = props.catID.cat
    const post = props.catID.post
    const owner = props.catID.owner
    console.log()
    const cat_name = cat.cat_name
    const cat_gender = cat.cat_gender
    const cat_birthdate = cat.cat_birthdate
    const cat_img = cat.cat_img_rel_adr
    const cat_race = cat.cat_race
    console.log(route.params.catID._id)

    function catAge(input: string) {
        let date = new Date();
        let now = date.getFullYear();
        let then = new Date(input);
        let thenUTC = then.getFullYear();
        return Math.ceil(now - thenUTC);
    }
    function postAgeDays(input: string) {
        let date = new Date();
        let now = date.getMonth();
        let then = new Date(input);
        let thenUTC = then.getMonth();
        return Math.ceil(now - thenUTC);
    }

    function dateBorn(input: string) {
        let then = new Date(input);
        return then;
    }

    return (
        <View style={{alignItems: "center"}}>
            <Text style={{ fontSize: 30 }}> {cat_name} </Text>
            <Image
                style={{
                    resizeMode: "contain",
                    height: 300,
                    width: 300
                }}
                source={{ uri: cat_img }} />

            <Text style={{ fontSize: 25, marginTop: 20 }}>Likes: {post.likes}</Text>
            <View style={{borderTopWidth: 0.5, marginVertical: 10, width: "90%"}}>
            <Text style={{ fontSize: 13, textAlign: "center", marginTop: 10}}>
                {cat_name} is a beautiful {cat_gender} {cat_race.toLowerCase()} cat that has been a part of this world for {catAge(cat_birthdate)} years!
                        {" "} {cat_gender === "male" ? "His" : "Her"} birthday is on the {dateBorn(cat_birthdate).getDay()+1}/{dateBorn(cat_birthdate).getMonth()+1}/{dateBorn(cat_birthdate).getFullYear()}.
                        {cat_gender === "male" ? "His" : "Her"} owner is {owner.first_name} {owner.last_name} and is reachable by email: {owner.email} and 
                        by phone: {owner.phone}.
                        </Text>
                        <Text style={{ fontSize: 13, textAlign: "center", marginTop: 10}}>
                        Currently they live in {post.county_code}, {post.county_name} on the street {post.street_name}.
                        {cat_name} would love to be your new companion,
                        he has been waiting for a new home for {postAgeDays(post.date_published)} months.
                        </Text>
                        </View>
        </View>
    )
};