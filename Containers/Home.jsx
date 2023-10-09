import React, { useContext, useState } from 'react';
import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native-web';
import Icon from 'react-native-vector-icons/FontAwesome'; // Replace 'FontAwesome' with the icon set you are using
import { DataContext, MyContext } from './DataContext';
import { useNavigation } from '@react-navigation/native';

// shadowColor: "#000",
// shadowOffset: {
// 	width: 0,
// 	height: 3,
// },
// shadowOpacity: 0.27,
// shadowRadius: 4.65,

// elevation: 6,

const Home = () => {
  const navigation = useNavigation()
  const [state, setState] = useState(Dimensions.get('screen').width);
  const { login, updateLoginStatus } = useContext(MyContext);

  const handleClick = () => {
    navigation.navigate("Details")
  }


  return (
    <ScrollView style={{ padding: 8, width: 'max-content', backgroundColor: "rgb(255, 255, 240)" }}>
      {/* Home Hero */}

      <TouchableOpacity onPress={handleClick} activeOpacity={0.7} style={{
        borderRadius: 10, overflow: "hidden", shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
      }}>
        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: "" }}>
          <Text style={{ fontFamily: 'cursive', fontSize: 18, fontWeight: '500' }}>Winter Deals, What's New?</Text>
          <View style={{ borderRadius: 10, overflow: 'hidden', marginTop: 5, margin: 'auto' }}>
            <Image source={{ uri: 'https://cdn.leonardo.ai/users/9c5c81ee-0af6-45d2-a406-940450d62697/generations/33ca2069-253f-47aa-bed9-5e23f8882f65/DreamShaper_v7_fashion_background_HD_outdoor_beautiful_girl_0.jpg' }} style={{ height: 130, width: Dimensions.get('window').width - 18 }} />
          </View>
        </View>
      </TouchableOpacity>

      {/* Categories */}
      <View style={{ display: "flex", flexDirection: 'column', marginTop: "10px", width: Dimensions.get('window').width - 18 }}>
        <View style={{ display: "flex", flexDirection: 'row', marginTop: "", width: Dimensions.get('window').width - 18 }}>
          <TouchableOpacity style={{ margin: "auto" }}>
            <Image source={require('./img/shopping-back.jpg')} style={{
              display: "block",
              width: "50px",
              height: "70px",
              backgroundColor: "red",
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",overflow:"hidden"
            }} />
            <Text style={{ textAlign: "center" }}>
              Grocer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: "auto" }}>
            <Image source={require('./img/shopping-back.jpg')} style={{ height: 60, width: 50, margin: "", marginTop: "15px" }} />
            <Text style={{ textAlign: "center" }}>
              Grocer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: "auto" }}>
            <Image source={require('./img/shopping-back.jpg')} style={{ height: 60, width: 50, margin: "", marginTop: "15px" }} />
            <Text style={{ textAlign: "center" }}>
              Grocer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: "auto" }}>
            <Image source={require('./img/shopping-back.jpg')} style={{ height: 60, width: 50, margin: "", marginTop: "15px" }} />
            <Text style={{ textAlign: "center" }}>
              Grocer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: "auto" }}>
            <Image source={require('./img/shopping-back.jpg')} style={{ height: 60, width: 50, margin: "", marginTop: "15px" }} />
            <Text style={{ textAlign: "center" }}>
              Grocer
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ display: "flex", flexDirection: 'row', width: Dimensions.get('window').width - 18 }}>

          <TouchableOpacity style={{ margin: "auto" }}>
            <Image source={require('./img/shopping-back.jpg')} style={{ height: 60, width: 50, margin: "", marginTop: "15px" }} />
            <Text style={{ textAlign: "center" }}>
              Grocer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: "auto" }}>
            <Image source={require('./img/shopping-back.jpg')} style={{ height: 60, width: 50, margin: "", marginTop: "15px" }} />
            <Text style={{ textAlign: "center" }}>
              Grocer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: "auto" }}>
            <Image source={require('./img/shopping-back.jpg')} style={{ height: 60, width: 50, margin: "", marginTop: "15px" }} />
            <Text style={{ textAlign: "center" }}>
              Grocer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: "auto" }}>
            <Image source={require('./img/shopping-back.jpg')} style={{ height: 60, width: 50, margin: "", marginTop: "15px" }} />
            <Text style={{ textAlign: "center" }}>
              Grocer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: "auto" }}>
            <Image source={require('./img/shopping-back.jpg')} style={{ height: 60, width: 50, margin: "", marginTop: "15px" }} />
            <Text style={{ textAlign: "center" }}>
              Grocer
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  );
};

export default Home;
