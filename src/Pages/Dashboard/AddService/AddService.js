import { faOpenid } from '@fortawesome/free-brands-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { SideBarContext } from '../../../App';
import { addService, imageUpload } from '../../../Services/DashboardServices';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {

    //react hook form
    const { register, handleSubmit, formState: { errors } } = useForm();

    //image url state
    const [imageUrl, setImageUrl] = useState('');

    //if image uploaded and ready to upload service
    const [btnEnable, setBtnEnable] = useState(false);

    const [sideBarInfo] = useContext(SideBarContext)



    //upload service
    const onSubmit = (data, e) => {

        //service info object
        const eventValue = {
            serviceName: data.title,
            servicePrice: data.price,
            serviceImg: imageUrl,
            serviceDesc: data.description
        }

        const myPromise = addService(eventValue)
            .then(res => { })
            .catch(err => { })
        e.target.reset()

        toast.promise(myPromise, {
            loading: 'Loading',
            success: 'Service added successfully',
            error: 'Service is not added',
        });
    };

    //upload image ot third party and find link
    const handleImage = (e) => {
        const files = e.target.files[0];
        const imageData = new FormData();
        imageData.set('key', 'd31833276d6f7b577c800fa621a054fd');
        imageData.append('image', files);

        const myPromise = imageUpload(imageData)
            .then(data => {
                setImageUrl(data.data.display_url);
                setBtnEnable(true)
            })

        toast.promise(myPromise, {
            loading: 'Loading',
            success: 'Image uploaded',
            error: 'Image is not uploaded',
        });
    }


    return (
        <section>
            <div className="row mr-0">
                <div className={`col-md-2 col-sm-6 col-12 d-md-block d-${sideBarInfo.isOpen ? 'block' : 'none'} `}>
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12">
                    <div className="d-flex justify-content-between align-items-center" >
                        <h1 className="text-secondary ml-5 mt-5" > <FontAwesomeIcon icon={faPlus} /> Add Services</h1>
                        <h3 className="d-none" style={{ zIndex: '1111' }} onClick={() => sideBarInfo.changeSideBar()} ><FontAwesomeIcon icon={faOpenid} /></h3>
                    </div>
                    <div className="row container mt-2 pt-5 ">
                        <div className="col-md-6">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-md-12 mb-4">
                                        <input className="form-control border-0 bg-light" placeholder="Service Title" {...register("title", { required: true })} />
                                        {errors.title && <span className="text-danger" >* Title is required</span>}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <input className="form-control  border-0 bg-light" placeholder="Service Price" {...register("price", { required: true })} />
                                        {errors.price && <span className="text-danger" >* Price is required</span>}
                                    </div>
                                    <div className="col-md-6">
                                        <input onChange={handleImage} type="file" className="form-control mb-4 border-0 bg-light" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 ">
                                        <textarea rows="5" style={{ resize: 'none' }} className="form-control  border-0 bg-light" placeholder="Description" {...register("description", { required: true })} />
                                        {errors.description && <span className="text-danger" >* Description is required</span>}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <input className={btnEnable ? "btn btn-danger" : "btn btn-danger disabled"} type="submit" value="Add Service" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default AddService;