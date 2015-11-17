(function (root) {
  $(document).on('ready', function (){
    if (document.getElementById('content')){
    ReactDOM.render(
      <Institutions />,
      document.getElementById('content')
    )}
  });
})(this);
