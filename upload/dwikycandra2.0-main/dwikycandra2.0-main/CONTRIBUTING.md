# Contributing to Portfolio Website

Thank you for your interest in contributing to this portfolio website project! We welcome contributions from the community and appreciate your effort to make this project better. Whether you're fixing bugs, adding new features, improving documentation, or suggesting enhancements, your contributions are valued.

This document provides guidelines and instructions to help you contribute effectively.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Code Style Guidelines](#code-style-guidelines)
- [Commit Message Conventions](#commit-message-conventions)
- [Pull Request Process](#pull-request-process)
- [Issue Reporting Guidelines](#issue-reporting-guidelines)
- [Testing](#testing)
- [Questions and Support](#questions-and-support)

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive environment for all contributors. We pledge to make participation in our project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards

**Positive behaviors include:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

**Unacceptable behaviors include:**
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information without explicit permission
- Other conduct which could reasonably be considered inappropriate in a professional setting

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project maintainers. All complaints will be reviewed and investigated promptly and fairly.

## Getting Started

Before you begin contributing, please:

1. **Fork the repository** to your GitHub account
2. **Star the repository** if you find it useful
3. **Check existing issues** to see if your concern has already been addressed
4. **Read the documentation** to understand the project structure and architecture

## Development Setup

Follow these steps to set up your development environment:

### Prerequisites

- **Node.js**: Version 16.x or higher
- **npm**: Version 7.x or higher (comes with Node.js)
- **Git**: For version control

### Installation Steps

1. **Clone your fork** of the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio.git
   cd portfolio
   ```

2. **Add the upstream remote** to keep your fork synchronized:
   ```bash
   git remote add upstream https://github.com/dkycdr/portfolio.git
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Create a new branch** for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
   or
   ```bash
   git checkout -b fix/your-bug-fix
   ```

5. **Start the development server**:
   ```bash
   npm start
   ```
   The application will open at `http://localhost:3000`

### Keeping Your Fork Updated

Regularly sync your fork with the upstream repository:

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

## Code Style Guidelines

We follow consistent code style guidelines to maintain code quality and readability.

### JavaScript/React Standards

- **ESLint Configuration**: The project uses `react-app` ESLint configuration
- **Follow React best practices**: Use functional components and hooks
- **Component naming**: Use PascalCase for component names (e.g., `NavBar.js`, `Hero.js`)
- **File naming**: Match component file names to component names

### Code Formatting

- **Indentation**: Use 2 spaces for indentation (no tabs)
- **Semicolons**: Use semicolons at the end of statements
- **Quotes**: Use single quotes for strings in JavaScript
- **Line length**: Keep lines under 100 characters when possible
- **Trailing commas**: Use trailing commas in multi-line objects and arrays

### CSS Standards

- **File naming**: Use lowercase with hyphens for CSS files (e.g., `navbar.css`, `hero.css`)
- **Class naming**: Use kebab-case for class names
- **Organization**: Keep component-specific styles in separate CSS files
- **Comments**: Add comments for complex styling logic

### Best Practices

- **DRY Principle**: Don't Repeat Yourself - extract reusable logic into utility functions
- **Component Structure**: Keep components focused and single-purpose
- **Props Validation**: Consider adding PropTypes for component props
- **Accessibility**: Ensure all interactive elements are keyboard accessible
- **Performance**: Use React.memo() for expensive components when appropriate
- **Comments**: Write clear comments for complex logic, but prefer self-documenting code

### Running Linting

Check your code for style issues:

```bash
npm run build
```

This will run ESLint as part of the build process and report any issues.

## Commit Message Conventions

We follow conventional commit message format to maintain a clear project history.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes only
- **style**: Code style changes (formatting, missing semicolons, etc.)
- **refactor**: Code refactoring without changing functionality
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Changes to build process, dependencies, or tooling

### Examples

```
feat(navbar): add smooth scroll to navigation links

Implemented smooth scrolling behavior when clicking navigation links.
Uses native scrollIntoView with smooth behavior option.

Closes #42
```

```
fix(chatbot): resolve message display issue on mobile

Fixed overflow issue causing messages to extend beyond container
on mobile devices. Added proper text wrapping and max-width.

Fixes #38
```

```
docs(readme): update installation instructions

Added prerequisites section and clarified Node.js version requirements.
```

### Guidelines

- Use the imperative mood in the subject line ("add" not "added")
- Capitalize the first letter of the subject
- Do not end the subject line with a period
- Limit the subject line to 50 characters
- Separate subject from body with a blank line
- Wrap the body at 72 characters
- Use the body to explain what and why, not how
- Reference issues and pull requests in the footer

## Pull Request Process

### Before Submitting

1. **Test your changes**: Ensure all tests pass
   ```bash
   npm test
   ```

2. **Build the project**: Verify the build completes without errors
   ```bash
   npm run build
   ```

3. **Update documentation**: If you've changed functionality, update relevant documentation

4. **Check for conflicts**: Ensure your branch is up to date with the main branch

### Submitting a Pull Request

1. **Push your changes** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create a Pull Request** on GitHub from your fork to the main repository

3. **Fill out the PR template** with:
   - Clear description of changes
   - Related issue numbers (e.g., "Closes #42")
   - Screenshots for UI changes
   - Testing steps performed

4. **Wait for review**: Maintainers will review your PR and may request changes

### Pull Request Review Criteria

Your PR will be evaluated based on:

- **Code Quality**: Follows project code style and best practices
- **Functionality**: Changes work as intended without breaking existing features
- **Testing**: Includes appropriate tests and all tests pass
- **Documentation**: Includes necessary documentation updates
- **Commit History**: Clean, logical commit history with meaningful messages
- **Performance**: No significant negative impact on performance
- **Accessibility**: Maintains or improves accessibility standards

### After Submission

- **Respond to feedback**: Address review comments promptly
- **Make requested changes**: Push additional commits to your branch
- **Be patient**: Reviews may take time depending on maintainer availability
- **Celebrate**: Once approved and merged, your contribution is part of the project!

## Issue Reporting Guidelines

### Before Creating an Issue

1. **Search existing issues**: Check if the issue has already been reported
2. **Check documentation**: Ensure it's not a usage question covered in docs
3. **Verify the issue**: Confirm the issue exists in the latest version

### Creating a Bug Report

When reporting a bug, include:

- **Clear title**: Descriptive summary of the issue
- **Description**: Detailed explanation of the problem
- **Steps to reproduce**: Numbered steps to recreate the issue
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Screenshots**: If applicable, add screenshots
- **Environment**:
  - Browser and version
  - Operating system
  - Node.js version
  - npm version
- **Additional context**: Any other relevant information

### Feature Requests

When suggesting a feature, include:

- **Clear title**: Concise description of the feature
- **Problem statement**: What problem does this solve?
- **Proposed solution**: How should it work?
- **Alternatives considered**: Other approaches you've thought about
- **Additional context**: Mockups, examples, or references

### Issue Labels

Issues may be labeled with:

- `bug`: Something isn't working
- `enhancement`: New feature or request
- `documentation`: Documentation improvements
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention needed
- `question`: Further information requested

## Testing

### Running Tests

Run the test suite:

```bash
npm test
```

Run tests in CI mode (non-interactive):

```bash
CI=true npm test
```

### Writing Tests

- Place test files next to the components they test (e.g., `Component.test.js`)
- Use React Testing Library for component tests
- Use fast-check for property-based testing
- Focus on testing behavior, not implementation details
- Write descriptive test names that explain what is being tested

### Test Coverage

Aim for good test coverage, especially for:
- Critical business logic
- Complex components
- Utility functions
- Edge cases and error handling

## Questions and Support

If you have questions or need help:

- **Check the documentation**: Review README.md and other docs
- **Search issues**: Look for similar questions in existing issues
- **Create an issue**: Open a new issue with the `question` label
- **Contact maintainers**: Reach out via GitHub discussions or issues

## Recognition

Contributors will be recognized in the project. Thank you for helping make this project better!

---

**Happy Contributing! 🎉**

We appreciate your time and effort in contributing to this project. Every contribution, no matter how small, makes a difference.
