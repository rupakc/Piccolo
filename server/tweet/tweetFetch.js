import twitter_config from "../config/keys.js";
import Twit from 'twit';
import {parseTweet} from "../parse/parser.js";

let twitter_keys = twitter_config.twitter_keys;

export const getTweet = function(search_term) {
    var tweetClient = new Twit({
      consumer_key: twitter_keys.consumer_key, // API key
      consumer_secret: twitter_keys.consumer_secret, // API secret
      access_token: twitter_keys.access_token,
      access_token_secret: twitter_keys.access_token_secret
    });

    return new Promise(function(resolve, reject) {
        tweetClient.get('search/tweets',
        {
          q: search_term + ' since:2011-11-11',
          count: 10
        },
        function(err, data, response) {
          if (err) {
            reject(err);
          }
          resolve(parseTweet(data));
        }
       );
    });
}
