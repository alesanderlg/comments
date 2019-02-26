import React from 'react'
import Comment from './Comment'

const Comments = props => {
    
   return(
        <div>
            {props.comments.map(comment => <Comment comment={comment}/>)}                
        </div>
    )

}

export default Comments