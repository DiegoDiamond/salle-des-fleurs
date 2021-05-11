import { loremIpsum } from 'lorem-ipsum'
const productsData = [...Array(25).keys()].map((_, idx) => {
    return {
        id: idx,
        imgPath: `https://source.unsplash.com/random/?flower/400x300?${idx}`,
        title: loremIpsum({ count: 6, units: 'words' }),
        price: Math.floor(Math.random() * 1000),
        tag: loremIpsum({ count: 1, units: 'words' }),
        description: loremIpsum({ count: 20, units: 'words' }),
        addImgs: [
            `https://source.unsplash.com/400x300/?flower`,
            `https://source.unsplash.com/random/?flower/400x300?${Math.floor(Math.random() * 100) + 100}`,
            `https://source.unsplash.com/random/?flower/400x300?${Math.floor(Math.random() * 100) + 100}`,
            `https://source.unsplash.com/random/?flower/400x300?${Math.floor(Math.random() * 100) + 100}`,
            `https://source.unsplash.com/random/?flower/400x300?${Math.floor(Math.random() * 100) + 100}`,
        ],
    }
})

export default productsData
