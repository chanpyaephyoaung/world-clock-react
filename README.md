# Live World Clock

![Clock components](./img/world-clock-banner.jpg)

## About

An aethetic live world clock designed to display accurate time across differeent time zones seamlessly. Built with modern web technologies such as React and SCSS, this project aims to provide a visually appealing and highly functional tool for users to keep track of time in various parts of the world.

## Table of Contents

-  [Features](#features)
-  [Installation](#installation)
-  [Project Structure](#project-structure)
-  [Acknowledgements](#contributing)

## Features

-  **Aesthetic Live World Clock:** Built to display accurate time across different time zones.
-  **Custom Clock Themes:** Designed using Adobe Photoshop for a visually appealing experience.
-  **Smooth Animations:** Implemented with SCSS for seamless and engaging transitions.
-  **Automatic Time Zone Detection:** Utilizes REST API and Geolocation API to connect to the correct time zone and display accurate local time upon start or when changing time zones.

![Demo Gif](./img/demo-gif.gif)

## Installation

1. Clone the Repository

   ```bash
   git clone [repository_url]
   ```

2. Add Environment Variables

   Refer to the `template.env` file provided in the repository. Add your own environment variables based on the template using the provided
   [GeoCode API](https://rapidapi.com/Noggle/api/reverse-geocoding-and-geolocation-service/playground/apiendpoint_13d32d7f-b167-4024-b83c-5a5ef2affe2c) and [TimeZoneDB API](https://timezonedb.com)

3. Install Dependencies

   ```bash
   npm install
   ```

4. Run the Application

   After installing all dependencies, you can start the application by running:

   ```bash
   npm run dev
   ```

   This will start the application in your default web browser.

## Project Structure

```plaintext
├── src/assets/              # Images used for the game
├── src/components/          # JSX files for all components
├── src/data/                # JavaScript files for theme data
├── src/scss/                # SCSS files for styling components, layouts and animations
├── src/store/               # JavaScript files for contexts
├── src/utils/               # JavaScript files for utils functions
├── index.html               # Main HTML file
├── App.js                   # Entry point for the application
├── template.env             # Template for env variables required to run the application
└── README.md                # Project documentation
```

## Acknowledgements

### Dependencies

-  **react:** ^18.2.0
-  **react-dom:** ^18.2.0
-  **react-icons:** ^4.8.0

### DevDependencies

-  **@types/react:** ^18.0.28
-  **@types/react-dom:** ^18.0.11
-  **@vitejs/plugin-react:** ^4.0.0
-  **eslint:** ^8.38.0
-  **eslint-plugin-react:** ^7.32.2
-  **eslint-plugin-react-hooks:** ^4.6.0
-  **eslint-plugin-react-refresh:** ^0.3.4
-  **sass:** ^1.62.1
-  **vite:** ^4.3.2
