import React from 'react';

import { 
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class SignUpScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Your Solution Here !</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});