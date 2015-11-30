var TransactionFormDetail = React.createClass({
  getInitialState: function() {
    var tagCheckList = {};
    TagStore.all().forEach(function (tag) {
      tagCheckList[tag.id] = false;
    });
    this.props.transaction.tags.forEach(function(tag){
      tagCheckList[tag.id] = true;
    });
    return {
      tagCheckList: tagCheckList,
      tags: TagStore.all(),
      tag_ids: [],
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
            key={ tag.id + " input" }
            className="transaction-item tags"
            type="checkbox"
            onChange={ this.handleTagCheck }
            name="tag_ids[]"
            id={ tag.id }
            value={ tag.id }
            checked={ this.state.tagCheckList[tag.id] }/>
        </label>
      );
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        <form className="transaction-item detail">
          <section><h3>Tags</h3>
            { this.makeTagList() }
          </section>
          <section>
            <input
              className="transaction-item tag-name"
              type="text"
              name="newtag"
              id="newtag"
              placeholder="Add a new tag..." />
            <button className="tag-button" onClick={ this.addTag }>Add New Tag</button>
          </section>
          <section>
            <label>Notes:
              <input className="notes" name="notes" onChange={ this.handleNotes } value={ this.state.notes } />
            </label>
            <button name="cancel" onClick={ this.handleDetail }>Cancel</button>
            <button type="submit" onClick={ this.handleDetail }>Save</button>
          </section>
        </form>
        <span className="detail-tab hide" onClick={ this.handleDetail }>HIDE DETAILS</span>
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
    var tagIDs = [];
    if (this.state.tagCheckList[e.target.id]){
      newState[e.target.id] = false;
    }else{
      newState[e.target.id] = true;
    }
    this.setState({ tagCheckList: newState });
  },

  handleNotes: function (e) {
    this.setState({ notes: e.target.value });
  },

  handleDetail: function (e) {
    e.preventDefault();
    var tagIDs = [];
    var newState = {};
    newState.notes = this.state.notes;
    var exitDetail = { detail: false };
    if (e.target.name !== "cancel") {
      for (var id in this.state.tagCheckList){
        if (this.state.tagCheckList[id]){
          tagIDs.push(id);
        }
      }
      newState.tag_ids = tagIDs;
      this.props.getDetailProps(newState);
    }else{
      this.props.getDetailProps(exitDetail);
    }
  }
});
