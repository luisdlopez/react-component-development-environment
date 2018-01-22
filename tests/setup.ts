/**
 * Configuration file used by jest to setup Enzyme
 */
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
global.__DEV__ = true;
