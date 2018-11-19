import React from 'react';

const Article = (props) => {
    const {details} = props;
    return (
        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="card">
                <a href={details.url} target="_blank">
                    <img className="card-img-top" src={details.urlToImage} alt="NewsImage"/>
                </a>
                <div className="card-block">
                    <h6 className="card-title">
                        <a href={details.url} target="_blank">
                            {details.title}
                        </a>
                    </h6>
                    <a href={details.url} target="_blank">
                        <p className="card-text">{details.description}</p>
                    </a>
                    <br/>
                    <p className="public-data">{details.publishedAt}</p>
                    <a href={details.url} target="_blank">
                        <p className="card-text">{details.author}</p>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Article;