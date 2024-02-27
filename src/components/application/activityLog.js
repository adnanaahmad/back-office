import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableBlock from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


export default function ActivityLog({data}) {

    return (
        <ActivityTable data={data}/>
    );
}

const TableCell = ({ children, ...props }) => {
    return <TableBlock {...props} sx={{fontSize: '12px', whiteSpace: 'nowrap', ...props.sx}}>{children}</TableBlock>;
};

function ActivityTable({data}) {
  const rows = data;
  return (
    <React.Fragment>
        <TableContainer sx={{maxHeight: 300}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Time Stamp</TableCell>
                    <TableCell align="center">Step</TableCell>
                    <TableCell align="center">Activity</TableCell>
                    <TableCell align="center">Status Code</TableCell>
                    <TableCell align="center">Status Code Description</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row, index) => (
                    <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.timeStamp}
                    </TableCell>
                    <TableCell align="center">{row.step}</TableCell>
                    <TableCell align="center">{row.activity}</TableCell>
                    <TableCell align="center">{row.statusCode}</TableCell>
                    <TableCell align="center">{row.statusCodeDescription}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </React.Fragment>
  );
}

