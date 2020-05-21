import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';

const FretSection = () => {
  return <Text>Note</Text>
}

const Fret = () => {
    return (
      <View style={styles.fret}>
        <FlatList 
          scrollEnabled={false}
          data={[1, 2, 3, 4, 5, 6 ]}
          renderItem={(note, index) =>  <FretSection key={index} note={note} />} />
        <Text>0</Text>
      </View>
    );
  };
  
const styles = StyleSheet.create({
    fret: {
      width: 100,
      backgroundColor: 'red',
      flex: 1,
    },
});
  
export default Fret;
  