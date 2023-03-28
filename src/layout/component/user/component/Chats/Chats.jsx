import React from 'react'

function Chats() {
    return (
        <div className='myAccounts'>
            <div class="container-fluid">
                <div class="page-header min-height-300 border-radius-xl mt-4"
                    style={
                        {backgroundPositionY: "50%"}
                }>
                    <span class="mask bg-gradient-info opacity-6"></span>
                    <img src="../../../public/../" alt="" class="w-100 border-radius-lg shadow-sm"/>
                </div>
                <div class="card card-body blur shadow-blur mx-4 mt-n6 overflow-hidden cd1 ">
                    <div class="row gx-4 ">
                        <div class="col-auto">
                            <div className="col-3">
                                {" "}
                                <a href="javascript:;" class="avatar avatar-lg rounded-circle border border-primary">
                                    <img alt="Image placeholder" class="p-1" src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"/>
                                </a>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="h-100 nm1">
                                <h5 class="mb-1 wr ">Name
                                </h5>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="h-100  ">
                                <h5 class="mb-1"></h5>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="h-100 nm2">
                                <h5 class="mb-1 wr">Register ID</h5>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="h-100 ">
                                <h5 class="mb-1"></h5>
                            </div>
                        </div>
                        <div class="col-auto ">
                            <div class="h-100 nm3">
                                <h5 class="mb-1 wr">Date Of Joining</h5>
                            </div>
                        </div>
                        <div class="col-auto ">
                            <div class="h-100">
                                <h5 class="mb-1 "></h5>
                            </div>
                        </div>
                        <div class=" col-auto">
                            <div class="h-100 nm4">
                                <h5 class="mb-1 wr">Sponsor ID</h5>
                            </div>
                        </div>
                        <div class="col-auto ">
                            <div class="h-100">
                                <h5 class="mb-1 "></h5>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="h-100 nm5">
                                <h5 class="mb-1 wr">Sponsor Name</h5>
                            </div>
                        </div>
                        <div class="col-auto ">
                            <div class="h-100">
                                <h5 class="mb-1"></h5>
                            </div>
                        </div>
                        <div className="row spc">
                            <div class=" refer input-group mb-0 ">
                                <input type="text" class="form-control input1" placeholder="Sponser Link" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                <button class="btn btn-outline-primary mb-0 input2" type="button" id="button-addon2">
                                    Copy
                                </button>
                            </div>
                            <button type="button" class="btn btn-facebook btn-icon-only rounded-circle fb">
                                <span class="btn-inner--icon">
                                    <i class="fab fa-facebook"></i>
                                </span>
                            </button>
                            <button type="button" class="btn btn-success btn-icon-only rounded-circle wts">
                                <i class="fab fa-whatsapp"></i>
                            </button>
                            <button type="button" class="btn btn-dribbble  btn-icon-only rounded-circle int">
                                <i class="fab fa-instagram"></i>
                            </button>
                            <button type="button" class="btn btn-twitter btn-icon-only rounded-circle twt">
                                <i class="fab fa-twitter "></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
           
            <div class="container-fluid py-4">
                <div class="row">
                    <div class="col-12">
                        <div class="card blur shadow-blur max-height-vh-70">
                            <div class="card-header shadow-lg">
                                <div class="row">
                                    <div class="col-md-10">
                                        <div class="d-flex align-items-center">
                                        <div className="col-0">
                                {" "}
                                <a href="javascript:;" class="avatar avatar-lg rounded-circle border border-primary">
                                    <img alt="Image placeholder" class="p-1" src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"/>
                                </a>
                            </div>                                            <div class="ms-3">
                                                <h6 class="mb-0 d-block">Charlie Watson</h6>
                                                <span class="text-sm text-dark opacity-8">last seen today at 1:53am</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-1 my-auto ps-0">
                                        <div class="dropdown">
                                            <ul class="dropdown-menu dropdown-menu-end me-sm-n2 p-2" aria-labelledby="chatmsg">
                                                <li>
                                                    <a class="dropdown-item border-radius-md" href="javascript:;">
                                                        Profile
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item border-radius-md" href="javascript:;">
                                                        Mute conversation
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item border-radius-md" href="javascript:;">
                                                        Block
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item border-radius-md" href="javascript:;">
                                                        Clear chat
                                                    </a>
                                                </li>
                                                <li>
                                                    <hr class="dropdown-divider"/>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item border-radius-md text-danger" href="javascript:;">
                                                        Delete chat
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body overflow-auto overflow-x-hidden"
                                style={
                                    {height: "400px"}
                            }>
                                <div class="row justify-content-start mb-4">
                                    <div class="col-auto">
                                        <div class="card ">
                                            <div class="card-body py-2 px-3">
                                                <p class="mb-1">
                                                    It contains a lot of good lessons about effective practices
                                                </p>
                                                <div class="d-flex align-items-center text-sm opacity-6">
                                                    <i class="ni ni-check-bold text-sm me-1"></i>
                                                    <small>3:14am</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-end text-right mb-4">
                                    <div class="col-auto">
                                        <div class="card bg-gray-200">
                                            <div class="card-body py-2 px-3">
                                                <p class="mb-1">
                                                    Can it generate daily design links that include essays and data visualizations ?<br/>
                                                </p>
                                                <div class="d-flex align-items-center justify-content-end text-sm opacity-6">
                                                    <i class="ni ni-check-bold text-sm me-1"></i>
                                                    <small>4:42pm</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col-md-12 text-center">
                                        <span class="badge text-dark">Wed, 3:27pm</span>
                                    </div>
                                </div>
                                <div class="row justify-content-start mb-4">
                                    <div class="col-auto">
                                        <div class="card ">
                                            <div class="card-body py-2 px-3">
                                                <p class="mb-1">
                                                    Yeah! Responsive Design is geared towards those trying to build web apps
                                                </p>
                                                <div class="d-flex align-items-center text-sm opacity-6">
                                                    <i class="ni ni-check-bold text-sm me-1"></i>
                                                    <small>4:31pm</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-end text-right mb-4">
                                    <div class="col-auto">
                                        <div class="card bg-gray-200">
                                            <div class="card-body py-2 px-3">
                                                <p class="mb-1">
                                                    Excellent, I want it now !
                                                </p>
                                                <div class="d-flex align-items-center justify-content-end text-sm opacity-6">
                                                    <i class="ni ni-check-bold text-sm me-1"></i>
                                                    <small>4:42pm</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-start mb-4">
                                    <div class="col-auto">
                                        <div class="card ">
                                            <div class="card-body py-2 px-3">
                                                <p class="mb-1">
                                                    You can easily get it; The content here is all free
                                                </p>
                                                <div class="d-flex align-items-center text-sm opacity-6">
                                                    <i class="ni ni-check-bold text-sm me-1"></i>
                                                    <small>4:42pm</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-end text-right mb-4">
                                    <div class="col-auto">
                                        <div class="card bg-gray-200">
                                            <div class="card-body py-2 px-3">
                                                <p class="mb-1">
                                                    Awesome, blog is important source material for anyone who creates apps?
                                                    <br/>
                                                    Beacuse these blogs offer a lot of information about website development.
                                                </p>
                                                <div class="d-flex align-items-center justify-content-end text-sm opacity-6">
                                                    <i class="ni ni-check-bold text-sm me-1"></i>
                                                    <small>4:42pm</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-start mb-4">
                                    <div class="col-5">
                                        <div class="card ">
                                            <div class="card-body p-2">
                                                <div class="col-12 p-0">
                                                    <img src="https://images.unsplash.com/photo-1602142946018-34606aa83259?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1762&q=80" alt="Rounded image" class="img-fluid mb-2 border-radius-lg"/>
                                                </div>
                                                <div class="d-flex align-items-center text-sm opacity-6">
                                                    <i class="ni ni-check-bold text-sm me-1"></i>
                                                    <small>4:47pm</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-end text-right mb-4">
                                    <div class="col-auto">
                                        <div class="card bg-gray-200">
                                            <div class="card-body py-2 px-3">
                                                <p class="mb-0">
                                                    At the end of the day … the native dev apps is where users are
                                                </p>
                                                <div class="d-flex align-items-center justify-content-end text-sm opacity-6">
                                                    <i class="ni ni-check-bold text-sm me-1"></i>
                                                    <small>4:42pm</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-start">
                                    <div class="col-auto">
                                        <div class="card ">
                                            <div class="card-body py-2 px-3">
                                                <p class="mb-0">
                                                    Charlie is Typing...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer d-block">
                                <form class="align-items-center">
                                    <div class="d-flex">
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="Type here" aria-label="Message example input"/>
                                        </div>
                                        <button class="btn bg-gradient-info mb-0 ms-2">
                                            <i class="ni ni-send"></i>
                                        </button>
                                        <button class="btn bg-gradient-info mb-0 ms-2">
                                            <i class="ni ni-button-power"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chats
