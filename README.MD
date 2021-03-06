# Engauge - See where your customers look first
Engauge is a web app that allows you to track where people are looking on a website. The workflow is:
  - Create a shareable link on the home page (*at this stage it MUST be a url of an image*)
    - When navigating to that link, the web app will start tracking eye movements. Click a few times to train the eye tracker (more clicks while looking at pointer = more accuracy).
  - Every recorded session can be viewed at /review. The numbers on the left refer to a particular session

![alt text](http://res.cloudinary.com/dqvlfpaev/image/upload/v1517893027/Screen_Shot_2018-02-05_at_8.53.33_pm_qxpxb9.png)

### Features
- #### New
  - Add a 'game' page to the watch route that walks users through the process of training the webcam
  - Allow tracking of web hosted images
  - View any case study (even those that have been created by other people!)
  - Validate URL & email for a new case study
  - Add back button & logo
  - Continuous integration with CI to deploy to AWS EB
- #### In Development
  - Refactor to SASS
  - Scrub through session timeline so people can view a progressive heatmap
  - Improve information that comes through on the cards in the review/watch pages (Such as watch count, title)
  - Add 'clear' button to remove heatmap layer altogether
  - Allow selecting of multiple sessions to view a merged heatmap
  - Allow uploading of links that are not images
- #### Bug Fixes In Progress
  - Stop webcam session after navigating from a 'watch' page
  - Heat map overlay loads incorrectly if the window is resized when navigating to the page

### Tech

Engauge uses a number of projects to work properly:
  - [React] front end (With React Router)
  - [Webgazer.js] for tracking eye movements
  - [Socket.io] for sending eye focus coordinates to the server
  - [Node] & [Express] for the server
  - [Mocha] & [Chai] for testing
  - [PostgreSQL] to store JSON eye history and other session data
  - [Heatmap.js] to render the heatmap layer
  - [Docker] to enable the microservice architecture
  - [AWS Elastic Beanstalk] to host containers
  - [CircleCI] to build, run tests, upload to Dockerhub & deploy to AWS
  - [Nginx] to terminate the SSL, load balance and serve static assets

### Installation

Engauge requires [Node.js](https://nodejs.org/) v6+ to run.
Engauge requires [Docker](https://www.docker.com/) & Docker Compose to run.

Clone the repo & install dependencies
```
https://github.com/stolemyusername/engauge.git
cd engauge
npm install
```
Build images and run app
```
docker-compose up --build
```

Now navigate to http://localhost:3000/. The app is running!

### Development

Want to contribute? Great!

Just make sure you right tests and then make a PR.

License
----

MIT


**Free Software - Hooray!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [React]: <https://facebook.github.io/react/>
   [Socket.io]: <https://socket.io/>
   [Heatmap.js]: <https://www.patrick-wied.at/static/heatmapjs/>
   [Webgazer.js]: <https://webgazer.cs.brown.edu/>
   [PostgreSQL]: <https://www.postgresql.org/>
   [Node]: <https://nodejs.org/>
   [Express]: <https://expressjs.com/>
   [Mocha]: <https://mochajs.org/>
   [Chai]: <http://chaijs.com/>
   [CircleCI]: <https://circleci.com/>
   [Docker]: <https://www.docker.com/>
   [AWS Elastic Beanstalk]: <https://aws.amazon.com/elasticbeanstalk>
   [Nginx]: <https://nginx.org/en>
