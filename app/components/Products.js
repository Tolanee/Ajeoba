import {FlatList, Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Link} from "expo-router";

const allProducts = [
    {
        id: 1,
        name: "Livestock Products",
        eachProducts: [
            {
                name: "Goat",
                image: require("../../assets/HomeImages/goats.png"),
                amount: "10,000",
                seller: "Ajike Njoku",
                desc: "Lorem ipsum dolor sit amet consectetur. Sit imperdiet tempus ut scelerisque in enim laoreet ut mi... "
            }, {
                name: "Chicken",
                image: require("../../assets/HomeImages/chickens.png"),
                amount: "10,000",
                seller: "Ajike Njoku",
                desc: "Lorem ipsum dolor sit amet consectetur. Sit imperdiet tempus ut scelerisque in enim laoreet ut mi... "
            }, {
                name: "Goat",
                image: require("../../assets/HomeImages/goats.png"),
                amount: "10,000",
                seller: "Ajike Njoku",
                desc: "Lorem ipsum dolor sit amet consectetur. Sit imperdiet tempus ut scelerisque in enim laoreet ut mi... "
            }, {
                name: "Chicken",
                image: require("../../assets/HomeImages/chickens.png"),
                amount: "10,000",
                seller: "Ajike Njoku",
                desc: "Lorem ipsum dolor sit amet consectetur. Sit imperdiet tempus ut scelerisque in enim laoreet ut mi... "
            }
        ]

    }, {
        id: 1,
        name: "Refrigerated Products",
        eachProducts: [
            {
                name: "Grapes",
                image: require("../../assets/HomeImages/grapes.png"),
                amount: "10,000",
                seller: "Ajike Njoku",
                desc: "Lorem ipsum dolor sit amet consectetur. Sit imperdiet tempus ut scelerisque in enim laoreet ut mi... "
            }, {
                name: "Mango",
                image: require("../../assets/HomeImages/mango.png"),
                amount: "10,000",
                seller: "Ajike Njoku",
                desc: "Lorem ipsum dolor sit amet consectetur. Sit imperdiet tempus ut scelerisque in enim laoreet ut mi... "
            }, {
                name: "Grapes",
                image: require("../../assets/HomeImages/grapes.png"),
                amount: "10,000",
                seller: "Ajike Njoku",
                desc: "Lorem ipsum dolor sit amet consectetur. Sit imperdiet tempus ut scelerisque in enim laoreet ut mi... "
            }, {
                name: "Mango",
                image: require("../../assets/HomeImages/mango.png"),
                amount: "10,000",
                seller: "Ajike Njoku",
                desc: "Lorem ipsum dolor sit amet consectetur. Sit imperdiet tempus ut scelerisque in enim laoreet ut mi... "
            },
        ]

    }, {
        id: 1,
        name: "Dry Products",
        eachProducts: [
            {
                name: "Yam",
                image: require("../../assets/HomeImages/yam.png"),
                amount: "10,000",
                seller: "Ajike Njoku",
                desc: "Lorem ipsum dolor sit amet consectetur. Sit imperdiet tempus ut scelerisque in enim laoreet ut mi... "
            }, {
                name: "Beans",
                image: require("../../assets/HomeImages/beans.png"),
                amount: "10,000",
                seller: "Ajike Njoku",
                desc: "Lorem ipsum dolor sit amet consectetur. Sit imperdiet tempus ut scelerisque in enim laoreet ut mi... "
            }, {
                name: "Yam",
                image: require("../../assets/HomeImages/yam.png"),
                amount: "10,000",
                seller: "Ajike Njoku",
                desc: "Lorem ipsum dolor sit amet consectetur. Sit imperdiet tempus ut scelerisque in enim laoreet ut mi... "
            }, {
                name: "Beans",
                image: require("../../assets/HomeImages/beans.png"),
                amount: "10,000",
                seller: "Ajike Njoku",
                desc: "Lorem ipsum dolor sit amet consectetur. Sit imperdiet tempus ut scelerisque in enim laoreet ut mi... "
            },
        ]

    }, {
        id: 1,
        name: "Farm Inputs",
        eachProducts: [
            {
                name: "Farm Boost",
                image: require("../../assets/HomeImages/boost.png"),
                amount: "10,000",
                seller: "Ajike Njoku",
                desc: "Lorem ipsum dolor sit amet consectetur. Sit imperdiet tempus ut scelerisque in enim laoreet ut mi... "
            }, {
                name: "Agro Fertilizer",
                image: require("../../assets/HomeImages/fertilizer.png"),
                amount: "10,000",
                seller: "Ajike Njoku",
                desc: "Lorem ipsum dolor sit amet consectetur. Sit imperdiet tempus ut scelerisque in enim laoreet ut mi... "
            }, {
                name: "Farm Boost",
                image: require("../../assets/HomeImages/boost.png"),
                amount: "10,000",
                seller: "Ajike Njoku",
                desc: "Lorem ipsum dolor sit amet consectetur. Sit imperdiet tempus ut scelerisque in enim laoreet ut mi... "
            }, {
                name: "Agro Fertilizer",
                image: require("../../assets/HomeImages/fertilizer.png"),
                amount: "10,000",
                seller: "Ajike Njoku",
                desc: "Lorem ipsum dolor sit amet consectetur. Sit imperdiet tempus ut scelerisque in enim laoreet ut mi... "
            },

        ]

    },
]
const productScroll = (each, category) => {
    return (
        <Link href={{
            pathname: "/screens/Details",
            params: {
                img: each.image,
                name: each.name,
                seller: each.seller,
                amount: each.amount,
                desc: each.desc,
                cat: category
            }
        }} className="mx-3">
            <View className="w-full">
                <Image source={each.image} className="my-3 w-full h-[100px]  rounded-lg"/>
                <Text style={{fontFamily:'Poppins-Regular'}} className="text-lg">{each.name}</Text>
                <View className="flex flex-row space-x-2 items-center py-2">
                    <Image source={require('../../assets/HomeImages/stars.png')}/>
                    <Text>(92)</Text>
                </View>
                <View className="flex flex-row space-x-1 items-center">
                    <Text style={{fontFamily:'Poppins-SemiBold'}} className="font-bold text-base">₦{each.amount} </Text>

                    <Text style={{fontFamily:'Poppins-Italic'}} className="italic">
                        (Per kg)
                    </Text>
                </View>
            </View>


        </Link>

    )
}
export default function Products() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {allProducts.map((all, index) => {
                return <View key={index} className="">
                    <View className="flex flex-row justify-between bg-lightGreen p-4 items-center">
                        <Text style={{fontFamily:'Poppins-SemiBold'}} className=" text-base font-bold ">{all.name}</Text>
                        <TouchableOpacity
                            className="bg-white  border-2  border-primary rounded-lg p-2 items-center">
                            <Text style={{fontFamily:'Poppins-SemiBold'}} className="font-bold text-primary">View All</Text>
                        </TouchableOpacity>
                    </View>

                    <View className=" py-5 mb-5 bg-white ">
                        <FlatList className="w-full" horizontal={true} showsHorizontalScrollIndicator={false}
                                  data={all.eachProducts} renderItem={({item}) => productScroll(item, all.name)}/>
                    </View>
                </View>
            })}

        </ScrollView>
    )
}
