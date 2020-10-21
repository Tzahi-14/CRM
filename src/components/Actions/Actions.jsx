import React ,{useState} from 'react'
import {inject,observer} from 'mobx-react'

const Actions = inject('company')(observer((props)=>{
    return(
        <div>
            Actions
        </div>
    )
}))

export default Actions