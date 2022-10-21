import { useParams } from 'react-router-dom';
import {
    ProductDetailsContainer,
    ProductInfosContainer,
    DescriptionInfo,
    InfoRow,
    InfoLabel,
    ReleaseInfo,
    OtherInfos,
    PriceInfo
} from './ProductDetailsStyles';
import { ProductDetailsInterface } from '../../interfaces/product';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT } from '../../gqls/productGql';
import { currencyFormat } from '../../services/utils';

function ProductDetails() {
    const { productId } = useParams()
    const { data, loading, error } = useQuery<{ productById: ProductDetailsInterface }>(GET_PRODUCT, {
        variables: { productId },
    })

    return (
        <ProductDetailsContainer>
            {loading &&
                <p>loading...</p>
            }
            {data &&
                <>
                    <img src={data.productById.image} alt={`${data?.productById.name} image`} />
                    <ProductInfosContainer>
                        <h2>{data.productById.name}</h2>
                        <DescriptionInfo>{data.productById.description}</DescriptionInfo>
                        <InfoRow>
                            <InfoLabel>Release:</InfoLabel>
                            <ReleaseInfo>{data.productById.release}</ReleaseInfo>
                        </InfoRow>
                        <InfoRow>
                            <InfoLabel>Developer:</InfoLabel>
                            <OtherInfos>{data.productById.developer}</OtherInfos>
                        </InfoRow>
                        <InfoRow>
                            <InfoLabel>Publisher:</InfoLabel>
                            <OtherInfos>{data.productById.publisher}</OtherInfos>
                        </InfoRow>
                        <PriceInfo>{currencyFormat(data.productById.price)}</PriceInfo>
                    </ProductInfosContainer>
                </>

            }
        </ProductDetailsContainer>
    )

}

export default ProductDetails;