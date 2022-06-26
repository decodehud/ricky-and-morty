import React from 'react'   
import Image from 'next/dist/client/image';
import { FiThumbsUp} from "react-icons/fi";
import { TbActivity } from "react-icons/tb";
import { IoAccessibility     } from "react-icons/io5";

export default function Card({ imagen, nombre, especie, estado,origen,id, location }) {

    return (

        <div className='py-6'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-3 col-lg-4 col-md-6 col-12'>
                        <div className='card shadow mb-4 card-hover'>
                            <div className="card-img-top">
                                <Image src={imagen} alt="Ricky ad Morty" width={261} height={218} className="rounded-top-md img-fluid" priority layout='responsive' />
                            </div>
                            <div className="card-body">
                                <h3 className="mb-0 fw-semi-bold"> <a href="#" className="text-inherit">{nombre}</a></h3>
                                <p className="mb-3">{location}</p>
                                <div className="lh-1  d-flex justify-content-between">
                                    <div>
                                        <span className="fs-6">
                                            <i className="mdi mdi-star text-warning"></i>
                                            <span className="text-warning p-1"><TbActivity />{id}</span>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="fs-6 text-muted"><span className="text-dark"><IoAccessibility /></span></span>{especie}</div>
                                    <div>
                                        <span className="fs-6 text-muted"><span className="text-dark"><FiThumbsUp/> </span></span>{estado}</div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>

    )
}