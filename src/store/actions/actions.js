import axios from 'axios';

export const FILTER_ITEMS = 'FILTER_ITEMS';
export const SIGN_INPOPPED = 'SIGN_INPOPPED';
export const HOVERED ='HOVERED';
export const HANDLE_CLICK ='HANDLE_CLICK';
export const CHECKED_OUT ='CHECKED_OUT';
export const CLOSE_MODAL ='CLOSE_MODAL';
export const INVOKE_BOT ='INVOKE_BOT';
export const VIEW_RESTAURANTS = 'VIEW_RESTAURANTS';
export const RADIO_SELECT  ='RADIO_SELECT';
export const BACK = 'BACK';
export const SET_FOODITEMS ='SET_FOODITEMS';
export const FETCH_FOODITEMS_FAILED = 'FETCH_FOODITEMS_FAILED';
export const SET_RESTAURANTS = 'SET_RESTAURANTS';
export const CLEAR_QUANTITY='CLEAR_QUANTITY';
export const ORDER_FORM ='ORDER_FORM';
export const CLOSE_ADDRESS = 'CLOSE_ADDRESS';


export const filterItems = (filteredFood) =>{
    return{
        type:'FILTER_ITEMS',
        filteredFood:filteredFood
    }
}

export const signIn = (isSignInPopped) =>{
    return{
        type:'SIGN_INPOPPED',
        isSignInPopped:isSignInPopped
    }
}

export const onHover = (isHovered) =>{
    return{
        type:'HOVERED',
        isHovered:isHovered
    }
}

export const handleClick = (anchorEl)=>{
    return{
        type:'HANDLE_CLICK',
        anchorEl:anchorEl
    }
}

export const checkOut = (isCheckedOut)=>{
    return{
        type:'CHECKED_OUT',
        isCheckedOut:isCheckedOut,
    }
}

export const closeModal = (isCheckedOut)=>{
    return{
        type:'CHECKED_OUT',
        isCheckedOut:isCheckedOut
    }
}

export const closeAddressModal = (isOrdered)=>{
    return{
        type:'CLOSE_ADDRESS',
        isOrdered:isOrdered
    }
}

export const orderForm = (isOrdered)=>{
    return{
        type:'ORDER_FORM',
        isCheckedOut:false,
        isOrdered:isOrdered
    }
}

export const invokeBot = (IsBotEnabled)=>{
    return{
        type:'INVOKE_BOT',
        isBotEnabled:IsBotEnabled
    }
}

export const setFoodItems =(lists)=>{
    return{
        type:'SET_FOODITEMS',
        lists:lists
    }
}

export const fetchFoodItemsFailed = ()=>{
    return{
        type:'FETCH_FOODITEMS_FAILED',
        error:true
    }
};

export const getFoodItems = () =>{
    return dispatch =>{
        const url="https://api.jsonbin.io/b/5ec694b118c8475bf16da1e3";
        axios.get(url)
			.then(response => {
                response.data=[
                    {
                        "name":"Pizza"
                        ,"price":0
                        ,"imgsrc":"https://media.istockphoto.com/photos/picking-slice-of-pepperoni-pizza-picture-id1133727757?k=6&m=1133727757&s=612x612&w=0&h=6wLUhTKLTudlkgLXQxdOZIVr6D9zuIcMJhpgTVmOWMo="
                        ,"id":1
                        ,"isMostOrdered":true 
                        ,"quantity":0
                    },
                    {
                        "name":"Burger"
                        ,"price":0
                        ,"imgsrc":"https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        ,"id":2
                        ,"isMostOrdered":true
                        ,"quantity":0
                     },
                
                     {
                         "name":"Fries",
                         "price":0
                         ,"imgsrc":"https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                         ,"id":3
                         ,"isMostOrdered":false
                         ,"quantity":0
                    },
                
                    {
                        "name":"Italian"
                        ,"price":0
                        ,"imgsrc":"https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
                        ,"id":4 
                        ,"isMostOrdered":true
                        ,"quantity":0
                    },
                    {
                        "name":"Icecreams"
                        ,"price":0
                        ,"imgsrc":"https://images.pexels.com/photos/461430/pexels-photo-461430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
                        ,"id":5 
                        ,"isMostOrdered":false
                        ,"quantity":0
                    },
                    {
                        "name":"Juice"
                        ,"price":0
                        ,"imgsrc":"https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
                        ,"id":6
                        ,"isMostOrdered":false
                        ,"quantity":0
                     },
                
                     {
                        "name":"Deserts",
                        "price":0,
                        "imgsrc":"https://images.pexels.com/photos/461430/pexels-photo-461430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
                        "id":7,
                        "isMostOrdered":false,
                        "quantity":0 
                        },
                     {
                        "name":"Dosa",
                        "price":0,
                        "imgsrc":"https://images.pexels.com/photos/221143/pexels-photo-221143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                        "id":8,
                        "isMostOrdered":true,
                        "quantity":0 
                     },
                
                     {
                        "name":"Roti",
                        "price":0,
                        "imgsrc":"https://chefsmandala.com/wp-content/uploads/2018/03/Roti-Chapati-Bread.jpg",
                        "id":9,
                        "isMostOrdered":false,
                        "quantity":0 
                     },
                     {
                        "name":"Frankie",
                        "price":0,
                        "imgsrc":"https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                        "id":10,
                        "isMostOrdered":true,
                        "quantity":0 
                     },
                
                     {
                        "name":"Bread",
                        "price":0,
                        "imgsrc":"https://images.pexels.com/photos/708488/pexels-photo-708488.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                        "id":11,
                        "isMostOrdered":true,
                        "quantity":0 
                     },
                     {
                        "name":"doughnut",
                        "price":0,
                        "imgsrc":"https://i2.wp.com/www.aimadeitforyou.com/wp-content/uploads/2016/04/fullsizeoutput_5f68.jpeg?fit=750%2C500&ssl=1",
                        "id":12,
                        "isMostOrdered":false,
                        "quantity":0 
                     },
                
                     {
                        "name":"naan",
                        "price":0,
                        "imgsrc":"https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                        "id":13,
                        "isMostOrdered":false,
                        "quantity":0 
                     },
                     {
                        "name":"cakes",
                        "price":0,
                        "imgsrc":"https://images.pexels.com/photos/69817/france-confectionery-raspberry-cake-fruit-69817.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                        "id":14,
                        "isMostOrdered":true,
                        "quantity":0 
                     },
                     {
                        "name":"fruits",
                        "price":0,
                        "imgsrc":"https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                        "id":15,
                        "isMostOrdered":true,
                        "quantity":0 
                     }]
                    dispatch(setFoodItems(response.data))
            })
            .catch(error =>{
                    dispatch(fetchFoodItemsFailed())
            })
    }
};

export const setRestaurants = (restaurants)=>{
    return{
        type:'SET_RESTAURANTS',
        restaurants:restaurants

    }
}


export const getRestaurants = ()=>{
    return dispatch=>{
        const url="https://api.jsonbin.io/b/5ec69449e91d1e45d10e96bc";
        axios.get(url)
			.then(response => {
                    dispatch(setRestaurants(response.data))
            })
            .catch(error =>{
                    dispatch(fetchFoodItemsFailed())
            });
    }
}