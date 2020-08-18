/**
 * Mocking client-server processing
 */
// import _products from './data.json'
/*
import _products from './test.json'

const TIMEOUT = 100

export default {
    getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
    buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
*/
import axios from "axios";

const elccar = () => {
    let second={};
    let products=[];
    let first=[];
    let color1=[];
    let color2=[];
    let color3=[];
    let color4=[];
    let color5=[];
    let color6=[];
    let picture1=[];
    let picture2=[];
    let picture3=[];
    let picture4=[];
    let picture5=[];
    let picture6=[];
    let picture7=[];
    let picture8=[];
    let picture9=[];
    let picture10=[];
    let picture11=[];
    let picture12=[];
    let picture13=[];
    let picture14=[];
    let picture15=[];
    let picture16=[];
    let picture17=[];
    let picture18=[];
    axios.get(`http://localhost:8080/electriccars/getall`)
        .then((res) => {
            // products.push(res.data)
            console.log(products)
            first.push(res.data)
            first.map((product)=>{
                product.map((item,i)=>{
                    second = item
                    color1.push(item.color1)
                    color2.push(item.color2)
                    color3.push(item.color3)
                    color4.push(item.color4)
                    color5.push(item.color5)
                    color6.push(item.color6)
                    picture1.push(item.picture1)
                    picture2.push(item.picture2)
                    picture3.push(item.picture3)
                    picture4.push(item.picture4)
                    picture5.push(item.picture5)
                    picture6.push(item.picture6)
                    picture7.push(item.picture7)
                    picture8.push(item.picture8)
                    picture9.push(item.picture9)
                    picture10.push(item.picture10)
                    picture11.push(item.picture11)
                    picture12.push(item.picture12)
                    picture13.push(item.picture13)
                    picture14.push(item.picture14)
                    picture15.push(item.picture15)
                    picture16.push(item.picture16)
                    picture17.push(item.picture17)
                    picture18.push(item.picture18)

                    second.colors = [color1[i],color2[i],color3[i],color4[i],color5[i],color6[i]]
                    second.pictures = [picture1[i],picture2[i],picture3[i],picture4[i],picture5[i],picture6[i],
                        picture7[i],picture8[i],picture9[i],picture10[i],picture11[i],picture12[i],
                        picture13[i],picture14[i],picture15[i],picture16[i],picture17[i],picture18[i]]
                    products.push(second)
                })
                console.log(products)
            })
        })
        .catch(err => {
            console.log('신차 에러')
            throw err
        })
    return products
}

const TIMEOUT = 100

export default {
    getProducts: (cb, timeout) => setTimeout(() => cb(elccar()), timeout || TIMEOUT),
    buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}