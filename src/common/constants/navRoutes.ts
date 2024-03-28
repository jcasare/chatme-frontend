interface NavRoutes {
  key: string;
  title: string;
  focusedIcon: string;
  unfocusedIcon?: string;
}

export const navRoutes: NavRoutes[] = [
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
];
