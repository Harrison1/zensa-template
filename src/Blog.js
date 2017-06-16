import React from 'react';
import DocumentMeta from 'react-document-meta';
import InstagramEmbed from 'react-instagram-embed';

const IMG_BASE_URL = 'http://fractlstaging.com/clients/zensa/react-builds/tattoo-care-tips-new-tattoos';

export default class Blog extends React.Component {
    render() {
        const meta = {
            title: 'Tattoo Care Tips: What to Do With Your New Tattoo',
            description: 'Everything You Need to Know About the Healing Process of Your Next Tattoo',
            meta: {
                charset: 'utf-8',
                name: {
                    'twitter:title': 'Tattoo Care Tips: What to Do With Your New Tattoo',
                    'twitter:description': 'Everything You Need to Know About the Healing Process of Your Next Tattoo'
                },
                property: {
                    'og:title': 'Tattoo Care Tips: What to Do With Your New Tattoo',
                    'og:description': 'Everything You Need to Know About the Healing Process of Your Next Tattoo',
                    'og:type': 'article'

                }
            }
        };

        return (

                <div className="blog">
                    <DocumentMeta {...meta} />

              {/* headline */}
                    <div className="container">
                        <div className="row center-xs">
                            <div className="col-xs-12 col-md-10">
                                <h1 className="blog-h1">Tattoo Care Tips: What to Do With Your New Tattoo</h1>
                                <h2 className="blog-h2">Everything You Need to Know About the Healing Process of Your Next Tattoo</h2>
                            </div>        
                        </div>
                    </div>
                    {/* end: headline */}

                    {/* hero image */}
                    <div className="blog-hero-image" style={{backgroundImage: `url(${IMG_BASE_URL}/assets/img/Header_1.png)`}} />
                    {/* end: hero image */}

                    {/* main content container */}
                    <div className="container my3">
                        <div className="row center-xs">
                            <div className="col-xs-12 col-md-10">

                                {/* main content */}

                                <p>Here’s why you want to make sure you have a great tattoo aftercare regimen in place: When it’s healing, a tattoo is an open wound on the surface of your skin. As the pistons fire behind the tattoo gun, they puncture your skin again and again to leave a permanent mark behind. Failure to ensure it is regularly cleaned and cared for in the hours and days afterward can lead to skin infections.</p>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BRcGuUojNrb/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BTUjrEbAYQZ/' hideCaption={true} />
                                    </div>
                                </div>

                                <p><i>"The advice I give to my clients is to leave their bandages on for at least 2-4 hours. The bandage is there to protect your tattoo from airborne bacteria, which can penetrate through broken skin. But I highly recommend following your tattoo artist's advice."</i> – Lauren Margo, tattoo artist</p>

                                <p><b>These are the four most important steps to ensure you don’t become an unfortunate statistic after neglecting your brand new tattoo.</b></p>

                                {/* section title */}
                                <h2 className="blog-h2">1. Inform Yourself</h2>

                                {/* image example */}
                                <img className="blog-image" src={`${IMG_BASE_URL}/assets/img/tattoo_care_searches.png`} />

                                <p>As of 2015, only seven states had laws on the books requiring tattoo artists to be licensed and prescribe an aftercare strategy for their clients approved by state health officials. This means that while you may get aftercare instructions, you can’t always trust they’re medically sound. It could just be what other tattoo artists have told your artist about their clients. Informing yourself on the steps beforehand is critical. Tattoo care searches online were highest in Los Angeles, Atlanta, Seattle, and Charlotte – all states that didn’t have laws in 2015 requiring their tattoo artists to have a license before recommending how to properly care for your new ink after the fact.</p>

                                <p>We recommend researching the laws of your state before getting a new tattoo in order to understand how truly qualified your tattoo artist is to be giving you advice on treatment and care.</p>

                                {/* section title */}
                                <h2 className="blog-h2">2. Cover It Up</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BTWiM0XF7s5/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BIyYn66AExE/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>At least early on, you’ll want to make sure your tattoo is covered. Remember: As fun as your final design choice is – leprechaun to lemur – tattoos are open wounds and in need of TLC. Clean the area with light soap (without fragrance) and water, and apply a healing ointment like Zensa's Healing Cream before bandaging it. This will protect the area from being exposed to the elements. How often you wrap it really depends on the size of the tattoo – usually you’ll want to ensure it’s wrapped while you sleep for the first three nights.</p>

                                <p><i>"Work closely with your artist – it doesn’t get too much closer than permanently transforming your skin, now does it? – to achieve the best possible design, placement, execution, and healing. You may start one healing method and need to switch." </i> – J. Michael Taylor, owner of Black Amethyst Tattoo Gallery</p>

                                {/* section title */}
                                <h2 className="blog-h2">3. Unwrap and Assess</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BL4DJAbB-TY/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BLXW0FzB4cv/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>You’ll want to get into the routine of changing bandages, dousing the tattoo with a light combination of soap and water, applying healing cream, and then rewrapping the tattoo on the schedule recommended by your tattoo artist. If there is any unexplained redness or irritation, you should immediately contact a dermatologist or medical professional.</p>

                                {/* section title */}
                                <h2 className="blog-h2">4. Repeat Until Healed</h2>

                                {/* image example */}
                                <img className="blog-image" src={`${IMG_BASE_URL}/assets/img/timeline_tattoo_care.png`} />

                                <p>It can take more than two weeks for a tattoo to heal fully depending on the size of the piece. You’ll want to continue following your aftercare strategy – unwrap, assess, rinse with soap and water, pat dry, apply Zensa Healing Cream, and bandage – until it’s 100 percent healed.</p>

                                <p><i>"A super solid and well-saturated tattoo can take up to four days or four weeks to heal."</i> – Lauren Margo, tattoo artist</p>

                                <p>In addition to following these steps, there are also some important don’ts. Don’t: scratch or pick at your tattoo, submerge it in water, or expose it to direct sunlight. Just make sure not to plan any days at the beach or pool right after a getting a tattoo, and you’ll be in good shape!</p>

                                {/* section title */}
                                <h2 className="blog-h2">Superhuman Healing Doesn’t Exist</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BNSaQ2iFHlg/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BTUyQFmgtvN/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>Everyone needs time for his or her new ink to heal, and whether it’s your 10th tattoo or your 100th, you are no exception to this rule. Take care of your tattoo in those first crucial days to make sure you can enjoy your new piece forever. This includes making sure you use quality items to aid in the process, such as Zensa's Healing Cream. Your body takes care of most of the action on its own, but this will help push your recovery past the finish line.</p>

                                {/* end: main content */}

                             {/* DONT EDIT BELOW THIS LINE */}
                            </div>
                        </div>
                    </div>
                    {/* end: main content container */}
                </div>
        );
    } 
}