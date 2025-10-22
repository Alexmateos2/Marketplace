import React from "react";
const newProducts = [
  {
    id: 1,
    name: "AeroDrone Pro",
    price: 999.0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0SuEuZlVu6whRgcPHIvSjTXee4NuXGsKADMPTmxUuRGmHDS6jrHNfFBHUjVyyJlg9Jl0MR7ty1aBA1HWKNWJQugAO6sDZOm3IvSOZ5SnyLquiAHyLmRutX_yeBz9iu3c8ugxYWgXj7shrMzJ4EXWPFtgA7AttLG4bwixw8Zle-Ga3mVmBpZ2CDH14DC32kVmlJJwncrZtyLMY-HF-88KR0xAUiYlV7WKE9-ozWIluemF8vRiJmfk2V79tp4qx1KzUaarJgupeJwE",
    tag: "NEW",
  },
  {
    id: 2,
    name: "Lumina Smart Lamp",
    price: 89.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRXgL0SzDh_gzsURmyA_H-olprxl_MZytK6YZDGtl-dFV_wxmSJLDwGrNPA03a_sLielmY_4WsFAZH_ubCtbFAn3vObGKuqXYmT8de2Jp_l36FhUv0lErAU2F6_Jo1QR5v-MaS2vpeZOfoYvinJ7VldsrQEk98t142FP6OESpGifGWTo2Opj-2zQQZ5TkeqB4fNxqvD3RWMv2WXxvg9tpb9WjNbE5u3u5D1TkQZUKE3h5jsdHZNBYBNxYQ6sOKZFl7a0imr5edQV4",
    tag: "NEW",
  },
  {
    id: 3,
    name: "AudioBliss Headphones",
    price: 249.0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBPQwsjmV9fjJtHwhzDTtLLntY1cTOEicog-1LSa5xLbod_GwLJkYdwwYC_cPzD-FY8W9WPwJNVCY1I1BQzhHUmR2X3Xmjop4qb5zxYk_L19DVPYVhdMZdsLN7xpLEYZnq_K_IG4CtH00LhNRuwShbgr5a_w7uNWVObQ-Y35DD_CZpvW6BZKjybwj5xiO1p1eRm1HVEsxkqKMfqqwuKZM4fKvPGSNuNGp4hDPiqjI4y3s_BbJnXj2u5KUDt_QQLal1J-CxyVFVuNZ8",
    tag: "NEW",
  },
  {
    id: 4,
    name: "VoltPack Go",
    price: 59.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAzE36pWJaewbWtuMmQual3mRPk302N6_4hHmzn_iYeXpbsaim0x9FQIH3p9KDNnif4WrXLcSxu4i6vl4OGnBHIbvRkMyPAMPD6PkSqqZ-6Os7TGVjHv17GU4KU_jDnutejqZrLQ6ZKJcZcqa7eMK17VmHTX8ublcq2JvgByQT3VdtL9L3lKvcmkXoZa5Onjmbaq5Rocpe6C1RlgJn5guRGjv8tn0P_duGkyun6cJd1_yeT3-t-mbf3m05wcknr9Y5-rwT1UDGym70",
    tag: "NEW",
  },
  {
    id: 5,
    name: "CrystalView 4K Monitor",
    price: 499.0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDspCPVksr7za5QqTapUsQsjKkO93h22B-FNQZKFDNaZxA4PudVIzN--H7uqcRFfAejC5Jvxkcufiz2_dkcxFiyRGfgcVwkaUvgw1zUzqT6Lm5vYssucht40YT3jyOg8_rIL8gao8rLja_CNaJc2DHlYgrEnNH1dL9dFtPOVlpQAT600zRXofXwabkz-Wcjli8L2ztczJhSgehz10BgU93-xqkM9dFxluX2EBLOYbZZKDYmSVfGFnN1eQY7qHFOFxPL3HZGEMTRGXs",
    tag: "NEW",
  },
  {
    id: 6,
    name: "ErgoGlide Mouse",
    price: 79.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBe27YaI6pbGKQ6v25l9vTvq9GZn7k3vOwSr1hqbj92Nuei_M9rmMKJs80ECxaCrNfqkX9LFbwyCn6FsiHoCba_f-wMJHC2dXsi9qDHwL_SNFQE-sOkK4p3uiaQrYPO3gJsuitxqAaK74UyCEUbkufHYhhFrFh0m1Y8fFYWU-YKG8x7pQut1fReq7WokG1y8hCMmfR73tCkOSRqBpj7uD6lgzU3yBlPMKeT_51jFU9tlPtQXFhjN3C4p3W3W1L-s75WnvuuJ7ktz7U",
    tag: "NEW",
  },
  {
    id: 7,
    name: "ChromaType Keyboard",
    price: 149.0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA11z_iZFWx5mJIABWE5C6Q7_Ejx5c-3rLcTvp2gplNyYmHB6cJLcxq_I5sT-_QX3GkDZxv3mitrzIduwsKVyrQUNn_w-gC0WcHzFKnUVLCA7StuoI9Sup4LX2Hq4w1GmeUizM6Nf50QUiu9atN1HanpDxcZvWM03ParOwgNrXlqBZzMhtPlyHulYZlekWWiRNdCbtmlZmKGWXuv_Q0FY8YRtWSIoWLDTyKenelFiUjDgDw32F5GsLhJVjNjvWcsLnGPNFpfLlVnfY",
    tag: "NEW",
  },
  {
    id: 8,
    name: "ChronoWatch 2",
    price: 329.0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7d4bCDBZBYO98_pU2-qgBte_mtzz6igNkZTUKSBbkK4OclOSmrtDDa3RtpDCgKcwuRkAdihwSzhqLrpPkBCkthf3h0DP5yRXpOoAktx85V-f7f32bM8LIQSVmYPyf8r_ihay-MM0LO1HNa4sMc68eB-W31MdXI5tSlRaxkLTWM4fQ4NSwzmMrvupd6hhLkGUJEwy3kVu1dI3iIDInBwS3r_E0cB7UXGv-p1ChPElUL0MFS2QBIN0_BpBmwAIJI2uE8LiaR8ZT-vQ",
    tag: "NEW",
  },
  {
    id: 9,
    name: "ConnectMax Router",
    price: 199.0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDncfW2TSjbw79DyE3i2nXYc8XvNgdmJyo0eUIrEvS64MTkM08pkJZ7dJf0zxoa05xzSc-r-XsAV9zYVQ3-Im7ozg1XZuIbc_GnJ_eIL8V2Yh2_Uy8fnN8Vap2CBdTSbV70JYq6GeHvRkuF18AZiwDAw7M4gYG95zYB98gCq2DBZwcV9m8Ft5owb1Mqow6ZLCdOa24InSHcMNMzktvbVAuS8h6n8AEpDieOr28MDwDlC8ACYTFqTKz0LA91MWq9jApyevd1iJnIQ3E",
    tag: "NEW",
  },
  {
    id: 10,
    name: "VirtuView VR",
    price: 399.0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDv_s_0uqld3ru1H5CShyuxv751-mjngkzLnucTRudbBZjtU01OgNxP7mEjJZ8t3bE4wPfVLrrLiMNK4mgLJapM7K6IqijVJwUH_FH4cGUECR3S3a0VhKj9R9CpsslCkp7ccxz1vrLqmBm2csGn4oM0w1J7PMkh9GP4qUwt65ucN_9rg5OVyd8qpEn5-hq1HFSpiVY_dJ8sneLtBihIALSHH5A73u8neffi-T4ygD7aLzMHCDNpNlaX6FkgCEWFKgr2yb4JusWUbOQ",
    tag: "NEW",
  },
];

const NewCards = () => {
  return newProducts.map((product) => (
      <a
        key={product.id}
        href="#"
        className="group block border border-border-light dark:border-border-dark rounded-xl overflow-hidden bg-card-light dark:bg-card-dark shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="relative overflow-hidden rounded-lg">
          <img
            alt={product.name}
            className="h-56 w-full object-cover"
            src={product.image}
          />
          <div className="absolute top-3 left-3 rounded-full bg-primary/80 px-3 py-1 text-xs font-medium text-white">
            {product.tag}
          </div>
        </div>
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-foreground-light dark:text-foreground-dark">
            {product.name}
          </h3>
          <p className="text-subtle-light dark:text-subtle-dark font-bold">${product.price.toFixed(2)}</p>
        </div>
      </a>
  ));
};

export default NewCards;