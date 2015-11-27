var UserEditForm = React.createClass({
  getInitialState: function() {
    return UserStore.one();
  },
  componentWillMount: function() {
  },

  componentDidMount: function() {
    UserStore.addChangeHandler(this._onChange);
    ApiUtil.getUser();
  },

  componentWillUnmount: function() {
    UserStore.removeChangeHandler(this._onChange);
  },

  render: function() {
    return (
      <div>
        <section className="user modal">
          <h1>Set up your User Profile</h1>
          <form
            onSubmit={this.submitChangeHandler}
            action=""
            className="user">
            <label>Add a picture
              <input
                type="file"
                onChange={ this.fileChangeHandler }/>
            </label>
            <img className="preview-image" src={ this.state.imageUrl } />
            <label className="input-label">First Name
            <input
              className="form edit input"
              type="text"
              name="fname"
              onChange={ this.inputChangeHandler }
              value={ this.state.fname } />
            </label>
            <label className="input-label">Last Name
            <input
              className="form edit input"
              type="text"
              name="lname"
              onChange={ this.inputChangeHandler }
              value={ this.state.lname } />
            </label>
            <label className="input-label">Gender
            <input
              className="form edit input"
              type="text"
              name="gender"
              onChange={ this.inputChangeHandler }
              value={ this.state.gender } />
            </label>
            <label className="input-label">Age
            <input
              className="form edit input"
              type="number"
              name="age"
              onChange={ this.inputChangeHandler }
              value={ this.state.age } />
            </label>
            <button type="submit">Save</button>
            <Link to="/account" className="cancel" type="cancel">Cancel</Link>
          </form>
        </section>
      </div>
    );
  },

  _onChange: function () {
    this.setState(UserStore.one());
  },

  fileChangeHandler: function (e) {
    var reader = new FileReader();
    var file = e.currentTarget.files[0];
    var that = this;
    reader.onloadend = function () {
      that.setState({ imageUrl: reader.result, imageFile: file });
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageURL: "", imageFile: null });
    }
  },

  inputChangeHandler: function (e) {
    e.preventDefault();
    var newState = {};
    propKey = e.target.name;
    newState[propKey] = e.target.value;
    this.setState(newState);
  },

  submitChangeHandler: function (e) {
    e.preventDefault();
    var file = this.state.imageFile;
    var user = this.state;
    user.profile = file;
    debugger
    ApiUtil.editUser(user);
  }

});
