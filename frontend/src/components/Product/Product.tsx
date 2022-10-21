import { ProductInterface } from '../../interfaces/product'
import { ProductContainer } from './ProductStyles'
import { currencyFormat } from '../../services/utils';

type Props = {
    product: ProductInterface
}

function Product(props: Props) {
    const { product } = props

    return (
        <ProductContainer to={`/productdetails/${product._id}`}>
            <img src={product.image} alt={`${product.name} image`} />
            <h4>{product.name}</h4>
            <p>{currencyFormat(product.price)}</p>
        </ProductContainer>
    )
}

export default Product