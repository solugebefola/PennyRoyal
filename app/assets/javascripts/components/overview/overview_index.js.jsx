var OverviewIndex = React.createClass({
  render: function() {
    return (
      <div>
        <h1>OverviewIndex</h1>
        <section className="account-index overview">
          <AccountIndex />
        </section>
        <section className="overview-main overview">
          <OverviewMain />
        </section>
        <section id="edit-modal" className="modal is-active">
          { this.props.children }
        </section>
        <span id="modal-screen" className="modal screen"></span>
      </div>
    );
  },

  recheckTheStores: function () {
    ApiUtil.getInstitutions();
  }
});
