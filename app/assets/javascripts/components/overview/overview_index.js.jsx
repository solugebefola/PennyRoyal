var OverviewIndex = React.createClass({
  render: function() {
    return (
      <div>
        <section className="account-index overview">
          <AccountIndex />
        </section>
        <section className="overview-main overview">
          <OverviewMain />
        </section>
        <section id="edit-modal" className="modal">
          { this.props.children }
        </section>
      </div>
    );
  },
});
