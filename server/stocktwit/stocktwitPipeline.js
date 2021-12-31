import {getParsedStockTwits} from './stocktwitFetch.js';
import {getSentimentLabels} from '../predict/predictSentiment.js';

export const getAnalyzedStockTwitList = function() {
  let stockPromise = getParsedStockTwits();
  return new Promise(function(resolve, reject) {
    stockPromise.then(function(resultList) {
      let textList = [];
      for (let i = 0; i < resultList.length; i++) {
        textList.push(resultList[i]["text"]);
      }
      let sentimentLabelList = getSentimentLabels(textList);
      for (let i = 0; i < resultList.length; i++) {
        resultList[i]["sentiment"] = sentimentLabelList[i];
      }
      resolve(resultList);
    }, function(error) {
      reject(error);
    });
  });
}
