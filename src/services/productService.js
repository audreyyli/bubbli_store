import anemone from '../Pictures/anemone.jpg'
import kalina from '../Pictures/kalina.jpg'
import briar from '../Pictures/briar.jpg'
import cynthia from '../Pictures/cynthia.jpg'
import dahlia from '../Pictures/dahlia.jpg'
import delphine from '../Pictures/delphine.jpg'
import rosalie from '../Pictures/rosalie.jpg'
import susan from '../Pictures/susan.jpg'
import primrose from '../Pictures/primrose.jpg'
import hyacinth from '../Pictures/hyacinth.jpg'
import holly from '../Pictures/holly.jpg'
import heather from '../Pictures/heather.jpg'
import azalea from '../Pictures/azalea.jpg'
import zoey from '../Pictures/zoey.jpg'
import xiana from '../Pictures/xiana.jpg'
import vanessa from '../Pictures/vanessa.jpg'
import qianna from '../Pictures/qianna.jpg'
import camellia from '../Pictures/camellia.jpg'
import edelweiss from '../Pictures/edelweiss.jpg'
import erica from '../Pictures/erica.jpg'
import leilani from '../Pictures/leilani.jpg'
import lotus from '../Pictures/lotus.jpg'
import roisin from '../Pictures/roisin.jpg'
import wisteria from '../Pictures/wisteria.jpg'

const allProducts = [
    { id: 1, imageUrl: anemone, name: "ANEMONE PHONE STRAP", price: "$13.00 USD", category: "phone-strap" },
    { id: 2, imageUrl: kalina, name: "KALINA PHONE STRAP", price: "$13.00 USD", category: "phone-strap" },
    { id: 3, imageUrl: briar, name: "BRIAR BRACELET", price: "$20.00 USD", category: "bracelets" },
    { id: 4, imageUrl: cynthia, name: "CYNTHIA BRACELET", price: "$20.00 USD", category: "bracelets" },
    { id: 5, imageUrl: dahlia, name: "DAHLIA BRACELET", price: "$20.00 USD", category: "bracelets" },
    { id: 6, imageUrl: delphine, name: "DELPHINE BRACELET", price: "$20.00 USD", category: "bracelets" },
    { id: 7, imageUrl: rosalie, name: "ROSALIE BRACELET", price: "$20.00 USD", category: "bracelets" },
    { id: 8, imageUrl: susan, name: "SUSAN HAIR CLIP", price: "$8.50 USD", category: "clips" },
    { id: 9, imageUrl: primrose, name: "PRIMROSE HAIR CLIP", price: "$8.50 USD", category: "clips" },
    { id: 10, imageUrl: hyacinth, name: "HYACINTH HAIR CLIP", price: "$8.50 USD", category: "clips" },
    { id: 11, imageUrl: holly, name: "HOLLY HAIR CLIP", price: "$8.50 USD", category: "clips" },
    { id: 12, imageUrl: heather, name: "HEATHER HAIR CLIP", price: "$8.50 USD", category: "clips" },
    { id: 13, imageUrl: azalea, name: "AZALEA HAIR CLIP", price: "$8.50 USD", category: "clips" },
    { id: 14, imageUrl: zoey, name: "ZOEY HAIR CLIP", price: "$8.50 USD", category: "clips" },
    { id: 15, imageUrl: xiana, name: "XIANA HAIR CLIP", price: "$8.50 USD", category: "clips" },
    { id: 16, imageUrl: vanessa, name: "VANESSA HAIR CLIP", price: "$8.50 USD", category: "clips" },
    { id: 17, imageUrl: qianna, name: "QIANNA HAIR CLIP", price: "$8.50 USD", category: "clips" },
    { id: 18, imageUrl: edelweiss, name: "EDELWEISS EARRINGS", price: "$6.00 USD", category: "earrings" },
    { id: 19, imageUrl: erica, name: "ERICA EARRINGS", price: "$6.00 USD", category: "earrings" },
    { id: 20, imageUrl: camellia, name: "CAMELLIA EARRINGS", price: "$6.00 USD", category: "earrings" },
    { id: 21, imageUrl: leilani, name: "LEILANI EARRINGS", price: "$6.00 USD", category: "earrings" },
    { id: 22, imageUrl: lotus, name: "LOTUS EARRINGS", price: "$6.00 USD", category: "earrings" },
    { id: 23, imageUrl: roisin, name: "ROISIN EARRINGS", price: "$6.00 USD", category: "earrings" },
    { id: 24, imageUrl: wisteria, name: "WISTERIA EARRINGS", price: "$6.00 USD", category: "earrings" }
  ]

export const getProductsByCategory = (category) => {
    const filteredProducts = allProducts.filter(product => product.category.toLowerCase() === category.toLowerCase())
    console.log(filteredProducts)
    return filteredProducts
}

export default allProducts