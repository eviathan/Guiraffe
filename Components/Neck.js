import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';
import Fret from './Fret';

const Nut = ({ tuning }) => {
    return (
        <View>
            <Text>E</Text>
            <Text>B</Text>
            <Text>G</Text>
            <Text>D</Text>
            <Text>A</Text>
            <Text>E</Text>
        </View>
    );
}

const Neck = ({ notes }) => {
    return (
      <View style={styles.neck}>
        <Nut />
        <FlatList
            horizontal={true}
            data={notes}
            renderItem={({note, index}) => <Fret key={index} note={note} /> }
          />
      </View>
    );
  };
  
const styles = StyleSheet.create({
    neck: { 
        flexDirection: "row"
    },
});
  
export default Neck;
  