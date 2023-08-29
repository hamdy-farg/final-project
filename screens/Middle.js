import { StyleSheet, Text, View, Image ,   TouchableOpacity, ImageBackground} from "react-native";
import React from "react";
 import AntDesign from "../node_modules/@expo/vector-icons";
import Home  from "./Home";
import { COLORS ,images,SIZES, icons} from "../constants";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";


const Middle = () =>{
  const navigation = useNavigation();
  const handleLogout = async ()=>{
    await signOut(auth);
  }
  return (

      

    <View style={styles.main}>
       <ImageBackground
        style={styles.backgroundImage}
        source={require("../assets/images/Background_Image.png")}
        // blurRadius={1}
      >
      </ImageBackground>
     
      <View style={{ flexDirection: 'row', paddingHorizontal: SIZES.radius, height: 80, alignItems: 'flex-end' }}>
                    <TouchableOpacity
                        style={{ marginLeft: SIZES.base }}
                        onPress={handleLogout}
                    >
                        <Image
                            source={icons.back_arrow_icon}
                           
                            style={{
                                width: 25,
                                height: 25,
                            }}
                        />
                        </TouchableOpacity>
                       </View>
      
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={images.user} resizeMode="cover" />
      <Text style={{ fontSize: 16, color: COLORS.whitey}}>
       Hamdy Farg
      </Text>
      <Text
        style={{ fontSize: 16, color: "#FF6969", fontWeight: 500 }}
      >
        HamdyFarg@quickTech.com
      </Text>
    </View>

    <View style={styles.middleSectionTextContainer}>
      <View style={styles.middleSectionText}>
        <Text style={styles.toptext}>Applied</Text>
        <Text style={styles.bottomtext}>28</Text>
      </View>
      <View style={styles.middleSectionText}>
        <Text style={styles.toptext}>Reviewed</Text>
        <Text style={styles.bottomtext}>73</Text>
      </View>
      <View style={styles.middleSectionText}>
      <Text style={styles.toptext}>Contacted</Text>
            <Text style={styles.bottomtext}>18</Text>
      </View>
    </View>
  </View>

);
}

const styles = StyleSheet.create({
  backgroundImage: {
    width:425,
    height:900,
    flex: 1, 
    resizeMode: "cover",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  back:{
    backgroundColor: COLORS.primary,
    width: 45,
    height: 45,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
main: {
  marginTop: 30,
},
imageContainer: {
  marginTop:80,
  justifyContent: "center",
  alignItems: "center",
},
image: {
  width: 150,
  height: 150,
  borderRadius: 50,
  marginBottom: 5,
},
middleSectionTextContainer: {
  flexDirection: "row",
  justifyContent: "space-evenly",
  marginTop: 20,
},
middleSectionText: {
  justifyContent: "center",
  alignItems: "center",
},
toptext: {
  fontSize: 16,
  color:  "#FF6969",
  fontWeight: "bold",
},
bottomtext: {
  fontSize: 16,
  color: COLORS.white,
  fontWeight: "700",
},
});



export default Middle;