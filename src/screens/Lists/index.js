import React, { useState } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import List from '../../components/List';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const ListsScreen = props => {

  const navigation = useNavigation();

  const [lists, setLists] = useState(
    [
      {
        id: 1,
        name: 'Grocery List',
        store: 'Redners',
        date: '2022-09-14',
      },
      {
        id: 2,
        name: 'Back To School List',
        store: 'Staples',
        date: '2022-09-15',
      },
    ]
  );

  return (
    <View style={styles.container}>
      <View>
        <FlatList 
          data={lists}
          renderItem={({item}) => <List post={item} />}
        />
      </View>
        <View style={styles.bottom}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Add List')}
                >
                <Text style={styles.buttonText}>Add List</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default ListsScreen;