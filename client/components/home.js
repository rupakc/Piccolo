import { Template } from 'meteor/templating';

Template.home.events({
  'click #searchTwitter': function() {
    $('#viewContainer').html("");
    Meteor.call('getTweetList', null, function (error, result) {
      if (error) {
        console.log(error);
      }
      else {
        var viewTemplate = Template.view;
        var viewContainer = document.getElementById('viewContainer');
        Blaze.renderWithData(viewTemplate,{'responseJsonList': result},viewContainer);
      }
    }
  );
},
'click #searchStockTwit': function() {
    $('#viewContainer').html("");
    Meteor.call('getStockTwitList', null, function (error, result) {
      if (error) {
        console.log(error);
      }
      else {
        var stockViewTemplate = Template.stockview;
        var viewContainer = document.getElementById('viewContainer');
        Blaze.renderWithData(stockViewTemplate,{'responseJsonList': result},viewContainer);
      }
    }
  );
}
});
