import 'core-js/stable'

const testsContext = require.context('./src/', true, /.*spec\.js$/)

testsContext.keys().forEach(testsContext)
