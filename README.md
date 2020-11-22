Server-side template with NextJS, Express and Babel

Check:

1. For beginners: for learning purposes
2. Setup guide

---1. For beginners (Do it yourself):
This template is taken from: https://developerhandbook.com/react/getting-started-nextjs/ (without babel)Credits to developer: Jon Preece. Thanks.

1. Set up next create app (using yarn) you can change to npm

yarn create next-app
--it will ask your project name

2. Install express
   -- To run express and next tgether the json file needs to contain the two dependencies

--disadvantage: All dependencies are in one json file (backend and frontend)

use: yarn add express

3. create a folder called server (optional name)

4. create index.js and set up express (use code from server/index.js as reference)

5. Change dev :"next dev" for "node server/index.js" (it reference our server with calls our app)

6. run using yarn dev (or any other setting)

--With nodemon settings

1. Add nodemon: yarn add --dev nodemon
2. Create a nodemon.json file (add settings code)
   --understand nodemon
   a. watch = check the file server for changes
   b. exec = execute node server/index.js
   c. ext = find any extension with js
3. Update the packages.json (add nodemon in dev)
4. nodemon will connect to the json file

--With babel settings

1. Add the following dependency
   @babel/node to run babel-node
2. Create a babelrc (add babel configuration)
   --Understanding babelrc
   a. Presets: next/babel replaces the
   configuration of @babel/env and @babel/core to the environment of next
   b. Plugings: Uses the babel-preset -stage-0 to add javascript features
   Note: More details of how it works can be found here: https://nextjs.org/docs/advanced-features/customizing-babel-config


---2. Setup guide

1. Download file

git clone [FILE_NAME]
example
git clone dress-website

2. Download dependencies

cd [FILE_NAME]
yarn install or npm install
yarn dev or npm run dev
