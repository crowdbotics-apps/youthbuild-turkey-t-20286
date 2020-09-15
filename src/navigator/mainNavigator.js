import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList101538Navigator from '../features/ArticleList101538/navigator';
import ArticleList101537Navigator from '../features/ArticleList101537/navigator';
import ArticleList101536Navigator from '../features/ArticleList101536/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList101538: { screen: ArticleList101538Navigator },
ArticleList101537: { screen: ArticleList101537Navigator },
ArticleList101536: { screen: ArticleList101536Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
