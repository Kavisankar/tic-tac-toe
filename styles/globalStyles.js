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
        height: 300,
        width: 300,
        backgroundColor: "#fff",
        alignSelf: "center",
        borderWidth: 2,
    },
    boardRow:{
        flex: 1,
        flexDirection: "row",
    },
    cellText:{
        fontSize: 50,
    },
    cellContent:{
        alignItems:"center",
    },
    cell:{
        flex: 1,
        borderWidth: 2,
        alignItems: "stretch",
        alignContent:"center",
        justifyContent:"center",
    }
  });

  export default styles;
