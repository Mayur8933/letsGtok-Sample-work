import React from 'react'
import './css/body.css'
import emojis from './images/Transparent_emojis.png'
import heart from './images/heart_transparent.png'

const Body = () => {
    return (
        <div>
            <div className='body_div1'>
                <div className='center_div'>
                    <img className='heart' src={heart} alt=''></img>
                    <h3 className='share_text'>share feelings without being judged</h3>
                    <button className='feel_button'>Share feelings</button>
                </div>
                <div className='bottom_div'>
                    <h1 className='bottom_name'>Join . Share . Feel Relief</h1>
                </div>
            </div>

            <div className='small_div'>
                <h2 className='community_heading'>A community to spread positivity</h2>
            </div>

            <div className='body_div2'>
                <div class='column1'>
                    <div className='col1_div1'>
                        <h3 className='share_text2'>Current feeling</h3>
                        <h5 className='share2'>So excited to finally get my hands on latestPS5.</h5>
                        <h4 className='share2'> @josh</h4>
                        <h5 className='share2'>a few seconds ago</h5>
                    </div>

                    <div className='col1_div2'>
                        <h3 className='share_text2'>Current feeling</h3>
                        <h5 className='share2'>So excited to finally get my hands on latestPS5.</h5>
                        <h4 className='share2'> @josh</h4>
                        <h5 className='share2'>a few seconds ago</h5>
                    </div>

                    <h5 className='share2_desc'>Share what's on you mind with the</h5>
                    <h5 className='share2_desc2'>community</h5>
                    <button className='share_button'>Share feelings</button>

                </div>

                <div className='mid_column'>
                </div>

                <div class='column2'>
                    <div className='col2_div1'>
                        <h3 className='share_text2'>Watching</h3>
                        <h5 className='share2'>The wolf of wall Street.A must watch.</h5>
                        <h4 className='share2'> @lily</h4>
                        <h5 className='share2'>a few seconds ago</h5>
                    </div>
                    <div className='col2_div2'>
                        <h3 className='share_text2'>Watching</h3>
                        <h5 className='share2'>The wolf of wall Street.A must watch.</h5>
                        <h4 className='share2'>@lily</h4>
                        <h5 className='share2'>a few seconds ago</h5>
                    </div>

                    <h5 className='share2_desc'>Share what's on you mind with the</h5>
                    <h5 className='share2_desc2'>community</h5>
                    <button className='share_button'>Share feelings</button>


                </div>
            </div>

            <div className='body_div3'>
                <img className='emojis' src={emojis} alt=''></img>
                <div className='why_lets_gtok'>
                    <h2 className='why_que'>Why Lets Gtok?</h2>
                    <h4 className='why_desc'>Lets Gtok aims to provide a safe space online for people to share and connect with genuine feelings. Users can share their
                    feelingsor activities even without revealing their identity.</h4>
                    <button className='Learn_more_btn'> Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Body