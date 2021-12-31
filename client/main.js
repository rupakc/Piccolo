import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';
import './components/view.html';
import './routes.js';
import './components/home.js';
import './components/view.js';
import './components/stockview.html';
import './components/about.html';
import './components/visual.js';


Template.body.events({
	'click #about': function() {
	 Blaze.render(Template.about,document.body);
	 $('.ui.modal').modal('show');
 },
  'click #return-to-top': function() {
		$("#return-to-top").click(function() {
  // When arrow is clicked
  $("body,html").animate(
    {
      scrollTop: 0 // Scroll to top of body
    },
    500
  );
	});
	}
});
