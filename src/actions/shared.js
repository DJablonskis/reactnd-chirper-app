import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveTweets } from '../actions/tweets'
import { setAuthedUser } from '../actions/authedUser'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({ users, tweets }) => {
                receiveTweets(tweets)
                receiveUsers(users)
                setAuthedUser(AUTHED_ID)
            })
    }

}