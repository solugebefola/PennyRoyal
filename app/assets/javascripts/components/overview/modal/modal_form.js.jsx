var ModalForm = React.createClass({
  mixins: [ReactRouter.History],

  render: function() {
    return (
      <div>
        <section className="modal">
          <header className="menu group">
            <nav className="form-options group">
              <span className="account group">
                <Link to="/accounts/modal/edit">Accounts</Link>
              </span>
              <span className="user group">
                <Link to="/accounts/modal/user_profile">About Me</Link>
              </span>
            </nav>
            <div className="back" onClick={ this.handleCancel }>
              <Link to="/accounts">✖︎</Link>
            </div>
          </header>
          <div className="form main">
            { this.props.children }
          </div>
        </section>
      </div>
    );
  },

  handleCancel: function (e) {
    e.preventDefault();
    // this.history.pushState(null, )

  }
});
