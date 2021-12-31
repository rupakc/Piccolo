import {getAnalyzedTweetList} from './tweetPipeline.js';

export const getEconomicTweet = function(keywordList) {
  let tweetPromiseList = [];
  let consolidatedResultList = [];
  for (let i = 0; i < keywordList.length; i++) {
    tweetPromiseList.push(getAnalyzedTweetList(keywordList[i]));
  }
  return new Promise(function(resolve, reject) {
    Promise.all(tweetPromiseList).then(function(resultList) {
      for (let i = 0; i < resultList.length; i++) {
        for (let j = 0; j < resultList[i].length; j++) {
          consolidatedResultList.push(resultList[i][j]);
        }
      }
      resolve(consolidatedResultList);
    }, function(error) {
        console.log(error);
        reject(error);
    });
  });
};
