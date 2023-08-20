import { MaterialCommunityIcons } from '@expo/vector-icons'
import { View, Text,  TouchableOpacity } from 'react-native'

interface Props {
  setReload: (x: boolean) => void
  reload: boolean
}

export default function Offline({ setReload, reload }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MaterialCommunityIcons
        name='network-strength-off'
        size={48}
        color='#272560'
      />
      <Text style={{ fontWeight: 'bold', fontSize: 26, marginBottom: 10 }}>
        Oops!
      </Text>
      <Text style={{ fontSize: 14 }}>Slow or no internet connection.</Text>
      <Text style={{ fontSize: 14 }}>
        Please check your internet settings and try again.
      </Text>


      <View style={{ marginTop: 30 }}>
        <TouchableOpacity
          onPress={() => setReload(!reload)}
          className='bg-purple-50 py-3 px-5 rounded-full'
        >
          <Text className='uppercase text-white-50'>Try Again</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
