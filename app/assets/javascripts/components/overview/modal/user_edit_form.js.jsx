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
        <header className="form">
          <h1>Set up your User Profile</h1>
        </header>
        <form
          onSubmit={ this.submitChangeHandler }
          action=""
          className="user">
          <label>Add a picture
            <input
              type="file"
              onChange={ this.fileChangeHandler }/>
          </label>
          <img className="preview-image" src={ this.state.image_url } />
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
            className="form edit input gender"
            type="text"
            name="gender"
            onChange={ this.inputChangeHandler }
            value={ this.state.gender } />
          </label>
          <label className="input-label">Age
          <input
            className="form edit input age"
            type="number"
            name="age"
            onChange={ this.inputChangeHandler }
            value={ this.state.age } />
          </label>
          <button type="submit">Save</button>
          <div className="fakebutton">
            <Link to="/accounts" className="cancel" type="cancel">Cancel</Link>
          </div>
        </form>
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
      that.setState({ image_url: reader.result, imageFile: file });
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ image_url: "", imageFile: null });
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
    var imageFile = null;
    var user = new FormData();
    if(typeof(this.state.imageFile) === "undefined"){

    }else{
      user.append("user[profile]", this.state.imageFile);
    }
    user.append("user[email]", this.state.email);
    user.append("user[fname]", this.state.fname);
    user.append("user[lname]", this.state.lname);
    user.append("user[age]", this.state.age);
    user.append("user[gender]", this.state.gender);
    user.append("user[id]", this.state.id);
    ApiUtil.editUser(user);
  }

});
