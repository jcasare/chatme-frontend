import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Avatar} from 'react-native-paper';
import {useNavigate} from 'react-router-native';

const ChatScreen = () => {
  const navigate = useNavigate();
  const friends = [
    {id: 1, name: 'John Doe', image: 'https://via.placeholder.com/150'},
    {id: 2, name: 'Emmanuel Mensah', image: 'https://via.placeholder.com/150'},
    {id: 3, name: 'John Smith', image: 'https://via.placeholder.com/150'},
    {id: 4, name: 'John Jones', image: 'https://via.placeholder.com/150'},
  ];
  return (
    <View style={styles.container}>
      {friends.map(friend => (
        <Pressable
          key={friend.id}
          onPress={() => navigate(`/chat/${friend.id}`)}>
          <View style={styles.friend}>
            <Avatar.Image
              size={72}
              style={styles.avi}
              source={{
                uri: `https://randomuser.me/api/portraits/men/${friend.id}.jpg`,
              }}
            />
            <View>
              <Text>{friend.name}</Text>
              <Text>This was the last message</Text>
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  friend: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avi: {
    marginRight: 8,
  },
});
export default ChatScreen;
