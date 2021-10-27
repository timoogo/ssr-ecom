import Head from 'next/head'
import Contact from '../components/Contact'
import { Jumbotron} from '../components/Jumbotron'
import iphone from '../public/iphone.png'
import Script from 'next/script'
import ProductList from '../components/ProductList'
import {IProduct} from "../components/Product"
import {GetStaticProps} from 'next'
interface IProductListProps {
  products: IProduct[]
}
export default function Home({products}: IProductListProps){
  return (
<div>
      <Head>
        <title>iPhone Shop</title>
        <link rel="preconnect" href="https://app.snipcart.com"/>
        <link rel="preconnect" href="https://cdn.snipcart.com"/>
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"/>
      </Head>
      <main className="main">
        <Jumbotron/>
        <ProductList products={products} />
        <Contact />
      </main>
      <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"/>
      <div hidden id="snipcart" data-api-key="OWNlZTNlYmItZTU5OS00MmI4LThjOTAtMjY0NzAyYmI2ODAxNjM3NjIyMjY3MDMxMTIzMzUx"></div>
    </div>
  )
}

export const products: IProduct[] = [
  {
    id: "1",
    name: "Iphone X",
    price: 1000,
    url: "string",
    description: "Paré du verre le plus résistant jamais conçu pour un smartphone et d’un contour plus solide en acier inoxydable chirurgical, il se charge sans fil2 et résiste à l’eau et à la poussière3.",
    image: iphone,
  },
  {
    id: "2",
    name: "Iphone XR",
    price: 1200,
    url: "string",
    description: "Un écran Liquid Retina, le LCD le plus avancé. Un Face ID encore plus rapide. La puce la plus intelligente et la plus puissante jamais intégrée à un smart­phone. Et un appareil photo d'avant-garde. L'iPhone XR est beau sous tous les angles.",
    image: iphone,
  },
  {
    id: "3",
    name: "Iphone XS",
    price: 1000,
    url: "string",
    description: "Un écran Super Retina. Un Face ID encore plus rapide. La puce intelligente et puissante. Et un double appareil photo d'avant-garde. L'iPhone XS, c'est tout ce que vous aimez dans l'iPhone. Poussé à l'extrême.",
    image: iphone,
  }
]
export const getStaticProps : GetStaticProps = async(ctx) =>{
  return {
    props:{
      products
    }
  }
}