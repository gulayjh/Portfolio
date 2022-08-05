import React from "react";
import style from './title.module.css'
import Image from "next/image";
import Link from "next/link";
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { IoAttach } from 'react-icons/io5'

const Title = () => {
    return (
        <div className={style.TitleContainer}>
            <div className={style.TextContent}>
                <div>
                    <div className={style.Hello}>
                        <h1>Hello.</h1>
                        <Image src="/hello.gif" alt="gif" width={100} height={100} layout="fixed"></Image>
                    </div>

                    <h1>I`m <span>Gulay Jabrailzade</span></h1>
                    <p>Creative and self-starting <span>Front-End Developer</span> with over 1 year experience building responsive and stable eCommerce websites and admin panels in fast-paced, collaborative environments.<br />
                        Currently developing with <span>React.js</span> and <span>Next.js</span>. <br />
                        Proficient in HTML, CSS, JavaScript; plus modern libraries and frameworks. Passionate about usability and possess working knowledge of Adobe Photoshop and Figma.
                    </p>
                </div>

            </div>

            <div className={style.InfoContent}>
                <div className={style.SocialContent}>
                    <Link href="https://www.linkedin.com/in/gulayjh/">
                        <span><BsLinkedin /></span>
                    </Link>

                    <Link href="https://github.com/gulayjh">
                        <span><BsGithub /></span>
                    </Link>
                </div>
                <div className={style.DownloadContent}>
                    <a href='/GulayJabrailzade.pdf' download>
                        <span className={style.DownloadText}>
                            <span><IoAttach /></span>
                            <span>Download CV</span>
                        </span>
                    </a>
                    <span className={style.Arrow}>
                        <svg width="214" height="112" viewBox="0 0 214 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M211.411 46.5596C182.743 59.1695 154.531 59.5511 125.653 30.4097C115.932 20.5998 106.883 1.76023 125.299 3.47743C142.406 5.07258 160.564 32.1142 161.368 53.1478C162.576 84.712 137.845 94.8015 116.013 94.5984C82.2367 94.2843 47.903 90.2448 13.7361 78.0929C6.77645 75.6177 42.9382 52.7528 31.7091 62.7303C23.7833 69.7727 15.3645 72.7016 5.79568 75.9936C-1.09466 78.3642 4.38968 79.9798 9.98474 83.2484C19.0778 88.5606 29.6571 98.5502 35.6654 109.197" stroke="#00A2AD" />
                        </svg>

                    </span>
                </div>
            </div>

        </div>
    );
}

export default Title;