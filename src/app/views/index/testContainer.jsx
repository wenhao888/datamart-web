import React from "react";

var TestContainer = React.createClass( {
    clickHandler:function(){
      console.log("hello");
    },
    render: function () {
        return (
            <button onClick={this.clickHandler}> button </button>
        )
    }

});

export default TestContainer;
