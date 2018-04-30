import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'

import AddMainScreen from './AddMainScreen'
import AddTeamScreen from './AddTeam/AddTeamScreen'
import SelectCategoryScreen from './AddTeam/SelectCategoryScreen'
import AddEventScreen from './AddEvent/AddEventScreen'

const AddStack = StackNavigator({
    AddMain: {
        screen: AddMainScreen
    },
    AddTeam: {
        screen: AddTeamScreen
    },
    SelectCategory: {
        screen: SelectCategoryScreen
    },
    AddEvent: {
        screen: AddEventScreen
    }
}, {
    headerMode: 'none'
})

export default AddStack