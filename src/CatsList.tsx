import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, Image, ScrollView, FlatList, TouchableOpacity, Pressable } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, putLike } from "./state/CatsSlice";
import { pageClicked, searchClicked, filterClicked, sortClicked, morePage } from './state/ParamsSlice'
const axios = require('axios').default;
import { Props } from "./AppNavigator";
import SearchBar from "./filtering/Searching";
import { Sort } from './filtering/Sort';
import { Filter } from './filtering/Filter';

interface Post {
  date_published: string,
  county_code: number,
  county_name: string,
  street_name: string,
  likes: number
}
interface Owner {
  first_name: string,
  last_name: string,
  email: string,
  phone: number
}
interface Cat {
  cat_name: string,
  cat_gender: string,
  cat_birthdate: string,
  cat_img_rel_adr: string,
  cat_race: string
}
interface Posts {
  _id: string,
  post: Post,
  owner: Owner
  cat: Cat
}

export default function CatsList({ navigation }: Props) {
  const dispatch = useDispatch()
  const params = useSelector((state: any) => state.params)
  // https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()
  }
  const [visible, setVisible] = useState(false)
  const postStatus = useSelector((state: any) => state.cats.status)
  const CatsPost = useSelector((state: any) => state.cats.cats)
  const maxPages = useSelector((state: any) => state.cats.totalPages)

  const endReached = () => {
    if (params.limit < maxPages) {
      dispatch(morePage());
    }
    else {
      console.log("No more pages")
    }
  }

  useEffect(() => {
    dispatch(fetchPosts(params))
  }, [params])

  const renderedCats = ({ item }: { item: Posts }) => {
    const color = item.cat.cat_gender === "male" ? "#009688" : "#cfa084"
    return (
      <View key={item._id} style={{
        flex: 1, alignItems: "center", margin: 20, borderWidth: 0.5, borderRadius: 20, padding: 30,
        backgroundColor: color
      }}>
        <Text style={{ fontSize: 30 }}> {item.cat.cat_name} </Text>


        <TouchableOpacity onPress={() => {
          navigation.navigate("SingleCatPage", {
            catID: item
          });
        }}
        >
          <Image
            style={{
              resizeMode: "contain",
              height: 200,
              width: 200
            }}
            source={{ uri: item.cat.cat_img_rel_adr }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 25 }}>Race: {item.cat.cat_race}</Text>
        <Text style={{ fontSize: 25 }}>Owner: {item.owner.first_name}</Text>
        <Text style={{ fontSize: 25 }}>Likes: {item.post.likes}</Text>
        <TouchableOpacity onPress={()=>dispatch(putLike({ id: item._id, likes: item.post.likes + 1 }))}>
          <Text style={{fontSize: 35, marginTop: 10}}>👍</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View>
      <View style={{flexDirection:"row", alignItems: "center"}}>
      <SearchBar />
      <TouchableOpacity style={{paddingHorizontal: 10, backgroundColor: "white",borderWidth: 1, marginRight: 10, marginTop: 20, padding: 5, borderRadius: 10, marginLeft: 10}} onPress={() =>setVisible(!visible)}>
        <Text style={{fontSize: 20}}>...</Text>
      </TouchableOpacity>
      </View>
      { visible ? 
      <View style={{flexDirection: "row", justifyContent:"center", alignItems:"center"}}>
      <Sort/>
      <View style={{borderRightWidth: 0.5, height:"80%", marginHorizontal: 10}}></View>
      <Filter/>
      </View>: null
      }
      <FlatList
        data={CatsPost}
        renderItem={renderedCats}
        onEndReached={endReached}
        onEndReachedThreshold={0.5}
        keyExtractor={(post: Posts) => post._id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#fc454e',
    width: 66,
    height: 66,
    borderRadius: 33,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20
  }
})





