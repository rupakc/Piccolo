import './components/home.html';
import './components/visual.html';


Router.route('/',function() {
	this.render('home');
});

Router.route('/visual',function() {
	this.render('visual');
});
