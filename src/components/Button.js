import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'
import ButtonEstilo from './ButtonEstilo'

const style = StyleSheet.create(
    {
        buttons: {
            fontSize: 40,
            height: Dimensions.get('window').width / 4,
            width:  Dimensions.get('window').width / 4,
            padding: 20,
            backgroundColor: '#f0f0f0',
            textAlign: 'center',
            borderWidth: 1,
            borderColor: '#888',
        }
    }
)

export default props => {

    return (
        <TouchableHighlight 
            onPress={props.onClick}
        >
            <Text style={style.buttons}>
                {props.label}
            </Text>
        </TouchableHighlight>
    )
}
