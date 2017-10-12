import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export default class Arrow extends React.Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress} 
                hitSlop={{left: 70, right: 70, top: 50, bottom: 50}}
            >
                <View>
                    <Image source={require('../img/arrow.png')} style={[
                        arrowStyles.arrow, 
                        (this.props.direction == "down") ? arrowStyles.down : null,
                        (this.props.orientation == "portrait") ? arrowStyles.portraitUp : null,
                        (this.props.direction != "down" && this.props.orientation == "portrait") ? arrowStyles.portraitDown : null
                        ]} />
                </View>
            </TouchableOpacity>
        )
    }
}

const arrowStyles = StyleSheet.create({
    arrow:{
        width: 50, 
        height: 12, 
        resizeMode: "stretch"
    },

    down:{
        transform: [{rotateX: "180deg"}]
    },

    portraitUp:{
        transform: [{rotateZ: "-90deg"}],
    },

    portraitDown:{
        transform: [{rotateZ: "90deg"}],
    }
})