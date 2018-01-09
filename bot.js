var GitHubApi = require('github'),
  debug = require('debug')('reviewbot:bot'),
  config = require('./config');

var options = {version: '3.0.0'}
if (config.github) {
  options.host = config.github;
  options.pathPrefix = "/api/v3";
}
var github = new GitHubApi(options);

/**
 * Private: Authenticate next request
 */
function _authenticate() {
  if ((!config.botUser || !config.botPassword) && !config.oauth2token) {
    throw Error('Fatal: No username/password or no Oauth2 token configured!');
  }

  if (config.oauth2token) {
    github.authenticate({
      type: 'oauth',
      token: config.oauth2token
    });
  } else {
    github.authenticate({
      type: 'basic',
      username: config.botUser,
      password: config.botPassword
    });
  }
}

function getFilesChanged() {
  const params = {
    // owner:
    // repo
    // number // pull request number
  }
  // return github.pullRequests.getFiles({ ... })
}

module.exports = {
  
}
