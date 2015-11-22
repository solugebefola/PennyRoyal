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
      </div>
    );
  },

  recheckTheStores: function () {
    ApiUtil.getInstitutions();
  }
});
