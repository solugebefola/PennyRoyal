(function (root) {
  Link = ReactRouter.Link;
  Route = ReactRouter.Route;
  IndexRoute = ReactRouter.IndexRoute;
  Router = ReactRouter.Router;
  history = ReactRouter.History;
})(this);

var App = React.createClass({
  render: function () {
    return(
      <div>
        <h1>PennyRoyal!</h1>
        <ul>
          <li>
            <Link to="/">Overview</Link>
          </li>
          <li>
            <Link to="/transactions">Transactions</Link>
          </li>
          <li>
            { this.props.children }
          </li>
        </ul>
      </div>
    );
  }
});

(function (root) {
  $(document).on('ready', function (){
    if(document.getElementById('content')){
      ReactDOM.render((
        <Router>
          <Route path="/" component={App}>
            <IndexRoute component={OverviewIndex} />
            <Route path="transactions" component={TransactionsPage} />
          </Route>
        </Router>
      ),document.getElementById('content'));
    }
  });
})(this);
