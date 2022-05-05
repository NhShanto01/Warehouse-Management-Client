import React from 'react';

const SectionOne = () => {
    return (
        <section className='container mt-5'>
            <h1>WHO Sports and Health Programme </h1>
            <div className='m-5 flex-column-reverse flex-md-row flex-sm-row d-flex  justify-content-between align-items-center text-start'>
                <div className='me-5'>
                    <h3>Physical Activity and Health Promotion</h3>
                    <h4>Sports and health go hand in hand, offering people all over the world, of different abilities and ages, the chance for happier, healthier and more productive lives.</h4>
                    <p className='mt-3'>
                        Physical activity refers to all movement, including sports, cycling, wheeling, walking, active recreation and play. It can be done at any level of skill and for enjoyment by everybody.
                    </p>
                    <p>
                        Working in partnerships, WHO supports countries to implement a whole-of-community approach to increase levels of physical activity in people of all ages and abilities. Global, regional and national coordination and capacity will be strengthened to respond to needs for technical support, innovation and guidance.
                        <br />

                        The goal of the WHO Global action plan on physical activity is to reduce physical inactivity by 15% by 2030.
                    </p>
                </div>
                <div>
                    <img className='img-fluid' src="https://img.freepik.com/free-vector/person-doing-exercise-around-heart-online-fitness-concept_24908-58987.jpg?t=st=1651715691~exp=1651716291~hmac=6557e7de7bbb173c2f3de3d25d5eef53eec939ba4554b50baa8b0021d6172d58&w=740" alt="" />
                </div>
            </div>
        </section>


    );
};

export default SectionOne;