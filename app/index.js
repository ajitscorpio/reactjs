var React = require('react');
var ReactDOM = require('react-dom');

var ShowList = React.createClass({
  render: function(){
    var listitems = this.props.names.map(function(friend){
      return <li>{friend}</li>;
    })
    return(
      <div>
        <h3>Friends:</h3>
        <ul>{listitems}</ul>
      </div>
    )
  }
});

var FriendsContainer = React.createClass({
  render: function(){
    var name = 'Ajit '
    var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen']
    return (
      <div>
        <h3> Name: {name} </h3>
        <ShowList names={friends} />
      </div>
    )
  }
});
ReactDOM.render(<FriendsContainer/>, document.getElementById('app'));
