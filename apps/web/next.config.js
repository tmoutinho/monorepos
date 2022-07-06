const withTM = require("next-transpile-modules")(["design"]);

module.exports = withTM({
  reactStrictMode: true,
});
