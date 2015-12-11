var ModalForm = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return { pagesBack: this.props.pagesBack };
  },

  showActive: function (path) {
    if (this.history.isActive(path)) {
      return "active";
    }
  },

  render: function() {
    var edit = "/accounts/modal/edit";
    var user = "/accounts/modal/user_profile";
    return (
      <div>
        <section className="modal">
          <header className="menu group">
            <nav className="form-options group">
              <span
                className="account group">
                <Link
                  className={ this.showActive(edit) }
                  to="/accounts/modal/edit">Accounts</Link>
              </span>
              <span className="user group ">
                <Link
                  className={ this.showActive(user) } to="/accounts/modal/user_profile">About Me</Link>
              </span>
            </nav>
            <div className="back" onClick={ this.history.goBack }>
              <i className="fa fa-times"></i>
            </div>
          </header>
          <div className="form main">
            { this.props.children }
          </div>
        </section>
        <section className="modal overlay">
        </section>
      </div>
    );
  }
});
