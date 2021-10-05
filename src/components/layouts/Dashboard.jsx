import React from 'react'
import { Route } from 'react-router'
import { ToastContainer } from 'react-toastify'
import { Grid } from 'semantic-ui-react'
import CartDetail from '../pages/CartDetail'
import ProductDetail from '../pages/ProductDetail'
import ProductList2 from '../pages/ProductList2'
import Categories from './Categories'
import Navi from './Navi'

function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right"/>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Navi></Navi>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories></Categories>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path="/" component={ProductList2}/>
                        <Route exact path="/products" component={ProductList2}/>
                        <Route exact path="/products/:categoryId" component={ProductList2}/>
                        <Route path="/productdetail/:productId" component={ProductDetail}/>
                        <Route path="/cart" component={CartDetail}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Dashboard
