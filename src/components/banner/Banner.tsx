import React from 'react';
import Image from 'next/image';
import HitLabel from '../hitLabel/HitLabel';
import img2 from '../../../public/banner/img_2.png';
import img1 from '../../../public/banner/img_1.png';
import cl from './banner.module.scss';

const Banner: React.FC= () => {
    return (
        <div className={cl.root}>
            <h2>Всё для комфортной работы</h2>
            <div className={cl.root_arrow}></div>
            <div className={cl.root_up}>
                <Image src={img2} alt="Рабочее место" width={140} height={140} />
                <div className={cl.root_up_right}>
                    <div className={cl.root_up_right_label}>
                        <HitLabel
                            mainColor="#FFDC38"
                            backgroundColor="#636B7F"
                            text="-25%"
                            textColor="#2E2E33"
                        />
                    </div>
                    <div className={cl.root_up_right_text}>
                        <h3>на товары для кабинета</h3>
                        <a href="#" className={cl.root_up_right_link}>Выбрать</a>
                    </div>
                </div>
            </div>
            <div className={cl.root_down}>
                <div className={cl.root_down_left}>
                    <div className={cl.root_down_left_label}>
                        <HitLabel
                            mainColor="#FFDC38"
                            backgroundColor="#F5F5F7"
                            text="10%"
                            textColor="#000000"
                        />
                    </div>
                    <div className={cl.root_down_left_text}>
                        <h3>Скидка<br />на периферию для компьютера</h3>
                        <a href="#" className={cl.root_link}>Выбрать</a>
                    </div>
                </div>
                <Image src={img1} alt="Уютная комната" width={140} height={140} />
            </div>
        </div>
    );
};

export default Banner;