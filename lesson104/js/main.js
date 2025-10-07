const myProfile = {
    name: 'Rafael',
    age: 22,
    city: 'Salavat',
    profession: 'CNC-Engineer',

    greet: function (name) {
        return `Hello, ${name}`
    }
};

console.log(myProfile.greet(myProfile.name))

const users = [
    {
        id: 1,
        name: 'Ainur',
        age: 30,
        isAdmin: false
    },
    {
        id: 2,
        name: 'Aigiz',
        age: 21,
        isAdmin: true
    },
    {
        id: 3,
        name: 'Airat',
        age: 26,
        isAdmin: false
    },
    {
        id: 4,
        name: 'Artur',
        age: 28,
        isAdmin: false
    },
    {
        id: 5,
        name: 'Almaz',
        age: 35,
        isAdmin: true
    }
]

let regularUsersCount = 0

for (let i = 0; i < users.length; i++) {
    if (!users[i].isAdmin) {
        regularUsersCount++
    }
}


console.log(`Количество простых пользователей: ${regularUsersCount}`)
