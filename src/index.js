import React from 'react'
import { AppRegistry } from 'react-native'

import App from './containers/Counter'
import CounterStore from './stores/counter'

const RNDMobXExample = () => (
  <App store={new CounterStore()} />
)

AppRegistry.registerComponent('RNDMobXExample', () => RNDMobXExample)
