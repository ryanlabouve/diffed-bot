const config = {};

config.github = proccess.env.github || '',
config.user = proccess.env.targetUser || 'ryanlabouve',
config.repo = proccess.env.targetRepos || '["diffed-bot"]',
config.botUser = proccess.env.botUser || 'ryanlabouvebot',
config.botPassword = proccess.env.botPassword || '',

config.pullRequestsStatus = proccess.env.pullRequestsStatus || 'open';
config.oauth2token = proccess.env.oauth2token || '';
config.filenameFilters = proccess.env.filenameFilters || '["public/dummy.txt"]';

module.exports = config;
