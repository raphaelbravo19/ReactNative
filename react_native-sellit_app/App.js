import { Navigation } from 'react-native-navigation';
import ConfigureStore from './src/components/Store/config';
import { Provider } from 'react-redux';

import Login from './src/components/views/Login';
import Home from './src/components/views/Home';
import AddPost from './src/components/views/Admin/AddPost';
import NotAllow from './src/components/views/Admin/AddPost/notallow';
import SidedrawerComponenent from './src/components/views/Sidedrawer';
import UserPosts from './src/components/views/Admin/UserPosts';
import Article from './src/components/views/Article';


const store = ConfigureStore();

Navigation.registerComponent(
  "sellitApp.Login",
  ()=>
  Login,
  store,
  Provider
);

Navigation.registerComponent(
  "sellitApp.Home",
  ()=>
  Home,
  store,
  Provider
);
Navigation.registerComponent(
  "sellitApp.AddPost",
  ()=>
  AddPost,
  store,
  Provider
);
Navigation.registerComponent(
  "sellitApp.SidedrawerComponenent",
  ()=>
  SidedrawerComponenent,
  store,
  Provider
);
Navigation.registerComponent(
  "sellitApp.UserPosts",
  ()=>
  UserPosts,
  store,
  Provider
);
Navigation.registerComponent(
  "sellitApp.Article",
  ()=>
  Article,
  store,
  Provider
);
Navigation.registerComponent(
  "sellitApp.NotAllow",
  ()=>
  NotAllow,
  store,
  Provider
);




export default () => Navigation.startSingleScreenApp({
  screen:{
    screen:"sellitApp.Login",
    title:"Login",
    navigatorStyle:{
      navBarHidden:true
    }
  }
})