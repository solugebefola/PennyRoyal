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
    ApiUtil.getTags();
  },

  componentWillUnmount: function() {
    TagStore.removeChangeHandler(this._onChange);
  },

  makeTagList: function () {
    return this.state.tags.map(function (tag) {
      return(
        <label>{ tag.name }
          <input
            className="transaction-item tags"
            type="checkbox"
            name={ tag.name }/>
        </label>
      );
    });
  },

  render: function() {
    return (
      <div>
        <form className="transaction-item detail">
          { this.makeTagList() }
          <label>Tag Name
            <input
              className="transaction-item tag-name"
              type="text"
              name="newtag"
              id="newtag" />
            <button className="tag-button" onClick={ this.addTag }>Add New Tag</button>
          </label>
          <button name="cancel" onClick={ this.handleDetail }>Cancel</button>
          <button type="submit" onClick={ this.handleSubmit }>Save Changes</button>
        </form>
      </div>
    );
  },

  _onChange: function () {
    this.setState({ tags: TagStore.all() });
  },

  addTag: function (e) {
    e.preventDefault();
    var tagName = $("#newtag").val();
    ApiUtil.newTag({ name: tagName, transaction_id: this.props.transaction.id });
  },

  handleDetail: function (e) {
    e.preventDefault();
    if (e.target.name == "cancel") {

    }else{
      this.props.getDetailProps(this.state);
    }
  }
});
