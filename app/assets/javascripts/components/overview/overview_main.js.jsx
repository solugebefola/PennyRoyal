var OverviewMain = React.createClass({
  render: function() {
    return (
      <div>
        <h1>I am the overview main</h1>
        <section id="edit-modal" className="modal is-active edit">
          <h1>Edit An Account</h1>
          <AccountEditForm />
        </section>
        <span id="modal-screen" className="modal screen"></span>
        <section id="new-modal" className="modal is-active new">
          <AccountNewForm />
        </section>
      </div>
    );
  }
});
