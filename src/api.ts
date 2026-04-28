import Constants from 'expo-constants';
import { Platform } from 'react-native';

const getDevServerHost = () => {
  const hostUri = Constants.expoConfig?.hostUri;
  return hostUri?.split(':')[0];
};

const getApiHost = () => {
  const devServerHost = getDevServerHost();

  if (devServerHost) {
    return devServerHost;
  }

  return Platform.select({
    android: '10.0.2.2',
    ios: 'localhost',
    default: 'localhost',
  });
};

export const API_URL = `http://${getApiHost()}:8000`;
export const PIZZAS_URL = `${API_URL}/pizzas`;
