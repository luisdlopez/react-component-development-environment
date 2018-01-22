
# Component development environment
Develop react components using TypeScript and Storybook.

### Developing
Components are developed using StoryBook.
You can run either `npm start` or `npm run build:storybook` to start the project.
To create stories, follow the instructions in the [storybook website](https://storybook.js.org/basics/guide-react/).

### Building
There are 2 building scripts included
- `npm run build` : It will compile all TypeScript code into a `compiled` folder, and will run 3 different build scripts for distribution (`dist` folder), es modules (`es` folder) and npm modules (`lib` folder). `Every component exported on the ./src/index.ts file will be compiled and built for exporting`. This build process is the same found on the React Bootstrap project.
- `npm run build:storybook` : It will create a `storybook-static` folder that can be deployed to a server to dislay all components built

### Testing
Scripts:

- `npm test`
- `npm run test:watch`
- `npm run test:coverage`

For guidelines on how to test components and what to (and not to) test, please read the following article:

https://medium.freecodecamp.org/the-right-way-to-test-react-components-548a4736ab22

This project uses Jest as the main testing framework and Enzyme for validating React component's outputs. 
- Jest's main website: http://airbnb.io/enzyme/
- Jest's Expect api: https://facebook.github.io/jest/docs/en/expect.html
- Jest's Mock api: https://facebook.github.io/jest/docs/en/mock-function-api.html
- Enzyme's main website: http://airbnb.io/enzyme/
- Enzyme's api (for shallow rendering): http://airbnb.io/enzyme/docs/api/shallow.html
