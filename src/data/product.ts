import { productApi } from "@/constant/api";
import { IApiResponse } from "@/types/api";
import { Iproduct } from "@/types/product";

export const getAllProducts = async ({}: {}): Promise<
  IApiResponse<Iproduct[]>
> => {
  const res = await fetch(
    `${process.env.API_BASE_URL}${productApi.getProducts}?all=true`,
    {
      next: {
        tags: ["product/all"],
      },
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return {
    data: dummyProducts,
    message: "Success",
    status: 200,
  };
};

export const dummyProducts: Iproduct[] = [
  {
    id: "66b472f4601754781e881d80",
    name: "LAPTOP ACER ASPIRE 1000 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b475e825b195b684834666",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 16GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b477888b61620e06045f1d",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b4778a8b61620e06045f1f",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b4778c8b61620e06045f21",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b4778d8b61620e06045f23",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b4778e8b61620e06045f25",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b4778f8b61620e06045f27",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b477908b61620e06045f29",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b477918b61620e06045f2b",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b477928b61620e06045f2d",
    name: "11 LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b477938b61620e06045f2f",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b477938b61620e06045f31",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b477948b61620e06045f33",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b477948b61620e06045f35",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b477958b61620e06045f37",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b477968b61620e06045f39",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b477968b61620e06045f3b",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b477978b61620e06045f3d",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b477978b61620e06045f3f",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b477988b61620e06045f41",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b477998b61620e06045f43",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b477998b61620e06045f45",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b4779a8b61620e06045f47",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b4779a8b61620e06045f49",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b4779b8b61620e06045f4b",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b4779c8b61620e06045f4d",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b4779c8b61620e06045f4f",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b4779d8b61620e06045f51",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b4779d8b61620e06045f53",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b4779e8b61620e06045f55",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b4779e8b61620e06045f57",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b4779f8b61620e06045f59",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
  {
    id: "66b477a08b61620e06045f5b",
    name: "LAPTOP ACER ASPIRE 3 A314 RAM 4GB SSD 256GB",
    images: [
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/12/12/ce078b5d-53be-46f0-a827-38953b4a8eaf.jpg.webp?ect=4g",
    ],
    description:
      "<h1>Laptop Acer Dengan Desain Ultra Slim</h1>\n    <p>Sangat ringan untuk di bawa-bawa, dengan dukungan multimedia yang sangat lengkap, ruang penyimpanan yang sangat luas, dan RAM yang besar yang dapat mempercepat performa si laptop. Sangat support buat belajar online, kuliah, ketik-ketik, dan buat kerja.</p>\n    \n    <h2>Spesifikasi</h2>\n    <ul>\n        <li><strong>Type:</strong> Aspire A314-35</li>\n        <li><strong>Prosesor:</strong> Intel Celeron N5100</li>\n        <li><strong>Layar:</strong> 14 inch</li>\n        <li><strong>RAM:</strong> 4 GB</li>\n        <li><strong>SSD:</strong> 256 GB</li>\n        <li><strong>VGA 1:</strong> Intel UHD Graphics</li>\n        <li><strong>VGA 2:</strong> -</li>\n        <li><strong>Sistem Operasi:</strong> Windows 11</li>\n        <li><strong>Wi-Fi / Internet:</strong> Lancar Jaya</li>\n        <li><strong>Keyboard:</strong> Lancar Semua</li>\n        <li><strong>WLAN:</strong> Internet</li>\n        <li><strong>Port USB, HDMI dan Lainnya:</strong> Oke Semua</li>\n    </ul>\n    \n    <h2>Kondisi Barang</h2>\n    <ul>\n        <li><strong>Body:</strong> 95% Mulus</li>\n        <li><strong>Baterai:</strong> Awet 3 Jam Normal</li>\n        <li><strong>Software, Hardware:</strong> Lancar Semua</li>\n    </ul>\n    \n    <h2>Kelengkapan</h2>\n    <ul>\n        <li>Laptop</li>\n        <li>Charger</li>\n        <li>Tas</li>\n    </ul>\n    \n    <h2>Bonus</h2>\n    <ul>\n        <li>Laminasi</li>\n        <li>Mouse</li>\n    </ul>",
    category: "Laptop",
    price: 3200000,
    countInStock: 1,
    slug: "laptop-acer-aspire-3-a314-ram-4gb-ssd-256gb",
  },
];
