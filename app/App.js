import React from 'react'
import { Platform } from 'react-native'
import { Container, Header, Text } from 'native-base'
import { isIphoneX } from 'react-native-iphone-x-helper'
import RootNavigator from './Screens/RootNavigator'

import GooglePlacesAutocomplete from 'react-native-google-places-autocomplete'

class App extends React.Component {
  render() {
    return (
      <Container>
        <RootNavigator />
      </Container>
    )
  }
}

export default App