import { Meteor } from 'meteor/meteor';
import {getEconomicTweet} from './tweet/economicTweet.js';
import {getAnalyzedStockTwitList} from './stocktwit/stocktwitPipeline.js';
import {getTwitterSentimentDistributionJson,getStockTwitSentimentDistributionJson} from './sentimentDistributionResponse.js';


Meteor.startup(() => {
  const keywords = ['EconBizFin','MarketWatch','investindia'];
  Meteor.methods({
      getTweetList: function () {
         var result = getEconomicTweet(keywords);
         return result;
      },

      getStockTwitList: function () {
         var result = getAnalyzedStockTwitList();
         return result;
      },

      getTwitterSentiment: function() {
        var result = getTwitterSentimentDistributionJson(keywords);
        return result;
      },

      getStockTwitSentiment: function() {
        var result = getStockTwitSentimentDistributionJson();
        return result;
      }
   });
});
