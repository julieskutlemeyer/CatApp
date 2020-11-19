import * as React from 'react'
import { NavigationContainer, RouteProp } from '@react-navigation/native'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'
import CatsList from './CatsList'
import SingleCat from './SingleCat'
import { View, Text } from 'react-native'


type RootStackParamList = {
  SingleCatPage: { catID: any };
  CatsList: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SingleCatPage'
>;

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'SingleCatPage'>;

export type Props = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

function AppNavigator() {

  const Stack = createStackNavigator<RootStackParamList>()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='CatsList' component={CatsList} />
        <Stack.Screen name="SingleCatPage" component={SingleCat} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default AppNavigator