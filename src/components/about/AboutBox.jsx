import React from 'react'
import { RiFireLine, RiCupLine, RiGroupLine, RiTrophyLine } from 'react-icons/ri';

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            {/* <div className="about__box">
                <RiFireLine className='about__icon' />

                <div>
                    <h3 className="about__title">6</h3>
                    <span className="about__subtitle">Years of Experience</span>
                </div>
            </div> */}

            <div className="about__box">
                <RiCupLine className='about__icon' />

                <div>
                    <h3 className="about__title">35+</h3>
                    <span className="about__subtitle">Github Repositories</span>
                </div>
            </div>

            <div className="about__box">
                <RiGroupLine className='about__icon' />

                <div>
                    <h3 className="about__title">2</h3>
                    <span className="about__subtitle">Paid Projects</span>
                </div>
            </div>

            <div className="about__box">
                <RiTrophyLine className='about__icon' />

                <div>
                    <h3 className="about__title">30+</h3>
                    <span className="about__subtitle">Flyer Designs</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox