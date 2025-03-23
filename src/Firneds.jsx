import { use } from "react";
import Friend from './Friend';

export default function Friends({friendsProser}) {
    const Friends = use(friendsProser)
    // console.log(Friends)
    return(
        <div className="card">
            <h3>Friends : {Friends.length}</h3>
            {
              Friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}