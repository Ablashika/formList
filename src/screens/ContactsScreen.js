import React from 'react'
import {View, FlatList, Text } from 'react-native'
import Contact from '../components/Contact'
import {connect} from 'react-redux'


 function ContactsScreen() {

    const contacts = [
        {name: "Shukura bun", number:"024-890-9816"},
        {name: "Madison Jade", number:"024-553-9816"},
        {name: "Malvin Akara", number:"024-890-1111"},
        {name: "Shrek bun", number:"023-890-9816"},
        {name: "Shun bun", number:"022-890-9816"},
        {name: "Backor Rex", number:"021-844-9816"},
        {name: "Shukura bun", number:"024-891-9816"},
        {name: "Madison Jade", number:"024-333-9816"},
        {name: "Malvin Akara", number:"024-890-2211"},
        {name: "Shrek bun", number:"028-890-9816"},
    ] 

    return (
       <View>
           <FlatList
           data = {contacts}
           renderItem={({item})=> {
               return <Contact name={item.name} phone={item.number}/>
           }}
           keyExtractor = {(item)=>item.number}
           />
       </View>
    )
}



const mapStateToProps = (state) => {
    return {auth:state}
  } 
export default connect(mapStateToProps)(ContactsScreen)