import img_4424 from "@/assets/images/gallery/img_4424.jpg";
import img_4442 from "@/assets/images/gallery/img_4442.jpg";
import img_6125 from "@/assets/images/gallery/img_6125.jpg";
import img_0066 from "@/assets/images/gallery/img_0066.jpg";

const Packets = [
    {
        img: img_4424,
        title: "Spot Diving dan Snorkeling",
        price: "Rp. 20.000",
        rating: ["4.7", "(152)"],
    },
    {
        img: img_4442,
        title: "Penangkaran Penyu",
        price: "Rp. 10.000",
        rating: ["4.9", "(112)"],
    },
    {
        img: img_6125,
        title: "Mercusuar Kapoposang",
        price: "Free",
        rating: ["4.2", "(82)"],
    },
    {
        img: img_0066,
        title: "Desa Nelayan",
        price: "Free",
        rating: ["4.6", "(52)"],
    },
];

export default Packets;

// let previousCount = 0;

// let intervalId = setInterval(() => {
//     // var allNum = document.querySelectorAll('.x10l6tqk div ._ak73 ._ak8l ._ak8j ._ak8i ._ajzr ._ao3e'); // For label phone
//     var allNum = document.querySelectorAll('.x1y332i5 .x10l6tqk div ._ak72 ._ak8n ._ak8l ._ak80 ._ak8q .x1c4vz4f .x1iyjqo2'); // For label name
//     let myArray = Array.from(allNum);
//     var text = "";

//     myArray.forEach((item, index) => {
//         text += item.innerHTML.substring(3) + "\n";
//     });

//     console.log(text);

//     // Cek apakah jumlah elemen tidak bertambah
//     if (myArray.length === previousCount) {
//         console.log("Data sudah tidak bertambah. Menghentikan interval...");
//         clearInterval(intervalId); // Hentikan interval
//     }
//     previousCount = myArray.length; // Update jumlah elemen terakhir
// }, 5000);

