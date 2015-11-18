var AccountIndex = React.createClass({
  render: function() {
    var indexes = accountConstants.accountType.map(function (type) {
      return (<li><AccountTypeIndex accountType={type}/></li>);
    });
    return (
      <div>
        <h1>These are the indexes</h1>
        <ul>
          {indexes}
        </ul>
      </div>
    );
  }
});
