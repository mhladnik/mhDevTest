# MH UI: Component Library

MH UI is a flexible, reusable component library built with TypeScript, SCSS, and React. It follows best practices to ensure ease of use, accessibility, and seamless integration into large-scale projects. The library is designed to be easily extensible while providing components with enough visual flexibility to suit various use cases.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (latest version or at least v20.9.0)
- npm (latest version or at least v10.8.0)

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/mhladnik/mhDevTest.git
cd mhDevTest
npm install
```

## Components

### Button Component

The Button component is designed for flexibility and customization. It supports different variants (filled, outline), colors (primary, secondary, custom), and can include different icons. The component also provides accessibility features and an active state for when the button is pressed.

Props:

- type: Specifies the button's behavior (button, submit, reset).
- label: The text displayed on the button (default: "Submit").
- onClick: Callback function for click events.
- trailingIcon: Custom icon displayed after the label.
- className: Optional additional CSS class for custom styling.
- disabled: Indicates disabled state, preventing interaction when true.
- setValidation: Function to update validation state.
- variant: Button style (filled or outline).
- color: Button color variant (primary, secondary, or custom).
- ariaLabel: Accessibility label for the button.
- disabled: Determines if the button is disabled (default: false).

### TextInput Component

The TextInput component supports validation with custizable error and warning messages. It works with color themes (primary, secondary), and includes an optional label. This component is ideal for forms requiring user input with real-time validation.

Props:

- label: The label displayed above the input field.
- value: The current input value.
- required: Whether the input is required (affects validation).
- color: Color variant for the input field (primary, secondary).
- onChange: Handler for updating the input value.
- setValidation: Function to update validation state.
- warningMessage: Custom warning message when input needs adjustment.
- errorMessage: Custom error message when validation fails.
- className: Optional additional CSS class for custom styling

## Styling

The components use BEM conventions and SCSS for styling. The class names are structured to allow easy customization without interfering with other libraries.

For example:

```scss
.mhuiButton {
  &__filled { ... }
  &__outline { ... }
  &__primary { ... }
  &__secondary { ... }
  &__disabled { ... }
}

.mhuiTextInput {
  &__input { ... }
  &__label { ... }
  &__warningMessage { ... }
  &__errorMessage { ... }
}
```

## Development

To run the project locally, use the following commands:

```bash
npm install
npm run dev
```

### Formatting and Linting

#### Code Formatting

To automatically format the code according to the project's style guidelines, use:

```bash
npm run format
```

This command ensures that the codebase follows a consistent style, making it easier to read and maintain.

#### Linting

To check the code for potential errors and enforce coding standards, use:

```bash
npm run lint
```

This command runs static analysis on the codebase and highlights issues such as unused variables, incorrect syntax, or violations of coding conventions.

## Running Storybook

For testing and showcasing components in isolation, use Storybook:

```bash
npm run storybook
```

This will start the Storybook environment where you can view and interact with components.

## Testing

To ensure that components work as expected and meet the quality standards, run the test suite:

```bash
npm run test
```

This command executes the unit tests for the components, validating their functionality, edge cases, and error handling.
