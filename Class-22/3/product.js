let display_Products=()=>{
    fetch('https://dummyjson.com/products')
    .then((resp)=>{return resp.json()})
    .then((product_data)=>{
        let rows=""
        for( product of product_data.products){
            rows=rows+`<tr>
                            <td>${product.id}</td>
                            <td>${product.title}</td>
                            <td>${product.price}</td>
                            <td>${product.rating}</td>
                       </tr>`
        }
        document.getElementsByTagName('tbody')[0].innerHTML=rows
    })
    .catch((err)=>{
        document.getElementsByTagName('tbody')[0].innerHTML="No Data"
    })


    
}

display_Products()