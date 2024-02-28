import {useState} from 'react';
import {
  BottomNavigation as Screens,
  PaperProvider,
  Text,
} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ChatScreen from './src/screens/chats';
import {NativeRouter, Route, Routes} from 'react-router-native';
import Chat from './src/screens/chat';
import {QueryClient, QueryClientProvider} from 'react-query';

interface NavRoutes {
  key: string;
  title: string;
  focusedIcon: string;
  unfocusedIcon?: string;
}

function App(): JSX.Element {
  const [index, setIndex] = useState(0);
  const [routes] = useState<NavRoutes[]>([
    {
      key: 'chats',
      title: 'Chats',
      focusedIcon: 'wechat',
    },
    {key: 'calls', title: 'Calls', focusedIcon: 'phone-in-talk'},
    {
      key: 'update',
      title: 'Updates',
      focusedIcon: 'progress-upload',
    },
    {key: 'people', title: 'People', focusedIcon: 'account'},
  ]);

  const renderScene = Screens.SceneMap({
    chats: () => <ChatScreen />,
    calls: () => <Text>Calls</Text>,
    people: () => <Text>Account</Text>,
    update: () => <Text>Stories</Text>,
  });
  return (
    <QueryClientProvider client={new QueryClient()}>
      <SafeAreaProvider>
        <PaperProvider>
          <Screens />
        </PaperProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
    // <SafeAreaProvider>
    //   <PaperProvider>
    //     <NativeRouter>
    //       <Routes>
    //         <Route
    //           path="/"
    //           element={
    //             <Screens
    //               navigationState={{index, routes}}
    //               onIndexChange={setIndex}
    //               renderScene={renderScene}
    //             />
    //           }
    //         />
    //         <Route path="/chat/:chatID" element={<Chat />} />
    //       </Routes>
    //     </NativeRouter>
    //   </PaperProvider>
    // </SafeAreaProvider>
  );
}

export default App;
