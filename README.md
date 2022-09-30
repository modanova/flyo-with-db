# alex-abby-manoela-suraj-database

A music sharing app where you can share your favourite songs for your friends!

Have a look and post at [music-app](https://music-list-fac.herokuapp.com/)

## Setup

Make sure you have Git and Node (v18) installed.

1. Clone this repo and cd into the directory

2. Run `npm install` to install all the dependencies

3. Run `npm run dev` to start the server. Run `npm run dev-win` if using Windows.

4. Run `npm run seed` to create the database. Run `npm run seed-win` if using Windows.

This uses the nodemon library to auto-restart the server when you save changes.

## Test

Testing in windows:
```js
    SET DB_FILE=test.sqlite & node -r ./src/database/seed.js --no-warnings --test
```

Test All:
```js
npm run test
    DB_FILE=test.sqlite node -r ./src/database/seed.js --no-warnings --test
```

Test 1:
```js
npm run test:1
    DB_FILE=test.sqlite node -r ./src/database/seed.js --no-warnings test/one.test.js
```

Test 2:
```js
npm run test:2
    DB_FILE=test.sqlite node -r ./src/database/seed.js --no-warnings test/two.test.js
```

Test 3:
```js
npm run test:3
    DB_FILE=test.sqlite node -r ./src/database/seed.js --no-warnings test/three.test.js
```

Test 4:
```js
npm run test:4
    DB_FILE=test.sqlite node -r ./src/database/seed.js --no-warnings test/four.test.js
```

## User stories

### Core

- [x] As a friendly user I want to post a song that I like for anyone to see
- [x] As a curious user I want to see other people's favourite songs they posted about

Stretch goal: 
- [ ] As a selfish user, I want to filter by user so I can see a collection of one person's favourite songs
- [ ] As an organised user, I want to sort all posted songs by rating

## Schema

Our database contains two tables.
1. Users - contains the usernames of everyone who has posted their favourite song so far
2. Music - a list of all songs posted

The two tables follow the schema as shown below

![image](https://user-images.githubusercontent.com/78558945/193077628-b7e4489c-8c2a-46a1-8547-8eb9942fc80e.png)

Example database:

![image](https://user-images.githubusercontent.com/78558945/193078912-c04de113-cd6e-437f-a480-4ab356d8a250.png)

![image](https://user-images.githubusercontent.com/78558945/193079057-31f81d05-375e-43e7-920f-2603597333fd.png)

## Acceptance Criteria

- [x] A form for users to submit data
- [x] A page showing all the data
- [x] Semantic form elements with correctly associated labels
- [x] A SQLite database
- [x] A schema describing your database in your README
- [x] Tests for server routes and database access
- [ ] Not process user input as SQL commands
- [x] Hidden environment variables (i.e. not on GitHub)

## Stretch criteria

- [ ] A way to view filtered/sorted data, instead of just all of it
    GitHub Actions CI setup to run your tests when you push
![Screenshot_2022-09-27_at_16 45 49](https://user-images.githubusercontent.com/88027905/192761083-d29473af-0af7-4dcf-9035-ab5282ad05e2.png)

