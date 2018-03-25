![Homepage](https://raw.githubusercontent.com/abohannon/spark-poll/develop/screenshots/landing-page.png) 

# Spark Poll
> Responsive, lightweight and easy-to-use polling app

Spark Poll is a simple polling app that lets you quickly and easily create polls, share them with your friends, and view their results.


## Stack
React, Redux, Node/Express, MongoDB, Passport JS, JWT for authentication, Chart.js for visualizing poll results, Radium for styling
and media queries, and Material UI


## Installing / Getting started

To get up and running:

Client:

```shell
cd spark-poll
cd client
npm install
```

Server:

```shell
cd spark-poll
cd server
npm install
npm run dev
```

This will start the Node server and connect to MongoDB on localhost:5000. It will also launch the client on localhost:3000

To successfully launch the app, you will need to connect to a db. I suggest creating a free mLab account and creating a quick 
mongoDB instance. You can do that here https://mlab.com/. 

See below on creating a dev.js file.


## Developing

To install:

```shell
https://github.com/abohannon/spark-poll.git
cd spark-poll/
npm install
```

In order to successfully launch and develop the app, you will need the following in a dev.js file in the server/config dir:

```
module.exports = {
  MONGODB_URI: [YOUR DB URI FROM MLAB],
  JWT_SECRET: [YOUR RANDOM JWT SECRET KEY],
};
```
Relevant links:

* mLab - https://mlab.com/
* JWT key generator - https://mkjwk.org/


### Building

To build the project, change into the client directory and run npm run build.

```shell
cd client
npm run build
```
React build script will run and save assets in the client/build directory.


### Testing

Currently no server-side testing has been implemented. This is something for future versions.


## Features

* User can quickly create simple polls
* Each poll lives at a unique URL and can be shared with friends
* All polls are public by default
* Only a user can delete their polls, but all users can view other users' polls
* After a poll is taken, the results are immediately visualized
* App is responsive and can be used on mobile devices

![Dashboard - New User](https://github.com/abohannon/spark-poll/blob/develop/screenshots/dashboard-new-user.png?raw=true) 

![Create Poll](https://github.com/abohannon/spark-poll/blob/develop/screenshots/create-poll-form.png?raw=true) 

![Dashboard - With Polls](https://github.com/abohannon/spark-poll/blob/develop/screenshots/dashboard-w-polls.png?raw=true) 

![Public Poll](https://github.com/abohannon/spark-poll/blob/develop/screenshots/poll-public.png?raw=true) 

![Poll Results](https://github.com/abohannon/spark-poll/blob/develop/screenshots/poll-results2.png?raw=true) 

![Landing Page - Poll Results](https://github.com/abohannon/spark-poll/blob/develop/screenshots/landing-page-latest-polls.png?raw=true)

More screenshots here: https://www.behance.net/gallery/62845267/Spark-Poll-ReactRedux-App


## Future Considerations and Open Thoughts

This project was made for fun, and though I attempted to be as thorough as possible, I'm sure there are things I overlooked that will need to
be corrected for future versions. If you find something and feel compelled, let me know in the issues!

Currently the onboarding process is pretty barebones. I'd like to add two-factor authentication for added security in the future.

I'd also like to add tagging so the polls can be searched and lazy-loading for the poll display so only X number of polls are
loaded/displayed at a time.

I'm also not 100% satisfied with the mobile layout. It's functional, but I think there is an opportunity to change the layout
and design for a more native feel.

No unit testing has been implemented. This is something that will need to be added in future versions. 

There are also opportunities for refactoring. I used this project as an opportunity to practice breaking my apps into more modular components.
This gave me a lot of flexibility in terms of what props I passed and how I wanted the components to behave.
However, as the app grew, so did some of these common components and a couple (the button in particular) became quite verbose and
need to be refactored.


## Contributing

If you find this project helpful as a starting point for your own project, please feel free to clone. If you are interested in submitting improvements, PRs are welcome!


## Links

- Repository: https://github.com/abohannon/spark-poll
- Issue tracker: https://github.com/abohannon/spark-poll/issues
  - In case of sensitive bugs like security vulnerabilities, please contact
    abo46n2@gmail.com directly instead of using issue tracker. We value your effort
    to improve the security and privacy of this project!
    

## Licensing

The code in this project is licensed under MIT license.
