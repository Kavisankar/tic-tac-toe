import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: '#039dfc',
      alignContent:"center",
      justifyContent:"center",
    },
    text:{
      fontSize:20,
    },
    headerContainer:{
        padding: 15,
        marginTop: 23,
        alignContent: "center",
        backgroundColor: "#0394fc",
    },
    headerText:{
        textAlign: "center",
        fontSize: 18,
    },
    bodyContainer:{
        flex:1,
        backgroundColor:"#eff",
        alignContent:"center",
        justifyContent:"center",
    },
    playerInfo:{
        textAlign: "center",
        fontSize: 16,
        margin: 40,
    },
    buttonContainer:{
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    button:{
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#0394fc",
        padding: 15,
        borderRadius: 5,
    },
    buttonText:{
        fontSize: 15,
        marginLeft: 5,
    },
    board:{
        flexDirection: "row",
        flexWrap: "wrap",
        height: 304,
        width: 304,
        backgroundColor: "#fff",
        alignSelf: "center",
        borderWidth: 2,
    },
    cellText:{
        fontSize: 50,
    },
    cellContent:{
        alignItems:"center",
    },
    cell:{
        width: 100,
        borderWidth: 2,
        alignItems: "stretch",
        alignContent:"center",
        justifyContent:"center",
    }
  });

  export default styles;
