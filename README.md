# DTG - 🎲 Down to Game 🎮

### App Idea: 
An app to find other people to play video games and board games with. Kind of like a dating app, but for nerds. Find other people who like the same games as you, and like their profiles and then see if they also want to play games with you.

#### Unit 3's Group Project for General Assembly's SEI course. 
Need to build a fully functional CRUD app using React. \
Group Memebers: Matt Aguiluz, Hong Ngo & Suzy Roy

### Technologies Used
Server side: ES6, Node.js, Express\
Database: MongoDB Atlas\
Front end: React, React Router, HTML, CSS, Javascript\
Tools: Git, GitHub, Heroku

Deployed Link: https://dtg-downtogame.herokuapp.com/about \
Frontend Github: https://github.com/blakmagjick/Unit3-GroupProject-DTG-Frontend \
Backend Github: https://github.com/blakmagjick/Unit3-GroupProject-DTG-Backend \

## User Stories
As a user, I want to be able to log in in order to create my profile.\
As a user, I want to only be able to edit and delete my own profile.\
As a user, I want to be able to search other profiles.\
As a user, I want to be able to 'like' another user's profile so that they know that I'm interested in playing games with them.\
As a user, I want to be able to leave comments on other user's profile.\
  
## Wireframes
### Index Page/All Gamers:
![f6e6cc80-30d9-11ec-958f-ae492aa4ddd8](https://user-images.githubusercontent.com/6404196/139517942-73f191d1-a2be-4f5e-b35c-a44023e74b49.png)
 
### Show Page:
![f51d0900-30d9-11ec-8794-e79334e5ba57](https://user-images.githubusercontent.com/6404196/139517948-9d9f970e-e155-4747-a8c4-05ff00b5307c.png)

### Register/Create Profile:
![ee8e9180-30d9-11ec-9245-91648d96a94e](https://user-images.githubusercontent.com/6404196/139517982-e59dd17b-84c5-48a7-bc02-f2ec098378ca.png)
![f2baaf00-30d9-11ec-8dd2-7852377ae099](https://user-images.githubusercontent.com/6404196/139517963-04d50e29-4768-4808-8168-4e2fa789af45.png)

## Aproach Taken
- GitHub: Suzy dealt with the main GitHub repos, that Matt and Hong forked and then made pull requests to.
- Backend: Server.js filed worked on by Suzy. Controllers and Routes split between Matt & Hong.
- Frontend: Matt worked on login/logout and search function. Hong added the single user profile page and comment and like components. Suzy figured out React Router so that we could build a multi page app and put the All Gamer component together. Hong and Suzy split the CSS, Hong doing the Profile page, and Suzy working on the main page and forms. 

## Unsolved Problems
- Tried coding a the search function using a different approach than one used in project two, it doesn't work quite as we were hoping.
- Wanted to have the Like button be used only once per user, didn't get that figured out.

## MVP Goals
[x] Login functionality\
[x] User needs to be able to create a profile\
[x] Users needs to be able to search through profiles\
[x] Users can 'like' other profiles\
[x] Users can leave comments on profiles to set up gaming date\

## Stretch Goals
[ ] Chat functionality (instead of just comments on the page)\
[ ] Hover over picture, change from avatar to actual photo of user\
[ ] Board game API to easily add games to profile (instead of adding manually)\
[ ] Google Map API for user location\
[ ] Upload photo from computer functionality (for profile pics)\
[ ] Optimize for mobile viewing\
 
