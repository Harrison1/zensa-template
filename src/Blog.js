import React from 'react';
import DocumentMeta from 'react-document-meta';
import InstagramEmbed from 'react-instagram-embed';

const IMG_BASE_URL = 'http://fractlstaging.com/clients/zensa/react-jsx-template';

export default class Blog extends React.Component {
    render() {
        const meta = {
            title: 'Example Title',
            description: 'Example Description',
            meta: {
                charset: 'utf-8',
                name: {
                    'twitter:title': 'Example Title',
                    'twitter:description': 'Example Description'
                },
                property: {
                    'og:title': 'Example Title',
                    'og:description': 'Example Description',
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
                            <h1 className="blog-h1">Example Title Goes Here</h1>
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

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quaerat facilis corporis animi ducimus tempore laborum earum aperiam qui fugiat assumenda vitae unde placeat, in non, velit, aliquam voluptatem nihil.</p>

                                <p>Lorem ipsum dolor sit amet, <b>consectetur adipisicing elit</b>. Consectetur maxime magnam, vitae rem at repellendus tempore. Voluptates aperiam veniam molestias dolore <a style={{textDecoration: 'none'}} href="https://www.google.com/" target="_blank" rel="noopener noreferrer">link</a> sunt fugit. <i>Illo cumque tempore modi</i> accusamus voluptates.</p>

                                {/* section title */}
                                <h2 className="blog-h2">New Section Title</h2>

                                {/* column conent */}
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <InstagramEmbed url='https://www.instagram.com/p/BS3O8EzAMCl/' hideCaption={true} />
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <p><i>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem voluptatem autem, est at. Eum repudiandae, harum vel necessitatibus, ab nisi pariatur dolorem voluptate nulla, perspiciatis molestiae repellat, aspernatur reiciendis doloribus." <a href="https://www.instagram.com/e_victoria/" target="_blank" rel="noopener noreferrer" alt=""> @e_victoria</a></i></p>
                                    </div>
                                </div>
                                
                                {/* image example */}
                                <img className="blog-image" src={`${IMG_BASE_URL}/assets/img/image1.png`} alt="" />

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam est eligendi aspernatur. Accusamus iste est velit sequi fuga ex molestias quas ipsum incidunt laboriosam tenetur, consequuntur perferendis voluptatibus voluptatum expedita.</p>

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