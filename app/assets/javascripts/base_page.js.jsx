(function (root) {
  $(document).on('ready', function (){
    if (document.getElementById('content')){
      ReactDOM.render(
        <OverviewIndex />,
        document.getElementById('content')
      );
    }
  });
})(this);
