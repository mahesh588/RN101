import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default class CalculatorScreen extends React.Component {
  // Constructor
  constructor(props) {
    super(props); // Passing properties to parent class
    // State: This represent the data that can change in the lifecycle of the component
    // More about it here: https://facebook.github.io/react-native/docs/state
    this.state = {
      number: "0"
    }

    // Importance of State
    // In Nutshell, React maintains the list of UI component which are using the state variable. 
    // There are two ways in which you can update the state variable
    //  1) this.state.<variableName> = <newValue>
    //  2) this.setState({<variableName>:<newValue>});
    // The 1st approach will change the vaiable but will not re-render the UIComponent using the state variable
    // In 2nd approach, whenever the state variable changes via setState(), react framework will call the rerender method 
    // of component, hence causing UI to change accoridng to data.
  }

  /**
   * render method is like the main method that gets call for rendering the UI of the Component 
   */
  render() {
    return (
      // All the UI components that this Components contains need to be wrapped under one Component. 

      // In JSX, if you want to refer a JS Variable or write JS , you enclose that between {}, In the below style is a property 
      // and we are setting it the value of JSON styles.container , hence we wrap the styles.container in {}
      <View style={styles.container}>
        <View style={styles.section1}>
          // Reading the state variable and displaying it as Text
          <Text style={styles.numberDisplay}>{this.state.number}</Text>
        </View>
        <View style={styles.section2}>
          <View style={styles.section3}>
            // Example of rendering Components from Array
            {this._generateNumberPadButtons()}
          </View>
          <View style={styles.section4}>
                // Example of Arrow function 
                <TouchableOpacity style={[styles.centerElement, {backgroundColor: "green", flex: 1}]}
                  onPress={() => {
                    let currentNumber  = parseInt(this.state.number);
                    currentNumber = currentNumber + 1;
                    // this would re-render the Component
                    this.setState({number: currentNumber.toString()});
                  }}
                >
                  <Text style={{color: "white"}}>++</Text>
                </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  /**
   * Appends the number with existing number and updates the state
   * @param {*} number : String
   */
  _updateCurrentNumber(number) {
    // Logs the value in console
    console.log("number: "+number);
    // Sets the number variable in a state by appending it 
    this.setState({number: this.state.number+number});
  }

  /**
   * Generates Number Pad Buttons
   * returns the NumberPad Views
   */
  _generateNumberPadButtons() {
    var numberView = []; // Holder for all generated Views
    for (var i = 9 ; i >=0 ; i--) {
        numberView.push(
          // Example for Multiple Styles
          <TouchableOpacity style={[styles.centerElement, {backgroundColor: "blue", width: "33.3%", height: "25%", borderColor: "white", borderWidth: 1}]}
            onPress={this._updateCurrentNumber.bind(this, i.toString())}
          >
            // In JSX, if you want to refere or write JS , you enclose that between {}
            <Text style={{color: "white"}}>{i}</Text>
          </TouchableOpacity>
        )
    }
    return numberView;
  }
}

// JS Variable to store the StyleSheet
const styles = StyleSheet.create(
  {
    container: {
      backgroundColor: "#ccc", //To set the background color of view
      flex: 1 // flex is one of the ways to do Layout in CSS. flex:1 means it will take the entire space of its parent. Morw about it here: https://facebook.github.io/react-native/docs/flexbox
    },
    section1: {
      flex: 1,
      backgroundColor: "white",
      width: "100%",
      justifyContent: "flex-end", // add the element to  bottom
      alignItems: "flex-end" // add the element to right 
    },
    section2: {
      flex: 3,
      backgroundColor: "yellow",
      width: "100%",
      flexDirection: "row"
    },
    numberDisplay: {
      fontSize: 32
    },
    section3: {
      flex: 3,
      backgroundColor: "yellow",
      width: "100%",
      flexDirection: "row", // Controls the ordering of the child , default is "coloumn"
      flexWrap: "wrap" // Wraps the row child , so all childs are visible inside View
    },
    section4: {
      flex: 1,
      backgroundColor: "red",
      width: "100%"
    }, 
    // StyleSheet to make any element to the center of the View
    centerElement: {
      justifyContent: "center", 
      alignItems: "center"
    }
  }
)