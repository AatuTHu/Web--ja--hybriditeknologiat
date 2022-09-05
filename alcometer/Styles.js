import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        top: 24,
        padding: 15, 
      },
      title: {
        textAlign: 'center',
        width: '100%',
        height: 100,
        fontSize: 40,
        fontWeight: 'bold',
        color: '#00BFFF',
      },
      subTitle: {
        textAlign: 'left',
        fontSize: 18,
        fontWeight: 'bold',
      },
      textInput: {
        height: 50,
        backgroundColor: 'lightGrey',
      },
      seprator: {
        height: 10,
        width: 200,
        margin: 10,
      },
      radioContainer: {
        margin: 25,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      radioBtn: {
        height: 30,
            width: 30,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: '#3740ff',
            alignItems: 'center',
            justifyContent: 'center',
      },
      selectedRadioBtn: {  
          width: 15,
          height: 15,
          borderRadius: 50,
          backgroundColor: '#3740ff',   
      },
      unselectedRadioBtn: {
        backgroundColor: '#fff'
      }, 
      Text: {
        fontSize: 18
      },
      answerContainer: {
        alignItems: 'center',
        marginBottom: 20,
      },
      green : {
        fontSize: 40,
        color: "green",
      },
      yellow : {
        fontSize: 40,
        color: "yellow",
      },
      red : {
        fontSize: 40,
        color: "red",
      }
})