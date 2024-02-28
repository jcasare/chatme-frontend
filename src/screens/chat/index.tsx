import {StyleSheet, Text, View} from 'react-native';
import {Appbar} from 'react-native-paper';
import {useNavigate, useParams} from 'react-router-native';

const Chat = () => {
  const {chatID} = useParams();
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigate('/')} />
      </Appbar.Header>
      <View style={styles.chatcontainer}>
        <Text>Chat Screen Id: {chatID}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  chatcontainer: {
    padding: 16,
  },
});
export default Chat;
