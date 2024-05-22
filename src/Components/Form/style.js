import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: "90%",
        height: "90%",
        bottom: 0,
        backgroundColor: "#fff",
        alignItems: "center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop:30
    },
    form: {
        width: "100%",
        height: "auto",
        marginTop:30,
        padding:10
    },
    formLabel: {
        color: "#000000",
        fontSize:18,
        paddingLeft:20,
    },
    formInput: {
        width: "90%",
        height:40,
        borderRadius:30,
        margin:12,
        paddingLeft:10
    },
    formButton: {
        borderRadius:30,
        alignItems: "center",
        justifyContent: "center",
        width: "98%",
        backgroundColor: "#D62955",
        paddingBottom:14,
        paddingTop:14,
        marginLeft:12,
        margin:30
    },
    formButtonText: {
        fontSize:20,
        color: "#fff"
    },
    formResultado: {

    },
    showImc: {
        width: "100%",
        height: "50%"
    },
    imcList: {
        marginTop: 20,
    },
    imcListItem: {
        fontSize: 20,
        color: "red",
        height: 50,
        width: "100%",
        paddingRight: 20
    },
    imcListItemText: {
        fontSize: 16,
        color: "red"
    }

})

export default styles;
