import { Text, View, Image } from "react-native";
import { FaCartPlus } from "react-icons/fa";
import { CgAirplane, CgAlarm  } from "react-icons/cg";

export default function Index() {
  return (
  <View className="flex-1 flex-row">

<View className="w-40 h-40 ">
<Image  className="w-1 h-1 flex ml-8 mr-4 "
 source={require('../assets/images/marrom.png')}
 />
<Text className=" font-bold text-red-500">Título: Blusa Marrom</Text>
<Text className=" font-bold text-blue-600">Descrição: Em algodão</Text>
<Text className=" font-bold text-green-700 ">$1.000,00</Text>
</View>

<View className="w-40 h-40 ">
<Image  className="w-1 h-1 flex ml-8 mr-4 "
 source={require('../assets/images/rosa.png')}
 />
<Text className=" font-bold text-red-500">Título: Blusa Marrom</Text>
<Text className=" font-bold text-blue-600">Descrição: Em algodão</Text>
<Text className=" font-bold text-green-700 ">$1.000,00</Text>
</View>

<View className="w-40 h-40 ">
<Image  className="w-1 h-1 flex ml-8 mr-4 "
 source={require('../assets/images/marrom.png')}
 />
<Text className=" font-bold text-red-500">Título: Blusa Marrom</Text>
<Text className=" font-bold text-blue-600">Descrição: Em algodão</Text>
<Text className=" font-bold text-green-700 ">$1.000,00</Text>
</View>




<View>



</View>
{/* 
      <Text className="text-5xl text-dark-200 font-bold bg-red-500 p-5 rounded hover:backdrop:first-letter:bg-lime-300 green">Bem vindo ao melhor show de Rock and Roll da sua vida!<CgAirplane /> <CgAlarm /></Text>
    */}
   
   
   
   
    </View>
  );
}
