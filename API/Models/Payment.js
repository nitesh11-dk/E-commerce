import mongoose from 'mongoose'

const paymentSchema = new mongoose.Schema({
    orderDate: {
        type: Date,
        default: Date.now
    },
    payStatus: {
        type: String
    }
}, { strict: false })

//  strict  mongoose kya karta hai jitna apanae schema me define kiya hai vo yutnana hii chozo ko leta haia agar hum chhate hai kii vo additinal chizo ko le then we can do that strict  false ;  


const Payment = mongoose.model("Payment", paymentSchema)

export default Payment 