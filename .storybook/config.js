import * as React from 'react';
import { configure, addDecorator } from '@storybook/react';

addDecorator(storyFn => {
  const styles = {
    backgroundColor: '#DDD',
    padding: '25px',
  };
  return (
    <div style={styles}>{storyFn()}</div>
  );
});

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.(?:js|ts|tsx)$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
