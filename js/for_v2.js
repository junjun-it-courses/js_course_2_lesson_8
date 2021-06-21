let users = [
    {
        email: 'test@test.com',
        firstName: 'Vladimir',
        lastName: 'Shaitan',
        nickName: 'vlad_sha',
        gender: 'male',
        age: 24,
        hasKids: false
    },
    {
        email: 'test2@test.com',
        firstName: 'Sergey',
        lastName: 'Dronov',
        nickName: 'serg_dron',
        gender: 'male',
        age: 2150,
        hasKids: false
    },
    {
        email: 'test3@test.com',
        firstName: 'Artem',
        lastName: 'Artem',
        nickName: 'artem_artem',
        gender: 'male',
        age: 18,
        hasKids: false
    },
    {
        email: 'test4@test.com',
        firstName: 'Ruslan',
        lastName: 'Ruslan',
        nickName: 'rusik_2021',
        gender: 'male',
        age: 20,
        hasKids: false
    },
    {
        email: 'test5@test.com',
        firstName: 'Ira',
        lastName: 'Solonenko',
        nickName: 'irishka',
        gender: 'female',
        age: 18,
        hasKids: false
    },
];

let ruslanKid = {
    email: 'test@test.com',
    firstName: 'Ruslan Junior',
    lastName: 'Ruslan',
    nickName: 'ruslan_junior',
    gender: 'male',
    age: 0,
    hasKids: false
};

// let arr = [];
// arr.push(ruslanKid);
// arr.push(ruslanKid);
// arr.push(ruslanKid);

// console.log( arr )


let i = 0;

while(i <= users.length - 1) {
    users[i].fullName = `${ users[i].firstName } ${ users[i].lastName }`;
    users[i].firstName === 'Artem' ? delete users[i].hasKids : null;


    if(users[i].firstName === 'Ruslan') {
        let kids = [];

        for(let c = 1; c <= 3; c++) {
            kids.push({
                email: 'test@test.com',
                firstName: 'Ruslan Junior ' + c,
                lastName: 'Ruslan',
                nickName: 'ruslan_junior',
                gender: 'male',
                age: 0,
                hasKids: false
            });
        }

        users[i].kids = kids;
    }

    i++;
}

users[3].kids[1].firstName = 'Vlad';

console.log(users[3].kids);

// console.log(users)