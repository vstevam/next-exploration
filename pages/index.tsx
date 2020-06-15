import React from 'react'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import LayoutMain from '../components/layout-main'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'

// type Props = {
//   allPosts: Post[]
// }

const Index = () => {
//   const heroPost = allPosts[0]
//   const morePosts = allPosts.slice(1)
  return (
    <>
      <LayoutMain>
        <Head>
          <title>Vinicius Stevam</title>
        </Head>

        {/* <!-- Banner --> */}
        <section id="banner">
            <div className="content">
                <header>
                    <h2>Hey, I'm Vinicius Stevam!</h2>
                    <p>A simple guy, husband, investor, entrepreneur,<br />
                        software engineer and if you like to discover more,<br />
                        tap the bottom.</p>
                </header>
                <span className="image"><img id="randomProfile" src="assets/images/profile/profile4.png" alt="" /></span>
            </div>
            <a href="#one" className="goto-next scrolly">Next</a>
        </section>

        {/* <!-- One --> */}
        <section id="one" className="spotlight style1 bottom">
            <span className="image fit main"><img src="assets/images/sports.jpg" alt="" /></span>
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-4 col-12-medium">
                            <header>
                                <h2>Nutrition, Sports & Health</h2>
                                <p>The perfect combination to develop your best self</p>
                            </header>
                        </div>
                        <div className="col-4 col-12-medium">
                            <p>Always present in my life, sports taught me that doesn't
                                matter if you are not gifted with special talent but with
                                hard work you can always improve your skills. The first sport
                                which started to forge me was basketball in the school a couple of
                                years later it leads me to my biggest passion the Gym those sports
                                introduced how important discipline and have a routine setup is
                                important to let you ahead and always improving.</p>
                        </div>
                        <div className="col-4 col-12-medium">
                            <p>Nutrition, something that comes up to improve my body
                                composition but the results were remarkable beyond my expectation
                                not just in my body but also to my mind. The appropriate amount
                                of nutrients, known what to eat, how to understand
                                the body and the response from each nutrient. I dug deep into this subject
                                setting for 2 years in a College to learn the core of our body and be able
                                to develop my own nutrition program.</p>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#two" className="goto-next scrolly">Next</a>
        </section>

        {/* <!-- Two --> */}
        <section id="two" className="spotlight style2 right">
            <span className="image fit main"><img src="assets/images/work.jpg" alt="" /></span>
            <div className="content">
                <header>
                    <h2>Technology</h2>
                    <p>Since 11 I already knew that I was destined to work with it</p>
                </header>
                <p>I'm from an industrial city, There weren't many IT opportunities at that time but I saw into the technology
                    and the internet there are no more boundaries or limits. You can learn anything about everything you just
                    need to be willing to sacrifice what you are for what you will become and the future is in your hands..</p>
                <ul className="actions">
                    <li><a href="./resume" className="button">Learn More</a></li>
                </ul>
            </div>
            <a href="#three" className="goto-next scrolly">Next</a>
        </section>

        {/* <!-- Three  --> */}
        <section id="three" className="spotlight style3 left">
            <span className="image fit main bottom"><img src="assets/images/bg_finance.png" alt="" /></span>
            <div className="content">
                <header>
                    <h2>Finance</h2>
                    <p>Are you controlling the money or the money controls you?</p>
                </header>
                <p>Even having the best examples at home (my mom). I just learn how it is important too late negotiating 50
                    thousand reais with the bank. What is the take away? It doesn't matter how much money do you earn,
                    what matters, are you controlling the money or the money controls you?
                    I started to study everything from the begin and understanding financial concepts that should be taught in
                    the school. 
                    <br/>
                    I implemented a system into my family when comes to finance, we are a company, with a budget, estimation,
                    emergency reserve, investments and a few more things but nothing complicated or time-consuming. After it, we
                    discovered that we were blind but now we see.
                </p>
                <ul className="actions">
                    <li><a href="./research" className="button">Learn More</a></li>
                </ul>
            </div>
            <a href="#four" className="goto-next scrolly">Next</a>
        </section>

        {/* <!-- Four --> */}
        <section id="four" className="wrapper style1 special fade-up">
            <div className="container">
                <header className="major">
                    <h2>My Interests</h2>
                </header>

                <div className="box alt">
                    <div className="row gtr-50 gtr-uniform">
                        <div className="card col-4 col-6-xsmall">
                            <span className="image fit"><img src="assets/images/family.png" alt="" /></span>
                            <div className="">
                                <h3 className="card-title">Family</h3>
                                <p className="card-text">Simply my reason to wake up every day feeling blessed.</p>
                            </div>
                        </div>
                        <div className="card col-4 col-6-xsmall">
                            <span className="image fit"><img src="assets/images/tech.jpeg" alt="" /></span>
                            <div className="">
                                <h3 className="card-title">Technology</h3>
                                <p className="card-text">Unlocking the potential by information but careful to don't be paralyzed by it.</p>
                            </div>
                        </div>
                        <div className="card col-4 col-6-xsmall">
                            <span className="image fit"><img src="assets/images/stocks.jpeg" alt="" /></span>
                            <div className="">
                                <h3 className="card-title">Finance</h3>
                                <p className="card-text">An important subject to mastery if you would like to have the freedom and see the rat race from the outside.</p>
                            </div>
                        </div>
                        <div className="card col-4 col-6-xsmall">
                            <span className="image fit"><img src="assets/images/diet.jpg.png" alt="" /></span>
                            <div className="">
                                <h3 className="card-title">Nutrition</h3>
                                <p className="card-text">Supports body and mind to keep the performance high during the daily bases.</p>
                            </div>
                        </div>
                        <div className="card col-4 col-6-xsmall">
                            <span className="image fit"><img src="assets/images/sport.jpg" alt="" /></span>
                            <div className="">
                                <h3 className="card-title">Sports & Gym</h3>
                                <p className="card-text">Simplicity whereby discipline and practice you can reach another level.</p>
                            </div>
                        </div>
                        <div className="card col-4 col-6-xsmall">
                            <span className="image fit"><img src="assets/images/nerd.jpeg" alt="" /></span>
                            <div className="">
                                <h3 className="card-title">Nerd Culture</h3>
                                <p className="card-text">My escape from the world. Where keeps my creativity alive and growing.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        {/* <!-- Five --> */}
        <section id="five" className="wrapper style2 special fade">
            <div className="container">
                <header>
                    <h2>Stay Tuned</h2>
                    <p>Leave your email if you like to keep up to date on my projects</p>
                </header>
                <form method="post" action="#" className="cta">
                    <div className="row gtr-uniform gtr-50">
                        <div className="col-8 col-12-xsmall"><input type="email" name="email" id="email"
                                placeholder="Your Email Address" /></div>
                        <div className="col-4 col-12-xsmall"><input type="submit" value="Stay Tune" className="fit primary" /></div>
                    </div>
                </form>
            </div>
        </section>

        {/* <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container> */}
      </LayoutMain>
    </>
  )
}

export default Index

// export const getStaticProps = async () => {
//   const allPosts = getAllPosts([
//     'title',
//     'date',
//     'slug',
//     'author',
//     'coverImage',
//     'excerpt',
//   ])

//   return {
//     props: { allPosts },
//   }
// }
