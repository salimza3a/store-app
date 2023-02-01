import axios from 'axios'
import { SingleProduct } from '../SingleProduct'
import { useFilterProductsByCategoryQuery, useGetAllProductsQuery } from '../../services/products'
import { Loader } from '../../utilities/CustomLoader'
import { Product } from '../../types/GlobalTypes'
export const ProductList = ({ categoryName }) => {
    console.log(categoryName, 'category')
    let products;
    if (categoryName && categoryName !== "all") {
        products = useFilterProductsByCategoryQuery(categoryName)
    } else {
        products = useGetAllProductsQuery()
    }

    const { data, isSuccess, isLoading } = products

    let postContent;

    if (isLoading) {
        postContent = <Loader />
    } else if (isSuccess) {

        postContent = (<>
            <h2>all products</h2>
            <div style={{ display: 'flex', marginTop: '2rem', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {data?.map((product: Product) => <SingleProduct key={product.id} data={product} />)}
            </div></>)
    } else {
        postContent = <h2>Error</h2>
    }

    return <> {postContent}

    </>
}