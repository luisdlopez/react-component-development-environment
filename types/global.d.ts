// tslint:disable

// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}

// for json files
declare module '*.json' {
  const value: any;
  export default value;
}

// for redux devtools extension
declare interface Window {
  devToolsExtension?(): (args?: any) => any;
}

declare const __DEV__: boolean;
declare const VERSION: string;
declare module 'react-dnd-test-backend';
declare module '@storybook/react';
declare module '@storybook/addon-actions';
declare module '@storybook/addon-links';
declare module '@storybook/react/demo';
