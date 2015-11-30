var PaginationNav = React.createClass({
  getInitialState: function() {
    return {
      page: PaginatedTransactionStore.page(),
      per: PaginatedTransactionStore.per(),
      pages: Math.ceil(
        PaginatedTransactionStore.total_count() /
        PaginatedTransactionStore.per()
      )
    };
  },
  componentWillMount: function() {
  },

  componentDidMount: function() {
    PaginatedTransactionStore.addChangeHandler(this._onChange);
  },

  componentWillUnmount: function() {
    PaginatedTransactionStore.removeChangeHandler(this._onChange);
  },

  generateNav: function () {
    var links = [];
    for (var i = 1; i < this.state.pages + 1; i++ ){
      links[i] =
        <li
          key={ i }
          id={ i }
          className="transaction nav-list-item"
          onClick={ this.changePage }>

          { i }

        </li>;
    }
    return links;
  },

  render: function() {
    return (
      <div>
        <ul className="transaction nav-list group left">
          <li>Go to Page</li>
          { this.generateNav() }
          <li
            className="transaction nav-list-item"
            id={ this.state.page - 1 }
            onClick={ this.changePage }>
            { "<<Prev" }
          </li>
          <li
            className="transaction nav-list-item"
            id={ this.state.page + 1 }
            onClick={ this.changePage }>
            { "Next >>" }
          </li>
        </ul>
        <ul className="transaction nav-list group right">
          <li>Transactions per page</li>
          <li className="transaction nav-list-item" id={ 25 } onClick={ this.changePer }>25</li>
          <li className="transaction nav-list-item" id={ 50 } onClick={ this.changePer }>50</li>
          <li className="transaction nav-list-item" id={ 100 } onClick={ this.changePer }>100</li>
        </ul>
      </div>
    );
  },

  changePage: function (e) {
    e.preventDefault();
    page = parseInt(e.target.id);
    if (page < 1 || page > this.state.pages){
      page = this.state.page;
    }
    PaginatedTransactionActions.paginationParametersReceived({ page: page });
  },

  changePer: function (e) {
    e.preventDefault();
    per = parseInt(e.target.id);
    PaginatedTransactionActions.paginationParametersReceived({ per: per });
  },

  _onChange: function () {
    this.setState ({
      page: PaginatedTransactionStore.page(),
      per: PaginatedTransactionStore.per(),
      pages: Math.ceil(
        PaginatedTransactionStore.total_count() /
        PaginatedTransactionStore.per()
      )
    });
  }
});
