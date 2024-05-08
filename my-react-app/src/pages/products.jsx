import { Fragment, useState } from "react"
import CardProduct from "../components/Fragments/CardProduct"
import Button from "../components/Elements/Button/Index"

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: 1000000,
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, obcaecati quisquam neque consequatur impedit nemo eius? Provident, iure dicta quam, ducimus deserunt non molestiae autem culpa cupiditate porro adipisci animi!`,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: 500000,
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. `,
  },
  {
    id: 3,
    name: "Sepatu",
    price: 2000000,
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. `,
  },
]

const email = localStorage.getItem('email')

const ProductsPage = () => {
  const [cart, setCart] = useState([
    {
      name: "Sepatu Lama",
      qty: 1,
    }
  ]);

  const handleLogout = () => {
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    window.location.href = "/login"
  }

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer price={product.price} />
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
          <ul>
            {cart.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

export default ProductsPage
