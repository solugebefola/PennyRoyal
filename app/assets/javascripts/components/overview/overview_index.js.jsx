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
        { this.props.children }
      </div>
    );
  },
});
