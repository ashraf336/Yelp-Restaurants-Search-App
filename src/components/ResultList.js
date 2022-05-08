import React from "react";
import { Text, StyleSheet, View, FlatList,TouchableOpacity } from "react-native";
import ResultDetail from "./ResultDetail";
import { withNavigation } from "react-navigation";

const ResultList = ({ Title, result, navigation }) => {

if(!result.length){
  return null;
}

  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>{Title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={result}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (<TouchableOpacity onPress={()=>{navigation.navigate('ResultShow' , {id: item.id})}}>
          <ResultDetail result={item} />
          </TouchableOpacity>)
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container:{
      marginBottom:15
  },  
  Title: {
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: 15,
    marginBottom:5
  },
  Result: {},
});

export default withNavigation(ResultList) ;
