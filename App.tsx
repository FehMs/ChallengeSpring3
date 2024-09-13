import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './views/Home';
import Quemsomos from './views/Quemsomos';
import Login from './views/Login';
import Cadastro from './views/Cadastro';
import Consulta from './views/Consulta';
import PerfilHome from './views/PerfilHome';
import Dicas from './views/Dicas';
import { AuthProvider } from './context/AuthContext';



export default function App() {

  const Stack = createNativeStackNavigator();

  return (
  <AuthProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown: false}} name="Quemsomos" component={Quemsomos} />
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="Cadastro" component={Cadastro} />
        <Stack.Screen options={{headerShown: false}} name="Consulta" component={Consulta} />
        <Stack.Screen options={{headerShown: false}} name="PerfilHome" component={PerfilHome} />
        <Stack.Screen options={{headerShown: false}} name="Dicas" component={Dicas} />
      </Stack.Navigator>
    </NavigationContainer>
  </AuthProvider>
  );
}
