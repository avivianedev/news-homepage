import "./News.scss"

export default function News() {

    return (
        <div className="container-information ">
            <div className="main-information">
                <img className="image-desktop-responsive" src="/assets/images/image-web-3-desktop.jpg" alt="image main information" />
                <div className="image-mobile-responsive"  >
                    <img src="/assets/images/image-web-3-mobile.jpg" alt="image main information" />
                </div>
                <div className="information-text">
                    <div className="information-title">
                        <h1>The Bright Future of Web 3.0?</h1>
                    </div>

                    <div className="information-description">
                        <div>
                            <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.</p>
                            <p>But is it really fulfilling its promise?</p>
                        </div>
                        <div>
                            <button>READ MORE</button>
                        </div>
                    </div>


                </div>

            </div>
            <div className="side-frame">
                <div className="new-title"><h1>New</h1></div>
                <div className="new-content">
                    <a href=""><h3>  Hydrogen VS Electric Cars</h3></a>
                    <p>  Will hydrogen-fueled cars ever catch up to EVs?</p>
                </div>
                <div className="new-content">
                    <a href=""><h3>The Downsides of AI Artistry</h3></a>
                    <p>  What are the possible adverse effects of on-demand AI image generation?</p>
                </div>
                <div className="new-content">
                    <a href=""><h3>Is VC Funding Drying Up?</h3></a>
                    <p>  Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </div><a href=""></a>
            </div>
        </div>
    )
}