import React ,{useState} from 'react'
import {inject,observer} from 'mobx-react'
import { Input } from '@material-ui/core'

const UpdateAction = inject('company')(observer((props)=>{
    console.log(props)
    return(
        <div>
              <h1>Update</h1>
          <div>Client : <Input placeholder="Client Name"/> </div>
        </div>
    )
}))

export default UpdateAction