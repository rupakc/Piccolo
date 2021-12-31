
export const parseTweet = function(tweetResponseJson) {
  if (tweetResponseJson == null || tweetResponseJson == undefined) {
    return [];
  }
  let statusJsonList = tweetResponseJson["statuses"]
  if (statusJsonList == undefined) {
    return [];
  }
  let parsedJsonList = [];
  for(let i = 0; i < statusJsonList.length; i++) {
    parsedJsonList.push({"created": statusJsonList[i]["created_at"],
                         "text": statusJsonList[i]["text"],
                         "source": statusJsonList[i]["source"],
                         "retweet_count": statusJsonList[i]["retweet_count"],
                         "favorite_count": statusJsonList[i]["favorite_count"]});
  }

  return parsedJsonList;
}

export const parseStockTwit = function(stockResponseJson) {
  if (stockResponseJson == null || stockResponseJson == undefined) {
    return [];
  }
  let messageJsonList = stockResponseJson["messages"];
  let parsedMessageJsonList = [];
  for (let i = 0; i < messageJsonList.length; i++) {
    parsedMessageJsonList.push({"text": messageJsonList[i]["body"],
                                "created_at": messageJsonList[i]["created_at"]});
  }
  return parsedMessageJsonList;
}
