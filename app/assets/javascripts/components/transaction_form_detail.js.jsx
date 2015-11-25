var TransactionFormDetail = React.createClass({
  getInitialState: function() {
    return {
      tags: TagStore.all(),
      notes: this.props.transaction.notes
    };
  },

  componentWillMount: function() {

  },

  componentDidMount: function() {
    TagStore.addChangeHandler(this._onChange);
  },

  componentWillUnmount: function() {
    TagStore.removeChangeHandler(this._onChange);
  },

  makeTagList: function () {
    return tags.map(function (tag) {
      return(
        <input
          className="transaction-item tags"
          type="checkbox"
          name={ tag.name }/>
      );
    });
  },

  render: function() {
    return (
      <div>
        <form className="transaction-item detail">
          { this.makeTagList() }
          <input
            type="text"
            name="newtag"
            id="newtag" />
          <button onClick={ this.addTag }>Add New Tag</button>
          <button name="cancel" onClick={ this.handleDetail }>Cancel</button>
          <button type="submit" onClick={ this.handleSubmit }>Save Changes</button>
        </form>
      </div>
    );
  },

  addTag: function (e) {
    e.preventDefault();
    var tagName = $("#newtag").val();
    ApiUtil.newTag(tagName);
  }
});
