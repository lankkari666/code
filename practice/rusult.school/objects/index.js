const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
];

const onlineUsers = [];


for (const obj of users) {
    if (obj.status === 'online') {
        onlineUsers.push(obj);
    }
}

const usersOnlineNames = onlineUsers.map(user => user.username).join(', ');

console.log(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}.`)