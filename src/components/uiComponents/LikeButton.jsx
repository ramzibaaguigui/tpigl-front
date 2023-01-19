import { useState } from 'react'

import likeImageSource from './../../images/ic_like.png'
import likedImageSource from './../../images/ic_liked.png'
const likeAlt = 'Like'
const likedAlt = 'Dislike'
const LikeButton = ({ liked, onClick }) => {
    const [isLiked, setIsLiked] = useState(liked);

    return (
        <div>
            <img src={liked ? likedImageSource : likeImageSource}
                alt={liked ? likedAlt : likeAlt}
                /*onClick={function (e) {
                    console.log(e.target);
                    let previous = isLiked;
                    setIsLiked(!previous);
                    console.log("liked: " + !previous);
                }}*/
                onClick={e => {e.preventDefault(); onClick()}}
                className='w-8 h-8'></img>
        </div>
    )
}

export default LikeButton;