'use strict';

const chance = require('chance')(123);
const toonAvatar = require('cartoon-avatar');
const Promise = require('bluebird');

const db = require('./db');
const { Campus, Student } = require('./db/models');

const numCampuses = 15;
const numStudents = 200;

const emails = chance.unique(chance.email, numStudents);

const planetImages = [
  'https://static.pexels.com/photos/39561/solar-flare-sun-eruption-energy-39561.jpeg',
  'http://www.freeimageslive.com/galleries/space/planets/pics/eit_sl_171.jpg',
  'http://www.freeimageslive.com/galleries/space/planets/pics/eit_sl_195.jpg',
  'http://www.freeimageslive.com/galleries/space/planets/pics/vg1_p20945.gif',
  'http://www.freeimageslive.com/galleries/space/planets/pics/vg2_p34558.gif',
  'http://www.freeimageslive.com/galleries/space/planets/pics/vg1_1636836.gif',
  'http://www.freeimageslive.com/galleries/space/planets/pics/vg2_p23880c.gif'
];

const randomImage = imagesArray => {
  const index = Math.floor(Math.random() * imagesArray.length);
  return imagesArray[index];
};

function doTimes(n, fn) {
  const results = [];
  while (n--) {
    results.push(fn());
  }
  return results;
}

function randPhoto(gender) {
  gender = gender.toLowerCase();
  const id = chance.natural({
    min: 1,
    max: gender === 'female' ? 114 : 129
  });
  return toonAvatar.generate_avatar({ gender: gender, id: id });
}

function randStudent() {
  const gender = chance.gender();

  return Student.create({
    name: [chance.first({ gender: gender }), chance.last()].join(' '),
    photo: randPhoto(gender),
    email: emails.pop(),
  });
}

function randCampusName() {
  const numWords = chance.natural({
    min: 1,
    max: 2
  });
  return chance.sentence({ words: numWords })
    .replace(/\b\w/g, function (m) {
      return m.toUpperCase();
    })
    .slice(0, -1);
}

function randCampus() {
  return Campus.build({
    name: randCampusName(),
    image: randomImage(planetImages),
  });
}

function generateStudents() {
  const students = doTimes(numStudents, randStudent);

  students.push(Student.create({
    name: 'Zeke Nierenberg',
    photo: 'http://learndotresources.s3.amazonaws.com/workshop/55e5c92fe859dc0300619bc8/zeke-astronaut.png',
    email: 'zeke@zeke.zeke',
  }));

  students.push(Student.create({
    name: 'Omri Bernstein',
    photo: 'http://learndotresources.s3.amazonaws.com/workshop/55e5c92fe859dc0300619bc8/sloth.jpg',
    email: 'omri@zeke.zeke',
  }));

  return students;
}

function generateCampuses() {
  return doTimes(numCampuses, function () {
    return randCampus();
  });
}

const createStudents = () => {
  return Promise.map(generateStudents(), student => student.save());
};

const setCampuses = (createdStudents, createdCampuses) => {
  return Promise.map(createdStudents, student => student.setCampus(chance.natural({ min: 1, max: 10 }), { save: true }));
};

function createCampuses() {
  return Promise.map(generateCampuses(), function (campus) {
    return campus.save();
  });
}

function seed() {
  return Promise.all([createStudents(), createCampuses()])
    .then(results => setCampuses(...results));
}

console.log('Syncing database');

db.sync({ force: true })
  .then(function () {
    console.log('Seeding database');
    return seed();
  })
  .then(function () {
    console.log('Seeding successful');
  }, function (err) {
    console.error('Error while seeding');
    console.error(err.stack);
  })
  .finally(function () {
    db.close();
    return null;
  });
