var TransactionFormDetail = React.createClass({
  getInitialState: function() {
    var tagNames = TagStore.all().map(function(tag){ return tag.name; });
    return {
      off: tagNames,
      on: [],
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

  isTransactionTagged: function (tagName) {
    if (this.state.on.find(
      function(tag){
        return tagName === tag.name;
      }
    )){
      return "on";
    }else{
      return "off";
    }
  },

  makeTagList: function () {
    return this.tags.map(function (tag) {
      return(
        <label key={ tag.id }>{ tag.name }
          <input
            className="transaction-item tags"
            type="checkbox"
            onChange={ this.handleTagCheck }
            name={ tag.name }
            value={ this.isTransactionTagged(tag) }/>
        </label>
      );
    }.bind(this));
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
          <textarea name="notes" value="" />
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

  handleTagCheck: function (e) {
    if (isTransactionTagged(e.target.name) === "on"){
      this.setState({
        off: this.state.off.push(e.target.name),
        on: this.state.on.splice()
      });
    }
    this.setState({  });
  },

  handleDetail: function (e) {
    e.preventDefault();
    if (e.target.name == "cancel") {

    }else{
      this.props.getDetailProps(this.state);
    }
  }
});
