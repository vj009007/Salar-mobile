import React, { useState } from "react";
const NavbarAfterSignUp = () => {
    return (<>
        <nav class="navbar navbar-expand-lg navbar-dark bg-gray-900 z-index-3 py-2 text-sm fixed-header">
            <a class="navbar-brand font-weight-normal ms-sm-3 text-white text-uppercase"
                href=" https://demos.creative-tim.com/soft-ui-design-system-pro/presentation.html " rel="tooltip"
                title="Designed and Coded by Creative Tim" data-placement="bottom" target="_blank">
                Salar
            </a>
            <div type="button" class="bg-transparent p-0 m-0 text-white font-weight-normal text-normal"
                data-bs-toggle="modal" data-bs-target="#exampleModalNotification">
                Delever to Suraj <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
            </div>
            <div class="mx-3 w-md-40 d-lg-block d-none">
                <input class="form-control bg-white px-3" type="text" placeholder="What're you Looking For" />
            </div>
            <div class="dropdown">
                <button class="btn bg-transparent dropdown-toggle m-0 text-white p-0 font-weight-normal" type="button"
                    id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    English
                </button>
                <ul class="dropdown-menu px-2 py-3" aria-labelledby="dropdownMenuButton">
                    <li><a class="dropdown-item border-radius-md" href="javascript:;">Hindi</a></li>
                    <li><a class="dropdown-item border-radius-md" href="javascript:;">Tamil</a></li>
                    <li><a class="dropdown-item border-radius-md" href="javascript:;">Talugu</a></li>
                </ul>
            </div>
            <div class="dropdown">
                <button class="btn bg-transparent dropdown-toggle m-0 text-white font-weight-normal" type="button"
                    id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    INR
                </button>
                <ul class="dropdown-menu px-2 py-3" aria-labelledby="dropdownMenuButton">
                    <li><a class="dropdown-item border-radius-md" href="javascript:;">RUBL</a></li>
                    <li><a class="dropdown-item border-radius-md" href="javascript:;">USD</a></li>
                    <li><a class="dropdown-item border-radius-md" href="javascript:;">EUR</a></li>
                </ul>
            </div>
            <a class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center text-white d-block d-lg-none"
                role="button">
                Logout
            </a>
            <ul class="navbar-nav navbar-nav-hover ms-auto d-ffff">
                <li class="nav-item mx-2 d-none d-lg-block">
                    <a class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center text-white d-none d-lg-block"
                        role="button">
                        My Account
                    </a>
                </li>
                <li class="nav-item mx-2 d-none d-lg-block">
                    <a class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center text-white"
                        role="button">
                        Wallet
                    </a>
                </li>
                <li class="nav-item mx-2 d-none d-lg-block">
                    <a class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center text-white"
                        role="button">
                        Withdrawal
                    </a>
                </li>
                <li class="nav-item mx-2 d-none d-lg-block">
                    <a class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center text-warning"
                        role="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-cart-check-fill" viewBox="0 0 16 16">
                            <path
                                d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
                        </svg>
                    </a>
                </li>
                <li class="nav-item mx-2 d-none d-lg-block">
                    <a class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center text-white"
                        role="button">
                        Logout
                    </a>
                </li>
            </ul>
            <div class="ms-0 w-100 d-lg-none d-block">
                <input class="form-control bg-white px-3" type="text" placeholder="What're you Looking For" />
            </div>
        </nav>
    </>)
}
export default NavbarAfterSignUp;