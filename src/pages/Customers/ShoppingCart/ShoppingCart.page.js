import React, { useEffect, useState } from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { deleteCart } from '../../../redux/actions';
import { Toolbar } from '@material-ui/core';
import { TableContainer } from '../../../components/index.components'
import { Paginate } from '../../../components/index.components'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);




const useStyles = makeStyles({
  paper: {
    minWidth: 400,

  }
  ,
  table: {
    // minWidth: 700,
  },

  row: {
    // height:30
    padding: 7
  },
  button: {
    height: 40
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between'
  },
  noCartText: {
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center'
  },
  tableBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0,
    alignItems: 'center'

  },
  link: {
    textDecoration: 'none'
  }

});








function Cart(props) {

  const [state, setState] = useState({ data: [{}] })
  useEffect(() => {
    const cart = props.cart
    setState({ data: cart })
    console.log(cart)

  }, [])

  const classes = useStyles();

  const convertDateToPersian = (epoch) => {
    const date = new Date(+epoch)
    const persianDate = date.toLocaleString('fa-IR')
    return persianDate
  }



  return (
    <TableContainer component={Paper} className={classes.paper}>
      <Toolbar />
      <div className={classes.container} >
        <div>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>

                <StyledTableCell align="right">کالا </StyledTableCell>
                <StyledTableCell align="right"> قیمت</StyledTableCell>
                <StyledTableCell align="right">  تعداد </StyledTableCell>


              </TableRow>
            </TableHead>
            {
              state.data[0] ? <TableBody>
                {
                  state.data.map((row) => (
                    <StyledTableRow key={row.id}>

                      <StyledTableCell className={classes.row} align="right">
                        <Link className={classes.link} to={`/home/products/${row.group}/${row.subgroup}/${row.productId}`}>
                          {row.productName}
                        </Link>
                      </StyledTableCell>
                      <StyledTableCell className={classes.row} align="right">{row.productPrice}</StyledTableCell>
                      <StyledTableCell className={classes.row} align="right">{row.number}</StyledTableCell>

                    </StyledTableRow>)
                  )
                }
              </TableBody> :
                <p className={classes.noCartText} > محصولی در سبد خرید موجود نمی باشد </p>
            }

          </Table>
        </div>

        <div className={classes.tableBottom} >
          <p>جمع خرید : </p>
          {
            state.data[0] ? <Link className={classes.link} to='/checkout'>
              <Button variant='contained' color='secondary' className={classes.button} >
                نهایی کردن سبد خرید
              </Button>
            </Link> :
              <Button disabled='true' variant='contained' color='secondary' className={classes.button} >
                نهایی کردن سبد خرید
              </Button>
          }
        </div>

      </div>
    </TableContainer>


  );
}

const mapStateToProps = (state) => ({
  cart: state.cart
})

const mapDispatchToProps = (dispatch) => {
  return { deleteCart: () => dispatch(deleteCart()) }
}


const ShoppingCart = connect(mapStateToProps, mapDispatchToProps)(Cart)
export { ShoppingCart }



