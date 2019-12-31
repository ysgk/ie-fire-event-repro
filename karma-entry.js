import 'core-js/stable'

const testsContext = require.context('./src/', true, /.*spec\.js$/)

testsContext.keys().forEach(testsContext)

// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#polyfill
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector
}
