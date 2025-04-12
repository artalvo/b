import product from "../models/product";

export const getAllProducts = async () => { //get point
    return await product.find();
};

export const seedInitialProducts = async () => {
    try {

    const products = [
        {
            title: "Casual Summer Dress",
            description: "dress",
            bodyType: "apple",
            occasion: "wedding",
            color: "Blue",
            season: "Summer",
            link: "https://ar.shein.com/Women-s-Long-Elegant-Modest-Long-Sleeve-Dress-p-37674172.html?src_identifier=st%3D2%60sc%3Ddress%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_home1743962648683&mallCode=1&pageListType=4",
            image: "https://img.ltwebstatic.com/images3_spmp/2024/06/23/bd/1719142976dd15bb1e932873db0f4912b5c540af1a.png"
        }, 
        {
            title: "work dress",
            description: "dress",
            bodyType: "hourglass",
            occasion: "work",
            color: "white",
            season: "spring",
            link: "https://meanblvd.com/en-me/collections/work-dress/products/akina-pleated-cuff-sleeved-linen-cotton-midi-dress-1?variant=51890162106536",
            image: "https://meanblvd.com/cdn/shop/files/akina-pleated-cuff-sleeved-linen-cotton-midi-dress-by-mean-blvd-4.jpg?v=1715091756&width=600"
        }, 
        {
            title: "winter velvet dress",
            description: "dress",
            bodyType: "rectangle",
            occasion: "wedding",
            color: "black",
            season: "winter",
            link: "https://www.asos.com/asos-design/asos-design-plunge-front-velvet-flutter-sleeve-midaxi-dress-in-black/prd/207185936#colourWayId-207185937",
            image: "https://images.asos-media.com/products/asos-design-plunge-front-velvet-flutter-sleeve-midaxi-dress-in-black/207185936-4?$n_320w$&wid=317&fit=constrain"
        }
    ];

    const existingProducts = await getAllProducts();
    if(existingProducts.length ===0){
        await product.insertMany(products);
    }
} catch (err){
    console.error("cannot see database", err);

}
};