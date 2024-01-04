import {Tabs} from "expo-router";

import React from 'react';
 import HomeIcon from '../../assets/homeSvg/HomeIcon'
import OrdersIcon from '../../assets/homeSvg/OrdersIcon'
import ProfileIcon from '../../assets/homeSvg/ProfileIcon'
import WalletIcon from '../../assets/homeSvg/WalletIcon'

export default function(){
    return(
        <Tabs tabBarStyle={{backgroundColor:'black'}}>
            <Tabs.Screen name="Home"  options={{headerShown:false, tabBarIcon:({focused})=>  <HomeIcon color={focused ? "#006D33" : "white"} />  }}/>
            <Tabs.Screen name="Orders" options={{headerShown:false, tabBarIcon:({focused})=><OrdersIcon color={focused ? "#006D33" : "white"}/>}}/>
            <Tabs.Screen name="Wallet" options={{headerShown:false, tabBarIcon:({focused})=><WalletIcon color={focused ? "#006D33" : "white"}/>}}/>
            <Tabs.Screen name="Profile" options={{headerShown:false,tabBarIcon:({focused})=><ProfileIcon color={focused ? "#006D33" : "white"}/>}}/>

        </Tabs>
    )
}
