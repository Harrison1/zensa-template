import React from 'react';
import DocumentMeta from 'react-document-meta';
import InstagramEmbed from 'react-instagram-embed';

const IMG_BASE_URL = 'http://fractlstaging.com/clients/zensa/react-builds/numbing-cream-ultimate-guide';

export default class Blog extends React.Component {

    render() {
        const meta = {
            title: 'The Ultimate Guide to Numbing Cream – And How It’s Used for Tattoos',
            description: 'Here are the most important things you need to know about numbing cream in our ultimate guide.',
            meta: {
                charset: 'utf-8',
                name: {
                    'twitter:title': 'The Ultimate Guide to Numbing Cream – And How It’s Used for Tattoos',
                    'twitter:description': 'Here are the most important things you need to know about numbing cream in our ultimate guide.'
                },
                property: {
                    'og:title': 'The Ultimate Guide to Numbing Cream – And How It’s Used for Tattoos',
                    'og:description': 'Here are the most important things you need to know about numbing cream in our ultimate guide.',
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
                                <h1 className="blog-h1">The Ultimate Guide to Numbing Cream</h1>
                                <h2 className="blog-h2">And How It’s Used for Tattoos</h2>
                            </div>        
                        </div>
                    </div>
                    {/* end: headline */}

                    {/* hero image */}
                    <div className="blog-hero-image" style={{backgroundImage: `url(${IMG_BASE_URL}/assets/img/Header.png)`}} />
                    {/* end: hero image */}

                    {/* main content container */}
                    <div className="container my3">
                        <div className="row center-xs">
                            <div className="col-xs-12 col-md-10">

                                {/* main content */}

                                <p>While “no pain, no gain” sometimes makes sense, it doesn’t have to be that way when it comes to your skin. Whether you’re looking for your first or 50th tattoo or are contemplating laser hair removal or waxing, you and your precious skin don’t have to suffer. Numbing creams are the best options in taking away the sting of any procedure.</p>

                                <p><i>"... Lidocaine temporarily deadens the nerves in the area it is applied. But keep in mind that it will be working at its best once your skin has already been broken open during the tattoo procedure."</i> - <a style={{textDecoration: 'none'}} href="http://www.ohlaurentattoos.com/" target="_blank" rel="noopener noreferrer">Lauren Margo</a>, tattoo artist</p>

                                <p>How do they work, and how should you approach taking care of your skin after getting a tattoo? Here are the most important things you need to know about numbing cream in our ultimate guide.</p>

                                {/* section title */}
                                <h2 className="blog-h2">It’s the Pain of the Game</h2>

                                {/* image example */}
                                <img className="blog-image" src={`${IMG_BASE_URL}/assets/img/Asset-1.png`} alt="Questions About Tattoo Pain" />


                                <p>Pain is a concern for many when it comes to getting a tattoo. There are over 9,500 threads on Yahoo! Answers of individuals asking about the pain related to tattoos in different locations across the body. Almost 3,400 were asking about the pain of a back tattoo, significantly more than those inquiring about the pain of arm or wrist tattoos. Thankfully, for all those wondering about the pain associated with getting a tattoo on any of these body parts, there is an answer: numbing cream.</p>

                                {/* section title */}
                                <h2 className="blog-h2">What Are Numbing Creams?</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <p>Numbing creams are <a style={{textDecoration: 'none'}} href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4676230/" target="_blank" rel="noopener noreferrer">topical anesthetics</a> that relax your skin before procedures or services that may cause discomfort or pain. There are over-the-counter and prescription options available; however, it’s important to purchase a numbing cream that’s approved by the Food and Drug Administration (FDA).</p>

                                        <p>Numbing creams tend to use lidocaine, a <a style={{textDecoration: 'none'}} href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4676230/" target="_blank" rel="noopener noreferrer">nerve-numbing agent</a>, which helps make getting that perfect piece of ink or much-needed wax out of the way with minimal displeasure. <a style={{textDecoration: 'none'}} href="https://www.fda.gov/downloads/drugs/guidancecomplianceregulatoryinformation/guidances/ucm086293.pdf" target="_blank" rel="noopener noreferrer">Creams contain no more than 5 percent lidocaine</a>, the maximum strength allowed by the FDA for over-the-counter options.</p>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BS_0JQmFOQJ/' hideCaption={true} />
                                    </div>
                                </div>

                                {/* image example */}
                                <img className="blog-image" src={`${IMG_BASE_URL}/assets/img/Asset-2.png`} alt="Zensa Numbing Cream" />

                                <p>After application, it’ll take around 15-40 minutes for the cream to be absorbed into the skin depending on the type of procedure you’re undertaking. Numbing will then last for two to three hours. There are also creams that are made with all-natural ingredients which help prevent skin complications caused by filler additives.</p>

                                {/* section title */}
                                <h2 className="blog-h2">What Other Options Are There?</h2>

                                <p>Numbing creams aren’t the only types of topical anesthetics on the market today. Gels and sprays are also available as over the counter options without needing a prescription. While some research has found that gels are sometimes more <a style={{textDecoration: 'none'}} href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4760043/" target="_blank" rel="noopener noreferrer">powerful</a> at deterring pain, they’ve also been found to absorb into the skin <a style={{textDecoration: 'none'}} href="https://www.neutrogena-me.com/en/expert-centre/skin-types/gel-vs-cream-whats-the-difference" target="_blank" rel="noopener noreferrer">quicker</a>. Some have expressed that they generally prefer sprays for the sake of convenience, some research has indicated that it may not be as powerful. While there are multiple options for topical anesthetic available, research comparing their effectiveness against one another indicates that more studies should be done in order to genuinely determine one as being better than another.</p>

                                {/* section title */}
                                <h2 className="blog-h2">Do Numbing Creams Work?</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BVgFhXdBvsR/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BSmvTsnB7Lg/' hideCaption={true} />
                                    </div>
                                </div>

                                <p>The short answer: Yes.</p>

                                <p>The long answer involves understanding the ingredients that make up numbing creams and how they work. Many top-grade numbing creams utilize ingredients like <a style={{textDecoration: 'none'}} href="http://www.webmd.com/drugs/2/drug-8945-8170/lidocaine-prilocaine-topical/lidocaine-prilocaine-cream-topical/details" target="_blank" rel="noopener noreferrer">lidocaine</a> and prilocaine to successfully numb the uppermost layer of the skin without being overly harmful. In some cases, lidocaine can completely numb the area it covers, but in other instances, it may require an additional shot administered by a medical professional.</p>

                                <p>Some creams utilize another ingredient called <a style={{textDecoration: 'none'}} href="http://www.webmd.com/drugs/2/drug-75054/benzocaine-otic/details" target="_blank" rel="noopener noreferrer">benzocaine</a> that must be prescribed by a medical professional for any topical use. In some instances, doctors will combine lidocaine and benzocaine creams to be more efficient.</p>

                                <p>But don’t just take our word. Here are testimonials of individuals who’ve used numbing creams to make getting a tattoo easier and pain-free.</p>

                                <p><i>"This product works like a charm … I put it on using the plastic wrap a couple hours before my tattoo appointment and I felt absolutely nothing for the first hour."</i> – Stephen P.</p>

                                <p><i>"I have to say this stuff works great!!"</i> – Jared Egge</p>

                                <p><i>"This worked SO WELL I couldn’t even feel the needle, only the vibration of the machine. Truly amazing! I have already recommended this to people, and have told people I could get my whole body covered in tattoos as long as I have this cream. *I do not leave reviews, but this product truly amazed me!"</i> – Heather A. Melancon</p>

                                {/* section title */}
                                <h2 className="blog-h2">How Do Tattoo Artists Feel?</h2>

                                <p>Are you afraid numbing cream may get in the way of the creative process or cause problems for your tattoo? If your tattoo artists aren’t worried, it’s a good sign you’re in the clear! Here are some thoughts from professional tattoo artists on numbing cream.</p>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BEsHGnatqbG/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6" style={{margin: "auto"}}>
                                        <p><i>"By using Zensa Numbing Cream, we eliminate the worst part of getting a tattoo: the pain. Zensa is a must-have for all of my tattoo procedures because the formula doesn’t affect the ink – the tattoo comes out just as we had envisioned."</i> – Little Linda, tattoo artist</p>
                                    </div>
                                </div>

                                {/* section title */}
                                <h2 className="blog-h2">Making it Easier</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BTHWvNHlmsr/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BKjIbppDG16/' hideCaption={true} />
                                    </div>
                                </div>

                                <p><b>It’s up to you:,</b> Would you rather suffer in silence, squirming as the needle digs deeper, or be peacefully lulled into a blissful state by the pressure and absence of pain while getting tattooed? Numbing creams are the best choice around, and there’s none better than <a style={{textDecoration: 'none'}} href="https://zensaskincare.com/shop/zensa-numbing-cream-30g">Zensa’s numbing cream.</a> By utilizing a 5 percent concentration of lidocaine, Zensa’s numbing cream is considered a maximum strength anesthetic and won’t affect the quality of your ink. There’s no better combination for numbing the unnecessary pain caused by your next beautiful masterpiece.</p>

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