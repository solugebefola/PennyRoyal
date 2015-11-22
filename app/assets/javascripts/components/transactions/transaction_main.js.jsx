var TransactionMain = React.createClass({
  render: function() {
    return (
      <div>
        <section>
          <TransactionSearch />
        </section>
        <section>
          <TransactionIndex />
        </section>
      </div>
    );
  }
});
