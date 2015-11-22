var OverviewMain = React.createClass({
  render: function() {
    return (
      <div>
        <h1>I am the overview main</h1>
        <section id="edit_modal" className="modal is-active edit">
          <h1>Edit An Account</h1>
          <AccountEditForm />
        </section>
        <section id="new_modal" className="modal new">
          <AccountNewForm />
        </section>
      </div>
    );
  }
});
