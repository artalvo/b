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