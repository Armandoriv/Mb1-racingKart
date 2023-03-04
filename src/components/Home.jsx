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
                    <h1 data-aos="fade-right" data-aos-once="true" data-aos-duration="1000" data-aos-delay="1500" className='diseño'>Diseño</h1>
                    <h1 data-aos="fade-left" data-aos-once="true" data-aos-duration="1000" data-aos-delay="1500" className='dental'>Dental</h1>
                </div>
                <h2 data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-delay="2000">Bienvenido</h2>
            </div>

        </section>

            
        </>
    );
}

export default Home;
