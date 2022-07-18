# GoDaddy Repos

## App Overview

The app is written in `Typescript` and has 2 routes: one for all repositories (`/`) and one for a single repository (`/:repositoryName`). The routes are defined and mounted in `index.tsx` at the root level.

Each route is represented by a component placed in `routes` folder and makes an API call using the `useFetchData` hook. `Repositories` fetches all repositories from the API and list them with their name, avatar, and description. `Repositories` fetches the single repository and displays the data of the respository. Additionally, the latter makes an extra API call to feetch all languages of a repository.

I included an error boundary (in `Main.tsx`) to catch any errors that might happen down the DOM tree. To speed up the project, I chose to use `react-error-boundary` library to handle the error on the React DOM.

For code-style, I used Prettify with a minimal setup and included a script to run the config on all files.

<br />

## Styles

The app uses 3rd party components from Ant design system for UI elements such as the `List` component in `Respositories`.

The layout is provided by a simple wrapper, `LayoutProvider.tsx` at the root level.

I decided to use a 3rd party design system to increase the development speed of the application. Depending on the projects' needs in a real life scenario, it could have been a better choice to design and use a custom UI library for flexibility.

<br />

## Tests

The app currently has unit tests for its routes and components/views, written with `Jest` and `React-Testing-Library`. In a real life application, I would increase the coverage of unit tests as well as include end-to-end tests to simulate a user's journey through app and make sure it works as expected.

<br />

## Available Scripts

#### `npm start`: Runs the app in the development mode.

#### `npm test`: Launches the test runner in the interactive watch mode.

#### `npm run prettify`: Runs Prettier config on all files.
