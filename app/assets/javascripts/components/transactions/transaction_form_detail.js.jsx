var TransactionFormDetail = React.createClass({
  getInitialState: function() {
    return {
      tags: TagStore.all(),
      tag_ids: this.props.transaction.tag_ids,
      notes: this.props.transaction.notes
    };
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
          <section>
          <h3>Tags:</h3>
          <div className="group">
            { this.makeTagList() }
          </div>
          <input
            className="transaction-item tag-name"
            type="text"
            name="newtag"
            id="newtag"
            placeholder="Your tag here..." />
          <button className="tag-button" onClick={ this.addTag }>
            Create New Tag
          </button>
          </section>
          <section>
            <label>Notes:
              <textarea className="notes" name="notes" onChange={ this.handleNotes } value={ this.state.notes }></textarea>
            </label>
          </section>
        </form>
        <button className="detail-button" name="cancel" onClick={ this.handleDetail } >
          Cancel
        </button>
        <button className="detail-button" type="submit" onClick={ this.handleDetail } >
          Save
        </button>
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
    if (e.target.name !== "cancel") {
      this.props.getDetailProps({
        tag_ids: this.state.tag_ids,
        notes: this.state.notes,
        detail: false
      });
    }else{
      this.props.getDetailProps({ detail: false });
    }
  }
});
