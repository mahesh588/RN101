import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './MainStyle';

export default class TextInputCustomized extends React.Component {
    render() {
        let isSecureField = this.props.secure ? this.props.secure : false;
        return (
            <TextInput style={styles.textInput}
                        autoCorrect={false} // Will not show autoCorrect in Keyboard
                        placeholder={this.props.placeholder} // PlaceHolder of Text
                        // Gets called when Input is in focus
                        onFocus = {this.props.onFocus}
                        onChangeText={(text) => {
                            this.props.onChangeText(text);
                        }}
                        secureTextEntry={isSecureField}
                        underlineColorAndroid="transparent" // Quirk to remove Android's underline in text input
            ></TextInput>
        );
    }
}