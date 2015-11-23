(function (root) {
  Link = ReactRouter.Link;
  Route = ReactRouter.Route;
  IndexRoute = ReactRouter.IndexRoute;
  Router = ReactRouter.Router;
  history = ReactRouter.History;
})(this);

var App = React.createClass({
  render: function () {
    var overviewCurrent = "";
    var transactionCurrent = "";
    if (this.props.location.pathname === "/"){
      overviewCurrent = "current";
    }else{
      transactionCurrent = "current";
    }
    return(
      <div>
        <header className="app-header">
          <Link to="/" className="logo"><img src="#" />Penny<br/>Royal</Link>
          <ul className="app-header list">
            <li>
              <Link
                className={ "app-header-link " + overviewCurrent }
                to="/">OVERVIEW
              </Link>
            </li>
            <li>
              <Link
                className={ "app-header-link " + transactionCurrent }
                to="/transactions">TRANSACTIONS
              </Link>
            </li>
          </ul>
        </header>
        <ul>
          <li className="main-content">
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
            <Route path="accountedit" component={AccountEditForm} />
            <Route path="accountnew" component={AccountNewForm} />
          </Route>
        </Router>
      ),document.getElementById('content'));
    }
  });
})(this);
