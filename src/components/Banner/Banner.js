import BannerImg from './Images/banner1.jpg'

const Banner = () => {
    return ( 
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="true" style={{margin:15}}>
                <div className="carousel-inner">
                    <div className="carousel-item active" >
                    <img src={BannerImg} className="d-block w-100" style={{height:350}}alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Banner;
