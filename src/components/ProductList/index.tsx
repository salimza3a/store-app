import axios from 'axios'
import { SingleProduct } from '../SingleProduct'
import { useFilterProductsByCategoryQuery, useGetAllProductsQuery } from '../../services/products'
export const ProductList = ({ categoryName }) => {
    console.log(categoryName, 'category')
    let products;
    if (categoryName && categoryName !== "all") {
        products = useFilterProductsByCategoryQuery(categoryName)
    } else {
        products = useGetAllProductsQuery('')
    }

    const { data, isSuccess, isLoading, isError } = products

    let postContent;

    if (isLoading) {
        postContent = <h2>Loading...</h2>
    } else if (isSuccess) {

        postContent = (<>
            <h2>all products</h2>
            <div style={{ display: 'flex', marginTop: '2rem', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {/* look at there */}
                {data?.map((product: any) => <SingleProduct key={product.id} data={product} />)}
            </div></>)
    } else {
        postContent = <h2>Error</h2>
    }

    return <> {postContent}

    </>
}