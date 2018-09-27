import React from 'react';
import { View, FlatList, Text} from 'react-native';

import { styles } from './MainStyle';


export default class ErrorPresenter extends React.Component {
    render() {
        return (
            <View style={styles.errorContainer}>
                    {
                        // Example of rendering Components from Array
                        // Here we are rendering Array messages
                        this._renderErrorMessage()
                    }
            </View>
        );
    }

    /**
     * Renders Error Messages at Top
     */
    _renderErrorMessage() {
        if (this.props.errors.length) {
            return (
                // FlatList is used to generate ListViews
                <FlatList
                    data={this.props.errors}
                    renderItem={({item}) => <Text style={styles.errorMessage}>{item.msg}</Text>}
                    />
            )
        }
    }
}