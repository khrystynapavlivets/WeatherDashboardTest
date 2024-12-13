# WeatherDashboardTest

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.4.


## Technologies Used

- Angular: a platform for building single-page client applications using HTML and TypeScript.
- Bootstrap: framework for building responsive websites.
- Angular Material: Angular UI component library for opening a modal window.
- Node.js: for building server-side applications.
- OpenWeatherMap API: used for fetching weather data.

## Features

- Search for Weather: users can search for the weather of any city.
- Display Weather Data: for the input city, the temperature, weather condition, and date are displayed.
- Save Cities: saves the weather data of cities in `localStorage` for later use.
- Dialog Box: a success dialog appears when data is fetched successfully.

## API Key Configuration


### Steps to Add Your API Key

1. **Sign Up for an API Key**:

   - Go to [OpenWeatherMap](https://openweathermap.org/api).
   - Generate an API key from the **API Keys** section.

2. **Add Your API Key to the Project**:

   - In the `src/environments/environment.ts` file, replace the existing `apiKey` value with your own key:
   
   ```typescript
   export const environment = {
       production: false,
       apiUrl: 'https://api.openweathermap.org/data/2.5/weather',
       apiKey: 'api-key'
   };

### WeatherService

The WeatherService is responsible for fetching weather data from the OpenWeatherMap API.
This service is defined in the `app/shared/services/weather.service.ts` file.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
