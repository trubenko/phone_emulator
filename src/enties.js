let _ = require('lodash');
let faker = require('faker');
let mongodb = require('mongodb');
let Contact = require('../Models/Contact');

const MIN_CONTACTS = 10;
const CONTACTS_TO_ADD = 100;

const db = new mongodb.Db('phone_test', new mongodb.Server('localhost', 27017));

let contactsCollection;
db.open()
    .then(() => {
        contactsCollection = db.collection('contacts');
        return contactsCollection.count({});
    })
    .then(count => {
        if (count < MIN_CONTACTS) {
            const contacts = _.times(CONTACTS_TO_ADD, () => createContact());

            contactsCollection.insertMany(contacts);
        }
    })
    .catch(e => console.log(e));


function createContact() {
    return {
        name: faker.name.findName(),
        surname: faker.name.lastName(),
        // phone: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        age: randomBetween(20, 40)
    }
}



function randomEntry(array) {
    return array[~~(Math.random() * array.length)];
}

function randomBetween(min, max) {
    return ~~(Math.random() * (max - min)) + min;
}
