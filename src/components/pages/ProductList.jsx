import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Button, Icon, Menu, Table } from 'semantic-ui-react'
import ProductService from '../../services/ProductService'
import {toast} from "react-toastify"
import {useDispatch} from "react-redux"
import { addToCart } from '../../store/actions/cartActions'

function ProductList() {

    const dispatch = useDispatch()

    const [products, setProducts] = useState([])
    let { categoryId } = useParams()

    useEffect(() => {
        let productService = new ProductService();
        if (categoryId) {
            productService.getProductsByCategoryId(categoryId).then(response => {
                setProducts(response.data)
            }).catch(error => {
                console.log(error)
            })
        } else {
            productService.getProducts().then(response => {
                setProducts(response.data)
            }).catch(error => {
                console.log(error)
            })
        }

    }, [categoryId])

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

export default ProductList


