import { AppRegistry,YellowBox} from 'react-native';
import App from './App';
import Stack from "./pages/Stack";
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
AppRegistry.registerComponent('Blow', () => Stack);
