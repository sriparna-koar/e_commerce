import product from "../../models/product";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
    let products = await product.find();
    let jacket = {};

    for (let item of products) {
        if (item.title in jacket) {
            if (item.availableqty > 0) {
                // Split and trim colors
                const colorsArray = item.color.split(',').map(color => color.trim());

                // Add only unique colors to the existing ones
                jacket[item.title].color = Array.from(new Set([...jacket[item.title].color, ...colorsArray]));
            }

            if (!jacket[item.title].color.includes(item.color) && item.availableqty > 0) {
                jacket[item.title].color.push(item.color);
            }

            if (item.availableqty > 0) {
                // Split and trim sizes
                const sizesArray = item.size.split(',').map(size => size.trim());

                // Add only unique sizes to the existing ones
                jacket[item.title].size = Array.from(new Set([...jacket[item.title].size, ...sizesArray]));
            }

        } else {
            jacket[item.title] = JSON.parse(JSON.stringify(item));
            
            if (item.availableqty > 0) {
                // Split and trim colors
                const colorsArray = item.color.split(',').map(color => color.trim());
                jacket[item.title].color = colorsArray;

                // Split and trim sizes
                const sizesArray = item.size.split(',').map(size => size.trim());
                jacket[item.title].size = sizesArray;
            }
        }
    }

    res.status(200).json({ jacket });
};

export default connectDb(handler);
