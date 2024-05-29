import anemone from '../Pictures/anemone.jpg'
import kalina from '../Pictures/kalina.jpg'
import briar from '../Pictures/briar.jpg'
import cynthia from '../Pictures/cynthia.jpg'
import dahlia from '../Pictures/dahlia.jpg'
import delphine from '../Pictures/delphine.jpg'
import rosalie from '../Pictures/rosalie.jpg'

const allProducts = [
    { id: 1, imageUrl: anemone, name: "ANEMONE PHONE STRAP", price: "$13.00 USD", category: "phone-strap" },
    { id: 2, imageUrl: kalina, name: "KALINA PHONE STRAP", price: "$13.00 USD", category: "phone-strap" },
    { id: 3, imageUrl: briar, name: "BRIAR BRACELETS", price: "$20.00 USD", category: "bracelet" },
    { id: 4, imageUrl: cynthia, name: "CYNTHIA BRACELETS", price: "$20.00 USD", category: "bracelet" },
    { id: 5, imageUrl: dahlia, name: "DAHLIA BRACELETS", price: "$20.00 USD", category: "bracelet" },
    { id: 6, imageUrl: delphine, name: "DELPHINE BRACELETS", price: "$20.00 USD", category: "bracelet" },
    { id: 7, imageUrl: rosalie, name: "ROSALIE BRACELETS", price: "$20.00 USD", category: "bracelet" }
  ]

export const getProductsByCategory = (category) => {
    return allProducts.filter(product => product.category === category)
}

export default allProducts