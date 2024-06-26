import { useEffect, useState } from "react"
import api from "../api/apiShop"
import { useParams } from "react-router-dom"
import Breadcrumbs from "../components/UI/Breadcrumbs/Breadcrumbs"
import ProductItem from "../components/ProductItem/ProductItem"
import ProductPromo from "../components/ProductPromo/ProductPromo"
import { ProductProps } from "../types/types"
import { defaultProducts } from "../api/defolt"
import Loading from "../components/UI/Loading/Loading"

const Product = () => {
  const [product, setProduct] = useState<ProductProps | null>(null)
  const { productId } = useParams<{ productId?: string }>()
  const parsedProductId = productId ? parseInt(productId, 10) : undefined

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (parsedProductId !== undefined) {
          const response = await api.getProductId(parsedProductId)
          if (response) {
            setProduct(response)
          } else {
            const defaultProduct = defaultProducts.find(
              (product) => product.id === parsedProductId,
            )
            if (defaultProduct) {
              setProduct(defaultProduct)
            }
          }
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [parsedProductId])

  if (!product) {
    const defaultProduct = defaultProducts.find(
      (product) => product.id === parsedProductId,
    )
    if (defaultProduct) {
      return (
        <>
          {/* <div className='loading'>Загрузка...</div> */}
          {/* <Loading /> */}
          <section className="product">
            <div className="product__container">
              <h2 className="product__title title-big">
                {defaultProduct.title}
              </h2>
              <Breadcrumbs
                categories={defaultProduct.categories}
                title={defaultProduct.title}
                className="product__breadcrumbs"
              />
              <ProductItem item={defaultProduct} />
            </div>
          </section>
        </>
      )
    } else {
      return <Loading />
    }
  }

  // console.log(product);
  return (
    <>
      <section className="product">
        <div className="product__container">
          <h2 className="product__title title-big">{product.title}</h2>
          <Breadcrumbs
            categories={product.categories}
            title={product.title}
            className="product__breadcrumbs"
          />
          <ProductItem item={product} />
          <ProductPromo
            subtitle="Связанные товары"
            className="related"
            limit={2}
          />
        </div>
      </section>
    </>
  )
}
export default Product
