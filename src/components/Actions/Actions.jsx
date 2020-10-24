import React ,{useState} from 'react'
import {inject,observer} from 'mobx-react'
import { Input } from '@material-ui/core'
import UpdateAction from './UpdateAction'
import AddActions from './AddActions'

const Actions = inject('company')(observer((props)=>{

    
    console.log(props)
    return(
        <div>
          
            <UpdateAction />
            <AddActions />
        </div>
    )
}))

export default Actions