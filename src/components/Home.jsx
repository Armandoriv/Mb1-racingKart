import React from 'react';
import AOS from 'aos';
AOS.init()

const Home = () => {
    return (
        <>
        <section className='main'>
            <div className='titleContainer'>
                <img data-aos="fade-down" data-aos-once="true" data-aos-duration="1000" data-aos-delay="1000" className='imgLogo' src="../img/logo.png" alt="" />
            </div>
            <div className='main-title'>
                <div className='main-subtitle'>
                    <p data-aos="fade-right" data-aos-once="true" data-aos-duration="1000" data-aos-delay="1500" className='diseño'>Diseño</p>
                    <p data-aos="fade-left" data-aos-once="true" data-aos-duration="1000" data-aos-delay="1500" className='diseño'>Dental</p>
                </div>
                <div className='subtitle'>
                    <p data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-delay="2000" className='dental'>Bienvenido</p>
                </div>
            </div>

        </section>

            
        </>
    );
}

export default Home;
