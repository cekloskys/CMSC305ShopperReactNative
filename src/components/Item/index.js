import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const database = require('../../components/Handlers/database.js');

const Item = props => {
    const post = props.post;
    const navigation = useNavigation();

    const onPress = () => {
        if (post.list_id){
            // Add List Item screen is using me
            try {
                database.addListItem(post.list_id, post.id);
            } catch (error) {
                console.log('Error adding list item ' + error);
            }
            alert('Item added to list!');
            navigation.navigate('Start Shopping!');
        } else {
            // Items screen is using me
            console.log(post.name);
        }
        
    }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={onPress}>
            <View style={{flex: 2}}>
                <Text style={styles.name} numberOfLines={1}>{post.name}</Text>
                <Text style={styles.price} numberOfLines={1}>{post.price}</Text>
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.quantity}>{post.quantity}</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
};

export default Item;