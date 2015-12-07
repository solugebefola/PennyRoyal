var TransactionFormDetail = React.createClass({
  getInitialState: function() {
    return {
      tags: TagStore.all(),
      tag_ids: this.props.transaction.tag_ids,
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

  checkIDinTagIDs: function(id) {
    if (this.state.tag_ids.find(function(tagid){
      return id == tagid;
    })){
      return true;
    }else{
      return false;
    }
  },

  makeTagList: function () {
    return TagStore.all().map(function (tag) {
      var tagged = this.checkIDinTagIDs(tag.id);
      return(
        <span className={ "transaction-item tags " + tagged }
            onClick={ this.handleTag }
            key={ tag.id }
            id={ tag.id }>{ tag.name }</span>
      );
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        <form className="transaction-item detail group">
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
    if (tagName !== ""){
      ApiUtil.newTag({ name: tagName, transaction_id: this.props.transaction.id });
    }
  },

  handleTag: function (e) {
    e.preventDefault();
    tagIDs = this.state.tag_ids.slice();
    if (this.checkIDinTagIDs(e.target.id)) {
      tagIDs = tagIDs.filter(function (id) {
        return id != e.target.id;
      });
    }else{
      tagIDs.push(parseInt(e.target.id));
    }
    this.setState({ tag_ids: tagIDs });
  },

  handleNotes: function (e) {
    this.setState({ notes: e.target.value });
  },

  handleDetail: function (e) {
    e.preventDefault();
    var exitDetail = { detail: false };
    if (e.target.name !== "cancel") {
      this.props.getDetailProps({
        tag_ids: this.state.tag_ids,
        notes: this.state.notes
      });
    }else{
      this.props.getDetailProps(exitDetail);
    }
  }
});
