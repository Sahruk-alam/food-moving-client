import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {
  const {register,handleSubmit,watch, formState: { errors },
  } = useForm();
  const senderRegion = watch("senderRegion");
  const serviceCenter = useLoaderData();
 const duplicateRegions = serviceCenter.map(c => c.region);
 const Regions = [...new Set(duplicateRegions)];
const districtByRegion = (region) => {   
    const regionDistricts = serviceCenter.filter(c => c.region === region);
    const districts = regionDistricts.map(c => c.district);
    return districts;
}

  const handleSendParcel = (data) => {
    console.log(data);
  };
  return (
    <div className="mt-10 ">
      <h2 className="text-3xl ml-1.5 font-bold">Send a Parcel</h2>
      <form onSubmit={handleSubmit(handleSendParcel)} className="p-5 text-black">
        {/* document */}
        <div className="mt-5 ">

          <label className="label mr-5">
            <input type="radio"{...register("parcelType")}
              value="document" className="radio" defaultChecked />
            Document
          </label>

          <label className="label">
            <input type="radio" {...register("parcelType")}
              value="non-document" className="radio" />
            Non-Document
          </label>
        </div>

        {/* parcel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-5">

        <fieldset className="fieldset">
          <label className="label">Parcel Name</label>
          <input type="text" {...register("parcelName")} className="input w-full"
           placeholder="parcel name" />
        </fieldset>

        <fieldset className="fieldset">
          <label className="label">Parcel weight(KG)</label>
          <input type="number" {...register("parcelWeight")} className="input w-full"
           placeholder="parcel weight(KG)" />
        </fieldset>

        </div>
        {/* two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-5">
         
            {/* sender details */}
           <fieldset className="fieldset">
        <h3 className="text-2xl font-bold">Sender Details</h3>

          <label className="label font-bold">Sender name</label>
          <input type="text" {...register("senderName")} className="input w-full"
           placeholder="sender name" />

          <label className="label font-bold">Sender Email</label>
          <input type="email" {...register("senderEmail")} className="input w-full"
           placeholder="sender email" />
           
            <fieldset className="fieldset ">
              <legend className="fieldset-legend">Sender Regions</legend>
              <select {...register("senderRegion")} defaultValue="Pick a region" className="select">
                <option disabled={true}>Pick a region</option>
                
                {
                Regions.map((r, i) => (
                <option key={i} value={r}>{r}</option>
                )
            )}
              </select>
              <span className="label">Optional</span>
            </fieldset>
    {/* sender district */}
        <fieldset className="fieldset ">
              <legend className="fieldset-legend">Sender District</legend>
              <select {...register("senderDistrict")} defaultValue="Pick a region" className="select">
                <option disabled={true}>Pick a district</option>
                
                {
                districtByRegion(senderRegion).map((r, i) => (
                <option key={i} value={r}>{r}</option>
                )
            )}
              </select>
              <span className="label">Optional</span>
            </fieldset>

          <label className="label font-bold mt-2">SenderAddress</label>
          <input type="text" {...register("senderAddress")} className="input w-full"
           placeholder="sender address" />

          <label className="label font-bold mt-2">Sender Number</label>
          <input type="number" {...register("senderPhone")} className="input w-full"
           placeholder="sender phone" />


          <label className="label font-bold mt-2">Pickup Instruction</label>
          <input type="text" {...register("pickupInstruction")} className="input w-full"
           placeholder="pickup instruction" />

        </fieldset>

        {/* receiver details */}
        
         <fieldset className="fieldset">
         <h3 className="text-2xl font-bold">Receiver Details</h3>

          <label className="label font-bold">Receiver name</label>
          <input type="text" {...register("receiverName")} className="input w-full"
           placeholder="receiver name" />

           <label className="label font-bold">Email</label>
          <input type="email" {...register("receiverEmail")} className="input w-full"
           placeholder="receiver email" />

          <label className="label font-bold mt-2"> Receiver Address</label>
          <input type="text" {...register("receiverAddress")} className="input w-full"
           placeholder="receiver address" />

          <label className="label font-bold mt-2">Receiver Number</label>
          <input type="number" {...register("receiverPhone")} className="input w-full"
           placeholder="receiver phone" />

          <label className="label font-bold mt-2">Receiver District</label>
          <input type="text" {...register("receiverDistrict")} className="input w-full"
           placeholder="receiver district" /> 

          <label className="label font-bold mt-2">Delivery Instruction</label>
          <input type="text" {...register("deliveryInstruction")} className="input w-full"
           placeholder="delivery instruction" />

        </fieldset> 

        </div>
        <input
          type="submit" value="Send Parcel" 
          className="btn btn-primary text-black"
        />
      </form>
    </div>
  );
};

export default SendParcel;
