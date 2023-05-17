import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-white px-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="absolute top-1/2 border-8 border-gray-300 right-4 w-2/4 rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2'>
                    <h4 className='text-red-500 font-semibold text-xl my-5'>About Us</h4>
                    <h1 className="text-5xl font-bold w-3/4">We are qualified & of experience in this field</h1>
                    <p className="py-6 w-4/5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6 w-4/5">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                    <button className="btn btn-primary">Get More Information</button>
                </div>
            </div>
        </div>
    );
};

export default About;