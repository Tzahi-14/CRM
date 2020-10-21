import React, { useState, useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import { Paper, Table, TableContainer, TablePagination } from '@material-ui/core'
import TableHeaders from './TableHeaders'
import Clients from './Clients'
import UpdateClientPopUp from './UpdateClientPopUp'

const ClientsTable = inject("company")(observer((props) => {

    const [updatePopUp,setUpdatePopUp] = useState({ open:false , clientToUpdate: {}})
    const [page,setPage] = useState(0)
    const [rowsPerPage,setRowsPerPage] = useState(10)

    const handleClick = (objValue)=>{
        setUpdatePopUp(objValue)
    }

    const handleUpdate = (data)=>{
        updatePopUp.clientToUpdate.updateClient(data.firstName,data.lastName,data.country)
        setUpdatePopUp({open:false, clientToUpdate: {}})
    }

    const handleChangePage =(newPage)=>{
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (e)=>{
        setRowsPerPage(+e.target.value)
        setPage(0)
    }



    return (

        <Paper >
        {/* <Paper className={classes.root}> */}
            <TableContainer >
            {/* <TableContainer className={classes.container}> */}
                <UpdateClientPopUp click={handleClick} update={handleUpdate} open={updatePopUp.open} />
                <Table>
                    <TableHeaders />
                    <Clients page={page} rowsPerPage={rowsPerPage} click={handleClick} />
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                // count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>

    )

}))

export default ClientsTable