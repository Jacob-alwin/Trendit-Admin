import React from 'react'
import AdCommentlist from './AdCommentlist'
import AdCommentSent from './AdCommentSent'

function AdComments(props) {
    console.log(props.product.Comment)
    
  return (

    <div class="row mb-3">
    <div class="col-12">
        <div class="card panel-card">
            <div class="card-header">
                Comments
            </div>
            <div class="card-body pe-4 ps-4 comments-contents-wrapper">
                <ul class="p-0 d-flex flex-column product-description-lists mb-0">
                    {
                        props.product.Comment.map((comment) =>{
                          return(<AdCommentlist comment={comment}/>)
                        })
                    }
                </ul>
            </div>
            <AdCommentSent/>
        </div>
    </div>
</div>

  )
}

export default AdComments