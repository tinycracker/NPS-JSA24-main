const categories = [
  {
    id: "headphones",
    name: "Headphones",
    image: "https://ecommerce-vanillajs-mindx.netlify.app/assets/categories/product-cat-1.png",
    quantity: "3 product",
  },
  {
    id: "mobile-tablets",
    name: "Mobile Tablets",
    image: "https://ecommerce-vanillajs-mindx.netlify.app/assets/categories/product-cat-2.png",
    quantity: "2 product",
  },
  {
    id: "cpu-heat-pipes",
    name: "CPU Heat Pipes",
    image: "https://ecommerce-vanillajs-mindx.netlify.app/assets/categories/product-cat-3.png",
    quantity: "2 product",
  },
  {
    id: "smart-watch",
    name: "Smart Watch",
    image: "https://ecommerce-vanillajs-mindx.netlify.app/assets/categories/product-cat-4.png",
    quantity: "3 product",
  },
  {
    id: "bluetooth",
    name: "Bluetooth",
    image: "https://ecommerce-vanillajs-mindx.netlify.app/assets/categories/product-cat-5.png",
    quantity: "5 product",
  },
];



const products = [
  {
    id: "641e887d05f9ee1717e1348a",
    name: "Headphones Wireless",
    image: "headphone-1.png",
    oldPrice: "$120",
    newPrice: " $103.20",
    description:
      "Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards. Industry-leading call quality thanks to top-notch audio engineering. With this intelligent headset, you can stay connected and productive from the first call of the day to the last train home. With an ergonomic earcup design, this headset invented a brand-new dual-foam technology. You will be comfortable from the first call to the last thanks to the re-engineered leatherette ear cushion design that allows for better airflow. We can provide exceptional noise isolation and the best all-day comfort by mixing firm foam for the outer with soft foam for the interior of the ear cushions. So that you may receive Active Noise-Cancellation (ANC) performance that is even greater in a headset that you can wear for whatever length you wish. The headset also offers MS Teams Certifications and other features like Busylight, Calls controls, Voice guiding, and Wireless range (ft): Up to 100 feet. Best-in-class. Boom The most recent Jabra Evolve2 75 USB-A MS Teams Stereo Headset offers professional-grade call performance that leads the industry, yet Evolve2 75 wins best-in-class. Additionally, this includes a redesigned microphone boom arm that is 33 percent shorter than the Evolve 75 and offers the industry-leading call performance for which Jabra headsets are known. It complies with Microsoft's Open Office criteria and is specially tuned for outstanding conversations in open-plan workplaces and other loud environments when the microphone boom arm is lowered in Performance Mode.",
    category: "headphones",
    stars: 4,
  },
  {
    id: "641e887d05f9ee1717e1348f",
    name: "Gaming Headphone",
    image: "headphone-5.png",
    oldPrice: "$130",
    newPrice: " $123.50",
    description:
      "Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards. Industry-leading call quality thanks to top-notch audio engineering. With this intelligent headset, you can stay connected and productive from the first call of the day to the last train home. With an ergonomic earcup design, this headset invented a brand-new dual-foam technology. You will be comfortable from the first call to the last thanks to the re-engineered leatherette ear cushion design that allows for better airflow. We can provide exceptional noise isolation and the best all-day comfort by mixing firm foam for the outer with soft foam for the interior of the ear cushions. So that you may receive Active Noise-Cancellation (ANC) performance that is even greater in a headset that you can wear for whatever length you wish. The headset also offers MS Teams Certifications and other features like Busylight, Calls controls, Voice guiding, and Wireless range (ft): Up to 100 feet. Best-in-class. Boom The most recent Jabra Evolve2 75 USB-A MS Teams Stereo Headset offers professional-grade call performance that leads the industry, yet Evolve2 75 wins best-in-class. Additionally, this includes a redesigned microphone boom arm that is 33 percent shorter than the Evolve 75 and offers the industry-leading call performance for which Jabra headsets are known. It complies with Microsoft's Open Office criteria and is specially tuned for outstanding conversations in open-plan workplaces and other loud environments when the microphone boom arm is lowered in Performance Mode.",
    category: "headphones",
  },
  {
    id: "641e887d05f9ee1717e13496",
    name: "Headphone with Mic",
    image: "headphone-8.png",
    oldPrice: "$110.00",
    newPrice: " $103.20",
    description:
      "Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards. Industry-leading call quality thanks to top-notch audio engineering. With this intelligent headset, you can stay connected and productive from the first call of the day to the last train home. With an ergonomic earcup design, this headset invented a brand-new dual-foam technology. You will be comfortable from the first call to the last thanks to the re-engineered leatherette ear cushion design that allows for better airflow. We can provide exceptional noise isolation and the best all-day comfort by mixing firm foam for the outer with soft foam for the interior of the ear cushions. So that you may receive Active Noise-Cancellation (ANC) performance that is even greater in a headset that you can wear for whatever length you wish. The headset also offers MS Teams Certifications and other features like Busylight, Calls controls, Voice guiding, and Wireless range (ft): Up to 100 feet. Best-in-class. Boom The most recent Jabra Evolve2 75 USB-A MS Teams Stereo Headset offers professional-grade call performance that leads the industry, yet Evolve2 75 wins best-in-class. Additionally, this includes a redesigned microphone boom arm that is 33 percent shorter than the Evolve 75 and offers the industry-leading call performance for which Jabra headsets are known. It complies with Microsoft's Open Office criteria and is specially tuned for outstanding conversations in open-plan workplaces and other loud environments when the microphone boom arm is lowered in Performance Mode.",
    category: "headphones",
  },
  {
    id: "641e887d05f9ee1717e1349a",
    name: "Galaxy Android Tablet",
    image: "mobile-1.png",
    oldPrice: "$320",
    newPrice: " $288.00",
    description:
      "Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards. Industry-leading call quality thanks to top-notch audio engineering. With this intelligent headset, you can stay connected and productive from the first call of the day to the last train home. With an ergonomic earcup design, this headset invented a brand-new dual-foam technology. You will be comfortable from the first call to the last thanks to the re-engineered leatherette ear cushion design that allows for better airflow. We can provide exceptional noise isolation and the best all-day comfort by mixing firm foam for the outer with soft foam for the interior of the ear cushions. So that you may receive Active Noise-Cancellation (ANC) performance that is even greater in a headset that you can wear for whatever length you wish. The headset also offers MS Teams Certifications and other features like Busylight, Calls controls, Voice guiding, and Wireless range (ft): Up to 100 feet. Best-in-class. Boom The most recent Jabra Evolve2 75 USB-A MS Teams Stereo Headset offers professional-grade call performance that leads the industry, yet Evolve2 75 wins best-in-class. Additionally, this includes a redesigned microphone boom arm that is 33 percent shorter than the Evolve 75 and offers the industry-leading call performance for which Jabra headsets are known. It complies with Microsoft's Open Office criteria and is specially tuned for outstanding conversations in open-plan workplaces and other loud environments when the microphone boom arm is lowered in Performance Mode.",
    category: "mobile-tablets",
  },
  {
    id: "641e887d05f9ee1717e1349f",
    name: "iPhone 14 Pro",
    image: "mobile-5.png",
    oldPrice: "$1199",
    newPrice: " $1019.15",
    description:
      "Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards. Industry-leading call quality thanks to top-notch audio engineering. With this intelligent headset, you can stay connected and productive from the first call of the day to the last train home. With an ergonomic earcup design, this headset invented a brand-new dual-foam technology. You will be comfortable from the first call to the last thanks to the re-engineered leatherette ear cushion design that allows for better airflow. We can provide exceptional noise isolation and the best all-day comfort by mixing firm foam for the outer with soft foam for the interior of the ear cushions. So that you may receive Active Noise-Cancellation (ANC) performance that is even greater in a headset that you can wear for whatever length you wish. The headset also offers MS Teams Certifications and other features like Busylight, Calls controls, Voice guiding, and Wireless range (ft): Up to 100 feet. Best-in-class. Boom The most recent Jabra Evolve2 75 USB-A MS Teams Stereo Headset offers professional-grade call performance that leads the industry, yet Evolve2 75 wins best-in-class. Additionally, this includes a redesigned microphone boom arm that is 33 percent shorter than the Evolve 75 and offers the industry-leading call performance for which Jabra headsets are known. It complies with Microsoft's Open Office criteria and is specially tuned for outstanding conversations in open-plan workplaces and other loud environments when the microphone boom arm is lowered in Performance Mode.",
    category: "mobile-tablets",
  },
  {
    id: "641d4106dbfab7b02ab28b22",
    name: "Apple iPad Air",
    image: "ipad-1.png",
    oldPrice: "$999",
    newPrice: " $949.05",
    description:
      "Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards. Industry-leading call quality thanks to top-notch audio engineering. With this intelligent headset, you can stay connected and productive from the first call of the day to the last train home. With an ergonomic earcup design, this headset invented a brand-new dual-foam technology. You will be comfortable from the first call to the last thanks to the re-engineered leatherette ear cushion design that allows for better airflow. We can provide exceptional noise isolation and the best all-day comfort by mixing firm foam for the outer with soft foam for the interior of the ear cushions. So that you may receive Active Noise-Cancellation (ANC) performance that is even greater in a headset that you can wear for whatever length you wish. The headset also offers MS Teams Certifications and other features like Busylight, Calls controls, Voice guiding, and Wireless range (ft): Up to 100 feet. Best-in-class. Boom The most recent Jabra Evolve2 75 USB-A MS Teams Stereo Headset offers professional-grade call performance that leads the industry, yet Evolve2 75 wins best-in-class. Additionally, this includes a redesigned microphone boom arm that is 33 percent shorter than the Evolve 75 and offers the industry-leading call performance for which Jabra headsets are known. It complies with Microsoft's Open Office criteria and is specially tuned for outstanding conversations in open-plan workplaces and other loud environments when the microphone boom arm is lowered in Performance Mode.",
    category: "mobile-tablets",
  },
  {
    id: "641e887d05f9ee1717e134ad",
    name: "DeepCool Air Cooler",
    image: "cpu-1.png",
    oldPrice: "$80.00",
    newPrice: " $103.20",
    description:
      "DeepCool ICE EDGE MINI FS V2.0 CPU Air Cooler DeepCool ICE EDGE MINI FS V2.0 CPU Air Cooler is AMD AM4 Ready. (NOTE: Refer to FM2+/ FM2/ FM1/ AM3+/ AM3/ AM2+/ AM2 for the manuals). It is equipped with multiple clips to support Intel LGA1155/ 1156/ 775 and AMD AM4/ AM3/ AM2+/ AM2/ K8. It has 2 sintered metal powder heatpipes directly contacting the CPU surface for removing heat and eliminating chances of overheating. It features specialized aluminum heatsink construction for efficient heat dissipation. TPE fan housing designed to absorb operating vibration and reduce fan noise. it has a 1-year warranty.",
    category: "cpu-heat-pipes",
  },
  {
    id: "641e887d05f9ee1717e134b2",
    name: "Antec Air Cooler",
    image: "cpu-5.png",
    oldPrice: "$80.00",
    newPrice: " $103.20",
    description:
      "Antec ICE EDGE MINI FS V2.0 CPU Air Cooler DeepCool ICE EDGE MINI FS V2.0 CPU Air Cooler is AMD AM4 Ready. (NOTE: Refer to FM2+/ FM2/ FM1/ AM3+/ AM3/ AM2+/ AM2 for the manuals). It is equipped with multiple clips to support Intel LGA1155/ 1156/ 775 and AMD AM4/ AM3/ AM2+/ AM2/ K8. It has 2 sintered metal powder heatpipes directly contacting the CPU surface for removing heat and eliminating chances of overheating. It features specialized aluminum heatsink construction for efficient heat dissipation. TPE fan housing designed to absorb operating vibration and reduce fan noise. it has a 1-year warranty.",
    category: "cpu-heat-pipes",
  },
  {
    id: "641e887d05f9ee1717e134c6",
    name: "Sony Lady Fitness Watch",
    image: "watch-9.png",
    oldPrice: "$150",
    newPrice: " $145.50",
    description:
      "Starlight Aluminum Case with Braided Solo Loop The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy. The Braided Solo Loop is made from recycled yarn and silicone threads for an ultracomfortable, stretchable design with no clasps or buckles.",
    category: "smart-watch",
  },
  {
    id: "641e887d05f9ee1717e134cf",
    name: "Lenovo Sports Bluetooth",
    image: "blutooth-1.png",
    oldPrice: "$70",
    newPrice: " $66.50",
    description:
      "Starlight Aluminum Case with Braided Solo Loop The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy. The Braided Solo Loop is made from recycled yarn and silicone threads for an ultracomfortable, stretchable design with no clasps or buckles.",
    category: "bluetooth",
  },
  {
    id: "641e887d05f9ee1717e134b7",
    name: "Apple Watch Sport Band",
    image: "watch-1.png",
    oldPrice: "$449",
    newPrice: " $426.55",
    description:
      "Starlight Aluminum Case with Braided Solo Loop The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy. The Braided Solo Loop is made from recycled yarn and silicone threads for an ultracomfortable, stretchable design with no clasps or buckles.",
    category: "smart-watch",
  },
  {
    id: "641e887d05f9ee1717e134cb",
    name: "Lenovo Wireless Bluetooth",
    image: "blutooth-4.png",
    oldPrice: "$70",
    newPrice: " $66.50",
    description:
      "Starlight Aluminum Case with Braided Solo Loop The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy. The Braided Solo Loop is made from recycled yarn and silicone threads for an ultracomfortable, stretchable design with no clasps or buckles.",
    category: "bluetooth",
  },
];



///// Lưu trữ categories lên LS
localStorage.setItem("categories", JSON.stringify(categories));

// Lưu trữ products lên LS
localStorage.setItem("products", JSON.stringify(products));