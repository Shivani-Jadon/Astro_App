import React, { Component } from 'react'
import BannerOffer from './BannerOffer'
import Horoscope from './Horoscope'
import Question from './Question'
import Reports from './Reports'
import TalkSection from './TalkSection'
import Testimonial from './Testimonial'

export default class Home extends Component {
    render() {
        return (
            <div style={{marginTop: 100, marginBottom: 100}}>
                <BannerOffer />
                <Horoscope />
                <TalkSection />
                <Reports />
                <Question />
                <Testimonial />
            </div>
        )
    }
}
