import React, {Fragment} from 'react';
import {withStyles} from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#5C5E68',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

export default function UniqueGridRowsKill ({ rowsKill }) {


        return (
            <Fragment>
                {
                    //serie.map((data) => <StyledTableCell component="th" scope="row">{data}</StyledTableCell>)
                }
            </Fragment>
        );
}
