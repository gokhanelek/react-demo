import React, { useState, useEffect } from 'react'
import CategoryService from '../../services/CategoryService';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

//js this and binding
function Categories() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        let categoryService = new CategoryService();

        categoryService.getCategories().then(response => {
            setCategories(response.data)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <div>
            <Menu vertical>
                {categories.map(category => (
                    <Menu.Item key={category.id}>
                        <Link to={"/products/" + category.id}>
                            {category.name}
                        </Link>
                    </Menu.Item>
                ))}

            </Menu>
        </div>
    )
}

export default Categories
