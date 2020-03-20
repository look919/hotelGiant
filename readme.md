## Hotel Giant

You can check project online by clicking that [link](https://hotelgiant.herokuapp.com/).

MERN Stack hotel application which provides quick overview of servies that owner company sells, booking section and also special page designed for current guests on which they can get summary of services they already bought. Application is still in development, I plan to add online payments and expand admin and guest panel possibilities.

#### Running

To run this application, you need to clone the repository, then install both, client and server packages using npm. For some funcionalities like database, authentication or mapbox u need to create config.env file in the root of the project. There is a list of dependencies you should create in that file to get access to all basic functionalities(without mapbox and nodemailer):

- NODE_ENV = development
- PORT = 5000
- DATABASE = Link to database
- DATABASE_PASSWORD = DB password
- JWT_SECRET = examplesecret
- JWT_EXPIRES_IN = 5d
- JWT_COOKIE_EXPIRES_IN = 2

##### To run the app use `npm run dev`

#### Things I learned during that project

Thats my first MERN stack application and its the biggest one so far. It gave me plenty of fun even though connecting my backend and frontend knowledge in fully functional app by my own was quite hard.
List of things i learned during development:

- Connecting Node.js with React
- Working with MongoDB & Mongoose
- Authentication with JWT
- Error Handling with Node.js
- Nodemailer and pug mail templates
- Mapbox
- Real Redux state management
- React-Reveal, React-Responsive and many others
