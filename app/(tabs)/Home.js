import {Image, SafeAreaView, ScrollView, Text, TextInput, View} from "react-native";
import Products from "../components/Products";
import Carousels from "../components/Carousels";
import {FilterIcon, MiniIcon, SearchIcon} from "../../assets/homeSvg/MiniIcon";

export default function Home() {
    return (
        <SafeAreaView className=" bg-white pt-10">
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="flex flex-row justify-between mx-4 items-center">
                    <View className="flex flex-row items-center space-x-3">
                        <Image source={require('../../assets/HomeImages/avatar.png')} className="w-[48] h-[48]"/>
                        <View>
                            <Text  style={{fontFamily:'Poppins-Bold'}} className="font-bold text-base">Good Morning 👋</Text>
                            <Text style={{fontFamily:'Poppins-Light'}} className="text-base">Welcome Back </Text>
                        </View>
                    </View>
                    <MiniIcon/>
                </View>
                <View className="flex flex-row  m-4 items-center space-x-2">
                    <View className="flex  flex-row flex-1  space-x-2  items-center bg-[#BEBEBE]/20 p-3 rounded-lg">
                        <SearchIcon/>
                        <TextInput style={{fontFamily:'Poppins-Regular'}} placeholder="Search for products and inputs"/>
                    </View>
                    <View>
                        <FilterIcon/>
                    </View>
                </View>
                <Carousels/>
                <Products/>
            </ScrollView>


        </SafeAreaView>
    )
}
