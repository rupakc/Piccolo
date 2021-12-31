import { Template } from 'meteor/templating';

function renderHighCharts(divContainerName,dataJson) {
  Highcharts.chart(divContainerName, {
      chart: {
          type: 'column'
      },
      title: {
          text: dataJson.titleText
      },
      subtitle: {
          text: dataJson.subtitleText
      },
      xAxis: {
          categories: dataJson.xAxisCategories,
          crosshair: true
      },
      yAxis: {
          min: 0,
          title: {
              text: dataJson.yAxisTitleText
          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      series: dataJson.seriesData
  });
}

Template.visual.events({
  'click #visualTwitter': function() {
    $('#viewContainer').html("");
    $('#viewContainer').removeClass("ui raised container segment");
    Meteor.call('getTwitterSentiment', null, function (error, result) {
      if (error) {
        console.log(error);
      }
      else {
        $('#viewContainer').addClass("ui raised container segment");
        renderHighCharts('viewContainer',result);
      }
    }
  );
},

'click #visualStockTwit': function() {
  $('#viewContainer').html("");
  $('#viewContainer').removeClass("ui raised container segment");
  Meteor.call('getStockTwitSentiment', null, function (error, result) {
    if (error) {
      console.log(error);
    }
    else {
      $('#viewContainer').addClass("ui raised container segment");
      renderHighCharts('viewContainer',result);
    }
  }
);
}

});
