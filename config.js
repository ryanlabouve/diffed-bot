const config = {};

config.github = process.env.github || '',
config.user = process.env.targetUser || 'ryanlabouve',
config.repo = process.env.targetRepos || '["diffed-bot"]',
config.botUser = process.env.botUser || 'ryanlabouvebot',
config.botPassword = process.env.botPassword || '',

config.pullRequestsStatus = process.env.pullRequestsStatus || 'open';
config.oauth2token = process.env.oauth2token || '';
config.filenameFilters = process.env.filenameFilters || '["public/dummy.txt"]';

module.exports = config;
