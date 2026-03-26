'use client'
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import TotalPrice from "@/components/totalPrice/totalPrice";
import { storeContext } from "@/context/useStore";
import { currencyFormatter } from "@/helpers/currencyFormatter";
import { payWithMonnify } from "@/helpers/payWithMonnify";
import { ICart, IProduct } from "@/interface/store";
import { checkoutSchema } from "@/schema/checkout";
import { EnvelopeIcon, GlobeIcon, MapPinIcon, PhoneIcon, UserIcon } from "@phosphor-icons/react";
import { Formik } from "formik";
import { useContext } from "react";
import { LoaderIcon } from "react-hot-toast";

export default function CheckoutPage() {
    const { cart, products } = useContext(storeContext)

    return (
        <div className="flex flex-col gap-6">

            <div className="flex flex-col items-center md:px-[8%] px-6 mt-2 py-12 bg-slate-100 dark:bg-gray-500/[0.1]">
                <h2 className="font-bold text-[28px] uppercase">Checkout</h2>
                <p>Buy ({cart.length} items) now</p>
            </div>

            <div className="flex flex-wrap items-start gap-6 md:px-[8%] px-6 py-4">
                <div className="lg:w-[60%] w-full flex flex-col gap-2">
                    <Formik
                        initialValues={{ fullname: '', email: '', country: '', address: '', phoneIcon: 0 }}
                        validationSchema={checkoutSchema}
                        onSubmit={( values, { setSubmitting }) => {
                            console.log(values)
                            payWithMonnify({ ...values, amount: products.filter((item: IProduct) => cart.map((item: ICart) => item.id).indexOf(item.id) !== -1 )
                                            .map((product: IProduct) => {return {price: +product?.price * cart.filter(item => item.id === product?.id)[0]?.quantity}})
                                            .reduce((a: number,v: { price: number }) => a = a + v.price, 0)})
                            setSubmitting(false);
                        }}
                        >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
                                <Input name="fullname" label="" value={values.fullname} onChange={handleChange} type="text" error={touched.fullname ? errors.fullname : ""} placeholder="Full name" leftIcon={<UserIcon size={16}/>}/>
                                <Input name="email" label="" value={values.email} onChange={handleChange} type="email" error={touched.email ? errors.email : ""} placeholder="Email" leftIcon={<EnvelopeIcon size={16}/>}/>
                                <Input name="country" label="" value={values.country} onChange={handleChange} type="text" error={touched.country ? errors.country : ""} placeholder="Country" leftIcon={<GlobeIcon size={16}/>}/>
                                <Input name="address" label="" value={values.address} onChange={handleChange} type="text" error={touched.address ? errors.address : ""} placeholder="Address" leftIcon={<MapPinIcon size={16}/>}/>
                                <Input name="phoneIcon" label="" value={values.phoneIcon} onChange={handleChange} type="text" error={touched.phoneIcon ? errors.phoneIcon : ""} placeholder="PhoneIcon number" leftIcon={<PhoneIcon size={16}/>}/>

                                <Button className="w-full" variant="secondary" type="button" disabled={isSubmitting} >{ isSubmitting ? <LoaderIcon/> : "Buy now" }</Button>
                            </form>
                        )}
                        </Formik>
                </div>
                
                <div className="sm:sticky top-4 gap-2 md:w-[30%] w-[100%] rounded-[20px] p-6 bg-gray-300/[0.08]">
                    <h2 className="text-[16px] uppercase font-bold">Summary</h2>
                    <div className="flex flex-col gap-2 py-6">
                        <div className="flex justify-between items-center">
                            <p>Items</p>
                            <p>{cart.length}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p>Subtotal</p>
                            <p><TotalPrice /></p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p>Discount</p>
                            <p>{currencyFormatter(0)}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p>Total</p>
                            <p className="text-lg font-bold"><TotalPrice /></p>
                        </div>
                    </div>
                    <Button href="/" variant="secondary" className="mb-4 w-full">Back to shop</Button>
                </div>
            </div>

        </div>
    )
}