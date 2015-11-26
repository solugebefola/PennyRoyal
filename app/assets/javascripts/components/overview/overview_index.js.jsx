var OverviewIndex = React.createClass({
  render: function() {

    return (
      <div>
        <main className="wrapper">
          <section className="account-index overview">
            <AccountIndex />
          </section>
          <section className="overview-main overview">
            <OverviewMain />
          </section>
          { this.props.children }
        </main>
      </div>
    );
  },
});
