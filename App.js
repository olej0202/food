import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultShowScreen from './src/screens/ResultShowScreen';


const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultShow: ResultShowScreen
},{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Søk etter Spisesteder'
  }


});

export default createAppContainer(navigator);


///Client ID
///nX6Wlx72CROjS9NXJeJS-w

///API Key
///E4ZLGR_MKbZJvxBpYTIPqTuG20xNFJ_wPSjmjukI1x2fA0lV7efjbwBP8ecjdTtlK6TiJkvWSMgiQpyop5OdAFUbcSjw-JihDK2Qk_GmgssMTHCbHql8IslWFw9yXnYx