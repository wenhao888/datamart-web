import React from "react";
import { connect } from 'react-redux'

class MessageList extends  React.Component {
    render () {
        return (
            <div>
                {
                    this.props.messages.map((e,i)=> (
                        <p key={i}>
                            {e}
                        </p>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
};

export default connect(
    mapStateToProps,
    null
)(MessageList);


