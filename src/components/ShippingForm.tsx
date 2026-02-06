import {SubmitHandler, useForm} from "react-hook-form"

import React from 'react'
import { ShippingFormInputs, shippingFormSchema } from "@/types"
import {zodResolver} from "@hookform/resolvers/zod"
import { ArrowRight } from "lucide-react"
import {  useRouter } from 'next/navigation'
const ShippingForm = ({setShippingForm}:{setShippingForm:(data:ShippingFormInputs)=>void}) => {

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<ShippingFormInputs>({
    resolver:zodResolver(shippingFormSchema)
  })
  const router = useRouter()
  const handleShippingForm:SubmitHandler<ShippingFormInputs> = (data) => {
setShippingForm(data)
router.push("/cart?step=3", {scroll: false})
  }
  return (
   <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleShippingForm)}>
    <div className="flex flex-col gap-1">
      <label htmlFor="name" className="text-xs text-gray-500 font-medium">Name</label>
      <input
      className="border-b border-gray-200 py-2 outline-none text-sm"
       type="text" id="name" placeholder="Ali Shaid" {...register("name")} />
      {errors.name && (
        <p className="text-sm text-red-500">{errors.name.message}</p>
      )}
    </div>
    {/* 2 */}
     <div className="flex flex-col gap-1">
      <label htmlFor="email" className="text-xs text-gray-500 font-medium">Email</label>
      <input
      className="border-b border-gray-200 py-2 outline-none text-sm"
       type="email" id="email" placeholder="AliShaid@example.com" {...register("email")} />
      {errors.email && (
        <p className="text-sm text-red-500">{errors.email.message}</p>
      )}
    </div>
    {/* Phone */}
     <div className="flex flex-col gap-1">
      <label htmlFor="name" className="text-xs text-gray-500 font-medium">Phone</label>
      <input
      className="border-b border-gray-200 py-2 outline-none text-sm"
       type="text" id="phone" placeholder="+1(416) 555-1234" {...register("phone")} />
      {errors.phone && (
        <p className="text-sm text-red-500">{errors.phone.message}</p>
      )}
    </div>
    {/* Adrss */}
    <div className="flex flex-col gap-1">
      <label htmlFor="address" className="text-xs text-gray-500 font-medium">Address</label>
      <input
      className="border-b border-gray-200 py-2 outline-none text-sm"
       type="text" id="address" placeholder="123 Main St, Toronto Canada" {...register("address")} />
      {errors.address && (
        <p className="text-sm text-red-500">{errors.address.message}</p>
      )}
    </div>
    {/* city */}
    <div className="flex flex-col gap-1">
      <label htmlFor="city" className="text-xs text-gray-500 font-medium">City</label>
      <input
      className="border-b border-gray-200 py-2 outline-none text-sm"
       type="text" id="city" placeholder="Ontario,Toronto" {...register("city")} />
      {errors.city && (
        <p className="text-sm text-red-500">{errors.city.message}</p>
      )}
    </div>
     <button className='w-full bg-gray-800 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2 hover:bg-gray-900 transition-all duration-300'
     type="submit"
     >
            Continue
            <ArrowRight className='w-3 h-3'/>
          </button>
   </form>
  )
}

export default ShippingForm
