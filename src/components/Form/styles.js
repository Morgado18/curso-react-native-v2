

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0, 
        backgroundColor: "#ffffff",
        alignItems: "center",
       /*  marginTop: 20, */
        paddingTop: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
     /*    justifyContent: "space-around", */
    },
    form: {
        width: "100%",
        height: "auto",
        marginTop: 15,
        padding: 10,
    },
    formLabel: {
        fontSize: 18,
        color: "#000000",
        paddingLeft: 20,
    },
    formInput: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 55,
        margin: 12,
        paddingLeft: 10,
    },
    formButton: {
        backgroundColor: "#ff0043",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 20,
        marginBottom: 20,
    },
    formButtonText: {
        fontSize: 20,
        color: "#ffffff"
    },
    errorMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
    },
    exhibitionResult: {
        width: "100%",
        height: "50%",
    },
    listImcs: {
        marginTop: 20,
    },
    resultImcItem: {
        fontSize: 26,
        color: "red",
        height: 50,
        width: "100%",
        paddingRight: 20,
    }, 
    textResultItemList: {
        fontSize: 14,
        color: "red",
    }
})

export default styles