import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./CardComponents";
import Footer from "./Footer";


//create your first component
const Home = () => {
    const tours = [
        {
            image: "https://powergpu.com/wp-content/uploads/2023/05/DSC_7348-thumb-scaled.jpg",
            title: "Intel Core 9 , Aorus RTX 5090 ...",
            description: "Intel Ultimate Pc"
        },
        {
            image: "https://powergpu.com/wp-content/uploads/2025/05/DSC_9512-768x432.jpg",
            title: "AMD Ryzen 9 9950X3D, MSI RTX 5090",
            description: "AMD Ultimate Pc"
        },
        {
            image: "https://dcdn-us.mitiendanube.com/stores/004/992/029/products/xbox-series-x-05b38518d22ac00b6317219456885009-1024-1024.jpg",
            title: "XBOX Series X",
            description: "Console"
        },
        {
            image: "https://m.media-amazon.com/images/I/51fM0CKG+HL.jpg",
            title: "PlayStation 5",
            description: "Console"
        }
    ];

    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <Jumbotron />
            <div className="container my-4 flex-grow-1">
                <h2 className="text-center mb-4 fw-bold">Products</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    {tours.map((tour, index) => (
                        <div className="col" key={index}>
                            <Card {...tour} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default Home;