import React from "react";
import style from './skills.module.css'
import Image from "next/image";

const Skills = () => {
    return (
        <div className={style.MainContainer}>
            <h1>Programming Skills</h1>
            <div className={style.MainContent}>
                <div>
                    <div className={style.List}>
                        <ul>
                            <li>
                                <span>
                                    <Image src="/dot.gif" alt="gif" width="50px" height="50px" layout=""></Image>
                                </span>
                                <span>React.js</span>
                            </li>
                            <li>
                                <span>
                                    <Image src="/dot.gif" alt="gif" width="50px" height="50px" layout=""></Image>
                                </span>
                                <span>Next.js</span>
                            </li>
                            <li>
                                <span>
                                    <Image src="/dot.gif" alt="gif" width="50px" height="50px" layout=""></Image>
                                </span>
                                <span>Javascript</span>
                            </li>
                            <li>
                                <span>
                                    <Image src="/dot.gif" alt="gif" width="50px" height="50px" layout=""></Image>
                                </span>
                                <span>Typescript</span>
                            </li>
                            <li>
                                <span>
                                    <Image src="/dot.gif" alt="gif" width="50px" height="50px" layout=""></Image>
                                </span>
                                <span>Redux</span>
                            </li>
                            <li>
                                <span>
                                    <Image src="/dot.gif" alt="gif" width="50px" height="50px" layout=""></Image>
                                </span>
                                <span>REST API</span>
                            </li>
                        </ul>


                        <ul>
                            <li>
                                <span>
                                    <Image src="/dot.gif" alt="gif" width="50px" height="50px" layout=""></Image>
                                </span>
                                <span>SASS / LESS</span>
                            </li>
                            <li>
                                <span>
                                    <Image src="/dot.gif" alt="gif" width="50px" height="50px" layout=""></Image>
                                </span>
                                <span>HTML / CSS</span>
                            </li>
                            <li>
                                <span>
                                    <Image src="/dot.gif" alt="gif" width="50px" height="50px" layout=""></Image>
                                </span>
                                <span>Jquery</span>
                            </li>
                            <li>
                                <span>
                                    <Image src="/dot.gif" alt="gif" width="50px" height="50px" layout=""></Image>
                                </span>
                                <span>Bootstrap</span>
                            </li>
                            <li>
                                <span>
                                    <Image src="/dot.gif" alt="gif" width="50px" height="50px" layout=""></Image>
                                </span>
                                <span>Git</span>
                            </li>
                            <li>
                                <span>
                                    <Image src="/dot.gif" alt="gif" width="50px" height="50px" layout=""></Image>
                                </span>
                                <span>Figma </span>
                            </li>
                        </ul>

                    </div>
                </div>
                <div>
                    <img src="/skills.png" />
                </div>
            </div>
        </div>

    );
}

export default Skills;