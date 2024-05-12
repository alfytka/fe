import { Fragment, useEffect, useState } from "react"
import CardProduct from "../components/Fragments/CardProduct"
import { getProducts } from "../services/product.service"
import { useLogin } from "../hooks/useLogin"
import TableCart from "../components/Fragments/TableCart"
import Navbar from "../components/Layouts/Navbar"

const ProductsPage = () => {
  const [products, setProducts] = useState([])
  useLogin()

  useEffect(() => {
    getProducts((data) => {
      setProducts(data)
    })
  }, [])

  // const handleAddToCart = (id) => {
    // setCart([
    //   ...cart,
    //   {
    //     id,
    //     qty: 1,
    //   }
    // ])

    // harus melalui pengecekan terlebih dahulu: apakah product yang sama sudah ada di cart?
  //   if (cart.find((item) => item.id === id)) {
  //     setCart(
  //       cart.map((item) => item.id === id ? { ...item, qty: item.qty + 1 } : item )
  //     )
  //   } else {
  //     setCart([...cart, { id, qty: 1 }])
  //   }
  // }

  // useRef
  // const cartRef = useRef(JSON.parse(localStorage.getItem('cart')) || [])

  // const handleAddToCartRef = (id) => {
  //   cartRef.current = [...cartRef.current, { id, qty: 1 }]
  //   localStorage.setItem('cart', JSON.stringify(cartRef.current))
  // }

  return (
    <Fragment>
      <Navbar />
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 && products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} id={product.id} />
              <CardProduct.Body name={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
    </Fragment>
  )
}

export default ProductsPage
