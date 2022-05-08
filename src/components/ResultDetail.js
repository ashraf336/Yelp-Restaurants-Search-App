import react from "react";
import {View , Image , Text , StyleSheet} from 'react-native';

const ResultDetail = ({result}) => {
    return <View style={styles.container}>
        <Image style={styles.Image} source={{uri : result.image_url}}/>
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.rating} Stars , {result.review_count} Reviews</Text>
    </View>
};

const styles = StyleSheet.create({
  container:{
    
    marginLeft:15
  },  
  Image:{
    width:300,
    height:200,
    // marginLeft:30,
    // alignSelf: "center",
    borderRadius:15,
    marginBottom:5
  },
  name:{
      fontWeight:"bold",
      fontSize:16
  },
});

export default ResultDetail;