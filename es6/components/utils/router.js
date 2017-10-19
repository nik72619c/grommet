import { PropTypes } from 'react-desc';

export var ROUTER_PROPS = {
  path: PropTypes.string.description('Indicates the path to be used for react-router link.').isRequired,
  method: PropTypes.oneOf(['push', 'replace']).description('Indicates whether the browser history should be appended to or replaced.').defaultProp('push')
};

export default { ROUTER_PROPS: ROUTER_PROPS };