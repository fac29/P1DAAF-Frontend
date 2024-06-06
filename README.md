# P1DAAF-Frontend

Welcome to our Quiz App! Built with typescript and react and deployed on github pages.

## Table of Contents

- [Functionality](#functionality)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Functionality

- Take a quiz based on category and difficulty level
- View all questions
- Add a question
- Edit a question
- Delete a question
- Cypress testing

## Installation

You will need the backend running to test this locally on your machine.

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/fac29/P1DAAF-Frontend.git
    cd P1DAAF-Frontend
    ```

2.  **Install dependencies:**

    ```sh
    npm install
    ```

3.  **Set up environment variables:**

    Create a `.env.development` file in the root directory and add your configuration settings.

    ```env
    VITE_API_URL=http://localhost:3000
    ```

4.  **Run the application:**

    ```sh
    npm start
    ```

### Testing (Cypress):

End to end testing is included. To run cypress testing please use the command:

```sh
npx cypress open
```
