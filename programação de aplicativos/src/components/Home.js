import React from 'react'
import {Button, View} from 'react-native'
import styles from '../styles/home'

const Home = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Button
            title='Voltar para notificações'
            onPress={() => navigation.navigate('Notification')}
            />

        </View>
    )
}

export default Home