let pname = "Marker Pen";
class Product
{
    constructor()
    {
        console.log("Product Class constructor")
    }
    get_product_details()
    {
        console.log("Getting Details")
    }
}

//default import
module.exports = pname;

//named import
// module.exports = {pname,Product}