import React from 'react' 
import {View, Image, Text, StyleSheet, TextInput} from 'react-native' 

const ResultDetail = ({result}) =>{ 
    return( 
        <View> 
        <View style={styles.container}> 
            <Image style={styles.image} source={{ uri: result.image_url}} /> 
            <Text style={styles.text}>{result.name}</Text>
            <Text> 
                {result.rating} Stars, {result.review_count} Reviews 
            </Text> 
        </View> 
        <View style={styles.container}> 
            <Image style={styles.image} source={{ uri: result.image_url}} /> 
            <Text style={styles.text}>{result.name}</Text> 
            <Text> 
                {result.rating} Stars, {result.review_count} Reviews 
            </Text> 
        </View> 
        </View> 
    ) 
} 


const styles = StyleSheet.create({ 
    container:{ 
        marginLeft: 15 
    }, 
    image: { 
        width: 350, 
        height: 120, 
        borderRadius: 4, 
        marginBottom: 5 
    }, 
    text:{ 
        fontWeight: 'bold' 
    } 
}) 

export default ResultDetail 