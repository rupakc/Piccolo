import {getTweet} from './tweetFetch.js';
import {getSentimentLabels} from '../predict/predictSentiment.js';

export const getAnalyzedTweetList = function(search_term) {
  let tweetPromise = getTweet(search_term);
  return new Promise(function(resolve, reject) {
    tweetPromise.then(function(resultList) {
      let textList = [];
      for (let i = 0; i < resultList.length; i++) {
        textList.push(resultList[i]["text"]);
      }
      let sentimentLabelList = getSentimentLabels(textList);
      for (let i = 0 ; i < resultList.length; i++) {
        resultList[i]["sentiment"] = sentimentLabelList[i];
      }
      resolve(resultList);
    }, function(error) {
      reject(error);
    });
  });
}
