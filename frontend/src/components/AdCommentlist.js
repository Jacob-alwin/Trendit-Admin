import React from 'react'

function AdCommentlist(props) {
  return (
    <li class="mb-3">
                        <div class="d-flex flex-column">
                            <div class="regular-title">{props.comment.name}</div>
                            <div class="my-2">
                                {props.comment.comment}</div>
                            <div class="small-title text-gray">
                                8:15 am 15 Aug 2021
                            </div>
                        </div>
                    </li>
  )
}

export default AdCommentlist