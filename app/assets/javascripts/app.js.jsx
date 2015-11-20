(function (root) {
  Link = ReactRouter.Link;
  Route = ReactRouter.Route;
  IndexRoute = ReactRouter.IndexRoute;
  Router = ReactRouter.Router;
})(this);

var App = React.createClass({
  render: function () {
    return(
      <div>
        <h1>PennyRoyal!</h1>
        <ul>
          <li>
            <Link to="/overview">Overview</Link>
          </li>
          <li>

          </li>
          <li>
            {this.props.children}
          </li>
        </ul>
      </div>
    );
  }
});

(function (root) {
  $(document).on('ready', function (){
    ReactDOM.render((
      <Router>
        <Route path="/" component={App}>
          <IndexRoute path="/overview" component={OverviewIndex} />
        </Route>
      </Router>
    ),document.getElementById('content'));
  });
})(this);
        
