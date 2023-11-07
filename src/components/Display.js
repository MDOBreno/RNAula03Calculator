import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
} from 'react-native'


const styles = StyleSheet.create({
        display: {
            flexGrow: 1,
            padding: 2,
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            alignItems: 'flex-end', //Alinhado a direita
        },
        displayValue: {
            fontSize: 60,
            color: '#fff',
        }
    }

)


export default props => 
    <View style={styles.display}>
        <Text style={styles.displayValue} numberOfLines={1}>
            {props.value}
        </Text>
    </View>