
import * as React from 'react';

export interface CorouselModelProps {
    imgs: string[];
} 

export const CorouselModel: React.StatelessComponent<CorouselModelProps> = (props) => {
 
    return (
        <div id="CorouselModel" className="section">
            <div id="demo" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {props.imgs.map((item: string, index: number) => 
                        <li key={index} data-target="#demo" data-slide-to={index} className={(index === 0) ? 'active' : ''}/>      
                    )
                    }
                </ol>
                <div className="carousel-inner"> 
                    {props.imgs.map((item: string, index: number) => 
                        <div key={index} className={(index === 0) ? 'item active' : 'item'}>
                            <img src={item}/>
                        </div>
                    )
                    }                                       
                </div>
            </div>
        </div> 
    );
};

export default CorouselModel;
