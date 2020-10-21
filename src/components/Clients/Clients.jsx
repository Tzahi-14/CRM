import React, { useState, useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import Snackbar from "@material-ui/core/Snackbar"
import ClientRow from './ClientRow'
import { TableBody } from '@material-ui/core'

const Clients = inject('company')(observer((props) => {

    return (
        <TableBody>

            <ClientRow />


        </TableBody>
        // <TableBody>
        //     {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
        //         return (
        //             <ClientRow />
        //         )
        //     })}
        // </TableBody>

    )


}))

export default Clients