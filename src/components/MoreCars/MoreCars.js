
import Footer from '../Footer/Footer';
import Header from '../Navigation/Header';
import AllCars from './AllCars';
import './MoreCors.css';

const MoreCars = () => {

    return (
        <div>
            <Header></Header>
            <div className="bag-img d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="text-white fw-bold">More Cars</h1>
                </div>
            </div>
            <AllCars></AllCars>
            <Footer></Footer>
        </div>
    );
};

export default MoreCars;