import React, {useEffect } from 'react'
import { useParams } from 'react-router'
import { Button, Icon, Menu, Table } from 'semantic-ui-react'
import {toast} from "react-toastify"
import {useDispatch,useSelector} from "react-redux"
import { addToCart } from '../../store/actions/cartActions'
import { getProducts } from '../../store/actions/productListActions'

function ProductList2() {

    const dispatch = useDispatch()
    const { products } = useSelector(state => state.productList)

    let { categoryId } = useParams()

    useEffect(() => {
        if (categoryId) {
            
        } else {
            dispatch(getProducts())
        }

    }, [categoryId,dispatch])

    const handAddToCart=(product)=>{
        dispatch(addToCart(product))
        toast.success(`${product.name} Sepete eklendi` )
    }
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>Ürün adı</Table.HeaderCell>
                        <Table.HeaderCell>Fiyatı</Table.HeaderCell>
                        <Table.HeaderCell>Stok adedi</Table.HeaderCell>
                        <Table.HeaderCell>Açıklama</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        products.map(product => (
                            <Table.Row key={product.id}>
                                <Table.Cell>{product.id}</Table.Cell>
                                <Table.Cell>{product.name}</Table.Cell>
                                <Table.Cell>{product.unitPrice}</Table.Cell>
                                <Table.Cell>{product.unitsInStock}</Table.Cell>
                                <Table.Cell>{product.quantityPerUnit}</Table.Cell>
                                <Table.Cell>
                                    <Button primary onClick={()=>handAddToCart(product)}>Sepete ekle</Button>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }


                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}

export default ProductList2


