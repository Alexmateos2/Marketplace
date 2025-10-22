import React from "react";


const CarritoItem = () => {

 const carritoItems = [
  {
    id: 1,
    name: "Wireless Noise-Canceling Headphones",
    quantity: 1,
    price: 249,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuATDXfe61e9ZoLnzkSNAJHcLi22_aRPmTVRY_f1on6jxP1x5uOmiwIjWS3LXs1JXlVSGqznnSmSDZNKANWTOADogKXUxzrQMujJl2n-NXAoHFscshXc0jwMg27iIQkVLTs-qrh69sVo9SDHQYj7IWHmhEYMdqiFkzeRwkHBdLzLVHDw5rah5-0oFyaIupB-PLb0g0bcwXF2WmjiNswjYqDI-HjDPKVJ1mSpzGoYtFQmrLY3VgE2VLvMAbLZChvMSRuwGDcNPbi_9kc",
  },
  {
    id: 2,
    name: "Ergonomic Wireless Mouse",
    quantity: 2,
    price: 79,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDXt2lYLuYJEIL02EcX0Keh7Jg4Swb2bE-iGoEmT90beSTeY827BnLAofbLT6twryQyvYjPOZ59djR3ZGJzyMoTMOvduW8wjG_eOPAsWUU3kMqeQpwf_UHMuj6_xT6hcNDRpFw1I1eARb_xkq6g4NUMw0l-_SjVVgzF6ubsTofMWVLrd4-GvI0yqAslwhZ63gDfaglLUO0vEQ6gOcl5rlz9dgniwV7spKBxqbjqU6jqDltlAV8M8bSJtoL629O9EMPkgPRysFf3H_4",
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    quantity: 1,
    price: 129,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB3mpCJauzv5ea0LMRW8dh9iMeVCcF09069vm5LblW3FfxoEGkAU5fiqd5udUZD0NIi1X2XAoJfCRmzvi_5VzhIQ9pR_DPeK8D1J7PyAof2kT761pKvUgDEk9IkPL80MOLZhgKomPiyJfTHmIu3uAJ9wiRNRFYI8cSt4slw-CgKc4lumPwaMCSbfL7SJ2prcJm8OYhsHC_LhTn607ye0sl3h0e9MtB1GNFxwPbfBjmaoUfXD111AmmYjeP5lCOdz_Jy_KC1OH_Slzw",
  },
];

  return (
    <div className="space-y-6">
      {carritoItems.map((item) => (
        <>
        <div
          key={item.id}
          className="flex items-center gap-6 p-4 rounded-lg bg-white dark:bg-background-dark/50"
        >
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-20 h-20"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <div className="flex-1">
            <p className="font-bold text-lg text-black dark:text-white">
              {item.name}
            </p>
            <p className="text-sm text-black/60 dark:text-white/60">
              Quantity: {item.quantity}
            </p>
          </div>
          <p className="text-lg font-medium text-black dark:text-white">
            ${item.price}
          </p>
          
        </div>
         <hr className="border-black/10 dark:border-white/10 my-4" />
        </>
      ))}
    </div>
  );
};

export default CarritoItem;
