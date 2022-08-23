import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react';
import tw from "tailwind-react-native-classnames";

const HomeScreen = () => {
  return (
    <SafeAreaView styles={tw`bg-white h-full`}>
        <View style={tw`p-8`}>
            <Image
             style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
             }}
             source={{
                uri:"https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
             }}
            />
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color:"red",
    },
});