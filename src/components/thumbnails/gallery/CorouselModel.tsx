import * as React from 'react';
import './Corousel.css';

export interface CorouselModelProps {
    imgs: string[];
}

export const CorouselModel: React.StatelessComponent<CorouselModelProps> = (props) => {

    return (
        <div id="CorouselModel" className="section corouselBG">
            <div id="demo" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators ">
                    {props.imgs.map((item: string, index: number) =>
                        <li key={index} data-target="#demo" data-slide-to={index} className={(index === 0) ? 'active' : ''} />
                    )
                    }
                </ol>
                <div className="carousel-inner">
                    {props.imgs.map((item: string, index: number) =>
                        <div key={index} className={(index === 0) ? 'item active center' : 'item center'}>
                            <br /><br /><br /><br /><br /><br /><br /><br />
                            <img className="center" src={item} />
                            <br /><br /><br />
                        </div>
                    )
                    }
                </div>
            </div>
        </div>
    );
};

export default CorouselModel;
