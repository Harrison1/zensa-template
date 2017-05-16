import React from 'react';
import DocumentMeta from 'react-document-meta';
import InstagramEmbed from 'react-instagram-embed';

const IMG_BASE_URL = 'http://fractlstaging.com/clients/zensa/react-builds/tattoo-bible-font';

export default class Blog extends React.Component {
    render() {
        const meta = {
            title: 'Tattoo Font Bible',
            description: 'Whether your tattoo quotes literature or rap lyrics, you\'ll need the perfect lettering to make your ink look incredible',
            meta: {
                charset: 'utf-8',
                name: {
                    'twitter:title': 'Tattoo Font Bible',
                    'twitter:description': 'Whether your tattoo quotes literature or rap lyrics, you\'ll need the perfect lettering to make your ink look incredible'
                },
                property: {
                    'og:title': 'Tattoo Font Bible',
                    'og:description': 'Whether your tattoo quotes literature or rap lyrics, you\'ll need the perfect lettering to make your ink look incredible',
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
                                <h1 className="blog-h1">Tattoo Font Bible</h1>
                            </div>
                            <p style={{textAlign: 'center'}}>Whether your tattoo quotes literature or rap lyrics, you'll need the perfect lettering to make your ink look incredible. Here's your go-to guide to our favorite tattoo fonts.</p>
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
                                
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BMULuX2D-xj/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6" style={{margin: 'auto'}}>
                                        <p><i>"Old English and script are some of the more common styles of lettering people choose. The beauty of script is that it is so versatile. There are innumerable ways to draw script, from a very simple single line to very fancy with filigree around it, so a client will most likely end up with a lettering style that is unique to them." <a style={{textDecoration: 'none'}} rel="noopener noreferrer" alt="" href="https://www.instagram.com/bike_kvlt/" target="_blank">@bike_kvlt</a></i></p>                                
                                    </div>
                                </div>

                                <p>So you’ve decided on a typeface tattoo. Maybe it’s a name or an important quote, but you know it has great meaning. What’s next? Beyond finding the perfect tattoo artist (and tattoo shop) for your piece, <b>you have to pick the perfect font</b>.</p>
                                
                                <p>Our guide will give you examples of some of the most popular tattoo fonts and designs being used today to help inspire whatever you have in mind – from cursive and serif to calligraphy and Celtic knots. Continue reading for an in-depth look at the lettering options for your next text tattoo.</p>
                                
                                <h2 className="blog-h2">TATTOO FONTS</h2>

                                <img className="blog-image" src={`${IMG_BASE_URL}/assets/img/most-popular-font-asset.png`} />

                                <h2 className="blog-h2">HELVETICA</h2>

                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/1Iwi_iPO-Z/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                         <InstagramEmbed url='https://www.instagram.com/p/BSEWKzOFNsP/' hideCaption={true} />
                                    </div>
                                </div>
                              
                                <p>You've probably seen the Helvetica font before, and not even realized it. With a history that goes as far back as the 1800s, Helvetica is an <a style={{textDecoration: 'none'}} rel="noopener noreferrer" alt="" href="https://www.webdesignerdepot.com/2010/01/the-simplicity-of-helvetica/" target="_blank">award-winning font with modern</a>, sleek lines and refined vertical and horizontal strokes. Regardless of the font size, Helvetica is a great choice for tattoo lettering.</p>

                                <h2 className="blog-h2">CURSIVE</h2>

                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BRsRBNuj2bL/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                         <InstagramEmbed url='https://www.instagram.com/p/BJ2hSpvg1ao/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>Cursive fonts add style and elegance to your type tattoos. From the arm to the chest and even smaller sections like your fingers or feet, cursive tattoos can create a sense of artistry. An easy, delicate design can elevate the words that matter most to you. In fact, there are hundreds of <a style={{textDecoration: 'none'}} rel="noopener noreferrer" alt="" href="http://www.designzzz.com/free-cursive-tattoo-fonts/" target="_blank">free cursive fonts</a> to choose from, like Aspire, Allura, and even Tribal Script that’s perfect for – you guessed it – tribal tattoos.</p>

                                <h2 className="blog-h2">OLD ENGLISH</h2>

                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BH02UJbByzU/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                         <InstagramEmbed url='https://www.instagram.com/p/BTE8XVbBBK3/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>Old English tattoo fonts can give a bold, medieval style to your tattoo letter design. Its <a style={{textDecoration: 'none'}} rel="noopener noreferrer" alt="" href="http://fontmeme.com/old-english-fonts/" target="_blank">1,000-year-old</a> ancestory is hard to replicate in freehand, and for good quality, should be designed by a talented artist. Like many other font designs, there are <a style={{textDecoration: 'none'}} rel="noopener noreferrer" alt="" href="https://de.pinterest.com/pin/479000110337117941/" target="_blank">several variations</a> of Old English, each creating a slightly different effect.</p>
                                
                                <h2 className="blog-h2">TYPEWRITER</h2>

                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/dIJe4Lmg_d/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                         <InstagramEmbed url='https://www.instagram.com/p/BPdQ7WPArZU/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>Like Old English, Typewriter fonts are bolder and require more black and shading to create the full effect. By adding a vintage, retro vibe to these type tattoos, Typewriter fonts can be used for quotes or literary references. You also want to make sure you get this tattoo designed with the <a style={{textDecoration: 'none'}} rel="noopener noreferrer" alt="" href="https://www.bustle.com/articles/117770-these-tattoos-fonts-are-best-for-wordy-ink-that-looks-amazing-photos" target="_blank">proper sizing</a> to ensure it looks balanced on whatever part of your body you decide to place it. Because Typewriter fonts are usually filled in, it can be harder to fit long words or phrases into small spaces.</p>

                                <h2 className="blog-h2">TAGGED TYPE</h2>

                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BQ0snDLBd0W/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                         <InstagramEmbed url='https://www.instagram.com/p/BTPW_cBDDIK/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>Tagged Type, or graffiti designs, can also be ideal for your next text tattoo. This unique design can have a tribal feel to its stylization and is less about the overall text as it is about the artistic interpretation. This font may be less uniform than others and may require some additional work by your tattoo artist to create the perfect fit for the piece you have in mind.</p>

                                <h2 className="blog-h2">BLACKOUT TEXT</h2>

                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BPjMT6vD0Xl/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                         <InstagramEmbed url='https://www.instagram.com/p/BCRhNqmtt80/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>Abstract, blackwork tattoo designs have become quite popular, and this font style is <a href="http://elitedaily.com/envision/blackout-tattoos-new-trend-photos/1437952/" target="_blank">no exception</a>. With inverted layouts, Blackout fonts like Impact Label create a bold outline with space to form lettering. These pieces are much less subtle than other designs and are bound to stand out wherever you place them. Because of their heavy use of ink, Blackout fonts may be best for smaller words or designs due to sizing and composition.</p>

                                <h2 className="blog-h2">SERIF FONTS</h2>

                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BR6MTUJAnvq/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                         <InstagramEmbed url='https://www.instagram.com/p/BMXoPeIj4nv/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>As one of the most classic fonts of all time, these work great if you’re looking for something <a style={{textDecoration: 'none'}} rel="noopener noreferrer" alt="" href="https://www.bustle.com/articles/122966-the-best-fonts-for-small-tattoos-isnt-something-youll-find-online" target="_blank">small and intimate</a>. Some fonts need to cover a larger area to show up clearly, which can limit your design choice if bigger isn’t always better for you. Times New Roman is a classic, simple font that can step in and save the day. As a version of a <a style={{textDecoration: 'none'}} rel="noopener noreferrer" alt="" href="http://fontmeme.com/serif-fonts/" target="_blank">serif font</a>, Times New Roman helps ensure every letter is distinct, making your tattoo simple and easy to read.</p>

                                <h2 className="blog-h2">SAILOR FONTS</h2>

                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/csSRi2oSb3/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                         <InstagramEmbed url='https://www.instagram.com/p/cqE2lJISbF/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>While a classic design, these are a little different. Sailor fonts (<a style={{textDecoration: 'none'}} rel="noopener noreferrer" alt="" href="http://www.tattooschool-art.com/tattoo-apprenticeship-blog/bid/144838/Best-Tattoo-Fonts" target="_blank">sometimes referred to as Sailor Jerry fonts</a> as a nod to Traditional American tattoo design) can help make your tattoo feel custom with its hand-drawn look. By utilizing space and dark shading to create depth, Sailor fonts can be customized based on the design you and your tattoo artist settle on. You can even add multiple colors to create a truly bold Sailor look.</p>

                                <h2 className="blog-h2">CALLIGRAPHY</h2>

                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BR8oYu2AhYz/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                         <InstagramEmbed url='https://www.instagram.com/p/BRwms0JgSor/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>The art of Calligraphy has been around for years, and practicing it freehand can take years of patience. When it comes to the font, though, your tattoo artist may be able to replicate its beautiful design without (most of) the hard work. From small, simple lettering to bold pieces with flair, Calligraphy is one of the most versatile font designs you can pick.</p>

                                <h2 className="blog-h2">CELTIC FONTS</h2>

                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BTFLRf1hMff/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                         <InstagramEmbed url='https://www.instagram.com/p/BRvmVQPAcla/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>You don’t have to be Irish to appreciate the beauty of a Celtic font design. Like the intricacy of Celtic knotwork, these knot fonts are equally as beautiful and can add extra layers of depth and meaning to your type tattoo. Keep it classic or modern by adjusting the <a href="http://fontmeme.com/celtic-fonts/" target="_blank">thickness of the lines</a>, and consider putting these tattoos somewhere you have a little extra room, so your tattoo artist can go in on the complex design work if you want.</p>

                                <h2 className="blog-h2">CUSTOM FONTS</h2>

                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/9cL9nkF85C/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                         <InstagramEmbed url='https://www.instagram.com/p/TXyyg8t24-/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>If you or your tattoo artist feel artistically inclined, there are no rules that say you have to pick a preset font. Freehand design, or even a mashup of other fonts, may be the custom look and feel you want for your next piece. If you haven’t found something here that feels right, consider online communities like <a style={{textDecoration: 'none'}} rel="noopener noreferrer" alt="" href="https://www.reddit.com/r/fonts/" target="_blank">Reddit</a> or Facebook, where you can ask for recommendations from people who have been there too.</p>

                                <h2 className="blog-h2">EXPLORING FONTS</h2>

                                <p>These, however, are not the be-all and end-all of the fonts available. Speak with your tattoo artist to see what they think may work best with the composition of your piece. They may even have significant experience in making text look perfect for a particular style of tattoo!</p>

                                <p>Continue to search on Instagram or other social media sites to find inspiration. Or look through fonts via a word processor and type out the words you’d like in your tattoo. Get creative with finding a good example!</p>
                                
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BSL6hKljoHE/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6" style={{margin: 'auto'}}>
                                        <p><i>"There are literally thousands of fonts to choose from. Figure out the style of writing you want and narrow it down from there." <a href="https://www.instagram.com/e_victoria/" target="_blank">@e_victoria</a></i></p>                     
                                    </div>
                                </div>

                                <h2 className="blog-h2">YOUR FONT BIBLE</h2>

                                <p>These are some of the most popular and versatile fonts and styles you can use for your next wordy ink job. When it comes to style and design, you’ll be much happier with the finished product if you do some font research beforehand to avoid pouring over the thick, laminated pages in your shop’s font binder.</p>

                                <p>From the classic to the edgy – from big to small – these fonts are our best bet for what you should use during your next trip to your ink master. However, don’t forget about having the perfect aftercare solution to go with your fresh new ink. At <a style={{textDecoration: 'none'}} rel="noopener noreferrer" alt="" href="https://zensaskincare.com/" target="_blank">Zensa</a>, we want to make sure your tattoo heals properly and looks its very best. From tattoos to waxing and laser hair removal, our products have your skin's best interest at heart. Shop for them <a style={{textDecoration: 'none'}} rel="noopener noreferrer" alt="" href="https://zensaskincare.com/shop" target="_blank">here</a> before your next tattoo appointment to make sure you have everything you need before you even sit down in the chair.</p>
                                {/* end: main content */}
                        </div>
                    </div>
                </div>
                {/* end: main content container */}
            </div>
        );
    } 
}