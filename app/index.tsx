import { Text, View, Image } from "react-native";
import { FaCartPlus } from "react-icons/fa";
import { CgAirplane, CgAlarm  } from "react-icons/cg";
import { FaChevronDown } from 'react-icons/fa';

export default function Index() {
  return (

<View className="flex flex-1 flex-wrap flex-row">
{/* w-40 h-40 flex flex-col flex-wrap */}


<View className="flex flex-row items-center h-8 bg-white rounded m-2">
<Text className="flex flex-row text-xs items-end font-bold bg-gray-100 rounded pl-1 pr-1 m-1">Category  <FaChevronDown/></Text>
<Text className="flex flex-row text-xs items-end font-bold bg-gray-100 rounded pl-1 pr-1 m-1">Color  <FaChevronDown/></Text>
<Text className="flex flex-row text-xs items-end font-bold bg-gray-100 rounded pl-1 pr-1 m-1">Size  <FaChevronDown/></Text>
<Text className="flex flex-row text-xs items-end font-bold bg-gray-100 rounded pl-1 pr-1 m-1">Price  <FaChevronDown/></Text>
<Text className="flex flex-row text-xs items-end font-bold bg-gray-100 rounded pl-1 pr-1 m-1">More  <FaChevronDown/></Text>
</View>

<View className=" bg-white m-4 rounded h-110 shadow-slate-800 w-40 hover:bg-slate-300 ">
<Image  className="ml-4 hover:file:  " source={require('../assets/images/marrom.png')}/>
<Text className=" m-2 font-bold text-red-500">Título: Blusa Marrom</Text>
<Text className=" m-2 font-bold text-blue-600">Descrição: Em algodão</Text>
<Text className=" m-2 font-bold text-green-700 ">$1.000,00</Text>
</View>

<View className=" bg-white m-4 rounded h-110 shadow-slate-800 hover:bg-slate-300 ">
<Image  className=" hover:file: w-1 h-1 ml-8 mr-4" source={require('../assets/images/nike.png')}/>
<Text className=" m-2 font-bold text-red-500">Título: Blusa Marrom</Text>
<Text className=" m-2 font-bold text-blue-600">Descrição: Em algodão</Text>
<Text className=" m-2 font-bold text-green-700 ">$1.000,00</Text>
</View>




{/* <View className="w-40 h-40 flex flex-col flex-wrap">
<Image  className="w-1 h-1 flex ml-8 mr-4 "
 source={require('../assets/images/rosa.png')} resizeMode="contain"
 />
<Text className=" font-bold text-red-500">Título: Blusa Marrom</Text>
<Text className=" font-bold text-blue-600">Descrição: Em algodão</Text>
<Text className=" font-bold text-green-700 ">$1.000,00</Text>
</View> */}
{/* 
<View className="w-40 h-40 flex flex-col">
<Image  className="w-1 h-1 flex ml-8 mr-4 "
 source={require('../assets/images/nike.png')} resizeMode="contain"
 />
<Text className=" font-bold text-red-500">Título: Blusa Marrom</Text>
<Text className=" font-bold text-blue-600">Descrição: Em algodão</Text>
<Text className=" font-bold text-green-700 ">$1.000,00</Text>
</View>

<View className="w-40 h-40 flex flex-col">
<Image  className="w-10 h-10 flex ml-8 mr-4 "
 source={require('../assets/images/marrom.png')} resizeMode="contain"
 />
<Text className=" font-bold text-red-500">Título: Blusa Marrom</Text>
<Text className=" font-bold text-blue-600">Descrição: Em algodão</Text>
<Text className=" font-bold text-green-700 ">$1.000,00</Text>
</View>

<View className="w-40 h-40 flex flex-col">
<Image  className="w-10 h-10 flex ml-8 mr-4 "
 source={require('../assets/images/rosa.png')} resizeMode="contain"
 />
<Text className=" font-bold text-red-500">Título: Blusa Marrom</Text>
<Text className=" font-bold text-blue-600">Descrição: Em algodão</Text>
<Text className=" font-bold text-green-700 ">$1.000,00</Text>
</View>

<View className="w-40 h-40 flex flex-col">
<Image  className="w-10 h-10 flex ml-8 mr-4 "
 source={require('../assets/images/nike.png')} resizeMode="contain"
 />
<Text className=" font-bold text-red-500">Título: Blusa Marrom</Text>
<Text className=" font-bold text-blue-600">Descrição: Em algodão</Text>
<Text className=" font-bold text-green-700 ">$1.000,00</Text>
</View> */}


</View>

  );
}
