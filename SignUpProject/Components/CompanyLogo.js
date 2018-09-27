import React from 'react';
import { View, Text} from 'react-native';
import { styles } from './MainStyle';


export default class CompanyLogo extends React.Component {
    render() {
        return (
            <View style={styles.companyHeader}>
                        <Text style={styles.companyLogo}>Company Name</Text>
                        <Text>Let's build !</Text>
            </View>
        );
    }
}