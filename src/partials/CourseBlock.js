import React from 'react';
import YouTube from 'react-player/youtube';


function CourseBlock() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-transparent dark:border-gray-800">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-5">
                        <h2 className="h2 font-red-hat-display mb-4">Learn With Our Course!</h2>
                    </div>

                    {/* Photo of Course. TODO: make it smaller*/}
                    <div className="flex justify-center w-full pb-10">
                      <YouTube url="https://youtube.com/watch?v=_ZK2bV8CucU" light={require("../images/course-photo.png").default} playing />
                    </div>
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        {/*<h2 className="h2 font-red-hat-display mb-4">The Complete Intro to Machine Learning with Python</h2>*/}
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            We are excited to announce the launch of our introductory ML course (in partnership with Code4Tomorrow), which is now posted on Udemy! Learn about
                            everything from the basics of Python to the nuances of neural networks. Plus... you can get it for free. Scroll down for more!
                        </p>

                        <div className="space-y-2 font-red-hat-display font-bold mt-8">
                            <a className="block text-teal-500 hover:underline transition duration-150 ease-in-out" href="https://www.youtube.com/@SMLC">Check Out Our YouTube!</a>
                            <a className="block text-teal-500 hover:underline transition duration-150 ease-in-out" href="https://www.udemy.com/course/the-complete-intro-to-machine-learning-with-python/">Sign up on Udemy here!</a>
                        </div>

                    </div>

                    {/* Who We've Taught */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-1">
                        <h3 className="h3 font-red-hat-display mb-4">Our Students</h3>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 lg:gap-10 md:grid-cols-3 text-center md:pb-8" data-aos-id-stats>
                        {/* 1st item */}
                        <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]">
                            <div className="font-red-hat-display text-3xl font-extrabold tracking-tighter mb-1">27,431</div>
                            <div className="text-gray-600 dark:text-gray-400">Students Enrolled</div>
                        </div>
                        {/* 2nd item */}
                        <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]" data-aos-delay="100">
                            <div className="font-red-hat-display text-3xl font-extrabold tracking-tighter mb-1">167</div>
                            <div className="text-gray-600 dark:text-gray-400">Countries</div>
                        </div>
                        {/* 3rd item */}
                        <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]" data-aos-delay="200">
                            <div className="font-red-hat-display text-3xl font-extrabold tracking-tighter mb-1">86,768</div>
                            <div className="text-gray-600 dark:text-gray-400">Minutes Watched</div>
                        </div>
                    </div>

                    {/* Photo of student map TODO: update map to mention that stats were given by udemy*/}
                    <div className="relative inline-flex flex-col mb-20">
                        <img src={require('../images/course-map.png').default} alt="Course Student Location Demographic Map" />
                    </div>

                    {/* Why sign up */}
                    <div className="text-xl text-gray-600 dark:text-gray-400">
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-8">
                            <h3 className="h3 font-red-hat-display mb-4">Why Sign Up?</h3>
                        </div>
                        <p className="md:pb-4"><strong>
                            Interested in machine learning but confused by the jargon? If so, we made this course for you.
                        </strong></p>
                        <p> Machine learning is the fastest-growing field with constant groundbreaking research. If you're interested in any of the following, you'll be interested in ML: </p>
                        <ul className="list-inside list-disc md:pb-4">
                            <li>Self-driving cars</li>
                            <li>Language processing</li>
                            <li>Market prediction</li>
                            <li>Self-playing games</li>
                            <li>And so much more!</li>
                        </ul>
                        <p className="md:pb-4"><strong>No past knowledge is required:&nbsp;</strong>we'll start with the basics of Python and end with gradient-boosted decision trees and neural networks. The course will walk you through the fundamentals of machine learning, explaining mathematical foundations as well as practical implementations. By the end of our course, you'll have worked with <strong>five public data sets </strong>and have implemented all essential supervised learning models. After the course's completion, you'll be equipped to apply your skills to Kaggle data science competitions, business intelligence applications, and research projects.</p>
                        <p className="md:pb-4">We made the course <strong>quick, simple, <em>and </em>thorough.</strong> We know you're busy, so our curriculum cuts to the chase with every lecture. If you're interested in the field, this is a great course to start with.</p>
                        <p><strong>Here are some of the Python libraries you'll be using:</strong></p>
                        <ul className="list-inside list-disc md:pb-4">
                            <li>Numpy (linear algebra)</li>
                            <li>Pandas (data manipulation)</li>
                            <li>Seaborn (data visualization)</li>
                            <li>Scikit-learn (optimized machine learning models)</li>
                            <li>Keras (neural networks)</li>
                            <li>XGBoost (gradient-boosted decision trees)</li>
                        </ul>
                        <p><strong>Here are the most important ML models you'll use:</strong></p>
                        <ul className="list-inside list-disc md:pb-4">
                            <li>Linear Regression</li>
                            <li>Logistic Regression</li>
                            <li>Random Forest Decision Trees</li>
                            <li>Gradient-Boosted Decision Trees</li>
                            <li>Neural Networks</li>
                        </ul>
                        <p className="md:pb-4">Not convinced yet? By taking our course, you'll also have access to sample code for all major supervised machine learning models. Use them how you please!</p>
                        <p className="md:pb-4">Start your data science journey today with The Complete Intro to Machine Learning with Python.</p>

                        <h3 className="max-w-3xl mx-auto text-center pb-12 md:pb-4 h3 font-red-hat-display mt-4">Get it for Free</h3>
                        <p className="md:pb-4">Udemy forces all courses longer than 2 hours to charge at least $20 in enrollment fees, however we believe education should be accessible. If you'd like to get this course without any cost, please use one of the coupons below before it expires. Sorry for the inconvenience, but this is the only way we can get around Udemy's rule.</p>
                        <ul className="list-inside list-disc md:pb-4">
                            <li>
                                Click <a style = {{color: 'blue'}} href = "https://www.udemy.com/course/the-complete-intro-to-machine-learning-with-python/?couponCode=FREESMLC">here</a> to use a coupon that expires on 12/13/23! Or use code FREESMLC!
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CourseBlock;