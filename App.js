import {createStackNavigator} from 'react-navigation-stack' 
import {createAppContainer} from 'react-navigation' 
import SearchScreen from './src/screens/SearchScreen' 
import ResultShowScreen from './src/screens/ResultsShowScreen' 
import Login from './src/screens/Login'; 

const navigator = createStackNavigator({  
    Search: SearchScreen,  
    ResultsShow: ResultShowScreen, 
    Login:Login 
},{ 
  initialRouteName: 'Login', 
 
}); 
 
export default createAppContainer(navigator); 