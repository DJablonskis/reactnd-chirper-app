import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tweet from './Tweet'
import NewTweet from './NewTweet'

export class TweetPage extends Component {
    render() {
        const { id, replies } = this.props
        return (
            <div><h3 className="center">Reply</h3>
                <Tweet id={id} />
                <NewTweet id={id} />
                {replies.length !== 0 && <h3 className="center">Other replies</h3>}
                <ul>
                    {replies.map(t => <li key={t}><Tweet id={t} /></li>)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = ({ authedUser, tweets, users }, props) => {
    const { id } = props.match.params
    return {
        id,
        replies: !tweets[id]
            ? []
            : tweets[id].replies.sort((a, b) => tweets[a].timestamp - tweets[b].timestamp)
    }
}

export default connect(mapDispatchToProps)(TweetPage)
