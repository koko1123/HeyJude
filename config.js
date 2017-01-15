'use strict';

const WIT_TOKEN = process.env.WIT_TOKEN
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAAD3Gb31y9wBAErVvwmSJO3ZANogf5Cx17ypEJrgFoAGyQ2u5cuWMVoCXkY4pSC9r58mMtwMmZBXbdhqgJg1PQIP8yiV9pF94b2lLBXV0QpC2hBhp3HcmXL1xRunKe4gAMLeLBYhEhVoiEJfCsVDPg4nSALqPrQyrwTk7JgQZDZD';
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'my_voice_is_my_password_verify_me'

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
}

