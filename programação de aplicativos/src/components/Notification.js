import React from 'react'
import {Button, View} from 'react-native'
import styles from '../styles/notification'

const Notification = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <Button
                title='Voltar para Home'
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}
export default Notification