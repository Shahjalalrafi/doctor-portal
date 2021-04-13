import React from 'react';
// import BlogDetails from './BlogDetails';
import img1 from '../../../Images/Ellipse 1.png'
import img2 from '../../../Images/Ellipse 2.png'


const Blog = () => {
    const blogInfo = [
        {
            name: 'dr. Caudi',
            date: '23rd April 2019',
            title: '2 times of brush in a day can keep You healthy',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, alias?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, alias?'
        },
        {
            name: 'dr. jogn Mitchel',
            date: '23rd April 2018',
            title: 'The tooth cancer is taking a challenge',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, alias?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, alias?'
        }
    ]
    return (
        <section className='row w-75 m-auto text-start py-2'>
            <h6 style={{color: '#1cc7c1'}}>OUR BLOG</h6>
            <h2>FORM OUR BLOG NEWS</h2>
            <div style={{backgroundColor: '#1cc7c1', color: 'white'}}className="col-md-3 my-5">
                <h6>Rashed kabir</h6>
                <small>22 auguest 2018</small>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, alias?</p>
            </div>
            <div className='col-md-4 card m-auto my-5'>
                <div className='row'>
                    <div className="col-3">
                        <img className='card-img mt-2' src={img1} alt=""/>
                    </div>
                    <div className="col-9">
                        <small >dr. Caudi</small><br/>
                        <small>23rd April 2019</small>
                    </div>
                </div>
                <h6 className='mt-3'>2 times of brush in a day can keep You healthy</h6>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, alias?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, alias?</p>
            </div>
            <div className='col-md-4 card m-auto my-5'>
                <div className='row'>
                    <div className="col-3">
                        <img className='card-img mt-2' src={img2} alt=""/>
                    </div>
                    <div className="col-9">
                        <small >dr. jogn Mitchel</small><br/>
                        <small>23rd April 2018</small>
                    </div>
                </div>
                <h6 className='mt-3 '>The tooth cancer is taking a challenge</h6>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, alias?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, alias?</p>
            </div>
        </section>
    );
};

export default Blog;