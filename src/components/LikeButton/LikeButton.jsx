
import inLoveHeart from './../../assets/heart-on.svg'
import noLoveHeart from './../../assets/heart-off.svg'
import { useState } from 'react'


const LikeButton = () => {

    const switchLike = () => {
        if (didLike === true) {
            setDidLike(false)
        }
        if (didLike === false) {
            setDidLike(true)
        }
    }

    const [didLike, setDidLike] = useState(false)

    return (
        <img src={didLike === true ? inLoveHeart : noLoveHeart} className="like" onClick={switchLike} />
    )
}

export default LikeButton