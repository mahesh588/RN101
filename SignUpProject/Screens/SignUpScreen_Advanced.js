import React from 'react';

// All the imports of the UI component
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Button,
    FlatList,
    TouchableOpacity
} from 'react-native';

import { styles } from '../Components/MainStyle';

import TextInputCustomized from '../Components/TextInput'
import CompanyLogo from '../Components/CompanyLogo';
import ErrorPresenter from '../Components/ErrorPresenter';
import PrimaryButton from '../Components/PrimaryButton';

// Defining Component
export default class SignUpScreen_Advanced extends React.Component {
    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            username: "", // Will store the username
            password: "", // Will store the password
            errors: [] // Store the list of error message
        }
        this._onSignUpBtnClicked = this._onSignUpBtnClicked.bind(this);
    }

    /**
     * render method is like the main method that gets call for rendering the UI of the Component
     */
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.section1}>
                    <ErrorPresenter errors={this.state.errors} />
                    <CompanyLogo />
                </View>
                <View style={styles.section2}>
                    <View style={styles.card}>
                        <View style={styles.heading}>
                            <Text style={{color: "white"}}>Sign Up</Text>
                        </View>
                        <View style={styles.cardContent}>
                            <View style={styles.cardElement}>
                                <Text>Username</Text>
                                <TextInputCustomized
                                            placeholder="Enter Username" // PlaceHolder of Text
                                            onFocus = {() => { 
                                                this.setState({errors: []})
                                            }}
                                            onChangeText={(username) => { 
                                                this.state.username = username
                                            }}
                                ></TextInputCustomized>
                            </View>
                            <View style={styles.cardElement}>
                                <Text>Password</Text>
                                <TextInputCustomized secure={true}
                                           placeholder="Enter Password"
                                           onFocus = {() => {
                                            this.setState({errors: []})
                                           }}
                                           onChangeText={(password) => {
                                                this.state.password = password
                                            }}
                                           >
                                </TextInputCustomized>
                            </View>
                            <View style={styles.cardElement}>
                                <View style={styles.buttonContainer}>
                                    <PrimaryButton onPress={this._onSignUpBtnClicked} title="Sign Up !" />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    /**
     * Function which validates UserName and Password and updates errors in state if any
     */
    _onSignUpBtnClicked() {
        let errors = [];

        if (this.state.username.length == 0) {
            errors.push({"msg":"Please enter Username"});
        }

        if (this.state.password.length < 8) {
            errors.push({"msg": "Password should contain minimum of 8 character"});
        }

        if (errors.length > 0) {
            // Sets the error in state, cause rerendering of Errors on UI
            this.setState({errors: errors});
        } else {
            alert("Successfull Sign Up !");
            // Usefull for Navigation
            this.setState({errors: []});
            //this.props.navigation.navigate("CalculatorScreen");
        }
    }
}

