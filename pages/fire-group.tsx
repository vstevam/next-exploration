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
                            <h2>FIRE Group</h2>
                            <p>Group created to gather people with the same mindset. You will find the documentation(PT) that we've been creating</p>
                        </header>

                        {/* <!-- Content --> */}
                        <section id="content">
                            <iframe width="100%" height="1200" src="https://hackmd.io/@vstevam/rkVuuxm4B/%2FY4FrEN51QZeCaCpxK9R6dQ" frameBorder="0"></iframe>

                        </section>

                    </div>
                </div>  
            </LayoutMain>
        )
    }
}