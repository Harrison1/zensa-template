import React from 'react';
import DocumentMeta from 'react-document-meta';
import InstagramEmbed from 'react-instagram-embed';

const IMG_BASE_URL = 'http://fractlstaging.com/clients/zensa/react-builds/tattoo-buyers-guide';

export default class Blog extends React.Component {
    render() {
        const meta = {
            title: 'A Tattoo Buyer\'s Guide',
            description: 'Thinking About Getting A Tattoo? When it comes to getting a great tattoo, everything depends on the artist',
            meta: {
                charset: 'utf-8',
                name: {
                    'twitter:title': 'A Tattoo Buyer\'s Guide',
                    'twitter:description': 'Thinking About Getting A Tattoo? When it comes to getting a great tattoo, everything depends on the artist'
                },
                property: {
                    'og:title': 'A Tattoo Buyer\'s Guide',
                    'og:description': 'Thinking About Getting A Tattoo? When it comes to getting a great tattoo, everything depends on the artist',
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
                                <h1 className="blog-h1">A Tattoo Buyer's Guide</h1>
                            </div>        
                        </div>
                        <p style={{textAlign: 'center'}}>Thinking About Getting A Tattoo? When it comes to getting a great tattoo, everything depends on the artist. Here's what you need to know to find someone with talent you can trust.</p>
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

                                <p>Whether you’re looking to get your first tattoo or are adding to the art you already have, there are several things you should consider to ensure a great ink experience. Here’s the download on what to know and ask to ensure you find the right artist for the job. No one wants to regret a tattoo – and the right research can prevent that from happening.</p>
                                
                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BIn6tMvg1Lh/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6" style={{margin: 'auto'}}>
                                        <p><i>"When deciding on a tattoo artist, look for a good portfolio and pictures of the work, and someone that is clean, organized, and licensed. Do not go for a deal or tattoo out of a kitchen. You get what you pay for." <a style={{textDecoration: 'none'}} rel="noopener noreferrer" alt="" href="https://www.instagram.com/takeshikamioka/" target="_blank">@takeshikamioka</a></i></p>
                                    </div>
                                </div>

                                {/* section title */}
                                <h2 className="blog-h2">HOW MUCH WILL IT COST?</h2>

                                <p>It's worth asking how much time an artist will need to complete a piece. This will help give you a rough estimate of your final bill. It isn’t uncommon for experienced artists to charge anywhere between $100 to $200 an hour for their services. This means a tattoo that requires four hours will cost between $400 and $800, not including tip. The total bill could end up between $460 and $960 (before tax) when gratuity is added.</p>
                                
                                <p>However, some tattoo artists are willing to negotiate the price. It’s important to ask and agree on a price first to avoid sticker shock.</p>

                                <p>The amount of time your tattoo will take may depend on a few factors:</p>

                                {/* section title */}
                                <h2 className="blog-h2">SIZE</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BR66PAUB7fe/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BSwXBddgZwm/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>Smaller tattoos usually take less time to complete than larger pieces. Artists value their time, so expect a more extensive tattoo to come with a higher price tag than a smaller or less detailed piece of art.</p>

                                {/* section title */}
                                <h2 className="blog-h2">BLACK AND GRAY VS. COLOR</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BSwBdnqFeIR/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BTR2xxWhkZl/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>If there are multiple colors involved in a tattoo, it can greatly increase the amount of time needed by the artist to complete the design. Again, the longer it takes, the more you can expect to pay.</p>

                                {/* section title */}
                                <h2 className="blog-h2">AN ARTIST’S PORTFOLIO</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BM9LwSnAcA0/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BS1gPgEg78u/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>Tattoo artists who have more experience may charge more than someone who is just starting their career. While an inexpensive tattoo may make your bank account smile, you may not after seeing the finished product. Experience often doesn’t come cheap, but it’s worth it.</p>

                                {/* section title */}
                                <h2 className="blog-h2">TIPPING</h2>

                                <p>Unless the tattoo artist is independent or runs his or her shop, they usually have to pay a fee to use a space to complete their work. If you appreciate the job done and hope to have more ink from an artist in the future, include a tip of 15 to 20 percent on top of the quoted price.</p>

                                {/* section title */}
                                <h2 className="blog-h2">WHAT TO EXPECT</h2>

                                <p>It’s worth asking how much time an artist will need to complete a piece. This will help give you a rough estimate of your final bill. It isn’t uncommon for experienced artists to charge anywhere between $100 to $200 an hour for their services. This means a tattoo that requires four hours will cost between $400 and $800, not including tip. The total bill could end up between $460 and $960 (before tax) when gratuity is added.</p>

                                <p>However, some tattoo artists are willing to negotiate the price. It’s important to ask and agree on a price first to avoid sticker shock.</p>
                                
                                {/* section title */}
                                <h2 className="blog-h2">HOW DO I KNOW THEY’RE A GOOD ARTIST?</h2>

                                {/* image example */}
                                <img className="blog-image" src={`${IMG_BASE_URL}/assets/img/what_to_look_for_in_a_tattoo.png`} />

                                <p>While the idea of "good" is subjective, here are a few things to keep in mind when meeting with a tattoo artist to discuss your piece:</p>

                                {/* section title */}
                                <h2 className="blog-h2">LINE WORK</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BRbDHrtjeqx/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BTOHScnFbiK/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>Left = Bad Line Work</p>

                                <p>Right = Good Line Work</p>

                                <p>The hashtag #badtattoo is often used to highlight poorly designed tattoos on social media, and one of the first areas where it can go wrong is in the lines. You want to see straight, even lines. If an artist has uneven, crooked, or alternating lines between light and heavy, look elsewhere.</p>

                                {/* section title */}
                                <h2 className="blog-h2">LOOK AT THEIR COMPLETED PIECES</h2>

                                <p>Most artists will have an online portfolio (Facebook, Instagram, Twitter, or a website) you can browse. Check to see if their style matches your desired piece (i.e., if you want watercolor, but the artist only uses black and gray) for a perfect match.</p>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BRl43UAgXKU/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6" style={{margin: 'auto'}}>
                                        <p><i>"Research, research, and then research some more! Decide on what you want and look up different tattoos for that; get an idea of the style you like. Look at actual tattoos; get an idea of what’s tattooable. And then research local artists who fit the style you’re looking for." <a style={{textDecoration: 'none'}} rel="noopener noreferrer" alt="" href="https://www.instagram.com/meghanschader/?hl=en" target="_blank">@meghanschader</a></i></p>
                                    </div>
                                </div>

                                {/* section title */}
                                <h2 className="blog-h2">READ ONLINE REVIEWS</h2>

                                <p>There may be several tattoo parlors in your area that offer services beyond tattoos – body piercing, modifications, or tattoo removal – and customer feedback is a great way to learn how a shop operates. Check for clean, sterile environments where artists use gloves. And look at multiple online review sites (Google, Facebook, or Yelp) to get the most comprehensive idea of a tattoo shop or artist.</p>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BOHzYkZh9m6/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6" style={{margin: 'auto'}}>
                                        <p><i>"Ask [the artist] any concerns you have about getting tattooed. Whether it’s pain, pricing, or if they do a particular style. A good artist will be upfront with you and ensure you have the best experience." <a style={{textDecoration: 'none'}} rel="noopener noreferrer" alt="" href="https://www.instagram.com/e_victoria/?hl=en" target="_blank">@e_victoria</a></i></p>
                                    </div>
                                </div>

                                {/* section title */}
                                <h2 className="blog-h2">ASK THOSE YOU KNOW WITH INK</h2>

                                <p>Ask friends, family, co-workers, or acquaintances where they had their work done. They might be able to give you the scoop on everything you need to know about an artist – how much it cost, how long it took, how personable the artist was when working – which you may not find online.</p>

                                {/* section title */}
                                <h2 className="blog-h2">TATTOO CONVENTIONS</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BTRoNMYABlR/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BTO9inzlzR1/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>Tattoo conventions may also expose you to artists who don’t permanently reside in your area. They may even offer special pricing, depending on the type of tattoo or subject matter. In fact, featured artists are usually invited to attend based on their portfolio. However, they may charge a higher hourly fee.</p>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BN2wbrNhRKT/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6" style={{margin: 'auto'}}>
                                        <p><i>"Look for someone who does the type of tattoo style that you like, and request a consultation with them, so you can sit and discuss your future tattoo ideas." <a href="https://www.instagram.com/e_victoria/?hl=en" target="_blank">@e_victoria</a></i></p>
                                    </div>
                                </div>

                                {/* section title */}
                                <h2 className="blog-h2">SPEAK WITH AN ARTIST OR PARLOR ABOUT YOUR TATTOO DESIGN</h2>

                                <p>You want a tattoo artist who understands your selected tattoo to ensure the final product matches your mind’s eye. Make sure they’re listening, taking notes, or asking questions to clarify. Some may even sketch it up for you while you’re waiting (there may be a small consultation fee, which is typically waived or bundled into the final tattoo cost, depending on the artist).</p>

                                {/* section title */}
                                <h2 className="blog-h2">PAIN TOLERANCE AND AFTERCARE</h2>

                                <p>Getting a tattoo is sometimes painful. As your body heals, your tattoo artist will guide you on how much time the area should be left exposed and how frequently it should be cleaned. If they aren’t telling you these things, ask! If you’re nervous about the pain, we recommend the Zensa Numbing Cream, which doesn’t affect the tattoo process but does help make it less painful. Our Zensa Healing Cream also helps with post-tattoo itching. Both of these are available in our <a style={{textDecoration: 'none'}} rel="noopener noreferrer" alt="" href="https://zensaskincare.com/shop/zensa-tattoo-box" target="_blank">Zensa Tattoo Box</a>.</p>

                                {/* section title */}
                                <h2 className="blog-h2">GOOD EXAMPLES OF TATTOO SHOPS AND ARTISTS</h2>

                                <p>While you may not live in Los Angeles, South Florida, Chicago, or New York City, the following shops and artists are still great benchmarks for the service and artistry you’ll want for your custom tattoo design.</p>

                                {/* section title */}
                                <h2 className="blog-h2">LOS ANGELES: MARK MAHONEY’S SHAMROCK SOCIAL CLUB</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/_iL6d6A8Q4/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BQ9hL4bhGdq/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>Take a look at the Line Work of this piece and the use of geometric patterns and tiny dots. This shop specializes in black and gray tattoos and has several artists on hand. If you book time with the owner, Mark Mahoney – who has been tattooing since the <a style={{textDecoration: 'none'}} rel="noopener noreferrer" alt="" href="http://shamrocksocialclub.com/history.html" target="_blank">1970s</a> – expect to pay more than with any other artist <a style={{textDecoration: 'none'}} rel="noopener noreferrer" alt="" href="http://shamrocksocialclub.com/" target="_blank">at the shop</a>.</p>

                                {/* section title */}
                                <h2 className="blog-h2">NEW YORK CITY: EAST RIVER TATTOO</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BORCaNvgOHt/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BTHUoyoAwOG/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>With eight artists to choose from, variety is to be found in this Brooklyn-based tattoo shop. In this example, look at the different lines – heavy and light – used throughout the piece and how delicately they were applied to provide the appropriate levels of shading.</p>

                                {/* section title */}
                                <h2 className="blog-h2">CHICAGO: MAYDAY! TATTOO CO.</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BR6Mncpg2Rc/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BRMdCDVAhJr/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>When you’re looking for color and potential pop culture elements, you want to see how close or far away from the design the artist may get. Josh Herman offers bold colors but keeps the details intact with strong Line Work.</p>

                                {/* section title */}
                                <h2 className="blog-h2">SOUTH FLORIDA: NO HARD FEELINGS</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BFZdPCUoSTO/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BSd08V7FAlB/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>Again, when it comes to color, details matter. Chris Blinston’s aquatic tattoo moves through different levels of blue from top to bottom. This evokes a feeling of going deeper and deeper underwater as you approach the base of the piece.</p>

                                {/* section title */}
                                <h2 className="blog-h2">HAPPY TATTOOS</h2>

                                <p>By following these steps, <b>you can avoid ending up in the #badtattoo hall of shame and make sure your first, fifth, or 10th piece of ink is exactly what you want</b>. Need further help planning what a tattoo should look like or what types of fonts to use? Check out the rest of our posts to learn more about what makes a great tattoo.</p>

                            {/*DO NOT EDIT BELOW THIS LINE*/}
                        </div>
                    </div>
                </div>
                {/* end: main content container */}
            </div>
        );
    } 
}