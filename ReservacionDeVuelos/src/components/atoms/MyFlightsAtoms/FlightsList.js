import React from 'react';
import {View, FlatList} from 'react-native';
import {styles} from '../../../styles/MyFlightsStyles';
import FlightsListItem from './FlightsListItem';

const FlightsList = ({flights}) => {
  return (
    <View style={styles.ListContainer} testID="listContainer">
      <FlatList
        testID="flightsList"
        showsVerticalScrollIndicator={false}
        data={flights}
        keyExtractor={(flight) => flight.id}
        renderItem={({item}) => <FlightsListItem item={item} />}
      />
    </View>
  );
};

export default FlightsList;
