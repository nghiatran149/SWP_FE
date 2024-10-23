import { API } from "./api";

export const paymentService = {
    createPayment(data) {
        return API.post("/PayOSPayment/create-payment-link", data);
    },


}