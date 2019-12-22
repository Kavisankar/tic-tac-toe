import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#039dfc',
      alignContent:"center",
      justifyContent:"center",
    },
    text:{
      fontSize:20,
    },
    header:{
        padding: 15,
        marginTop: 23,
        alignContent: "center",
        backgroundColor: "#0394fc",
    },
    headerText:{
        textAlign: "center",
        fontSize: 18,
    },
    body:{
        flex:1,
        backgroundColor:"#eff",
        alignContent:"center",
        justifyContent:"center",
    },
    info:{
        textAlign: "center",
        fontSize: 16,
        margin: 40,
    },
    buttons:{
        margin: 50,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    button:{
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-around",
        backgroundColor: "#0394fc",
        padding: 15,
        borderRadius: 5,
    },
    buttonText:{
        fontSize: 15,
        marginLeft: 5,
    },
    board:{
        height: 300,
        width: 300,
        backgroundColor: "#fff",
        alignSelf: "center",
        borderWidth: 2,
    },
    row:{
        flex: 1,
        flexDirection: "row",
    },
    cellContent:{
        fontSize: 50,
    },
    cell:{
        flex: 1,
        borderWidth: 2,
        alignItems: "center",
        alignContent:"center",
        justifyContent:"center",
    }
  });

  export default styles;