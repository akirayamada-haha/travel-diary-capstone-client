# Travel Diary Capstone Client
One line description of what this app is doing and who is it for
A hub for travel enthusiasts to store information and see public information stored by other users



### 1. Working Prototype
You can access a working prototype of the React app here: https://travel-diary-capstone.vercel.app/ and Node app here: https://travel-diary-capstone.herokuapp.com/



### 2. User Stories (to do now) one user story for every greybox wireframe (page specific)
(user story for each functionality)
This app is for two types of users: a visitor and a logged-in user

1--user stories
2--grey box wireframe html only
3--add css responsive and accessible to the grey box wireframes
4--reactify the grey-box wireframes using this guide here (https://github.com/mariusbanea/web-developers-toolkit/blob/master/capstone-projects/steps-to-convert-html-to-react.md)

###### Landing Page 
* as a visitor
* I want to understand what I can do with this app and view public information (or sign up, or log in)
* so I can decide if I want to use it


###### Login Page 
* As a returning register user
* I want to enter my password and username to use this app,
* So I can have access to my account.

###### Sign Up 
* As a visitor
* I want to register to use this app
* So I can create a personal account.

###### Dashboard Page 
* As a logged-in user,
* I want to be able to view all saved items and have the ability to check/un-check, edit, delete, or add an item,
* So I can decide what section I want to navigate to.

###### Add Item Page 
* As a logged-in user,
* I want to be able to enter a new keyword for a pinned map image, select (currency, language, rating, cost, type, visited), and add notes,
* So I can save my item to the dashboard.



### 3. Functionality (to do now) once sentence for every function (functions will often span multiple pages)
The app's functionality includes:
* A persistent nav-bar to navigate to home, dashboard, and log-in/log-out
* Every User has the ability to create an account 
* On the landing page, a visitor can view public information that was saved
* Each item will have the average or most common answer to each category displayed
* Public notes will be displayed under each item (if toggled to public)
* A visitor should be able to log in or register
* A user should be able to log out
* A logged in user should see a dashboard with all saved items and the ability to add an item
* Every item can be 'checked/un-checked' and will have a tag of 'Been there done that' or 'On the Bucket List'
* Selecting 'add item' will reroute to a new form 
* The 'add item' form allows the user to enter a new keyword
* A user's keyword should reroute to a google search and return a location
* A user's location search should pin a map image (https://developers.google.com/maps/documentation/embed/get-started)
* If a user's search results don't work, no places are found
* A user can select from a number of practical options to further describe the item (currency, language, grading system(1 - 5 stars), cost($, $$, $$$), type (historical, romantic, outdoor business, tourist, religious, sport, educational)
* There will be a mandatory selection for 'visited vs future plan'
* A section exists for personal notes at the bottom
* A user's searched location, map image, selections, and personal notes can be saved to a list item
* A user's personal notes can be toggled to either public or private
* Saved items can be edited and/or deleted 
* A succesful save/delete will reroute to the dashboard with the item added to the top
* Each new item added will also be added to the top of the public list on the home page
* --low priority-- A single filter dropdown to select low-to-high/high-to-low (rating, cost)
* --low priority-- A user's dashboard will have a search bar to search their own saved items by title






### 4. Technology
* Front-End: HTML5, CSS3, JavaScript ES6, React
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
* Development Environment: Heroku, DBeaver



### 5. Wireframes (to do now) on paper, one for every user story
(Example) Landing Page
:-------------------------:
![Landing Page](/github-images/wireframes/landing-page-wireframe.png)
Register Page
![Register Page](/github-images/wireframes/register-page-wireframe.png)



### 6. Front-end Structure - React Components Map (to do later)
* (Example) __Index.js__ (stateless)
    * __App.js__ (stateful)
        * __LandingPage.js__ (stateful) - gets the _"prop name"_ and the _"callback prop name"_ from the __App.js__
            * __Login.js__ (stateful) -
            * __Register.js__ (stateful) -
        * __Navbar.js__ (stateless) -



### 7. Back-end Structure - Business Objects (to do later)
* (Example) Users (database table)
    * id (auto-generated)
    * username (email validation)
    * password (at least 8 chars, at least one alpha and a special character validation)



### 8. API Documentation (to do later)
API Documentation details:
* (Example) get all users



### 9. Screenshots (to do later) one for every user story
(Example) Landing Page
:-------------------------:
![Landing Page](/github-images/screenshots/landing-page-screenshot.png)
Register Page
![Register Page](/github-images/screenshots/register-page-screenshot.png)



### 10. Development Roadmap (to do later)
This is v1.0 of the app, but future enhancements are expected to include:
* (Example) add more functionality



### 11. How to run it
Use command line to navigate into the project folder and run the following in terminal

##### Local React scripts
* To install the react project ===> npm install
* To run react (on port 3000) ===> npm start
* To run tests ===> npm run test

##### Local Node scripts
* To install the node project ===> npm install
* To migrate the database ===> npm run migrate -- 1
* To run Node server (on port 8000) ===> npm run dev
* To run tests ===> npm run test