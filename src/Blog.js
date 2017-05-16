import React from 'react';
import DocumentMeta from 'react-document-meta';
import InstagramEmbed from 'react-instagram-embed';

const IMG_BASE_URL = 'http://fractlstaging.com/clients/zensa/react-builds/tattoos-for-two';

export default class Blog extends React.Component {
    render() {
        const meta = {
            title: 'Tattoos For Two',
            description: 'Tattoo Ideas For Siblings, Best Friends, and Couples',
            meta: {
                charset: 'utf-8',
                name: {
                    'twitter:title': 'Tattoos For Two',
                    'twitter:description': 'Tattoo Ideas For Siblings, Best Friends, and Couples'
                },
                property: {
                    'og:title': 'Tattoos For Two',
                    'og:description': 'Tattoo Ideas For Siblings, Best Friends, and Couples',
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
                                <h1 className="blog-h1">Tattoos For Two</h1>
                                <h2 className="blog-h2">Tattoo Ideas For Siblings, Best Friends, and Couples</h2>
                            </div>
                        </div>
                    </div>
                    {/* end: headline */}

                    {/* hero image */}
                    <div className="blog-hero-image" style={{backgroundImage: `url(${IMG_BASE_URL}/assets/img/header.png)`}} />
                    {/* end: hero image */}

                    {/* main content container */}
                    <div className="container my3">
                        <div className="row center-xs">
                            <div className="col-xs-12 col-md-10">

                                {/* main content */}
                                <p>From siblings to significant others, some relationships are built to last forever. Here's the ultimate guide to tattoos you can share with someone you love.</p>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BOU-y16jgYh/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6" style={{margin: 'auto'}}>
                                        <p><i>"A lot of people who come in to get friendship tattoos will generally get matching ones. I've tattooed everything from pineapples to crowns. It really just comes down to the image having meaning to the people who are getting it tattooed."<a style={{textDecoration: 'none'}} rel="noopener noreferrer" alt="" href="https://www.instagram.com/bike_kvlt/" target="_blank">@bike_kvlt</a></i></p>
                                    </div>
                                </div>

                                <p><i>"A lot of people who come in to get friendship tattoos will generally get matching ones. I've tattooed everything from pineapples to crowns. It really just comes down to the image having meaning to the people who are getting it tattooed."<a style={{textDecoration: 'none'}} rel="noopener noreferrer" alt="" href="https://www.instagram.com/bike_kvlt/" target="_blank">@bike_kvlt</a></i></p>

                                {/* image example */}
                                <img className="blog-image" src={`${IMG_BASE_URL}/assets/img/tattoos-for-two-asset.png`} />

                                <p>When it comes to getting a new tattoo, who really wants to go at it alone? A good friend may come with you to the tattoo shop or hold your hand for the hard parts, but it takes a special bond to get a pair of matching – or at least similar – tattoos.</p>
                                
                                <p><b>We've compiled a list of our top 10 ideas for companion pieces</b>. From tattoos for siblings to spouses and even close friends, here are a few suggestions on how to seal the deal together.</p>

                                {/* section title */}
                                <h2 className="blog-h2">LOCK AND KEY</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BR2oN29hihp/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/pQAjQorotQ/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>Unlike the lock and key, anyone can appreciate the meaning behind a connected lifeline. From best friends to sisters with a special bond, the lifeline suggests a shared heartbeat and the idea that one can't exist without the other. This design can work in large places like the wrist, or in small, secret spots like the finger or foot.</p>

                                {/* section title */}
                                <h2 className="blog-h2">WEDDING BANDS</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BRwrrKvjjrx/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BOSsRa4jGQr/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>Wedding band tattoos aren't just hip and popular; they can also be an incredibly sweet idea. In place of a traditional wedding band, or even in addition to one, this tattoo between lovers or spouses shows an infinite connection that goes beyond the material representation of wedding rings. It also allows you to showcase your love in instances where you might not want to wear your rings, like while traveling or being outdoors. You're certainly less likely to lose these.</p>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BQrEOU2Ai_P/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6" style={{margin: 'auto'}}>
                                        <p><i>"Figure out an image that means something to both of you. It could be a hobby, something you share in common, an inside joke, a place you visited together; something that when you look at it, you think of only that person."<a style={{textDecoration: 'none'}} rel="noopener noreferrer" alt="" href="https://www.instagram.com/meghanschader/" target="_blank">@meghanschader</a></i></p>
                                    </div>
                                </div>

                                <h2 className="blog-h2">SPLIT DESIGN</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BRgRF4rl0F3/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BR5EzS0Bbk5/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>For tattoos shared between siblings or even close friends, you might have a meaningful inside joke or image that you want to share in your way. Consider taking the image and splitting it across the two of you. This might be a wrist tattoo or an armband design that you share in tandem without being completely identical.</p>

                                <h2 className="blog-h2">YIN YANG</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BSI4NyMDnpF/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BQz-P5eg96y/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>This ancient Chinese symbol represents the idea that the universe is made up of two opposing forces – <a style={{textDecoration: 'none'}} rel="noopener noreferrer" alt="" href="http://feng-shui.lovetoknow.com/Ying_Yang_Meaning" target="_blank">yin yang</a>. Together, they create harmony and balance. For two people with a special bond, this can be a way to celebrate the things that help make you different but also make you stronger together. A yin yang symbol can be great for spouses, friends, or even siblings.</p>

                                <h2 className="blog-h2">PUZZLE PIECES</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BRIytk1FIoO/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BR3Q6ubgAoj/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>Like the lock and key or yin yang, tattooed puzzle pieces can represent two people who not only fit together but also make each other whole when they're together. This can be a simple, minimalist design, or a complex pattern or image to create even more unique body art. There's no limit to the way you can customize this linked ink.</p>

                                <h2 className="blog-h2">A SIGNIFICANT QUOTE</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BRytW4bA5VW/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BSnTknwjAaQ/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>No one knows your relationship better than you do, but there might just be a particular quote that helps to sum it up. Like "To Infinity and Beyond,"or "There's no better friend than a sister"coupled with "and no better sister than you"to create a cute split design between sisters to cement just how strong the bond is.</p>

                                <h2 className="blog-h2">NERDY TATTOOS</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BO4dX7Ogns6/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BR9u-FDA8Kj/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>From video games to comic book characters, if you share a love for these kinds of fandoms, you might have characters or moments that represent your bond or give you a sense of nostalgia from growing up. Sisters don't get all the love with this idea, though, as brothers have plenty of material to join in on the fun as well. Maybe it's even something simple like a jar or peanut butter and jelly. You can even create a personalized Celtic knot design.</p>

                                <h2 className="blog-h2">COORDINATES</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BBtWb6_rB3A/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BRL9-echTPx/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>It can be the first place you met, the spot where he or she proposed, or just a location that has significant meaning to the both of you. Coordinates can be written out in a variety of fonts and use simple or complex designs – the sky's the limit. And because the meaning isn't overt to everyone who sees it, you may feel comfortable putting this tattoo somewhere more public, like your wrist or arm, without raising eyebrows.</p>
                                
                                <h2 className="blog-h2">PINKY PROMISE</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BSEIILpApAJ/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BRZFjbAgJda/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>A particularly cute design for sisters or best friends, the pinky promise represents every embarrassing moment, secrets you've shared, and just how deep your bond goes. Even if you aren't technically related, the relationship between best friends, sisters, or otherwise is like an unbreakable vow, and this tattoo design uses simple lines and a clear message to show off your love for each other.</p>
                                
                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BRE_y5JjlKB/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6" style={{margin: 'auto'}}>
                                        <p><i>"Be unique … get something that reminds you of each other; even if it is something silly, you will always remember that time with your friend or spouse." @e_victoria</i></p>
                                    </div>
                                </div>

                                <h2 className="blog-h2">FOR THE LONG HAUL</h2>

                                <p>Getting a tattoo isn't always an easy decision, but when it comes to someone you love, somehow it just seems worth it. While the process may be painful, <b>the design you create together and the lifelong bond you share go hand in hand</b>. From sisters and brothers to best friends and spouses, there's something for everyone on our list.</p>

                                <p>Once you and your BFF settle on the perfect design, don't forget the <a style={{textDecoration: 'none'}} rel="noopener noreferrer" alt="" href="https://zensaskincare.com/" target="_blank">perfect aftercare solutions</a>. From healing to preserving the color and detail, aftercare is a crucial part of the tattoo process. Shop Zensa's FDA- (and artist-) approved line of quality skincare products <a style={{textDecoration: 'none'}} rel="noopener noreferrer" alt="" href="https://zensaskincare.com/shop" target="_blank">online</a>, so you're ready to go the moment you step into the shop.</p>

                                {/* end: main content */}

                            {/*DO NOT EDIT BELOW THIS LINE*/}
                        </div>
                    </div>
                </div>
                {/* end: main content container */}
            </div>
        );
    } 
}