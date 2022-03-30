import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import {useTable} from 'react-table'


function TableMarkUp({columns, data}) {
    // Use the state and functions returned from useTable to build your UI
    const {getTableProps, headerGroups, rows, prepareRow} = useTable({
        columns,
        data,
    })

    // Render the UI for your table
    return (
        <MaUTable {...getTableProps()}>
            <TableHead>
                {headerGroups.map(headerGroup => (
                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <TableCell {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableHead>
            <TableBody>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <TableRow {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <TableCell {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </TableCell>
                                )
                            })}
                        </TableRow>
                    )
                })}
            </TableBody>
        </MaUTable>
    )
}

function Table(props) {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Все параметры помесячно',
                columns: [
                    {
                        Header: 'Месяц',
                        accessor: 'currentMonth',
                    },
                    // {
                    //     Header: 'Начальная сумма',
                    //     accessor: 'startingAmount',
                    // },

                    {
                        Header: 'Сумма в начале месяца',
                        accessor: 'currentAmount',
                    },
                    {
                        Header: 'Прибыль',
                        accessor: 'currentInterest',
                    },
                    {
                        Header: 'Процент дохода',
                        accessor: 'currentSumPercent',
                    },
                    {
                        Header: 'Вложенные деньги',
                        accessor: 'currentContrs',
                    },
                    {
                        Header: 'Итого на конец месяца',
                        accessor: 'currentEndAmount',
                    },
                    // {
                    //     Header: 'Конечная сумма',
                    //     accessor: 'endAmount',
                    // },
                ],
            },
        ],
        []
    )





    return (
        <div>
            <CssBaseline/>
            <TableMarkUp columns={columns} data={props.state.investData.data}/>
        </div>
    )
}

export default Table
