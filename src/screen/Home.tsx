import { BackHandler } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Netinfo from '@react-native-community/netinfo'
import { WebView } from 'react-native-webview'
import Offline from '../components/Offline'
import Spinner from 'react-native-loading-spinner-overlay'

export default function Home() {
  const [isConnected, setIsConnected] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [source, setSource] = useState<object>({
    html: `<html><body><h1>Loading...</h1></body></html>`,
  })
  const [reload, setReload] = useState(false)

  useEffect(() => {
    Netinfo.fetch().then((state) => {
      setIsConnected(state.isConnected!)
    })
  }, [reload])

  const html = `
  <div style='display:flex; justify-content:center; align-items:center; height:100%; color:red; margin-left:100; margin-right:100; font-size: 20; text-align:center;'>
  <h1>Motherland is updating right now so you won't be able to access the app</h1>
  </div>
  `

  useEffect(() => {
    if (isConnected) {
      setIsLoading(false)
      setSource({ uri: 'https://himilobooking.com' })
    } else {
      setIsLoading(true)
      setSource({ html: html })
    }
  }, [isConnected])

  const onLoadStart = ({
    nativeEvent,
  }: {
    nativeEvent: { loading: boolean }
  }) => {
    setIsLoading(nativeEvent.loading)
  }
  const onLoadEnd = ({
    nativeEvent,
  }: {
    nativeEvent: { loading: boolean }
  }) => {
    setIsLoading(nativeEvent.loading)
  }

  const [back, setBack] = useState(false)
  const webViewRef = useRef()

  const onNavigationStateChange = (state: { canGoBack: boolean }) => {
    setBack(state.canGoBack)
  }

  const onBackPress = () => {
    // @ts-ignore
    webViewRef.current?.goBack()
    return true
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onBackPress)
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress)
    }
  }, [back])

  return (
    <>
      <Spinner visible={isLoading} />

      {isConnected ? (
        // @ts-ignore
        <WebView
          source={source}
          onLoadStart={onLoadStart}
          onLoadEnd={onLoadEnd}
          onNavigationStateChange={onNavigationStateChange}
          ref={webViewRef}
        />
      ) : (
        <Offline setReload={setReload} reload={reload} />
      )}
    </>
  )
}
