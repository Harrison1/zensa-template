import React from 'react';
import DocumentMeta from 'react-document-meta';
import InstagramEmbed from 'react-instagram-embed';

const IMG_BASE_URL = 'http://fractlstaging.com/clients/zensa/react-builds/microblading';

export default class Blog extends React.Component {
    render() {
        const meta = {
            title: 'Microblading Miracles',
            description: 'A look into the semi-permanent eyebrow trend.',
            meta: {
                charset: 'utf-8',
                name: {
                    'twitter:title': 'A look into the semi-permanent eyebrow trend.',
                    'twitter:description': 'A look into the semi-permanent eyebrow trend.'
                },
                property: {
                    'og:title': 'Microblading Miracles',
                    'og:description': 'A look into the semi-permanent eyebrow trend.',
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
                            <h1 className="blog-h1">Everything You’ve Been Wanting to Ask About Semi-Permanent Eyebrows </h1>
                        </div>
                        </div>
                    </div>
                    {/* end: headline */}

                    {/* hero image */}
                    <div className="blog-hero-image" style={{backgroundImage: `url(${IMG_BASE_URL}/assets/img/header.png)`, backgroundPosition: '50% 50%'}} />
                    {/* end: hero image */}

                    {/* main content container */}
                    <div className="container my3">
                        <div className="row center-xs">
                        <div className="col-xs-12 col-md-10">

                            {/* main content */}
                            <p>Whether you’re into full-face makeup or prefer keeping it light and natural, your brows are essential in shaping your face. From eyebrow pencils to dip and tinted gels, keeping your brows full and even without looking overdone or fake can be quite the challenge. Thankfully, that’s where microblading steps in.</p>

                            <div className="row">
                                <div className="col-xs-12 col-md-6">
                                    <InstagramEmbed url='https://www.instagram.com/p/BTJvTDfBkRX/' hideCaption={true} />
                                </div>
                                <div className="col-xs-12 col-md-6" style={{margin: 'auto'}}>
                                    <p>"It's great for people with thin or non-existent eyebrows due to over-plucking, hair loss due to illnesses, hereditary or genetic hair loss, or simply for people with thin or light-colored eyebrows to thicken or darken them"</p>
                                    <p><i>-Twyla <a style={{textDecoration: 'none'}} href="https://www.instagram.com/chill_venice_hair/">@chill_venice_hair</a></i></p>
                                </div>
                            </div>

                            <p>As a semi-permanent process, microblading uses a thicker pigment than traditional tattoos to prevent the ink from fully sinking into the skin. If you’re looking to fill in a few gaps, completely reconstruct your brows, or just want to give them more pizzazz, microblading could be for you. <b>Here are the four most important things you need to know about microblading before you take the plunge.</b></p>

                            <h2 className="blog-h2">IT'S SAFE</h2>

                            <p>The first question you’re probably going to ask is "Is it safe?" <b>The answer is yes when microblading is performed by a licensed and accredited esthetician</b>. The process is entirely <a style={{textDecoration: 'none'}} href="http://www.besthealthmag.ca/best-looks/beauty/is-the-eyebrow-embroidery-beauty-trend-safe/">safe</a>. Like any tattoo procedure, microblading does involve a needle and the penetration of the skin, so it’s not uncommon for swelling or inflammation to occur afterward. If you’re concerned, it’s OK to ask your esthetician about their sterilization process to make sure everything they use is brand new. Just like a traditional tattoo, needles should never be reused, and you should see the technician open everything in front of you.</p>

                            <img className="blog-image" src={`${IMG_BASE_URL}/assets/img/skin.png`} />

                            <p>Microblading works by <a style={{textDecoration: 'none'}} href="http://usamicroblading.com/microblading-technique/">manually</a> depositing pigment under the first layer of the skin (the epidermis) around the eyebrow using a pen-like blade. The pen makes small incisions in the skin and leaves the ink behind in natural, hair-like strokes. The ink is usually <a style={{textDecoration: 'none'}} href="http://usamicroblading.com/microblading-versus-eyebrow-tattooing/">thicker</a> than traditional tattoo pigment and is <a style={{textDecoration: 'none'}} href="http://www.foxnews.com/health/2017/03/02/what-need-to-know-about-micro-blading-and-semi-permanent-makeup.html">mineral</a> based, meaning it will fade over time.</p>

                            <h2 className="blog-h2">IT'S ONLY SEMI-PERMANENT</h2>

                            <p>If you’re thinking about doing microblading, consider <b>it’s a multistep process and won’t last forever</b>. Depending on the quality of your stylist and the way you care for the ink after the process is over, microblading can last anywhere from <a style={{textDecoration: 'none'}} href="https://permanentmakeupcornwall.com/faqs-microblading">12 to 18 months</a> between touch-ups. As well, half or more of the ink may <a style={{textDecoration: 'none'}} href="http://info.gotbeauty.com/blog/all-the-microblading-information-youll-ever-need%20">fade</a> after the initial process based on your skin type, so plan for a follow-up appointment and monitor the healing process to see how long microblading may last for you. If you don’t like the way it turns out, the color will fade over time – leaving just your natural brows behind.</p>

                            <h2 className="blog-h2">IT CAN MAKE YOUR BROWS EFFORTLESSLY FIERCE</h2>
                            <p>Celebrities like <a style={{textDecoration: 'none'}} href="http://www.vogue.com/article/lena-dunham-microblading-tattoo-eyebrows-permanent-makeup">Lena Dunham</a> and <a style={{textDecoration: 'none'}} href="http://www.vogue.com/article/lena-dunham-microblading-tattoo-eyebrows-permanent-makeup">Bella Thorne</a> swear by the process, and research shows our brows aren’t just a fashion fad – they’re our <a style={{textDecoration: 'none'}} href="http://www.harpersbazaar.com/beauty/makeup/a11934/eyebrows-are-most-important-facial-feature/">most important</a> facial feature. So where does microblading fit into all of this?</p>

                            <p>A <a style={{textDecoration: 'none'}} href="http://www.cosmopolitan.com/style-beauty/beauty/a3884218/eyebrow-microblading-semi-permanent-tattoos/">breakdown</a> of the process shows how flawless brows can be yours in just about <a style={{textDecoration: 'none'}} href="http://www.cosmopolitan.com/style-beauty/beauty/a3884218/eyebrow-microblading-semi-permanent-tattoos/">an hour or two</a>. Once you’ve selected a salon or esthetician, talk to them about what you want. <b>Show them pictures of famous eyebrows you might have your heart set on and work with them to create the perfect shape for your existing brows and face</b>. After you’ve settled on a style and have drawn it out, he or she will mix up the perfect color to make sure the ink matches your natural hair color as closely as possible.</p>

                            <div className="row">
                                <div className="col-xs-12 col-md-6">
                                    <InstagramEmbed url='https://www.instagram.com/p/BTPbwunhK1F/' hideCaption={true} />
                                </div>
                                <div className="col-xs-12 col-md-6" style={{margin: 'auto'}}>
                                    <p>"It's different for everyone and depends on pain tolerance. Some people say it feels like their eyebrows are being squeezed or plucked. For others it's somewhat more painful."</p>
                                    <p><i>-Twyla <a style={{textDecoration: 'none'}} href="https://www.instagram.com/chill_venice_hair/">@chill_venice_hair</a></i></p>
                                </div>
                            </div>

                            <p>Your esthetician won’t use a typical tattoo gun. Instead, the microblading <a style={{textDecoration: 'none'}} href="http://www.dailymail.co.uk/femail/article-3538964/Microblading-video-shows-tiny-needles-used-create-perfect-eyebrows.html">tool</a> is thin and designed to create natural hair-like strokes in the skin that are then filled with pigment to create fabulous brows.</p>

                            <div className="row">
                                <div className="col-xs-12 col-md-6">
                                    <img className="blog-image" src={`${IMG_BASE_URL}/assets/img/process.gif`} />
                                </div>
                                <div className="col-xs-12 col-md-6" style={{margin: 'auto'}}>
                                    <p>Aftercare is crucial to making sure everything heals the way it’s supposed to and that nothing gets infected. Antibiotic ointment for the first 24 hours and then a <a style={{textDecoration: 'none'}} href="https://zensaskincare.com/shop/zensa-healing-cream-60ml">natural</a> healing gel for at least a week afterward will help keep the area clean, and the ink stays its true color for as long as possible before your next touch-up.</p>
                                </div>
                            </div>

                            <h2 className="blog-h2">IT’S (MOSTLY) NOT PAINFUL</h2>

                            <p>While microblading involves needles, everyone experiences pain differently. Some people who’ve had microblading done said it didn’t hurt at all (or that it felt like having your brows <a style={{textDecoration: 'none'}} href="http://www.cosmopolitan.com/style-beauty/beauty/a3884218/eyebrow-microblading-semi-permanent-tattoos/">threaded</a>), while others said it hurt <a style={{textDecoration: 'none'}} href="http://www.cosmopolitan.com/uk/beauty-hair/beauty-trends/a44101/microblading-review-before-after/">a lot</a>. If you’re concerned, it’s OK to use a topical <a style={{textDecoration: 'none'}} href="https://zensaskincare.com/shop/zensa-numbing-cream-30g">numbing cream</a> that won’t affect the ink or healing process.</p>

                            <h2 className="blog-h2">A FEW QUESTIONS TO ASK YOUR ESTHETICIAN</h2>

                            <p>Make sure to pick a talented esthetician who will give you the "on fleek" brow design you want. Before you walk in the office, <b>ask about their history with microblading as well as any accreditation they might have for the process.</b> Microblading can cost anywhere from <a style={{textDecoration: 'none'}} href="https://www.realself.com/microblading/cost">$400</a> to <a style={{textDecoration: 'none'}} href="http://www.cosmopolitan.com/style-beauty/beauty/a3884218/eyebrow-microblading-semi-permanent-tattoos/">$900</a>, and accreditation from institutes like the Society of Permanent Cosmetics Professionals (<a style={{textDecoration: 'none'}} href="http://www.spcp.org/">SPCP</a>) and the American Academy of Micropigmentation (<a style={{textDecoration: 'none'}} href="http://micropigmentation.org/">AAM</a>) will help you make the right decision.</p>

                            <p>You can also research reviews from popular sites like Yelp or Google that include before-and-after pictures, so you can see the quality you’re working with. Salons offering steep discounts or promise turnaround times in less than an hour may not provide the quality you want to be stuck with over the next year (or longer).</p>

                            <img className="blog-image" src={`${IMG_BASE_URL}/assets/img/recap.png`} />

                            <div className="row">
                                <div className="col-xs-12 col-md-6">
                                    <InstagramEmbed url='https://www.instagram.com/p/BS82pfblqtm/' hideCaption={true} />
                                </div>
                                <div className="col-xs-12 col-md-6" style={{margin: 'auto'}}>
                                    <p>"This service is not recommended to those who have unrealistic expectations or those who will not follow the aftercare instructions as provided by your technician."</p>
                                    <p><i><a style={{textDecoration: 'none'}} href="https://www.instagram.com/supernaturalbrows/">@supernaturalbrows</a></i></p>
                                </div>
                            </div>

                            <h2 className="blog-h2">BROWS ON POINT</h2>

                            <p>Microblading is a popular procedure today and for a good reason. Whether you’re looking to fill in the over-plucked areas of your eyebrows, make them a little thicker, or want to redesign them completely, <b>microblading can take your brows from thin and wispy to full and fabulous.</b></p>

                            <p>Whatever you’re looking to have done, make sure to have the best <a style={{textDecoration: 'none'}} href="https://zensaskincare.com/shop#shop-page-top">all-natural aftercare solutions</a> with you before you ever leave the house. Zensa offers the most natural numbing cream on the market and quality skin care products for everything from <a style={{textDecoration: 'none'}} href="https://zensaskincare.com/shop/zensa-microblading-kit">microblading</a> to piercings and tattoos. Your brows might just be the most <a style={{textDecoration: 'none'}} href="http://www.elle.com/beauty/news/g28046/eyebrows-are-your-most-important-facial-feature-says-science/">important</a> part of your look, <b>so make sure you treat them like the star they are.</b></p>

                        </div>
                            {/* end: main content */}
                        </div>
                    </div>
                    {/* end: main content container */}
                </div>
        );
    } 
}