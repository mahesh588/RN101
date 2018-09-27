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

// Defining Component
export default class SignUpScreen_Solved extends React.Component {
    // Constructor
    constructor(props) {
        super(props);
        // State: This represent the data that can change in the lifecycle of the component
        // More about it here: https://facebook.github.io/react-native/docs/state
        this.state = {
            username: "", // Will store the username
            password: "", // Will store the password
            errors: [] // Store the list of error message
        }

        // Importance of State
        // In Nutshell, React maintains the list of UI component which are using the state variable.
        // There are two ways in which you can update the state variable
        //  1) this.state.<variableName> = <newValue>
        //  2) this.setState({<variableName>:<newValue>});
        // The 1st approach will change the vaiable but will not re-render the UIComponent using the state variable
        // In 2nd approach, whenever the state variable changes via setState(), react framework will call the rerender method
        // of component, hence causing UI to change accoridng to data.

        // Binding the private functions to get access to state variable
        // This is JS concept more about it here: https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56
        this._onSignUpBtnClicked = this._onSignUpBtnClicked.bind(this);
        this._renderErrorMessage = this._renderErrorMessage.bind(this);
    }

    /**
     * render method is like the main method that gets call for rendering the UI of the Component
     */
    render() {
        return(
            // All the UI components that this Components contains need to be wrapped under one Component.

            // In JSX, if you want to refer a JS Variable or write JS , you enclose that between {}, In the below style is a property
            // and we are setting it the value of JSON styles.container , hence we wrap the styles.container in {}
            <View style={styles.container}>
                <View style={styles.section1}>
                    <View style={styles.errorContainer}>
                    {
                        // Example of rendering Components from Array
                        // Here we are rendering Array messages
                        this._renderErrorMessage()
                    }
                    </View>
                    <View style={styles.companyHeader}>
                        <Text style={styles.companyLogo}>Company Name</Text>
                        <Text>Let's build !</Text>
                    </View>
                </View>
                <View style={styles.section2}>
                    <View style={styles.card}>
                        <View style={styles.heading}>
                            <Text style={{color: ColorScheme.heading.textColor}}>Sign Up</Text>
                        </View>
                        <View style={styles.cardContent}>
                            <View style={styles.cardElement}>
                                <Text>Username</Text>
                                <TextInput style={styles.textInput}
                                            autoCorrect={false} // Will not show autoCorrect in Keyboard
                                            placeholder="Enter Username" // PlaceHolder of Text
                                            // Gets called when Input is in focus
                                            onFocus = {() => { 
                                                // Here, setting the error to empty to remove the rendering 
                                                // of error messages
                                                this.setState({errors: []})
                                            }}
                                            // Gets called when the text inside the TextInput changes
                                            onChangeText={(username) => { 
                                                // Setting the username to be used for validation
                                                this.state.username = username
                                            }}
                                ></TextInput>
                            </View>
                            <View style={styles.cardElement}>
                                <Text>Password</Text>
                                <TextInput style={styles.textInput}
                                           secureTextEntry={true} // Makes the text input as password field
                                           autoCorrect={false}
                                           placeholder="Enter Password"
                                           underlineColorAndroid="transparent" // Quirk to remove Android's underline in text input
                                           onFocus = {() => {
                                            this.setState({errors: []})
                                           }}
                                           onChangeText={(password) => {
                                                this.state.password = password
                                            }}
                                           >
                                           </TextInput>
                            </View>
                            <View style={styles.cardElement}>
                                <View style={styles.buttonContainer}>
                                    <TouchableOpacity style={styles.primaryBtn}
                                            // Call _onSignUpBtnClicked when the button gets pressed
                                            onPress={this._onSignUpBtnClicked}
                                    >
                                        <Text style={{color: ColorScheme.whiteColor}}>Sign Up !</Text>
                                    </TouchableOpacity>
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
            // this.props.navigation.navigate("CalculatorScreen");
        }
    }

    /**
     * Renders Error Messages at Top
     */
    _renderErrorMessage() {
        if (this.state.errors.length) {
            return (
                // FlatList is used to generate ListViews
                <FlatList
                    data={this.state.errors}
                    renderItem={({item}) => <Text style={styles.errorMessage}>{item.msg}</Text>}
                    />
            )
        }
    }
}

// ColorScheme can be a JSON , which then can be hooked up to profile to change look of the UI
const ColorScheme = {
    backgroundColor: "#eee",
    card: {
        backgroundColor: "white"
    },
    heading: {
        backgroundColor: '#6200EE',
        textColor: 'white'
    },
    whiteColor: "#fff",
    primaryBtn: {
        backgroundColor: "#BB86FC"
    },
    errorContainer: {
        backgroundColor: "red",
        textColor: "white"
    }
}

// Styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: ColorScheme.backgroundColor,
        flex: 1 // flex is one of the ways to do Layout in CSS. flex:1 means it will take the entire space of its parent. 
                // More about it here: https://facebook.github.io/react-native/docs/flexbox
    },
    section1: {
        flex: 1
    },
    section2: {
        flex: 2,
        width: "100%",
        alignItems: "center"
    },
    companyHeader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    card: {
        backgroundColor: ColorScheme.card.backgroundColor, // refering to ColorScheme Variable
        width: "auto",
        elevation: 5, // Required for Android to do shadow
        /** bellow is required for box shadow iOS */
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        /** end */
        width: "70%"
    },
    heading: {
        backgroundColor: ColorScheme.heading.backgroundColor,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 15
    },
    cardContent: {
        margin: 10
    },
    cardElement: {
        margin: 5
    },
    companyLogo: {
        fontSize: 32,
        fontWeight: "100"
    },
    textInput: {
        borderColor: "#ccc",
        borderWidth: 0.7,
        padding: 3,
        marginTop: 5
    },
    buttonContainer: {
        marginTop: 10
    },
    errorContainer: {
        position: 'absolute', 
        top:0,
        left: 0,
        right: 0,
        backgroundColor: ColorScheme.errorContainer.backgroundColor,
        width: "100%",
        paddingTop: 15
    },
    errorMessage: {
        width: "100%",
        margin: 2,
        color: ColorScheme.errorContainer.textColor,
        borderColor: "black",
        borderBottomWidth: 1
    },
    primaryBtn: {
        backgroundColor: ColorScheme.primaryBtn.backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    }
});

