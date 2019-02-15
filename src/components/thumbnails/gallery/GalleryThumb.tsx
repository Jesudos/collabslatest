
import * as React  from 'react';
import CorouselModel from './CorouselModel';

export interface GalleryProps {    
    listImages: string[];
}

export const GalleryThumb: React.StatelessComponent<GalleryProps> = (props) => {

    const listImg = props.listImages.slice(0, 6);
    return (
        <div>
            { (props.listImages.length > 0) &&
                <div className="row">
                {listImg.map((item: string, index: number) => 
                    <div key={index} className="col-sm-2">
                        <a href="#" data-toggle="modal" data-target="#myModel"><img src={item} className="thumb" /></a>
                    </div>        
                )
                }
                </div>
            }
            <div className="modal fade" role="dialog" id="myModel" aria-labelledby="myLargeModalLabel">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <CorouselModel
                            imgs={props.listImages}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryThumb;
