var TransactionFormDetail = React.createClass({
  getInitialState: function() {
    var tagCheckList = {};
    TagStore.all().forEach(function (tag) {
      tagCheckList[tag.name] = false;
    });
    this.props.transaction.tags.forEach(function(tag){
      tagCheckList[tag.name] = true;
    });
    return {
      tagCheckList: tagCheckList,
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
    return TagStore.all().map(function (tag) {
      return(
        <label key={ tag.id }>{ tag.name }
          <input
            key={ tag.id }
            className="transaction-item tags"
            type="checkbox"
            onChange={ this.handleTagCheck }
            name={ tag.name }
            checked={ this.state.tagCheckList[tag.name] }/>
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
              id="newtag"
              placeholder="Add a new tag..." />
            <button className="tag-button" onClick={ this.addTag }>Add New Tag</button>
          </label>
          <textarea name="notes" value="" />
          <button name="cancel" onClick={ this.handleDetail }>Cancel</button>
          <button type="submit" onClick={ this.handleDetail }>Save Changes</button>
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
    var newState = $.extend({}, this.state.tagCheckList);
    if (this.state.tagCheckList[e.target.name]){
      newState[e.target.name] = false;
    }else{
      newState[e.target.name] = true;
    }
    this.setState({ tagCheckList: newState });
  },

  handleDetail: function (e) {
    e.preventDefault();
    var exitDetail = { detail: false };
    if (e.target.name !== "cancel") {
      this.setState({ detail: false });
      this.props.getDetailProps(this.state);
    }else{
      this.props.getDetailProps(exitDetail);
    }
  }
});
