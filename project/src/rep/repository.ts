import Product from "@/models/product"
import axios from "axios"

export default class Repa {
    private getProdById(id: Number) {
        const Prod = new Product()
        axios.get("/api/products/" + id).then((response) => {
            Prod.id = response.data.Id
        }
}