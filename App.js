
import { NavigationContainer } from '@react-navigation/native';

import Tabnavigation from './src/assets/navigation/Tabnavigation';
import AppStack from './src/assets/navigation/AppStack';

 const App = () => {
  return (
    <NavigationContainer>
    <AppStack />
   {/* <AuthStack />*/} 
  </NavigationContainer>

  );
  
};



/*const Home = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Hom screen</Text>
    </View>
  );
};
*/
export default App;
