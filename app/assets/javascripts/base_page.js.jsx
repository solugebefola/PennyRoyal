(function (root) {
  $(document).on('ready', function (){
    console.log("ready");
    if (document.getElementById('content')){
      console.log("render");
    ReactDOM.render(
      <OverviewIndex />,
      document.getElementById('content')
    );}
  });
})(this);
