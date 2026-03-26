import Monnify from 'monnify-js';

const monnify = new Monnify(process.env.NEXT_PUBLIC_MONNIFY_API_KEY || "", process.env.NEXT_PUBLIC_MONNIFY_CONTRACT_CODE || "")

export const payWithMonnify = (data: { fullname: string, email: string, amount: number }) => {

    monnify.initializePayment({
        amount: data.amount,
        currency: "NGN",
        apiKey: process.env.NEXT_PUBLIC_MONNIFY_API_KEY || "",
        contractCode: process.env.NEXT_PUBLIC_MONNIFY_CONTRACT_CODE || "",
        reference: (new Date().getTime()).toString(),
        customerFullName: data.fullname,
        customerEmail: data.email,
        paymentDescription: "BOS Unlimited checkout payment",
        metadata: {
            name: data.fullname,
        },
        onLoadStart: () => {
            console.log("loading has started")
        },
        onComplete: function (response) {
            //Implement what happens when the transaction is completed.
            console.log(response)
        },
    })
}