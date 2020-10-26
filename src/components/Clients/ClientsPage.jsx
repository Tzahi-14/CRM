import React, { useState, useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import ClientSearch from './ClientSearch'
import ClientsTable from './ClientsTable'

const ClientsPage = inject('company')(observer((props)=>{
    return(
        <div>
            <ClientSearch />
            <ClientsTable />
        </div>
    )
}))

export default ClientsPage 