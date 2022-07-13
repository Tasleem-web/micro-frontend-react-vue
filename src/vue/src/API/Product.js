import API from "./api";

export default {
    all(endPoint) {
        return API.post(endPoint);
    },
    getByProductId(endPoint, payload = null) {
        if (payload) {
            return API.get(endPoint, {
                params: {
                    id: payload
                }
            });
        }
        return API.get(endPoint)
    },
    postProductFile(endPoint, payload) {
        return API.post(endPoint, payload)
    },
    addProduct(endPoint, payload) {
        return API.post(endPoint, payload)
    }
}