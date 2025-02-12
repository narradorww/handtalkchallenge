# Expo Template Suite Senior

Expo Template Suite Senior is a robust and streamlined template designed to accelerate the development of React Native applications using Expo. It integrates TypeScript for static typing, ESLint for linting, Prettier for code formatting, Jest for testing, and Husky for Git hooks, ensuring a professional and efficient development workflow.

## Features

- **TypeScript Integration**: Provides static typing to enhance code quality and maintainability.
- **ESLint Configuration**: Enforces consistent code style and identifies potential issues.
- **Prettier Setup**: Automatically formats code to maintain a uniform style.
- **Jest Testing Framework**: Facilitates unit testing to ensure code reliability.
- **Husky Git Hooks**: Implements pre-commit hooks to run linting and formatting checks before code is committed.

## Installation

To create a new project using this template, run:

```bash
npx create-expo-app --template expo-template-suite-senior my-app
```

Replace `my-app` with your desired project name.

## Usage

Navigate to your project directory and utilize the following scripts:

- **Start the development server**:
  ```bash
  yarn start
  ```
- **Launch on Android**:
  ```bash
  yarn android
  ```
- **Launch on iOS**:
  ```bash
  yarn ios
  ```
- **Launch on Web**:
  ```bash
  yarn web
  ```
- **Eject from Expo**:
  ```bash
  yarn eject
  ```
- **Run ESLint**:
  ```bash
  yarn lint
  ```
- **Fix ESLint issues**:
  ```bash
  yarn lint:fix
  ```
- **Type-check with TypeScript**:
  ```bash
  yarn type-check
  ```
- **Format code with Prettier**:
  ```bash
  yarn format
  ```
- **Run tests with Jest**:
  ```bash
  yarn test
  ```
- **Run tests in watch mode**:
  ```bash
  yarn test:watch
  ```
- **Continuous integration script** (runs linting, type-checking, and tests):
  ```bash
  yarn ci
  ```
- **Prepare Husky Git hooks**:
  ```bash
  yarn prepare
  ```

## Project Structure

The project follows a modular structure for scalability and maintainability:

- **`src/components`**: Contains reusable UI components.
- **`src/screens`**: Contains screen components corresponding to app routes.
- **`src/navigation`**: Configures navigation using React Navigation.
- **`src/theme`**: Defines theming and styling, including light and dark modes.
- **`src/utils`**: Contains utility functions and helpers.

## Testing

This template uses Jest for testing. To run tests, execute:

```bash
yarn test
```

For watch mode:

```bash
yarn test:watch
```

## Linting and Formatting

ESLint and Prettier are configured to maintain code quality and consistency. To lint your code, run:

```bash
yarn lint
```

To automatically fix linting issues:

```bash
yarn lint:fix
```

To format your code with Prettier:

```bash
yarn format
```

## Git Hooks

Husky is set up to run pre-commit hooks, ensuring that linting and formatting checks are performed before code is committed. To install Husky hooks, run:

```bash
yarn prepare
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the GPL-3.0-only License. See the [LICENSE](LICENSE) file for details.

---

_Note: This template is designed to provide a solid foundation for React Native projects using Expo, with a focus on code quality and developer productivity._

### ⚠️ Peer dependency warning

If you see dependency conflicts when installing, run:

```bash
npm install --legacy-peer-deps
```

or use:

```bash
yarn install --check-files
```
