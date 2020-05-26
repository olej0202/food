import React,{useState,useEffect} from 'react';
import {View, Text, StyleSheet, FlatList,Image} from 'react-native';
import yelp from '../api/yelp';
const ResultShowScreen =({navigation}) => {
    const id=navigation.getParam('id');
    const[result,setResult]=useState(null);

    const getResult = async(id)=>{
        const response=await yelp.get(`/${id}`);
        setResult(response.data);

    };
    useEffect(()=> {
        getResult(id);
    },[]);
    if (!result){
        return null;
    }
    return <View >
        <FlatList style={styles.view}
        data={result.photos}
        keyExtractor={(result) =>result}
        renderItem={({item}) => {
            return <Image style ={styles.Image}source={{uri:item}}/>
        }}
        />
    </View>
}

const styles=StyleSheet.create({
    Image:{
        height:200,
        width:300,
        marginBottom:15,
        alignSelf:'center',
        flex:1,
        marginLeft:0
    },
    view:{
        marginLeft:0
        

    }

});

export default ResultShowScreen;