
import * as React from 'react';
import './Corousel.css';
import { Modal, ModalBody } from 'react-bootstrap';

export interface GalleryProps {
    listImages: string[];
    showView: boolean;
    onClickImage: () => void;
}

export const GalleryThumb: React.StatelessComponent<GalleryProps> = (props) => {

    const listImg = props.listImages.slice(0, 4);
    const test = () => {
        props.onClickImage();
    };

    const onRemoveEmail = (e: React.FormEvent<HTMLImageElement>) => {
        props.onClickImage();
    };

    return (
        <div >
            {(props.listImages.length > 0) &&
                <div className="row">
                    {listImg.map((item: string, index: number) =>
                        <div key={index} className="col-sm-2">
                            <a href="#" >
                                <img onClick={onRemoveEmail} src={item} className="thumb" />
                            </a>
                        </div>
                    )
                    }
                </div>
            }
            <div className="modal fade" role="dialog" id="myModel" aria-labelledby="myLargeModalLabel">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content corouselBG">
                        <Modal show={props.showView} onHide={test}>
                            <ModalBody>
                                <iframe className="corouselBG center" src="https://srzlabpano.apps.dev.cloudsprint.io/labin.html" />
                            </ModalBody>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryThumb;
