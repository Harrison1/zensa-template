import React from 'react';
import DocumentMeta from 'react-document-meta';
import InstagramEmbed from 'react-instagram-embed';

const IMG_BASE_URL = 'http://fractlstaging.com/clients/zensa/react-builds/idea-and-inspiration';

export default class Blog extends React.Component {
    render() {
        const meta = {
            title: 'Tattoo Ideas and Inspiration',
            description: 'The Ultimate Guide For Picking The Right Tattoo For You',
            meta: {
                charset: 'utf-8',
                name: {
                    'twitter:title': 'Tattoo Ideas and Inspiration',
                    'twitter:description': 'The Ultimate Guide For Picking The Right Tattoo For You'
                },
                property: {
                    'og:title': 'Tattoo Ideas and Inspiration',
                    'og:description': 'The Ultimate Guide For Picking The Right Tattoo For You',
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
                                <h1 className="blog-h1">Tattoo Ideas and Inspiration</h1>
                                
                            </div>
                            <p style={{textAlign: 'center'}}>The Ultimate Guide For Picking The Right Tattoo For You</p>
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
                                <p>Great ink starts with a great idea. Whether it’s your first piece or your fifteenth, this ultimate guide to tattoo inspiration is your must-read before you get in the chair.</p>

                                <p>So you’re ready to get a tattoo. Maybe it’s your first, or you’ve already gotten a few and are ready for another. You may have a subject matter in mind, but aren’t exactly sure what kind of guidance to give your tattoo artist to make sure it’s executed to perfection.</p>
                                
                                <p>We’ve created the ultimate tattoo guide on the top 10 most popular styles to help inspire your next piece of body art, as well as some ideas on the perfect placement. We’ll help you break down the difference between traditional and neo-traditional, and even highlight some of the new trends in popular design (like watercolor and dotwork). <b>This guide is a must-read before you head into the tattoo shop</b>.</p>

                                {/* section title */}
                                <h2 className="blog-h2">TATTOO STYLES YOU’LL LOVE</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BRlGCehhrRH/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <p><i>“Figure out what image or images you’d like to have tattooed on you before you come to the shop. Bring in some reference ideas, so the tattoo artists can point you in the direction of what will and won’t work and who can best complete the style of tattooing you are looking for.” <a style={{textDecoration: 'none'}} rel="noopener noreferrer" href="https://www.instagram.com/e_victoria/" target="_blank">@e_victoria</a></i></p>
                                    </div>
                                </div>
                                
                                {/* image example */}
                                <img className="blog-image" alt="" src={`${IMG_BASE_URL}/assets/img/tattoo_ideas_asset_1.png`} />

                                <p>From the most personal and intimate tattoo ideas to pieces that happen on a whim – <b>the style of your ink can say just as much about you as the subject matter and meaning</b>.</p>

                                {/* section title */}
                                <h2 className="blog-h2">TRADITIONAL</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BRwzAX4BJX8/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BS3O8EzAMCl/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>For nearly any tattoo you can think of (or might be thinking about getting), <b>traditional</b> is one of the most popular styles around. While possibly considered old-school by today’s standards, it’s the quintessential American tattoo style and has <a style={{textDecoration: 'none'}} rel="noopener noreferrer" href="http://uk.complex.com/style/2014/10/the-history-of-classic-american-tattoos" target="_blank">more history</a> than other styles. With <a style={{textDecoration: 'none'}} rel="noopener noreferrer"href="http://designtaxi.com/news/376608/Infographic-10-Of-The-Most-Popular-Tattoo-Styles-Explained/" target="_blank">bold black outlines</a> and simple colors, #traditionaltattoo has over 2.3 million tags on Instagram and has been used for everything from Darth Vader and army tattoos to wild tigers and floral designs.</p>

                                {/* section title */}
                                <h2 className="blog-h2">NEO-TRADITIONAL AND NEW SCHOOL</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BP2pJLqFk0I/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BMFTpk3AOoh/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>Old-school trends have evolved into <b>new-school</b> transitions that are still popular since coming onto the scene in the ’70s. These tats keep with the thick, bold lines of old-school tattoos but expand with brighter and more vibrant hues. <b>Neo-traditional</b> tattoos take the evolution of classic tattoos a step further by expanding the range of subject matter and <a style={{textDecoration: 'none'}} rel="noopener noreferrer" href="http://www.inkedmag.com/yallzees-neo-traditional-tattoos/" target="_blank">colorful execution</a>.</p>

                                {/* section title */}
                                <h2 className="blog-h2">SURREALIST AND WATERCOLOR</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BR2wd81BJeC/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BHXlR9ShTZi/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>The colorful expression of new-school tattoos has evolved into tattoo designs that emphasize color to give traditional designs (like a compass or portrait) a custom tattoo feeling. <b>Surrealist</b> designs – <a style={{textDecoration: 'none'}} rel="noopener noreferrer" href="https://www.instagram.com/p/BHXlR9ShTZi/" target="_blank">inspired by</a> the surrealist master himself, Dalí – can stand out anywhere on the body, from small tattoos on the arm or wrist to large full-sleeve tattoos that cover whole areas of the skin.</p>

                                <p>Just as popular today, <b>watercolor tattoos</b> create a colorful, dreamlike aesthetic for men’s and women’s ink designs. For a fresh take on old classics like flower, skull, or even bird tattoos, watercolor helps create new meaning by adding unique colors to borderless color design and the impression of freehand strokes. Because of the nature of its design, a watercolor style can even be great for cover-up tattoos.</p>

                                {/* section title */}
                                <h2 className="blog-h2">DOTWORK AND GEOMETRIC</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BR8szQOh1BD/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BR5BCrEFeod/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>Other popular tattoo styles that have emerged over time are <b>dotwork</b> and <b>geometric designs</b>. Dotwork is unique because the tattoo artist will use nothing but individual dots to comprise the image they’ve created. Usually black-and-gray pieces <b>dotwork</b> creates depth and shadow and can be especially great for mandalas to help illuminate the beauty of their complexity.</p>

                                <p>Geometric tattoos, which can sometimes be done as dotwork, create either a full image or portions of it out of geometric shapes. <b>Geometric tattoos</b> create a sense of <a style={{textDecoration: 'none'}} rel="noopener noreferrer" href="http://www.businessinsider.com/what-sacred-geometry-means-according-to-tattoo-artists-2015-10?IR=T/#first-the-basics-sacred-geometry-has-several-common-motifs-one-is-the-flower-of-life-1" target="_blank">symmetry and balance</a> that helps draw the eye to the subject of the art. These can be done in black and gray, or with sporadic color to create even more depth.</p>

                                {/* section title */}
                                <h2 className="blog-h2">JAPANESE AND TRIBAL</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BP5WajZjWVO/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BR2N8pgDN7x/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>Not every great tattoo style has to be new or different, though. More classic designs like <b>Japanese</b> and <b>tribal tattoos</b> also remain popular. With over 155,000 tattoo tags for #tribaltattoo and 40,000 for #asiantattoo on Instagram, these somewhat classic designs have stood the test of time. Tribal tattoo designs have even evolved from what you might have originally thought of into more elaborate, full-sleeve pieces you can’t help but stop and stare at – in a good way.</p>

                                {/* section title */}
                                <h2 className="blog-h2">REALISM AND PORTRAITS</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BPVyzJeh7Sa/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BKgfVlqg7eg/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>Realism or <b>realistic tattoo</b> designs are also popular and utilize black and gray colors to create extremely <a style={{textDecoration: 'none'}} rel="noopener noreferrer" href="http://inkluded.co.uk/2014/11/23/different-tattoo-styles-explained/" target="_blank">true-to-life</a> representations of portraits, animals, and nature. These tattoos can be extremely complicated and should be done by an experienced tattoo artist to ensure long-lasting quality.</p>

                                {/* section title */}
                                <h2 className="blog-h2">TATTOO PLACEMENT</h2>

                                {/* image example */}
                                <img className="blog-image" alt="" src={`${IMG_BASE_URL}/assets/img/tattoo_ideas_asset_2.png`} />

                                <p><b>Once you know what you want and which style fits best, how do you decide where to put it?</b></p>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BNklcSnBDzR/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <p><i>"When choosing your first tattoo, pick something timeless, meaningful, and that is going to age well." <a style={{textDecoration: 'none'}} rel="noopener noreferrer" href="https://www.instagram.com/takeshikamioka/" target="_blank">@takeshikamioka</a></i></p>
                                    </div>
                                </div>

                                {/* section title */}
                                <h2 className="blog-h2">CHEST AND TORSO</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BRbiURxAuPx/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BPlooKagf-u/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>With over 1.2 million tags on Instagram, #chesttattoo remains one of the most popular tattoo locations for men and women. Regardless of your style choice, a tattoo on your <b>chest</b> can be one of the boldest – and <a href="http://www.inkedmag.com/g/are-these-the-most-painful-places-to-get-tattooed/" target="_blank">most painful</a> – places to put your ink.</p>

                                {/* section title */}
                                <h2 className="blog-h2">UPPER ARMS AND FOREARMS</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                         <InstagramEmbed url='https://www.instagram.com/p/BPjXDMuATSy/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BRdhAMdluBY/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>For a different take on arm ink, consider your <b>upper arms</b> or <b>forearms</b>. Depending on what you choose, your piece may be more or less visible. Tattoos on the inner arm may not see as much light as those on the forearm, which are much more prominently displayed. Depending on how much color you use in your piece, you may also want to think about sun exposure if you’re considering either of these locations, as direct exposure to sunlight <a style={{textDecoration: 'none'}} rel="noopener noreferrer" href="https://www.bustle.com/articles/185442-what-happens-to-your-tattoo-in-the-sun-why-experts-say-you-should-protect-it" target="_blank">will fade</a> a tattoo over time.</p>

                                {/* section title */}
                                <h2 className="blog-h2">RIB CAGE AND SIDE</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BRv79W-DbhH/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BRSBqcgAG91/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>Your <b>rib cage</b> or <b>side</b> are certainly more private locations for your next tattoo. While the rib cage can be one of the most painful places to get inked, it’s likely to be less exposed to the elements or other people. Quote tattoos on the rib cage are also very popular, and there are over 115,000 posts on Instagram tagged with #ribtattoo.</p>

                                {/* section title */}
                                <h2 className="blog-h2">LEGS, THIGHS, AND FEET</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BREYDyqgb42/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BLgHKgaBr9s/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>While <b>legs</b> and <b>calves</b>, in particular, have always been popular spots for tattoos, <b>upper thighs</b> are becoming one of the trendiest places for tattoo expression. From <a style={{textDecoration: 'none'}} rel="noopener noreferrer" href="https://www.instagram.com/p/BR4Yv2QDa94/" target="_blank">flowers</a> to quote tattoos – with over 300,000 #thightattoo tags on Instagram – the <b>thigh</b> has turned into a popular tattoo destination for men and women alike.</p>

                                {/* section title */}
                                <h2 className="blog-h2">BACK</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                         <InstagramEmbed url='https://www.instagram.com/p/BPnn0nQhauf/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BPxzm1iAXil/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>The <b>back</b> can be one of the biggest canvases for a complete tattoo. Whether you want to cover your entire back or just certain areas, there’s no other part of the body that will give you more room to work with. With almost 230,000 Instagram posts tagged with #backtattoo, it’s also one of the most popular places to get inked.</p>

                                {/* section title */}
                                <h2 className="blog-h2">HANDS, NECK, AND OTHER BODY PARTS</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                         <InstagramEmbed url='https://www.instagram.com/p/BR28rEjAHfG/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BRdsKYOFIE4/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>Not all tattoo locations have to be big or bold, though. Some places can be perfect for more personal, delicate tattoos. The <b>inner wrist</b> and <b>finger</b> are both popular spots for anything from script to tiny mandalas. Finger tattoos have also become popular with <a style={{textDecoration: 'none'}} rel="noopener noreferrer" href="http://www.nylon.com/articles/celebrity-finger-tattoos" target="_blank">big celebrities</a> like Katy Perry and Rihanna. From bold to dainty, whatever your personal style, small placements are definitely in.</p>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BP8FRZAj1lJ/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <p><i>“Pick a tattoo that will age well and is not a fad or trend. Placement [is also important], [choose] an area that doesn’t block potential for future tattoos.” <a style={{textDecoration: 'none'}} rel="noopener noreferrer" href="https://www.instagram.com/meghanschader/" target="_blank">@meghanschader</a></i></p>
                                    </div>
                                </div>

                                <p>Some classic spots never go out of style, and the <b>hips</b> and <b>inner arms</b> remain among the most popular places to get tattoos. Like other body parts mentioned, you can use these areas to create bold statements or simple, subtle designs. When considering any of these placements, keep in mind if you want your tattoo to be more or less visible. Your hip might be a good option if you want something less visible, whereas your inner arm might be on display more often.</p>

                                {/* section title */}
                                <h2 className="blog-h2">INFINITE POSSIBILITIES</h2>

                                <p>Regardless of the tattoo you’re considering, <b>there are more styles and places to put them than you might think</b>. Popular placements for tattoos include classic locations like your arm and leg, but also include the thigh and forearm. Of course, the wrist and finger are also hot spots for new ink. Consider the style you want and how much space you might need to give it as much detail as possible, as well as other considerations like sun exposure and visibility. And once you’ve settled on what to get and where, use our buyer's guide to get it done at the best tattoo parlor in your area. </p>

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