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
        <section className="account-form edit overview">
          <AccountEditForm />
        </section>
        <section className="account-form new overview">
          <AccountNewForm />
        </section>
      </div>
    );
  },

  recheckTheStores: function () {
    ApiUtil.getInstitutions();
  }
});
