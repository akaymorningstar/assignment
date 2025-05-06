# Assignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

=============================================================================================================================

//My instructions and details from here

###Component Interaction Flow

==> SearchComponent:

        Role: Accepts user input for search queries.
        Interaction: Emits the search query to its parent component using @Output() and EventEmitter.

==> AppComponent:

        Role: Acts as a mediator between SearchComponent and SearchResultsComponent.
        Interaction: Receives the search query from SearchComponent and passes it to SearchResultsComponent.

==> SearchResultsComponent:

        Role: Displays the filtered list of users based on the search query.
        Interaction: Fetches data from UserService and filters it according to the query received from AppComponent.

==> UserService:

        Role: Handles HTTP requests to the backend API (json-server).
        Interaction: Provides methods to fetch user data and supports filtering based on search criteria.


+-------------------+       +-------------------+       +-----------------------+
|  SearchComponent  |-----> |    AppComponent   |-----> | SearchResultsComponent |
+-------------------+       +-------------------+       +-----------------------+
        |                         |                            |
        v                         v                            v
+-------------------+       +-------------------+       +-----------------------+
| UserService       |<----> |   json-server     |<----> |       Backend API      |
+-------------------+       +-------------------+       +-----------------------+


# User Search Application

This project demonstrates a clean architecture-based user search feature.

## Features
- Search users by name.
- Display results in a clean, responsive table.
- JSON Server simulates a backend API.

## Design Decisions

- **SOLID Principles**:
  - *Single Responsibility*: Services handle data logic, components handle UI.
  - *Open/Closed*: Components can be extended with new fields or filters without modification.
  - *Dependency Inversion*: Service is injected via Angular's DI.
- **Scalability**: Component-based structure allows for modular growth.
- **Separation of Concerns**: Business logic and UI are kept separate.

## Installation

```bash
npm install
npm run json-server
ng serve


=======================================================================================================================================


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


