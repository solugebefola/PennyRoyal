var ModalForm = React.createClass({
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
          </header>
          <div className="form main">
            { this.props.children }
          </div>
        </section>
      </div>
    );
  }
});
