import { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Link } from "react-router-dom";
import { FaTrashAlt } from 'react-icons/fa'
import {
    HomeContainer,
    SectionsContainer,
    SectionListContainer,
    SectionContainer,
    SectionHeaderContainer,
    CreateSection,
    ProductListContainer,
} from './HomeStyles';
import Product from "../Product/Product";
import { ProductInterface } from "../../interfaces/product";
import { SectionInterface } from "../../interfaces/section";
import { GET_PRODUCTS } from '../../gqls/productGql';
import { GET_SECTIONS, DELETE_SECTION } from '../../gqls/sectionGql';

function SectionList() {
    const { data: dataProducts, loading: loadingProducts } = useQuery<{ products: ProductInterface[] }>(GET_PRODUCTS)
    const { data: dataSections, loading: loadingSections, refetch: refetchSections } = useQuery<{ sections: SectionInterface[] }>(GET_SECTIONS)
    const [deleteSection, { data: dataDeletedSection }] = useMutation(DELETE_SECTION)

    useEffect(() => {
        refetchSections()
    }, [dataDeletedSection])

    const deleteSectionById = (sectionId: string) => deleteSection({ variables: { deleteSectionId: sectionId } })

    return (
        <HomeContainer>
            <SectionsContainer>
                <h2>Sections</h2>
                {loadingSections &&
                    <p>Loading...</p>
                }
                <SectionListContainer>
                    {dataSections?.sections.map(section =>
                        <SectionContainer key={section._id}>
                            <SectionHeaderContainer>
                                <h3>{section.nameSection}</h3>
                                <FaTrashAlt
                                    size={25}
                                    onClick={() => deleteSectionById(section._id)}
                                />
                            </SectionHeaderContainer>
                            <>
                                {section.products.map(product =>
                                    <Product key={product._id} product={product} />
                                )}
                            </>
                        </SectionContainer>
                    )}
                </SectionListContainer>
                <CreateSection>
                    <Link to="/createsection">New section +</Link>
                </CreateSection>
            </SectionsContainer>
            <ProductListContainer>
                <h2>All products</h2>
                {loadingProducts &&
                    <p>Loading...</p>
                }
                {dataProducts?.products.map(product =>
                    <Product key={product._id} product={product} />
                )}
            </ProductListContainer>
        </HomeContainer>
    )
}

export default SectionList