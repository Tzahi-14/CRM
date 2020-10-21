import React from 'react'
import { inject, observer} from 'mobx-react'
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


const TableHeaders = inject("company")(observer((props) => {

    return(
        <TableHead>
            <TableRow >
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>email</TableCell>
                <TableCell>firstContact</TableCell>
                <TableCell>emailType</TableCell>
                <TableCell>sold</TableCell>
                <TableCell>owner</TableCell>
                <TableCell>country</TableCell>
            </TableRow>
        </TableHead>
    )
}))

export default TableHeaders