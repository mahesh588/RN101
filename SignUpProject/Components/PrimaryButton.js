import React from 'react';
import { TouchableOpacity, Text} from 'react-native';
import { styles } from './MainStyle';


export default class PrimaryButton extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.primaryBtn}
                              onPress={this.props.onPress}
                    >
                        <Text style={{color: "white"}}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}