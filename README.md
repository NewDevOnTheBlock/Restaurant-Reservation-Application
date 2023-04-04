<br/>
<p align="center">
  <a href="https://github.com/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/Restaurant-Reservation-Application">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Restaurant Reservation Application</h3>

  <p align="center">
    A great way to manage those last minute reservation changes!
    <br/>
    <br/>
    <a href="https://github.com/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/Restaurant-Reservation-Application"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
    <a href="https://github.com/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/Restaurant-Reservation-Application">View Demo</a>
    .
    <a href="https://github.com/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/Restaurant-Reservation-Application/issues">Report Bug</a>
    .
    <a href="https://github.com/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/Restaurant-Reservation-Application/issues">Request Feature</a>
  </p>
</p>

![Downloads](https://img.shields.io/github/downloads/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/Restaurant-Reservation-Application/total) ![Contributors](https://img.shields.io/github/contributors/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/Restaurant-Reservation-Application?color=dark-green) ![Issues](https://img.shields.io/github/issues/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/Restaurant-Reservation-Application) ![License](https://img.shields.io/github/license/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/Restaurant-Reservation-Application) 

## Table Of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Authors](#authors)
* [Acknowledgements](#acknowledgements)

## About The Project

![Screen Shot](https://restaurant-reservations-front.onrender.com)

You can view a deployed version of this app at: 
https://restaurant-reservations-front.onrender.com

Note: Render can take a minute to show relevant information retrieved from the DB. This is a common issue with deployment on Render, but rest assured that the app is functioning and does indeed work properly. If all else fails, try either refreshing the page, or loading in from a new window.

This project is a Full-Stack Application. It's purpose is to allow a restaurant manager to make a reservation system that can be updated in real time. Each CRUD request that is made, must pass through a middleware pipeline, in order to be successfully sent to the database. 

This app allows you to display a list of reservations for the current/previous/next days, and retrieves info based on the date. It shows a list of available tables within the restaurant that can be assigned to a group. You can add, edit, and delete a reservation/table. It also allows you to search for a user by phone number and view their reservation information. Deletion of a reservation can be either the closing of a finished reservation, or the cancellation of an unused one.

Information submitted to the database must adhere to certain basic rules such as:
- Cannot schedule on a day restaurant is closed.
- Cannot schedule on a time the restaurant is closed.
- Must have valid time/date format for submission.
- Two groups cannot be seated at the same table

This application was made using a relational database and a RESTful API that utilized Express.js for API development and Knex.js for DB querying on API endpoint access. 

Any CRUD operation that is not allowed on a certain API endpoint will be met with a "Method not allowed" error message and a status of 405.

## Built With

Front-End Technologies Used:
- HTML/CSS/JavaScript
- React.js
- React-Router-Dom
- Bootstrap (style)

Back-End Technologies Used:
- PostgreSQL (Relational Database)
- Express.js (RESTful API development)
- Knex.js (database querying)
- Cors
- dotenv
- path
- lodash
- nodemon (server used for development)

## Getting Started

To get started locally, you can fork the repo or download the .zip (be sure to extract it!) as normal, then after you use the command line to cd your way into the directory. After doing so, a simple "npm i" is more than enough to get the project up and running. 

To run the front-end, just enter "npm run start:react"
to run the back-end, just use "npm run start:dev"

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

* npm

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo

```sh
git clone https://github.com/your_username_/Project-Name.git
```

2. Install NPM packages

```sh
npm install
```

## Usage

This project can be used by restaurant managers/staff to allow them to manage their reservation system with relative ease. It allows them to check old records, as well as new ones. They can look up reservations made for the day, next day, previous day, or any before/after. They can add new tables as the restaurant grows. Also users can change, add, delete, or cancel reservations on the fly.

As someone who worked in the restaurant business for a bit, this is honestly something that makes life for managers/waiters/hosts/whoever when it comes to organization. I personally know a few managers a system like this would have helped back in my time working in kitchens.

## Roadmap

See the [open issues](https://github.com/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/Restaurant-Reservation-Application/issues) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/Restaurant-Reservation-Application/issues/new) to discuss it, or directly create a pull request after you edit the *README.md* file with necessary changes.
* Please make sure you check your spelling and grammar.
* Create individual PR for each suggestion.
* Please also read through the [Code Of Conduct](https://github.com/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/Restaurant-Reservation-Application/blob/main/CODE_OF_CONDUCT.md) before posting your first idea as well.

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See [LICENSE](https://github.com/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/Restaurant-Reservation-Application/blob/main/LICENSE.md) for more information.

## Authors

* **Pierce DeAnda** - *Full-Stack Engineer* - [Pierce DeAnda](https://github.com/NewDevOnTheBlock/) - *Primary Contributor and Programmer*

## Acknowledgements

* [Pierce DeAnda](https://github.com/NewDevOnTheBlock/)
* [Keith Van](https://github.com/https://github.com/NVious7/)
* [MongoDB Docs](https://www.mongodb.com/)
* [React Docs](https://legacy.reactjs.org/docs/getting-started.html)
