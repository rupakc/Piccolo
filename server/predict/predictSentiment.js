import Sentiment from 'sentiment';
var sentimentClassifier = new Sentiment();

export const getSentimentLabels = function(textList) {
  var sentimentLabels = [];
  for(var i = 0; i < textList.length; i++) {
    var resultJson = sentimentClassifier.analyze(textList[i]);
    var resultScore = resultJson["score"];
    if (resultScore == 0) {
      sentimentLabels.push("Neutral");
    } else if (resultScore > 0) {
      sentimentLabels.push("Positive");
    } else {
      sentimentLabels.push("Negative");
    }
  }
  return sentimentLabels;
}
