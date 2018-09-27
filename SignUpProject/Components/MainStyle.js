import { StyleSheet } from 'react-native';

// ColorScheme can be a JSON , which then can be hooked up to profile to change look of the UI
const ColorSchemeLight = {
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

const ColorScheme = ColorSchemeLight;


// Styles
export const styles = StyleSheet.create({
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

