import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';
const SearchBar= ({term,onTermChange, onTermSubmit})=>{
    return <View style={styles.background}>
        <Feather name='search' style={styles.IconStyle}/>
        <TextInput placeholder='Søk' style={styles.InputStyle}
        value={term}
        onChangeText={newTerm=>onTermChange(newTerm)}
        autoCapitalize='none'
        autoCorrect={false}
        onEndEditing={()=>onTermSubmit()}/>
    </View>
};

const styles = StyleSheet.create({
    background:{
        backgroundColor: '#F0EEEE',
        height:50,
        borderRadius: 5,
        marginHorizontal: 30,
        flexDirection: 'row',
        marginTop:10,
        marginBottom:10
    },
    InputStyle:{
        
        flex:1,
        fontSize:18
    },
    IconStyle: {
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
    }


});


export default SearchBar;