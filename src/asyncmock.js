const products = [
    { 
        id: '1', 
        name: 'ESMALTES SEMIPERMANENTES MELINÉ – 2022',
        price: 900,
        category: 'esmaltes',
        tipo: 'Semipermanente',
        creador: 'Meline',
        descripcion: 'Esmaltes semipermanentes Meliné, tonos 2022.. ',
        stock: 8,
        img: '../images/meline.webp'
    },
    { 
        id: '2', 
        name: 'ESMALTES SEMIPERMANENTE CHERIMOYA 15ML',
        price: 860,
        category: 'esmaltes',
        tipo: 'Semipermanente',
        creador: 'Cherimoya',
        descripcion: 'Nuevas colecciones DAZZLING y UNIVERSE.',
        stock: 8,
        img: '../images/cherimoya.webp'
    },
    { 
        id: '3', 
        name: 'CHARM LIMIT PREMIUM – NUEVA COLECCION',
        price: 360,
        category: 'esmaltes',
        tipo: 'Semipermanente',
        creador: 'Charm Limit',
        descripcion: 'Esmaltes semipermanentes charm limit con composición descripta en el envase.',
        stock: 8,
        img: '../images/charmlimitpremium.webp'
    },
    { 
        id: '4', 
        name: 'ESMALTES SEMIPERMANENTES NAVI STARSHINE',
        price: 990,
        category: 'esmaltes',
        tipo: 'Semipermanente',
        creador: 'Navi',
        descripcion: 'Esmaltes semipermanentes marca NAVI, colección starshine  – aprobados por Anmat. 15ml.',
        stock: 8,
        img: '../images/navistarshine.webp'
    },
    { 
        id: '5', 
        name: 'ESMALTES PINK MASK – COLECCIÓN SWEET',
        price: 1250,
        category: 'esmaltes',
        tipo: 'Semipermanete',
        creador: 'Pink Mask',
        descripcion: 'Esnaltes semipermanentes PINK MASK , aprobados por Anmat. COLECCIÓN LIMITADA.',
        stock: 8,
        img: '../images/pinkmasksweet.webp'
    },
    { 
        id: '6', 
        name: 'ESMALTES SEMIPERMANENTES – ANGELA BRESCIANO',
        price: 990,
        category: 'esmaltes',
        tipo: 'Semipermanentes',
        creador: 'Angela Bresciano',
        descripcion: 'Esmaltes semipermanentes marca Angela Bresciano, colección starshine  – aprobados por Anmat. 15ml.',
        stock: 5,
        img: '../images/angelabresciano.webp'
    },
    { 
        id: '7', 
        name: 'GEL DE CONSTRUCCIÓN x 30grs – CHERIMOYA',
        price: 2000,
        category: 'gel',
        tipo: 'Constructor',
        creador: 'Cherimoya',
        descripcion: 'Gel de construcccion marca CHERIMOYA 30 grs.',
        stock: 8,
        img: '../images/gelconstcherimoya.webp'
    },
    { 
        id: '8', 
        name: 'BUILDER GEL - PINK MASK',
        price: 2150,
        category: 'gel',
        tipo: 'Constructor',
        creador: 'Pink Mask',
        descripcion: 'Builder Gel es un producto pensado fundamentalmente para esculpir, pero también sirve para nivelar, reparar uñas dañadas o realizar kapping sin limado.',
        stock: 8,
        img: '../images/gelconstpinkmask.webp'
    },
    { 
        id: '9', 
        name: 'TOP COAT MATTE – PINK MASK',
        price: 1250,
        category: 'top',
        tipo: 'Coat',
        creador: 'Pink Mask',
        descripcion: 'Top Coat Matte marca Pink Mask de 15ml',
        stock: 8,
        img: '../images/topcoatmattepinkmask.webp'
    },
    { 
        id: '10', 
        name: 'TOP COAT MATTE CHARM LIMIT',
        price: 360,
        category: 'top',
        tipo: 'Coat',
        creador: 'Charm Limit',
        descripcion: 'Top Coat Matte marca Charm Limit de 10ml',
        stock: 8,
        img: '../images/topcoatmattecharmlimit.webp'
    },
]

const categories = [
    {id: 'esmaltes', description: 'Esmaltes'},
    {id: 'gel', description: 'Gel'},
    {id: 'top', description: 'Top'}
]


export const getCategories = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 100)
    })
}

export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 100)
    })
}

export const getProductsbyId = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}