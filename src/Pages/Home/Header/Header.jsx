import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Header = () => {
    return (
        <div className="carousel w-full h-[600px] ">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute h-full left-0  top-0 flex items-center pl-7 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-7 w-[50%]'>
                        <h2 className='text-5xl'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="space-x-7">
                            <button className="btn btn-active btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-accent">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle mr-2">❮</a>
                    <a href="#slide2" className="btn btn-circle ml-5">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute h-full left-0  top-0 flex items-center pl-7 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-7 w-[50%]'>
                        <h2 className='text-5xl'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="space-x-7">
                            <button className="btn btn-active btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-accent">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-2">❮</a>
                    <a href="#slide3" className="btn btn-circle ml-5">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute h-full left-0  top-0 flex items-center pl-7 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-7 w-[50%]'>
                        <h2 className='text-5xl'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="space-x-7">
                            <button className="btn btn-active btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-accent">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-2">❮</a>
                    <a href="#slide4" className="btn btn-circle ml-5">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute h-full left-0  top-0 flex items-center pl-7 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-7 w-[50%]'>
                        <h2 className='text-5xl'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="space-x-7">
                            <button className="btn btn-active btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-accent">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-2">❮</a>
                    <a href="#slide5" className="btn btn-circle ml-5">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full rounded-xl" />
                <div className="absolute h-full left-0  top-0 flex items-center pl-7 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                    <div className='space-y-7 w-[50%]'>
                        <h2 className='text-5xl'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="space-x-7">
                            <button className="btn btn-active btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-accent">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-2">❮</a>
                    <a href="#slide6" className="btn btn-circle ml-5">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full rounded-xl" />
                <div className="rounded-xl absolute h-full left-0  top-0 flex items-center pl-7 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-7 w-[50%]'>
                        <h2 className='text-5xl'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="space-x-7">
                            <button className="btn btn-active btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-accent">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle mr-2">❮</a>
                    <a href="#slide1" className="btn btn-circle ml-5">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Header;