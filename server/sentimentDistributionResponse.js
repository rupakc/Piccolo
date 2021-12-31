import {getEconomicTweet} from './tweet/economicTweet.js';
import {getAnalyzedStockTwitList} from './stocktwit/stocktwitPipeline.js';


getSentimentDistributionJson = function(resultJsonList) {
  let sentimentJson = {'Positive': 0, 'Negative': 0, 'Neutral': 0};
  for (let i = 0; i < resultJsonList.length; i++) {
    if (resultJsonList[i]["sentiment"] == 'Positive') {
      sentimentJson['Positive'] = sentimentJson['Positive'] + 1;
    } else if (resultJsonList[i]["sentiment"] == 'Negative') {
      sentimentJson['Negative'] = sentimentJson['Negative'] + 1;
    } else if (resultJsonList[i]["sentiment"] == 'Neutral') {
      sentimentJson['Neutral'] = sentimentJson['Neutral'] + 1;
    }
  }
  return sentimentJson;
}

export const getTwitterSentimentDistributionJson = function(keywordList) {
  var tweetPromise = getEconomicTweet(keywordList);
  return new Promise(function(resolve, reject) {
    tweetPromise.then(function(resultList) {
      let sentimentJson = getSentimentDistributionJson(resultList);
      let responseJson = {};
      responseJson["titleText"] = "Twitter Sentiment Distribution";
      responseJson["subtitleText"] = "Source: twitter.com";
      responseJson["xAxisCategories"] = Object.keys(sentimentJson);
      responseJson["yAxisTitleText"] = "Number of Tweets";
      responseJson["seriesData"] = [{"name": "Twitter", "data": Object.values(sentimentJson)}];
      resolve(responseJson);
    }, function(error) {
      reject(error);
    });
  });
}

export const getStockTwitSentimentDistributionJson = function() {
  let stockPromise = getAnalyzedStockTwitList();
  return new Promise(function(resolve, reject) {
    stockPromise.then(function(resultList) {
      let sentimentJson = getSentimentDistributionJson(resultList);
      let responseJson = {};
      responseJson["titleText"] = "Stocktwits Sentiment Distribution";
      responseJson["subtitleText"] = "Source: stocktwits.com";
      responseJson["xAxisCategories"] = Object.keys(sentimentJson);
      responseJson["yAxisTitleText"] = "Number of Stock Tweets";
      responseJson["seriesData"] = [{"name": "Stock Twits", "data": Object.values(sentimentJson)}];
      resolve(responseJson);
    }, function(error) {
      reject(error);
    });
});
}
