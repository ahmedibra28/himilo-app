import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Home from './src/screen/Home'

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className='h-full w-full overflow-hidden'>
        <Home />
        <StatusBar style='auto' />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
