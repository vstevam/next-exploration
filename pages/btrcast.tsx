import React from 'react'
import LayoutMain from '../components/layout-main'



export default class IndexPage extends React.Component {
    render() {
        return (
            <LayoutMain>
                {/* <!-- Main --> */}
                <div id="main" className="wrapper style1">
                    <div className="container">
                        <header className="major">
                            <h2>BTRCast - Beyond the Rules</h2>
                            <p>Podcast to discuss subjects beyond the rules</p>
                        </header>

                        {/* <!-- Content --> */}
                        <section id="content" className="align-center">
                            {/* <!-- <a href="#" class="image fit"><img src="assets/images/pic07.jpg" alt="" /></a> --> */}
                            <iframe src="https://anchor.fm/btrcast/embed" height="120px" width="650px" frameBorder="0" scrolling="no"></iframe>

                        </section>

                    </div>
                </div>
            </LayoutMain>
        )
    }
}