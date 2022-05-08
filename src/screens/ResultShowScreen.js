import react, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image , FlatList } from "react-native";
import yelp from "../api/yelp";

const ResultShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [result, setResult] = useState(null);

  console.log(result);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => getResult(id), []);

  if(!result){
      return null;
  }

  return (
    <>
    <Text style={styles.title}>{result.name}</Text>        
    <FlatList
    data={result.photos}
    keyExtractor={(photo) => photo }
    renderItem={ ({item}) => {return<Image  style={styles.image} source={{uri:item}}/> } }
    />
    </>        
  );
};

const styles = StyleSheet.create({
    image:{
        flex:1,
        alignItems: 'stretch',
        height:350,
        marginBottom:15,
    },
    title:{
        fontWeight:"bold",
        fontSize:40,
        textAlign:"center"

    }
});

export default ResultShowScreen;
