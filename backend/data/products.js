/** countINstock is DAYS!!!!! ***************************
 * ******************************************************
 * */

const products = [
  {
    name: "2021 Toyota Prius",
    image: "/images/Toyota_Prius.png",
    price: 50,
    countInStock: 30,
    description:
      "The Prius is a power-split or series-parallel (full) hybrid, sometimes referred to as a combined hybrid, a vehicle that can be propelled by gasoline or electric power or both.",
    brand: "Toyota",
  },

  {
    name: "2021 RAV4",
    image: "/images/Rav4.png",
    price: 60,
    countInStock: 30,
    description:
      "The 2021 RAV4 uses a 203-hp 2.5-liter four-cylinder engine paired with an eight-speed automatic transmission. Front-wheel drive remains standard, but Toyota now offers a choice of all-wheel-drive systems, dependent on trim",
    brand: "Toyota",
  },
  {
    name: "2017 Mercedes-Benz C-Class",
    image: "/images/Mercedes-Benz_C-Class.png",
    price: 100,
    countInStock: 30,
    description:
      "The 2017 C-Class is available with a wide range of engines. The C300 base engine is a turbocharged four-cylinder that puts out 241 horsepower. The C63's engine puts out 469 horsepower, and the C63 S boasts 503 horsepower.",
    brand: "Mercedes",
  },
  {
    name: "2010 Ford Mustang",
    image: "/images/Ford_Mustang.png",
    price: 45,
    countInStock: 30,
    description:
      "The 2010 Ford Mustang has rear-wheel drive and a standard manual transmission. An automatic transmission is available on select models. The base engine is a 4.0-liter six-cylinder that produces 210 horsepower.",
    brand: "Ford",
  },
  {
    name: "2021 Mazda CX-5",
    image: "/images/Mazda_CX-5.png",
    price: 52,
    countInStock: 30,
    description:
      "The CX-5 is one of the best small SUVs. The 2.5-liter four-cylinder engine and six-speed automatic transmission make for a responsive and unobtrusive powertrain. Fuel economy of 24 mpg is good but not a standout. Handling is responsive and enjoyable, and the steady, compliant ride is among the best in this class",
    brand: "Mazda",
  },
  {
    name: "2018 Honda civic",
    image: "/images/2018_Honda_Civic.png",
    price: 40,
    countInStock: 30,
    description:
      "Honda Civic has been one of the most dependable vehicles on the road. Spacious, stylish, mechanically immaculate, and fun to drive; it’s easy to see why you’d want to take home a Honda Civic.Safety-wise, the Honda Civic has for years been one of the most highly rated vehicles out there.",
    brand: "Honda",
  },
  {
    name: "2021 Lexus NX 300",
    image: "/images/2021_Lexus_NX_300.png",
    price: 65,
    countInStock: 30,
    description:
      "Comfortable, quiet and packed with all sorts of standard safety features, the 2021 Lexus NX 300 has lots of appeal right out of the gate. Though it's a compact luxury SUV, the NX 300 has enough room for adults, yet it's small enough to easily maneuver around town..",
    brand: "Lexus",
  },
  // {
  //   name: "2021 Ford Explorer",
  //   image: "/images/2021_FordExplorer.png",
  //   price: 50,
  //   countInStock: 30,
  //   description:
  //     "The 2021 Explorer has the comfort you want and the capability. With seating for up to seven and an available Cargo Management System*, there’s room for everyone and all their gear.",
  //   brand: "Ford",
  // },
  // {
  //   name: "2021 VolksWagen Golf",
  //   image: "/images/2021_VolksWagen_Golf.png",
  //   price: 32,
  //   countInStock: 30,
  //   description:
  //     "The VolksWagen comes with a turbocharged engine and sleek design, the Golf is truly a modern hatchback.With driver-focused media and a touchscreen display and a variety of standard and available driver assistance features, the Golf has a suite of convenient tech features at your fingertips.This Golf has what you want to keep up with city life.",
  //   brand: "VolksWagen",
  // },
  {
    name: "2021 Land Rover Range Rover Velar",
    image: "/images/2021_Land_Rover_Range_Rover_Velar.png",
    price: 70,
    countInStock: 30,
    description:
      "The Range Rover Velar leads the way in reductive design. Clean, elegant and distinctive, the vehicle has a striking, contemporary presence. Refined power and effortless elegance combine to exquisite effect in this outstanding example of contemporary automotive design.",
    brand: "Range Rover",
  },
  {
    name: "2021 Nissan Rogue",
    image: "/images/2021_Nissan_Rogue.png",
    price: 29,
    countInStock: 30,
    description:
      "The 2021 Nissan Rogue is more attractive styling, modernized interior tech, improved performance, and more adept ride-and-handling.And the new styling comes with improved on-road demeanor and better cabin tech.",
    brand: "Nissan",
  },
  {
    name: "2021 Toyota RAV4 Hybrid",
    image: "/images/2021_Toyota_RAV4_Hybrid.png",
    price: 28,
    countInStock: 30,
    description:
      "The 2021 Toyota RAV4 Hybrid has the strong acceleration, driver-assistance tech is standard and has a roomy cabin.It's a compact sport utility vehicle.The hybrid features comes with much better fuel efficiency.",
    brand: "Toyota",
  },
  {
    name: "2021 Maserati MC20",
    image: "/images/2021_Maserati_MC20.png",
    price: 100,
    countInStock: 30,
    description:
      "The MC20 is mid-engined, fast forward. The light MC20 body ensures a prodigious power to weight ratio, for a jaw-dropping acceleration and top speed.It is the first super sports car of the Trident Brand.It's patented racing-derived technology for a roaring 3.0L V6 621HP Engine.",
    brand: "Maserati",
  },
  {
    name: "2021 Chevrolet Corvette",
    image: "/images/2021_Chevrolet_Corvette.png",
    price: 99,
    countInStock: 30,
    description:
      "The 2021 Corvette offers the mid-engine configuration that provides incredible visibility, responsiveness and driving feel.It delivers a great driving experience.Its MPG is 15 city/27 highway and the engine is 6.2 L V8. Available in body-color or Carbon Flash, the hardtop can activate at speeds up to 30 mph. Whether you’re on the road with top down or on the track with the top up, performance stays high with the most track-capable Corvette convertible in history.",
    brand: "Chevrolet",
  },
  {
    name: "2021 Porsche Taycan",
    image: "/images/2021_Porsche_Taycan.png",
    price: 102,
    countInStock: 30,
    description:
      "The 2021 Porsche Taycan (pronounced tie-kahn) is a truly innovative electric vehicle, showcasing the high-performance potential of the species.It's highs is incredible and repeatable acceleration, drives a lot like a Porsche sports car, can charge quickly.The smaller-battery version produces less horsepower, but it also costs less.Porsche has recalibrated the Taycan's charging system to better preserve the battery's service life and limit overall power loss during fast charging.",
    brand: "Porsche",
  },
  {
    name: "2018 Kia Optima",
    image: "/images/2018_Kia_Optima.png",
    price: 25,
    countInStock: 30,
    description:
      "The 2018 Kia Optima's excellent safety scores, adult-friendly seats, and numerous standard features help place it in the top half of our midsize car rankings.It's a great option for families who need lots of cargo and passenger space.The safety features include blind spot monitoring, rear cross traffic alert, and rear parking sensors.It's five seating and has MPG of 22-28 city/31-37 highway.",
    brand: "Kia",
  },
  {
    name: "2019 RAM 1500",
    image: "/images/2019_RAM_1500.png",
    price: 32,
    countInStock: 30,
    description:
      "The incredibly versatile and immensely capable, the 2019 Ram 1500 boasts streamlined styling and unrivaled ride quality.It has offroad capability.It provides an impressive ride thanks to a rear suspension that uses standard coil springs.has a host of high-tech equipment that ranges from a hybridized powertrain to robust driver-assistance features such as automated emergency braking and lane-keeping assist.It's mpg is 20 city/27 highway",
    brand: "RAM",
  },
  {
    name: "2019 Honda Accord",
    image: "/images/2019_Honda_Accord.png",
    price: 29,
    countInStock: 30,
    description:
      "The 2019 Honda Accord is Honda's five-seat mid-size family sedan.Standard features include push-button start, dual-zone automatic climate control and a multimedia system with a 7-inch screen.Its MPG is upto 30 city/38 highway with horsepower of 192 to 252 hp.It's one of the best and affordable car for families.",
    brand: "Honda",
  },
  {
    name: "2020 FIAT 500L",
    image: "/images/2020_FIAT_500L.png",
    price: 25,
    countInStock: 30,
    description:
      "The 2020 FIAT 500L is for comfort.It is of 160-horsepower, 1.4-liter turbocharged engine.It has a good quality.It is affordable and gives a good mileage being spacious. ",
    brand: "FIAT",
  },
  {
    name: "2022 Lexus IS",
    image: "/images/2022_Lexus_IS.png",
    price: 25,
    countInStock: 30,
    description:
      "The 2022 IS has three engine options. the compact IS still offers a premium experience.It has power front seats, dual-zone automatic climate control, and push-button start are all standard features, while a power sunroof and leather upholstery are options.It's mileage is  28 mpg highway and as low as 19 mpg city which is why its fuel economy is very good. ",
    brand: "Lexus",
  },
];

export default products;
