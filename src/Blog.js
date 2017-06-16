import React from 'react';
import DocumentMeta from 'react-document-meta';
import InstagramEmbed from 'react-instagram-embed';

const IMG_BASE_URL = 'http://fractlstaging.com/clients/zensa/react-builds/tattoo-removal-guide';

export default class Blog extends React.Component {
    render() {
        const meta = {
            title: 'Tattoo Removal: What Works, What Hurts, and What to Expect',
            description: 'Everything You Need to Know About Laser Tattoo Removal – And the Future of Alternative Options',
            meta: {
                charset: 'utf-8',
                name: {
                    'twitter:title': 'Tattoo Removal: What Works, What Hurts, and What to Expect',
                    'twitter:description': 'Everything You Need to Know About Laser Tattoo Removal – And the Future of Alternative Options'
                },
                property: {
                    'og:title': 'Tattoo Removal: What Works, What Hurts, and What to Expect',
                    'og:description': 'Everything You Need to Know About Laser Tattoo Removal – And the Future of Alternative Options',
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
                                <h1 className="blog-h1">Tattoo Removal: What Works, What Hurts, and What to Expect</h1>
                                <h2 className="blog-h2">Everything You Need to Know About Laser Tattoo Removal – And the Future of Alternative Options</h2>
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
                                <p>So you’ve come to the realization that not all of your tattoos are genuine masterpieces. Maybe it’s one of your first pieces before you knew what good line work was supposed to look like, or one that didn’t fare well after months or years of sun exposure. Whatever the reason, <b>it’s time to consider your options for getting that ink removed.</b></p>

                                <div className="row">
                                    <div className="col-xs-12 col-md-6" style={{margin: "auto"}}>
                                        <p>Fear not. We’re going to break down everything you need to know about laser tattoo removal – from how it works to what it costs and if it’s going to hurt. We’ll even get into the future of tattoo removal. If you’re thinking about going under the laser, you don’t want to miss this. Keep reading for the answers to all of your burning questions.</p>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BTGg4PBgebQ/' hideCaption={true} />
                                    </div>
                                </div>

                                {/* section title */}
                                <h2 className="blog-h2">How Does Tattoo Removal Work?</h2>

                                <p><i>"Lasers remove tattoos by breaking up the pigment colors with a high-intensity light beam. Black tattoo pigment absorbs all laser wavelengths, making it the easiest color to treat. Depending on how much pigment you are trying to break up and ‘remove’ will determine how many number of sessions or procedures you will need to have."</i> – Lauren Margo, tattoo artist</p>

                                {/* image example */}
                                <img className="blog-image" src={`${IMG_BASE_URL}/assets/img/asset1.png`} />

                                <p>While tattoo removal technology has evolved, the most common type of tattoo removal utilizes laser technology. These lasers use focused beams of quickly pulsating light to break down tiny ink particles in your tattoo. Previous generations of laser therapy technology (referred to as Q-switched lasers) operate at a rate of five to 10 pulses each nanosecond – sometimes going as fast as 50 pulses each nanosecond, depending on the laser. Today, laser pulsations are measured in picoseconds, which are 1,000 times faster than their predecessors and can help eliminate your tattoo in one to three sessions.</p>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BTFK7KoAvch/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6" style={{margin: "auto"}}>
                                        <p><i>"Picosecond pulses are more efficient than nanosecond pulses..." </i></p>
                                    </div>
                                </div>

                                <p>The most common picosecond lasers are the PicoWay and PicoSure. The PicoSure may have come first, but it’s still a champ for breaking down blue and green inks. The PicoWay – a newer iteration of picosecond technology – works great with all skin types and is extremely efficient at removing red and black inks. All three versions of laser tattoo removal are available today, and the one you choose may be contingent upon the tattoo you’re looking to have removed and how much you’re willing to pay.</p>

                                {/* section title */}
                                <h2 className="blog-h2">How Long Does Laser Tattoo Removal Take?</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BTL7aauBQ6R/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BTRkzobgQVu/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>No matter which laser technology you use, tattoo removal takes time. The process is gradual, and your body will need time between sessions to recuperate. Depending on the quality and size of your tattoo, experts estimate tattoo removal using picosecond lasers can be done in two to six treatments, where Q-switched laser removal may take eight to 12 treatments.</p>

                                {/* section title */}
                                <h2 className="blog-h2">Will My Tattoo Really Be Gone?</h2>

                                <p><i>"I would recommend either laser tattoo removal, or a professional cover-up tattoo. Laser removal takes multiple sessions and is typically more painful than getting tattooed."</i> – Kate Hartley, marketing manager for Tyson Weed Tattoo </p>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BTFq2E-j9ZC/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BTQjDi-Avtn/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>It depends. Our tattoos and bodies are unique, and how well they respond to laser therapy removal can vary. The American Society for Dermatologic Surgery (ASDS) states that skin discoloration and a complete lack of pigment removal are possible risks with any of these procedures, so temper your expectations before the process begins.</p>

                                {/* section title */}
                                <h2 className="blog-h2">Will There Be Scarring?</h2>

                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                         <InstagramEmbed url='https://www.instagram.com/p/BSUEPZ9gHbh/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6" style={{margin: "auto"}}>
                                        <p>It’s possible but unlikely. The ASDS suggests scarring is a potential side effect, and online reviews of the procedures have found that scarring is entirely possible. You should always ask to see doctors’ before-and-after photos of tattoo removal before agreeing to utilize their services, and study online reviews to understand the quality of their work.</p>
                                    </div>
                                </div>

                                {/* section title */}
                                <h2 className="blog-h2">Does It Hurt?</h2>
                                
                                <p>Your mileage may vary on this one, but those who have had it done say it hurt worse than getting the tattoo. The good news is you can use numbing cream to help take the edge off during the removal process.</p>
                                
                                {/* section title */}
                                <h2 className="blog-h2">How Much Does Tattoo Removal Cost?</h2>

                                <p>The answer here is also contingent on the kind of tattoo you’re looking to zap away, as well as the type of laser therapy you’ve decided to use.</p>

                                <p>Q-switched laser treatments can cost anywhere from $50 to $800 a session, and picosecond laser sessions can range anywhere from $200 to $2,000 a pop.</p>

                                {/* section title */}
                                <h2 className="blog-h2">Do I Have Any Other Options?</h2>

                                <p>The future is bright when it comes to alternatives to laser removal. Tattoo removal creams may sound too good to be true, but at least one Canadian student thinks he’s onto something with his recent invention – which he just happened to sell to a pharmaceutical company specializing in dermatology for an undisclosed load of cash.</p>

                                <p>Presently, a Perfluorodecalin patch (or PFD for short) can even let you go through multiple passings of the laser in one sitting with positive results. And, of course, you can always cover up an old tattoo with a new one if you’re looking to change it up but don’t have the cash or the time for laser therapy.</p>

                                {/* section title */}
                                <h2 className="blog-h2">Making the Best of Today’s Choices</h2>

                                <p><i>"Being in the business of removing tattoos, we have found laser tattoo removal the most effective. Whilst the process takes time, we have found when applied by an experienced and qualified clinician, the results are excellent with complete removals possible without scarring or residual skin damage."</i> – Peter Poulos, director of Disappear Ink Tattoo Removal Clinic</p>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BR69zDZBfcu/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BTDDrghFHnc/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>If you’re looking to have a tattoo removed today, these are your options. Laser therapy has come a long way, and you now have a choice of what works best depending on the size and color of your tattoo. Laser treatment isn’t cheap, however, but you can choose to use a slower laser option to save money. If you’re concerned about the pain, <b>make sure you bring Zensa's Numbing Cream with you before you go.</b> Our all-natural product won’t interfere with the laser removal procedure, and while it can’t numb the pain when it comes to the cost of the treatment, it can help dull the pain of those pulsating lasers.</p>

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