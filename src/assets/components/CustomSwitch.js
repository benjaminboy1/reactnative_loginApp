import { View, Text } from 'react-native'
import React, { useState } from 'react'

const CustomSwitch = ({selectionMode, option1, option2, onSelectSwitch}) => {

    const [getSelecttionMode, setSelections] = useState (selectionMode);

  return (
    <View>
      <Text>CustomSwitch</Text>
    </View>
  )
}


export default CustomSwitch;