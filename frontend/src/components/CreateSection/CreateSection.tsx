import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {
    CreateSectionContainer,
    NameSectionFieldContainer,
    SelectedProductsContainer,
    SelectedProducts,
    ButtonCreateContainer,
    ProductsAvailableContainer,
    InteractiveProductContainer,
    InteractiveContainer
} from './CreateSectionStyle';
import { toast } from 'react-toastify';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { AiFillMinusCircle } from 'react-icons/ai';
import { ProductInterface } from '../../interfaces/product';
import Product from '../Product/Product';
import { GET_PRODUCTS } from '../../gqls/productGql';
import { CREATE_SECTION } from '../../gqls/sectionGql';
import { CreateSectionInterface } from '../../interfaces/section';

function CreateSection() {
    const { data: dataProducts, loading: loadingProducts } = useQuery<{ products: ProductInterface[] }>(GET_PRODUCTS)
    const [createSection] = useMutation(CREATE_SECTION)
    const [selectedProducts, setSelectedProducts] = useState<ProductInterface[]>([])
    const [sectionNameInput, setSectionNameInput] = useState('')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSectionNameInput(event.target.value)
    }

    const addSelectedProduct = (product: ProductInterface) => {
        if (selectedProducts.some(selectedProduct => selectedProduct._id === product._id)) return;
        const updatedSelectedProducts = [...selectedProducts, product]

        setSelectedProducts(updatedSelectedProducts)
    }

    const removeSelectedProduct = (productId: string) => {
        const updatedSelectedProducts = selectedProducts.filter(product => product._id !== productId)

        setSelectedProducts(updatedSelectedProducts)
    }

    const createNewSection = () => {
        if (!sectionNameInput || !selectedProducts.length) {
            toast.error('A field is empty! All fields are required!')
            return
        }
        const selectedProductsId = selectedProducts.map(product => product._id)

        const newSection: CreateSectionInterface = {
            nameSection: sectionNameInput,
            products: selectedProductsId
        }

        createSection({ variables: { newSection } })
            .then(({ data }) => {
                toast.success(`Section ${data.createSection.nameSection} created!`)
                setSectionNameInput('')
                setSelectedProducts([])
            })
            .catch((error) => toast.error(`Unable to create a section: ${error.message}`))
    }

    return (
        <>
            <CreateSectionContainer>
                <h2>Create a new section</h2>
                <NameSectionFieldContainer>
                    <h3>Section Name:</h3>
                    <input
                        type="text"
                        placeholder='Section name'
                        value={sectionNameInput}
                        onChange={handleInputChange} />
                </NameSectionFieldContainer>
                <SelectedProductsContainer>
                    <h3>Selected Products:</h3>
                    <SelectedProducts>
                        {loadingProducts &&
                            <p>Loading...</p>
                        }
                        {selectedProducts?.map(product =>
                            <InteractiveProductContainer key={product._id}>
                                <Product product={product} />
                                <InteractiveContainer isAdd={false}>
                                    <AiFillMinusCircle
                                        size={40}
                                        onClick={() => removeSelectedProduct(product._id)}
                                    />
                                </InteractiveContainer>
                            </InteractiveProductContainer>
                        )}
                    </SelectedProducts>
                </SelectedProductsContainer>
                <ButtonCreateContainer>
                    <button onClick={() => createNewSection()}>Create section</button>
                </ButtonCreateContainer>
            </CreateSectionContainer>
            <ProductsAvailableContainer>
                <h2>Products available</h2>
                {loadingProducts &&
                    <p>Loading...</p>
                }
                {dataProducts?.products.map(product =>
                    <InteractiveProductContainer key={product._id}>
                        <Product product={product} />
                        <InteractiveContainer isAdd={true}>
                            <BsFillPlusCircleFill
                                size={40}
                                onClick={() => addSelectedProduct(product)}
                            />
                        </InteractiveContainer>
                    </InteractiveProductContainer>
                )}
            </ProductsAvailableContainer>
        </>
    )
}

export default CreateSection;