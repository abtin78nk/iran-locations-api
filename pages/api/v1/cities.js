import { cors } from "../../../middlewares/cors";

const data = require("../../../public/iran_cities_with_coordinates.json");

export default async function handler(req, res) {


    cors(req, res);
    const { state } = req.query;
    const stateItem = data.find(item => item.name === state);
    if (!state || !stateItem)
        return res.status(400).json({
            message: "send  a valid state name with `state` param"
        })

    res.status(200).json(stateItem.cities);
}
