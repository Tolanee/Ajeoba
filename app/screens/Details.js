import {router, Stack, useLocalSearchParams} from 'expo-router';
import {Image, ImageBackground, Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {BackIcon, Download, Minus, Plus} from "../../assets/homeSvg/MiniIcon";
import {useState} from "react";


export default function Details() {
    const params = useLocalSearchParams();
    const {img, name, seller, amount, desc, cat} = params;
    const result = cat.split(" ")[0]
    const [count, setCount] = useState(1)
    return (
        <SafeAreaView className=" mt-5 bg-white flex-1">
            <Stack.Screen options={{headerShown: false}}/>
            <ScrollView showsVerticalScrollIndicator={false} className="flex-1">

                <View className="bg-lightGreen items-center  ">

                    <View className="flex flex-row w-full items-center">
                        <Pressable className="p-4 " onPress={() => router.back()}>
                            <BackIcon/>
                        </Pressable>
                        <View className="flex w-4/6 items-center  justify-center ">
                            <Text style={{fontFamily:'Poppins-Regular'}} className="font-semibold text-lg">Details</Text>
                        </View>
                    </View>
                </View>
                <View className="m-3 flex-1">
                    <View className="rounded-t-lg overflow-hidden mt-3 h-[200px] relative">
                        <ImageBackground source={img} className=" w-full  h-full "/>
                        <View className="p-2 bg-[#DB371F] absolute right-5 top-5 rounded-lg">
                            <Text className="text-white font-bold">{result}</Text>

                        </View>
                    </View>

                    <View style={{elevation: 8}}
                          className="bg-white rounded-b-lg border-b border-2 border-[#F1F1F1] shadow-xl ">
                        <View className="px-5">
                            <View className="flex flex-row justify-between py-4">
                                <Text style={{fontFamily:'Poppins-Medium'}} className="text-2xl font-bold">{name}</Text>
                                <View className="p-2 bg-[#6D9E3F]  rounded-lg">
                                    <Text className="text-white font-bold">Wholesale</Text>

                                </View>
                            </View>
                            <View
                                className="flex flex-row justify-between items-center pb-3  border-b border-1 border-[#F1F1F1]">
                                <Text style={{fontFamily:'Poppins-Regular'}} className="text-sm text-lightGray">Seller: <Text
                                    className="text-sm text-darkGray">{seller}</Text> </Text>
                                <View className="flex flex-row space-x-2 items-center py-2">
                                    <Image source={require('../../assets/HomeImages/stars.png')}/>
                                    <Text style={{fontFamily:'Poppins-Regular'}}>(92)</Text>
                                </View>
                            </View>
                            <View className="py-4 ">
                                <Text style={{fontFamily:'Poppins-Regular'}} className="text-sm text-lightGray">{desc}</Text>
                            </View>
                        </View>
                        <View className="bg-lightGreen">
                            <View className="flex flex-row space-x-1 items-center  p-5">
                                <Text style={{fontFamily:'Poppins-SemiBold'}} className="font-bold text-xl"> ₦{amount} </Text>

                                <Text style={{fontFamily:'Poppins-Italic'}} className="italic text-lightGray">
                                    (Per ton)
                                </Text>
                            </View>

                        </View>
                    </View>
                    <View>
                        <View className="w-full flex flex-row items-center justify-center my-4">
                            <View className="w-20 h-1 bg-[#EAEAEA]"></View>
                            <Text  style={{fontFamily:'Poppins-Medium'}} className="text-sm text-[#585858]"> WAREHOUSE INFORMATION </Text>
                            <View className="w-20 h-1 bg-[#EAEAEA]"></View>
                        </View>

                        <View style={{elevation: 8}}
                              className="bg-white rounded-lg border border-2 border-[#F1F1F1] shadow-xl p-5 ">
                            <View>
                                <Text style={{fontFamily:'Poppins-Medium'}} className="text-[#004D24] text-sm font-bold">Warehouse distribution</Text>
                                <View className="flex flex-row justify-between">
                                    <Text style={{fontFamily:'Poppins-Regular'}} className="text-lg text-[#898B87]"> Gennee Warehousing</Text>
                                    <Text style={{fontFamily:'Poppins-Regular'}} className="text-lg text-[#1F1F1F]">20.00 Ton</Text>
                                </View>
                            </View>
                            <View className="pt-4">
                                <Text style={{fontFamily:'Poppins-Medium'}} className="text-[#004D24] text-sm font-bold">Warehouse certificate</Text>
                                <View className="flex flex-row justify-between">
                                    <Text style={{fontFamily:'Poppins-Regular'}} className="text-lg text-[#898B87]">FFM+ -aggregation.png</Text>
                                    <View className="flex flex-row space-x-2 items-center">
                                        <Text style={{fontFamily:'Poppins-Medium'}} className="text-lg text-primary">Download </Text>
                                        <Download/>
                                    </View>

                                </View>
                            </View>

                        </View>
                    </View>
                </View>


            </ScrollView>
            <View
                className="p-3 flex flex-row w-full items-center justify-around border-t border-t-2 border-[#F1F1F1] ">
                <View
                    className="border border-2 border-primary bg-lightGreen flex flex-row items-center rounded-lg p-3">
                    <Pressable onPress={() => count > 0 ? setCount(count - 1) : count}><Minus/></Pressable>
                    <Text className="text-primary text-xl font-bold px-5">{count}</Text>
                    <Pressable onPress={() => setCount(count + 1)}><Plus/></Pressable>

                </View>
                <TouchableOpacity onPress={() => console.log('Purchased')}
                                  className="p-3 bg-primary rounded-lg flex items-center justify-center">
                    <Text className="text-white text-lg">Proceed to purchase</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
