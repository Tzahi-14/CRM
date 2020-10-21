import React ,{useState} from 'react'
import {inject,observer} from 'mobx-react'

const Analytics = inject('company')(observer((props)=>{
    return(
        <div>
            Analytics
        </div>
    )
}))

export default Analytics