import { Link } from "react-router-dom";
import foodEx from "../assets/foodEx.jpg";
import Homelayer from "../assets/Homelayer.jpg";
import cateryLogo from "../assets/cateryLogo.jpg";

const Home = () => {
    return (
        <>
            <div className="bg-white overflow-auto bg-cover h-screen">
                <div className="navbar bg-white shadow-xl">
                    <div className="flex-none">
                        <button className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block w-5 h-5 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">
                            <img
                                src={cateryLogo}
                                alt=""
                                className="h-[40px] mt-1"
                            />
                        </a>
                    </div>
                    <div className="flex-none">
                        <button className="mr-4 py-2 px-10 text-black font-bold rounded-full bg-white hover:bg-slate-300 hover:duration-300 active:bg-white active:duration-300">
                            Log In
                        </button>
                        <button className="mr-4 py-2 px-10 text-white font-bold rounded-full bg-slate-400 hover:bg-slate-300 hover:duration-300 active:bg-slate-500 active:duration-300">
                            Sign Up
                        </button>
                    </div>
                </div>
                <div className="flex object-cover">
                    <img
                        src={Homelayer}
                        alt=""
                        className="h-80 w-full object-cover"
                    />
                </div>
                <div className="mt-5 text-[36px] flex w-3/12 ml-10 font-bold text-black">
                    <p>
                        Katering Terbaik Terdekat Dengan{" "}
                        <a className="text-slate-400">Anda</a>
                    </p>
                </div>
                <div className="flex flex-row">
                    <div className="flex-col flex w-3/12">
                        <div className="my-2 w-full ml-10">
                            <div>
                                <button className="bg-white text-black text-[22px] mt-4 rounded-md py-1 w-6/12 text-start px-4 active:bg-red-400 hover:text-end hover:duration-300 hover:bg-yellow-300">
                                    Personal
                                </button>
                            </div>
                            <div>
                                <button className="bg-white text-black text-[22px] mt-4 rounded-md py-1 w-6/12 text-start px-4 active:bg-red-400 hover:text-end hover:duration-300 hover:bg-yellow-300">
                                    Event
                                </button>
                            </div>
                            <div>
                                <button className="bg-white text-black text-[22px] mt-4 rounded-md py-1 w-6/12 text-start px-4 active:bg-red-400 hover:text-end hover:duration-300 hover:bg-yellow-300">
                                    Office
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-white shadow-xl mr-10">
                        <figure>
                            <img src={foodEx} alt="" className="w-full" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold text-[24px] text-black">
                                Yellow Fit Kitchen
                            </h2>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline mt-5 bg-yellow-300 py-3 px-3 font-semibold text-black border-white">
                                    Low Calories
                                </div>
                                <div className="badge badge-outline mt-5 bg-slate-500 py-3 px-3 font-semibold text-white">
                                    Healhty
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-white shadow-xl mr-10">
                        <figure>
                            <img src={foodEx} alt="" className="w-full" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold text-[24px] text-black">
                                Yellow Fit Kitchen
                            </h2>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline mt-5 bg-yellow-300 py-3 px-3 font-semibold text-black border-white">
                                    Low Calories
                                </div>
                                <div className="badge badge-outline mt-5 bg-slate-500 py-3 px-3 font-semibold text-white">
                                    Healhty
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-white shadow-xl mr-10">
                        <figure>
                            <img src={foodEx} alt="" className="w-full" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold text-[24px] text-black">
                                Yellow Fit Kitchen
                            </h2>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline mt-5 bg-yellow-300 py-3 px-3 font-semibold text-black border-white">
                                    Low Calories
                                </div>
                                <div className="badge badge-outline mt-5 bg-slate-500 py-3 px-3 font-semibold text-white">
                                    Healhty
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Home;
