
import { NavigationContainer } from '@react-navigation/native';

import AuthStak from './src/assets/navigation/AuthStak';


 const App = () => {
  return (
    <NavigationContainer>
      <AuthStak/>
  </NavigationContainer>

  

  );
  
};
  {/*  <AppStack /> */} 


/*const Home = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Hom screen</Text>
    </View>
  );
};
*/
export default App;
