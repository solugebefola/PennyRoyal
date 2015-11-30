var ModalForm = React.createClass({
  render: function() {
    return (
      <div>
        <section className="modal">
          <header className="menu group">
            <nav className="form-options group">
              <span className="group">
                <Link to="/accounts/modal/pre">Add Account</Link>
              </span>
              <span>
                <Link to="/accounts/modal/user_profile">About Me</Link>
              </span>
            </nav>
          </header>
          <main className="form main">
            { this.props.children }
          </main>
        </section>
      </div>
    );
  }
});
