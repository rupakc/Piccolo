import stock from 'stocktwits';
import {parseStockTwit} from '../parse/parser.js';


export const getParsedStockTwits = function() {
  return new Promise(function(resolve, reject) {
    stock.get('streams/user/StockTwits', function (err, res) {
      if(err) {
        reject(err);
      } else {
        let parsedJsonList = parseStockTwit(res.body);
        resolve(parsedJsonList);
      }
    });
  });
}
