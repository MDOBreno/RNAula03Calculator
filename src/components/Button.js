import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'
import ButtonEstilo from './ButtonEstilo'

const styles = StyleSheet.create(
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
        },
        operationButton: {
            color: '#fff',
            backgroundColor: '#fa8231',
        },
        buttonDouble: {
            width: (Dimensions.get('window').width / 4) * 2,
        },
        buttonTriple: {
            width: (Dimensions.get('window').width / 4) * 3,
        },
    }
)

export default props => {
    const stylesButton = [styles.buttons];
    if (props.double) {
        stylesButton.push(styles.buttonDouble);
    }
    if (props.triple) {
        stylesButton.push(styles.buttonTriple);
    }
    if (props.operation) {
        stylesButton.push(styles.operationButton);
    }
    return (
        <TouchableHighlight 
            onPress={() => props.onClick(props.label)}
        >
            <Text style={stylesButton}>
                {props.label}
            </Text>
        </TouchableHighlight>
    )
}
