import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { FontAwesome5  } from '@expo/vector-icons';

export default function App() {

  const {colorScheme, toggleColorScheme} = useColorScheme();

  return (
    <View className="flex-1 justify-center items-center dark:bg-neutral-900 space-y-6">
      <StatusBar style={colorScheme=='dark'? 'light' : 'dark'} />

      <FontAwesome5 name='gripfire' size={500} style={colorScheme=='dark'? styles.textWhite: styles.textBlack} />

      <View className="flex-row justify-center items-center space-x-2">

        <Text className="text-xl dark:text-white">Alternar tema</Text>
        <Switch value={colorScheme=='dark'} onChange={toggleColorScheme} />

      </View>

      <Text className="mx-4 text-justify" style={colorScheme=='dark'? styles.textWhite: styles.textBlack}>
        Usando o Dark Theme, proporcionamos uma experiência visual agradável e de baixo consumo de energia para os usuários.
      </Text>      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWhite: {
    color: 'white'
  },
  textBlack: {
    color: 'black'
  }
});
