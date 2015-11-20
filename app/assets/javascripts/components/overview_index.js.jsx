var OverviewIndex = React.createClass({
  render: function() {
    return (
      <div>
        <h1>OverviewIndex</h1>
        <section className="account-index">
          <AccountIndex />
        </section>
        <section>
          <AccountSmallIndex />
        </section>
        <section className="overview-main">
          <OverviewMain />
        </section>
        <section className="account-form edit">
          <AccountEditForm />
        </section>
        <section className="account-form new">
          <AccountNewForm />
        </section>
      </div>
    );
  },

  recheckTheStores: function () {
    ApiUtil.getInstitutions();
  }
});
