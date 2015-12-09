var AccountsFormList = React.createClass({
  getInitialState: function() {
    return { accounts: AccountStore.allAsArray() };
  },

  componentDidMount: function() {
    AccountStore.addChangeHandler(this._onChange);
    InstitutionStore.addChangeHandler(this._onChange);
    ApiUtil.getInstitutions();
  },

  componentWillUnmount: function() {
    AccountStore.removeChangeHandler(this._onChange);
    InstitutionStore.removeChangeHandler(this._onChange);
  },

  render: function() {
    var accounts = this.state.accounts.map(function (account) {
      return (
        <li key={ account.id } className="form account-list">
          <AccountEditForm
            account={ account }/>
        </li>
      );
    });
    return (
      <div>
        <ul>
          <li className="form account-list">
            <Link to="/accounts/modal/pre">+ Add an account</Link>
          </li>
          { accounts }
        </ul>
      </div>
    );
  },

  _onChange: function () {
    this.setState({ accounts: AccountStore.allAsArray() });
  }
});
