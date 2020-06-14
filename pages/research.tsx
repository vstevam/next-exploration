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
                            <h2>VS Research</h2>
                            <p>Coming soon...</p>
                        </header>

                        {/* <!-- Content --> */}
                        <section id="content" className="align-center">
                            <img src="assets/images/building.gif" alt="" />

                        </section>

                    </div>
                </div>
            </LayoutMain>
        )
    }
}