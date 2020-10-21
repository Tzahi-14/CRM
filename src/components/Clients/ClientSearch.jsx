import React, { useState, useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import { Button, Input } from '@material-ui/core'
import ClientsTable from './ClientsTable'

const ClientSearch = inject('company')(observer((props) => {

    return (
        <div>
            <Input type="text" placeholder="Search client" />
            <Button>Go</Button>
            <ClientsTable/>
        </div>
    )

}))

export default ClientSearch