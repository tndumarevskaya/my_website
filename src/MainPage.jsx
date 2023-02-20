import React from 'react';
import "./mainPage.css";

function MainPage() {
  return (
    <div className='main_page'>
        <div className='header'>
            <img className="sims_round" src="./sources/sims_round.png"/>
            <p>Tatiana Dumarevskaya</p>
        </div>
        <img className="logo" src="./sources/sims.png"/>
        <img className="start_2" src="./sources/start.png"/>
        <img className="sims_above_head" src="./sources/sims_above_head.png"/>
        <img className="me" src="./sources/me.png"/>
        <div className='footer'></div>

        <div className='qualities'>
            <div className='column1'>
                <button className='quality' id="1" >
                    <svg width="80px" height="80px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2196 13.9555C17.2636 10.0595 14.7915 6.03562 10.731 4.94761C6.14492 3.71877 -0.364424 6.91181 1.08416 11.0092C1.56325 12.3643 2.48817 12.6814 4.23088 12.7061L4.33978 12.7075C5.26123 12.7191 5.52041 12.7792 5.59794 12.9054C5.72536 13.1128 5.72679 13.4439 5.58387 14.3543C5.51634 14.7845 5.49418 14.9355 5.46808 15.1703C5.30897 16.6011 5.55075 17.7169 6.48838 18.7268C9.41611 21.8802 15.0412 18.3535 16.2196 13.9555ZM2.96979 10.3425C2.24104 8.28126 6.9056 5.99314 10.2134 6.87946C13.2298 7.68772 15.0393 10.6331 14.2878 13.4379C13.4497 16.5656 9.50636 19.0379 7.95406 17.366C7.47464 16.8496 7.35504 16.2977 7.45583 15.3913C7.47737 15.1975 7.49709 15.0631 7.55967 14.6645C7.77887 13.2683 7.77611 12.6302 7.30206 11.8585C6.70834 10.8921 6.00236 10.7282 4.36491 10.7076L4.25922 10.7063C3.29465 10.6926 3.06582 10.6141 2.96979 10.3425Z" fill="#2F5483"/>
                        <path d="M6 10C5.30964 10 4.75 9.44036 4.75 8.75C4.75 8.05964 5.30964 7.5 6 7.5C6.69036 7.5 7.25 8.05964 7.25 8.75C7.25 9.44036 6.69036 10 6 10Z" fill="#2F5483"/>
                        <path d="M9.75 10C9.05964 10 8.5 9.44036 8.5 8.75C8.5 8.05964 9.05964 7.5 9.75 7.5C10.4404 7.5 11 8.05964 11 8.75C11 9.44036 10.4404 10 9.75 10Z" fill="#2F5483"/>
                        <path d="M12.25 13C11.5596 13 11 12.4404 11 11.75C11 11.0596 11.5596 10.5 12.25 10.5C12.9404 10.5 13.5 11.0596 13.5 11.75C13.5 12.4404 12.9404 13 12.25 13Z" fill="#2F5483"/>
                        <path d="M10.75 16.5C10.0596 16.5 9.5 15.9404 9.5 15.25C9.5 14.5596 10.0596 14 10.75 14C11.4404 14 12 14.5596 12 15.25C12 15.9404 11.4404 16.5 10.75 16.5Z" fill="#2F5483"/>
                        <path d="M14.3707 3.60451C14.8605 3.34411 15.466 3.52923 15.7253 4.01686C15.7308 4.02727 15.7362 4.03777 15.7413 4.04836L19.8336 12.4482C19.9869 12.7628 19.8635 13.1422 19.5545 13.3065C19.2452 13.471 18.8612 13.3618 18.6847 13.0592L13.9771 4.98893C13.6993 4.5127 13.8602 3.90144 14.3364 3.62364C14.3477 3.61704 14.3592 3.61066 14.3707 3.60451Z" fill="#2F5483"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5375 3.48434C13.0238 4.39897 13.8434 4.65522 14.6347 4.23444C15.4262 3.81362 15.6726 2.99053 15.1863 2.07592C14.6289 1.0276 13.438 0.0775719 12.6482 0.497483C11.8585 0.917395 11.9801 2.43602 12.5375 3.48434ZM13.4204 3.01486C13.2581 2.70947 13.1315 2.26269 13.1007 1.8773C13.0806 1.62643 13.1063 1.45889 13.1151 1.40204C13.1171 1.38903 13.1182 1.38181 13.1176 1.38073C13.1183 1.38172 13.1245 1.38462 13.1356 1.38985C13.1866 1.41372 13.3408 1.48594 13.5391 1.64416C13.8414 1.88525 14.141 2.24 14.3034 2.54539C14.5316 2.97464 14.4668 3.19118 14.1653 3.3515C13.8641 3.51165 13.6488 3.44435 13.4204 3.01486Z" fill="#2F5483"/>
                    </svg>
                </button>
                <button className='quality' id="2">
                    <svg fill="#2F5483" width="80px" height="80px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <g id="Coding">
                        <path d="M80.917,377.0605H202V439.16H139a9.8965,9.8965,0,1,0,0,19.7929H373a9.8965,9.8965,0,1,0,0-19.7929H310V377.0605H431.0864a49.9023,49.9023,0,0,0,49.5528-44.1254H31.36A49.91,49.91,0,0,0,80.917,377.0605Z"/>
                        <path d="M431.0869,53.0474H80.9175A49.9181,49.9181,0,0,0,31,102.9648V313.1416H481V102.9648A49.9144,49.9144,0,0,0,431.0869,53.0474ZM201.2354,231.6016a9.8993,9.8993,0,1,1-16.4708,10.9863l-36-54a9.9133,9.9133,0,0,1,0-10.9863l36-54a9.8993,9.8993,0,0,1,16.4708,10.9863L168.9,183.0947Zm86.7128-117.5537-45,144a9.899,9.899,0,1,1-18.8964-5.9063l45-144a9.899,9.899,0,1,1,18.8964,5.9063Zm75.2872,74.54-36,54a9.8993,9.8993,0,0,1-16.4708-10.9863L343.1,183.0947l-32.335-48.5068a9.8993,9.8993,0,0,1,16.4708-10.9863l36,54A9.9133,9.9133,0,0,1,363.2354,188.5879Z"/>
                        </g>
                    </svg>
                </button>
                <button className='quality' id="3">
                    <svg fill="#2F5483" width="80px" height="80px" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M860 265h-61q-8 0-13.5 5.5T780 284v246q0 39-28 67t-68 28H279q-8 0-13.5 5.5T260 644v61q0 17 11.5 28.5T300 745h415q25 0 43 18l110 110q4 4 9.5 5t11-1 8.5-7 3-11V305q0-17-11.5-28.5T860 265zM700 505V145q0-17-11.5-28.5T660 105H140q-17 0-28.5 11.5T100 145v514q0 6 3 11t8.5 7 11 1 9.5-5l110-110q18-18 43-18h375q17 0 28.5-12t11.5-28z"/></svg>
                </button>
                <button className='quality' id="4">
                <svg fill="#2F5483" width="80px" height="80px" viewBox="-21.53 0 122.88 122.88" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg">
                    <g>
                    <path class="st0" d="M9.53,27h2.18c0,0.15,0.02,0.3,0.06,0.45l2.39,9.09c0.68,2.6,1.84,5.05,3.58,6.78 c1.59,1.59,3.63,2.58,6.18,2.58h9.56v5.11c0,0.81,0.66,1.47,1.46,1.47h11.1c0.81,0,1.46-0.66,1.46-1.46V45.9h10.02 c2.58,0,4.69-1.01,6.32-2.64c1.74-1.74,2.89-4.19,3.45-6.81l1.91-8.98c0.04-0.15,0.06-0.31,0.06-0.47h1.03 c5.24,0,9.53,4.29,9.53,9.53v69.02c0,5.21-4.24,9.48-9.43,9.53v3.77c0,2.22-1.81,4.03-4.03,4.03l0,0c-2.22,0-4.03-1.81-4.03-4.03 v-3.77H17.49v3.77c0,2.22-1.81,4.03-4.03,4.03l0,0c-2.22,0-4.03-1.81-4.03-4.03v-3.77c-5.2-0.05-9.43-4.32-9.43-9.53V36.53 C0,31.29,4.29,27,9.53,27L9.53,27z M16.57,100.41c-0.97,0-1.76-0.79-1.76-1.76c0-0.97,0.79-1.76,1.76-1.76h46.94 c0.97,0,1.76,0.79,1.76,1.76c0,0.97-0.79,1.76-1.76,1.76H16.57L16.57,100.41z M16.57,83.37c-0.97,0-1.76-0.79-1.76-1.76 s0.79-1.76,1.76-1.76h46.94c0.97,0,1.76,0.79,1.76,1.76s-0.79,1.76-1.76,1.76H16.57L16.57,83.37z M16.57,66.33 c-0.97,0-1.76-0.79-1.76-1.76c0-0.97,0.79-1.76,1.76-1.76h46.94c0.97,0,1.76,0.79,1.76,1.76c0,0.97-0.79,1.76-1.76,1.76H16.57 L16.57,66.33z M65.32,28.77H15.75l1.81,6.87c0.54,2.04,1.4,3.92,2.67,5.18c0.95,0.95,2.17,1.55,3.68,1.55h33.61 c1.56,0,2.84-0.62,3.83-1.61c1.24-1.24,2.08-3.06,2.5-5.04L65.32,28.77L65.32,28.77z M15.87,0h48.44c0.56,0,1.02,0.46,1.02,1.02 v6.56c0,0.56-0.46,1.02-1.02,1.02h-7.28v16.48h-4.28V8.59H27.89v16.48h-4.28V8.59h-7.74c-0.56,0-1.02-0.46-1.02-1.02V1.02 C14.85,0.46,15.31,0,15.87,0L15.87,0z"/>
                    </g>
                </svg>
                </button>
            </div>
            <div className='column1'>
                <button className='quality' id="5">
                <svg width="80px" height="80px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <title>work-case-filled</title>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="work-case" fill="#2F5483" transform="translate(42.666667, 64.000000)">
                            <path d="M1.20792265e-13,197.76 C54.5835501,218.995667 112.186031,231.452204 170.666667,234.666667 L170.666667,277.333333 L256,277.333333 L256,234.666667 C314.339546,231.013 371.833936,218.86731 426.666667,198.613333 L426.666667,362.666667 L1.20792265e-13,362.666667 L1.20792265e-13,197.76 Z M277.333333,-1.42108547e-14 L298.666667,21.3333333 L298.666667,64 L426.666667,64 L426.666667,175.146667 C361.254942,199.569074 292.110481,212.488551 222.293333,213.333333 L222.293333,213.333333 L206.933333,213.333333 C136.179047,212.568604 66.119345,199.278929 7.10542736e-15,174.08 L7.10542736e-15,174.08 L7.10542736e-15,64 L128,64 L128,21.3333333 L149.333333,-1.42108547e-14 L277.333333,-1.42108547e-14 Z M256,42.6666667 L170.666667,42.6666667 L170.666667,64 L256,64 L256,42.6666667 Z" id="Combined-Shape-Copy">

                </path>
                        </g>
                    </g>
                </svg>
                </button>
                <button className='quality' id="6">
                    <svg width="80px" height="80px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>bulb-filled</title>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="bulb-white" fill="#2F5483" transform="translate(42.666667, 21.333333)">
                                <path d="M213.333333,85.3333333 C284.025781,85.3333333 341.333333,142.640885 341.333333,213.333333 C341.333333,260.711239 315.5928,302.077122 277.333732,324.208982 L277.333333,405.333333 L256,426.666667 L234.666667,426.666667 C234.666667,438.448741 225.115408,448 213.333333,448 C201.551259,448 192,438.448741 192,426.666667 L192,426.666667 L170.666667,426.666667 L149.333333,405.333333 L149.332954,324.208993 C111.073876,302.077136 85.3333333,260.711248 85.3333333,213.333333 C85.3333333,142.640885 142.640885,85.3333333 213.333333,85.3333333 Z M234.667665,339.563386 C227.72957,340.727434 220.602209,341.333333 213.333333,341.333333 C206.064458,341.333333 198.937097,340.727434 191.999002,339.563386 L192,384 L234.666667,384 L234.667665,339.563386 Z M96.4250122,307.614237 L119.052429,330.241654 L73.7975952,375.496488 L51.1701782,352.869071 L96.4250122,307.614237 Z M330.241654,307.614237 L375.496488,352.869071 L352.869071,375.496488 L307.614237,330.241654 L330.241654,307.614237 Z M426.666667,197.333333 L426.666667,229.333333 L362.666667,229.333333 L362.666667,197.333333 L426.666667,197.333333 Z M64,197.333333 L64,229.333333 L7.10542736e-15,229.333333 L7.10542736e-15,197.333333 L64,197.333333 Z M352.869071,51.1701782 L375.496488,73.7975952 L330.241654,119.052429 L307.614237,96.4250122 L352.869071,51.1701782 Z M73.7975952,51.1701782 L119.052429,96.4250122 L96.4250122,119.052429 L51.1701782,73.7975952 L73.7975952,51.1701782 Z M229.333333,-1.0658141e-14 L229.333333,64 L197.333333,64 L197.333333,-1.0658141e-14 L229.333333,-1.0658141e-14 Z" id="Combined-Shape">

                    </path>
                            </g>
                        </g>
                    </svg>
                </button>
                <button className='quality' id="7">
                <svg width="80px" height="80px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>binoculars-filled</title>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="icon" fill="#2F5483" transform="translate(64.000000, 64.000000)">
                                <path d="M277.333333,-4.26325641e-14 C300.897483,-4.69612282e-14 320,19.1025173 320,42.6666667 L320.001038,66.6886402 C356.805359,76.1619142 384,109.571799 384,149.333333 L384,298.666667 C384,345.794965 345.794965,384 298.666667,384 C251.538368,384 213.333333,345.794965 213.333333,298.666667 L213.334343,290.517566 C207.67282,295.585196 200.196268,298.666667 192,298.666667 C183.803732,298.666667 176.32718,295.585196 170.665657,290.517566 L170.666667,298.666667 C170.666667,345.794965 132.461632,384 85.3333333,384 C38.2050347,384 -4.26325641e-14,345.794965 -4.26325641e-14,298.666667 L-4.26325641e-14,149.333333 C-4.75019917e-14,109.57144 27.1951335,76.1613096 63.9999609,66.6883831 L64,42.6666667 C64,19.1025173 83.1025173,-3.83039001e-14 106.666667,-4.26325641e-14 C130.230816,-4.69612282e-14 149.333333,19.1025173 149.333333,42.6666667 L149.333764,69.7082895 C158.827303,75.200153 166.008403,84.2448998 169.058923,95.0243894 C174.872894,89.046446 183.002825,85.3333333 192,85.3333333 C200.997175,85.3333333 209.127106,89.046446 214.940994,95.0238729 C217.991694,84.2447833 225.172752,75.2001286 234.666215,69.7083018 L234.666667,42.6666667 C234.666667,19.1025173 253.769184,-3.83039001e-14 277.333333,-4.26325641e-14 Z M85.3333333,256 C61.769184,256 42.6666667,275.102517 42.6666667,298.666667 C42.6666667,322.230816 61.769184,341.333333 85.3333333,341.333333 C108.897483,341.333333 128,322.230816 128,298.666667 C128,275.102517 108.897483,256 85.3333333,256 Z M298.666667,256 C275.102517,256 256,275.102517 256,298.666667 C256,322.230816 275.102517,341.333333 298.666667,341.333333 C322.230816,341.333333 341.333333,322.230816 341.333333,298.666667 C341.333333,275.102517 322.230816,256 298.666667,256 Z" id="Combined-Shape">

                    </path>
                            </g>
                        </g>
                    </svg>
                </button>
                <button className='quality' id="8">
                    <svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="#2F5483" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="9.5" cy="9.5" r="1.5" fill="#2F5483"/>
                    <circle cx="14.5" cy="9.5" r="1.5" fill="#2F5483"/>
                    <path d="M16.462 14.3936C15.2069 15.4319 13.6289 16 12 16C10.3711 16 8.79315 15.4319 7.53803 14.3936" stroke="#2F5483" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>

    </div>
  );
}

export default MainPage;