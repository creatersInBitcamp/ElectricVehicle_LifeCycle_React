import axios from 'axios'
import {useState} from 'react'
// Get Unique Brands from Json Data
export const getBrands = (products) => {
    var uniqueBrands = [];
    products.map((product, index) => {
        if (product.brand) {
            product.brand.map((tag) => {
                if (uniqueBrands.indexOf(tag) === -1) {
                    uniqueBrands.push(tag);
                }
            })
        }
    })
    //console.log(uniqueBrands)
    return uniqueBrands;
}
/*export const getAges = (products) => {
    const uniqueAges = [];
    products.map((product, index) => {
        if (product.age) {
            product.age.map((age) => {
                if (uniqueAges.indexOf(age) === -1) {
                    uniqueAges.push(age);
                }
            })
        }
    })
    console.log(uniqueAges)
    return uniqueAges;
}*/

// Get Unique Colors from Json Data
export const getColors = (products) => {
    var uniqueColors = [];
    products.map((product, index) => {
        if(product.colors) {
            product.colors.map((color) => {
                if (uniqueColors.indexOf(color) === -1) {
                    uniqueColors.push(color);
                }
            })
        }
    })
    //console.log(uniqueBrands)
    return uniqueColors;
}
/*export const getMileages = (products) => {
    const uniqueMileages = [];
    products.map((product, index) => {
        if(product.colors) {
            product.colors.map((mileage) => {
                if (uniqueMileages.indexOf(mileage) === -1) {
                    uniqueMileages.push(mileage);
                }
            })
        }
    })
    console.log(uniqueMileages)
    return uniqueMileages;
}*/

// Get Minimum and Maximum Prices from Json Data
export const getMinMaxPrice = (products) => {
    let min = 100, max = 15000;

    products.map((product, index) => {
        let v = product.price;
        min = (v < min) ? v : min;
        max = (v > max) ? v : max;
    })

    return {'min':min, 'max':max};
}

export const getVisibleproducts = (data, { brand, color, value, sortBy }) => {
    return data.products.filter(product => {

        let brandMatch;
        if(product.brand)
            brandMatch = product.brand.some(tag => brand.includes(tag))
        else
            brandMatch = true;

        let colorMatch;
        if(color && product.colors) {
            colorMatch = product.colors.includes(color)
        }else{
            colorMatch = true;
        }

        const startPriceMatch = typeof value.min !== 'number' || value.min <= product.price;
        const endPriceMatch = typeof value.max !== 'number' || product.price <= value.max;

        return brandMatch && colorMatch && startPriceMatch && endPriceMatch;
    }).sort((product1, product2) => {
        if (sortBy === 'HighToLow') {
            return product2.price < product1.price ? -1 : 1;
        } else if (sortBy === 'LowToHigh') {
            return product2.price > product1.price ? -1 : 1;
        } else if (sortBy === 'Newest') {
            return product2.eccarId < product1.eccarId ? -1 : 1;
        } else if (sortBy === 'AscOrder') {
            return product1.carName.localeCompare(product2.carName);
        } else if (sortBy === 'DescOrder') {
            return product2.carName.localeCompare(product1.carName);
        } else{
            return product2.eccarId > product1.eccarId ? -1 : 1;
        }
    });
}
export const getVisibleUsedProducts = (data, { value }) => {
    return data.products.filter(product => {

        /*let ageMatch;
        if(product.ages)
            ageMatch = product.ages.some(age => age.includes(age))
        else
            ageMatch = true;

        let mileageMatch;
        if(mileage && product.mileages) {
            mileageMatch = product.mileages.includes(mileage)
        }else{
            mileageMatch = true;
        }*/

        const startPriceMatch = typeof value.min !== 'number' || value.min <= product.price;
        const endPriceMatch = typeof value.max !== 'number' || product.price <= value.max;

        return startPriceMatch && endPriceMatch;
    })/*.sort((product1, product2) => {
        if (sortBy === 'HighToLow') {
            return product2.price < product1.price ? -1 : 1;
        } else if (sortBy === 'LowToHigh') {
            return product2.price > product1.price ? -1 : 1;
        } else if (sortBy === 'Newest') {
            return product2.usedCarId < product1.usedCarId ? -1 : 1;
        } else if (sortBy === 'AscOrder') {
            return product1.carName.localeCompare(product2.carName);
        } else if (sortBy === 'DescOrder') {
            return product2.carName.localeCompare(product1.carName);
        } else{
            return product2.usedCarId > product1.usedCarId ? -1 : 1;
        }
    });*/
}

export const getCartTotal = cartItems => {
    var total = 0;
    for(var i=0; i<cartItems.length; i++){
        total += parseInt(cartItems[i].qty, 10)*parseInt((cartItems[i].price), 10);
    }
    return total;
}

// Get Trending Tag wise Collection
export const getTrendingTagCollection = (products, type, tag) => {
    const items = products.filter(product => {
        return product.category === type && product.tags.includes(tag);
    })
    return items.slice(0,8)
}

// Get Trending Collection
export const getTrendingCollection = (products) => {
    const items = products.filter(product => {
        return product.new === true;
    })
    return items.slice(0,8)
}

// Get Special 5 Collection
export const getSpecialCollection = (products, type) => {
    const items = products.filter(product => {
        return product.category === type;
    })
    return items.slice(0,5)
}

// Get TOP Collection
export const getTopCollection = products => {
    const items = products.filter(product => {
        return product.rating > 4;
    })
    return items.slice(0,8)
}

// Get New Products
export const getNewProducts = (products, type) => {
    const items = products.filter(product => {
        return product.new === true && product.category === type;
    })

    return items.slice(0,8)
}

// Get Related Items
export const getRelatedItems = (products, type) => {
    const items = products.filter(product => {
        return product.category === type;
    })

    return items.slice(0,4)

}

// Get Best Seller Furniture
export const getBestSellerProducts = (products, type) => {
    const items = products.filter(product => {
        return product.sale === true && product.category === type;
    })

    return items.slice(0,8)
}

// Get Best Seller
export const getBestSeller = products => {
    const items = products.filter(product => {
        return product.sale === true;
    })

    return items.slice(0,8)
}

// Get Mens Wear
export const getMensWear = products => {
    const items = products.filter(product => {
        return product.sale === true;
    })

    return items.slice(0,8)
}

// Get Womens Wear
export const getWomensWear = products => {
    const items = products.filter(product => {
        return product.sale === false;
    })

    return items.slice(0,8)
}

// Get Posts
export const getPosts = () => {
    const posts = []
     axios.get('http://localhost:8080/posts/getall')
        .then((res)=>{
            console.log('getPosts axios 작동')
            console.log(res.data)
            res.data.slice(0,8)
        })
        .catch((err)=> {
            console.log(err.status)
        })
    return posts
}

// Get Single Product
export const getSingleItem = (products, id) => {

    const items = products.find((element) => {
        return element.eccarId === id;
    })
    return items;
}

// Get Feature Products
export const getFeatureImages = (products, type) => {

    const items = products.filter(product => {
        return product.type === type;
    })
    return items;
}


