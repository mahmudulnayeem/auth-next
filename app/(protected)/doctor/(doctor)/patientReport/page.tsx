import Image from 'next/image';
import React from 'react';
// import { BsPersonFillAdd } from 'react-icons/bs'

const ReportPage = () => {
    const imgLink = 'https://th.bing.com/th/id/OIP.eDTBbPyLQ0hoo72jyA6lNgHaHa?pid=ImgDet&rs=1'
    return (
        <div className=' px-4'>
            <div className='my-4 px-6 flex items-end justify-between py-6'>

                <h2 className='text-mix-4 text-3xl font-bold'>Patients Report</h2>
                {/* <button className='btn btn-sm btn-mix flex justify-center items-center'> <BsPersonFillAdd /> Add Pathology</button> */}
            </div>
            <div className='grid lg:grid-cols-2 gap-5'>

                <div className="card lg:card-side bg-base-100 shadow-xl border-2 border-gray-200 ">
                    <figure><Image className='rounded-s-md' src={imgLink} width={500} height={400} alt="Album" /></figure>
                    <div className="card-body flex flex-col justify-between">
                        <div>

                            <h2 className="card-title"><span className='font-bold'>Name</span> : Yoona Kem</h2>
                            <p><span className='font-bold'>Details</span> : Patient Have Phycological Trama Lorem ipsum dolor sit amet,</p>

                            <small className='text-red-400'><span className='font-medium '>Report Type</span> : X-RAY </small>
                        </div>
                        <div className="flex justify-between">
                            <button className="btn btn-mix btn-sm">Checked</button>
                            <button className="btn btn-mix btn-sm">Add Instruction</button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl border-2 border-gray-200 ">
                    <figure><Image className='rounded-s-md' src={imgLink} width={500} height={400} alt="Album" /></figure>
                    <div className="card-body flex flex-col justify-between">
                        <div>

                            <h2 className="card-title"><span className='font-bold'>Name</span> : Yoona Kem</h2>
                            <p><span className='font-bold'>Details</span> : Patient Have Phycological Trama Lorem ipsum dolor sit amet,</p>

                            <small className='text-red-400'><span className='font-medium '>Report Type</span> : X-RAY </small>
                        </div>
                        <div className="flex justify-between">
                            <button className="btn btn-mix btn-sm">Checked</button>
                            <button className="btn btn-mix btn-sm">Add Instruction</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ReportPage;