import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import top_view from "./images/gummy-programming.png"
import section_view1 from "./images/clip-remote-work-1.png"
import section_view2 from "./images/undraw_pair_programming_njlp.png"
import section_view3 from "./images/clip-reading-of-books-1.png"
import section_photo from "./images/user_default.png"

function About() {
    return (
        <StyledComponent>
            <div className="top-view">
                <div className="top-view-text">
                    <h2>ABOUT</h2>
                    <h3>学び続ける人に最新の技術を</h3>
                </div>
                <img src={top_view} />
            </div>
            <section>
                <img src={section_view1} />
                <div className="text-box">
                    <h3>自由なライフスタイルのための学び</h3>
                    <p>人生100年時代と言われ,働き方が変わろうとしています.そんな中では,自分が「どこで働くか」,より「なにをして働くか」や「働いてなにを感じるのか」が幸福度を左右すると言われています.そのためには私たちは学び続けるマインドすなわち「生涯学習」の考えが重要であると思っています.しかし,そんなライフスタイルを送るために一人では難しいです.だからこそ,学び合い,助け合いを継続することができるコミュニティをつくりました.そんな私たちのコミュニティであなたの自由の土台を一緒につくりませんか？</p>
                </div>
            </section>
            <section>
                <div className="text-box">
                    <h3>プログラミング学習に特化する理由</h3>
                    <p>サロンのメンバーにはプログラミングを教えることが上手な人が多くいます.実は,プログラミングが得意な人が必ずしも,教えるのが得意とは限りらないのです.他のプログラミングスクールでは,経歴は素晴らしいものの,教えるのが得意とは言えない方や紋切り型の教育しか出来ない方もいらっしゃいます.そうすると，当初の目標であった「自由なライフスタイルを手に入れる」ということに遠のいてしまうと思っています.人に教える,育てることからプログラミング教育を見つめ直すとまだまだやれることはたくさんあります.このサロンでは200人以上に指導した講師の経験と,最新の技術やフロント・サーバーサイドの技術,ものを作る上での大事な考え方まで一気通貫で教えることが出来ます.また,プログラミングはもちろんのこと「自身の人生をうまくプログラミングしていく」ということのヒントになればと思います．</p>
                </div>
                <img src={section_view2} />
            </section>
            <section>
                <img src={section_view3} />
                <div className="text-box">
                    <h3>充実したサポート</h3>
                    <p>プログラミング学習から実践的な技術を身につけるまで,現役のエンジニアがサポートいたします.自分にあったプランで着々とスキルを身につけていきましょう.また,勉強するための読書サポートも実施しております.期間限定ではありますが,買った本代をこちらで負担させていただきます.プログラミングの学習をしない方であっても,本で学び続ける人をサポートするプランをご用意させていただいております.</p>
                </div>
            </section>
            <Link to="/contents"><p className="more-about">もっと詳しく</p></Link>
            <h2 className="section-title">運営メンバー</h2>
            <section>
                <div className="text-box">
                    <h2>運営顧問</h2>
                    <h3>坂本 泰明</h3>
                    <p>ITとソフトウェアが大好きです．プログラミング講師をしています．個人事業主になって2年弱，ご縁もあって会社の社長をやりながらアプリ開発をしています．ソフトウェアを早く安くミニマムに作るのは割と得意です．ロボットをジェスチャ認識で動かしたり，LINE Bot作ったり，Webシステム作ったりしてます．</p>
                </div>
                <img src={section_photo} style={{ width: '250px', height: '250px', borderRadius: '100%' }} />
            </section>
            <section>
                <img src={section_photo} style={{ width: '250px', height: '250px', borderRadius: '100%' }} />
                <div className="text-box">
                    <h2>運営副顧問</h2>
                    <h3>坂本 泰明</h3>
                    <p>ITとソフトウェアが大好きです．プログラミング講師をしています．個人事業主になって2年弱，ご縁もあって会社の社長をやりながらアプリ開発をしています．ソフトウェアを早く安くミニマムに作るのは割と得意です．ロボットをジェスチャ認識で動かしたり，LINE Bot作ったり，Webシステム作ったりしてます．</p>
                </div>
            </section>
            <section>
                <div className="text-box">
                    <h2>運営副顧問</h2>
                    <h3>坂本 泰明</h3>
                    <p>ITとソフトウェアが大好きです．プログラミング講師をしています．個人事業主になって2年弱，ご縁もあって会社の社長をやりながらアプリ開発をしています．ソフトウェアを早く安くミニマムに作るのは割と得意です．ロボットをジェスチャ認識で動かしたり，LINE Bot作ったり，Webシステム作ったりしてます．</p>
                </div>
                <img src={section_photo} style={{ width: '250px', height: '250px', borderRadius: '100%' }} />
            </section>
            <div className="ym-description">
                <h2>個人事業yasumeltについて</h2>
                <p>個人事業yasumeltは、2018年に設立されたWeb開発事業です。Webシステム開発、モバイルアプリ開発、Webサイト制作の分野を得意としており、新規サービスの相談から開発〜保守・運用までをお客様のプロジェクトメンバーの一員としてサポートいたします。yasumelt代表の 坂本 泰明は単にお客さまから依頼を受けたシステムを開発するのではなく、そのシステムを使った先の利益についても深く考え、お客様にとって「価値」のあるシステム開発を常に心がけております。</p>
            </div>
        </StyledComponent>
    )
}


const StyledComponent = styled.div`
    .top-view {
        display: flex;
        justify-content: center;
        align-items: center;
        .top-view-text {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-family : 'Arial' ,sans-serif;
            h2 {
                margin: 10px;
                &:before, &:after {
                    content: '-';
                    margin: 0 8px;
                }
            }
        }
        img {
            width: 50%;
        }
    }
    .section-title {
        font-family : 'Arial' ,sans-serif;
        margin: 30px 0 20px 30px;
        padding-bottom: 8px;
        border-bottom: 1px solid #ccc;
        &:before {
            content: '＊';
            margin-right: 8px;
        }
    }
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px;
        img {
            max-width: 400px;
            max-height: 400px;
            margin: 12px;
        }
        .text-box {
            padding: 12px;
            margin:12px;
            h2 {
                font-family : 'Arial' ,sans-serif;
                margin: 12px 0;
            }
            h3 {
                margin: 8px 0;
            }
        }
    }
    .more-about {
        text-align: center;
        font-weight: bold;
        background-color: #ccc;
        padding: 10px;
    }
    .ym-description{
        margin: 20px;
        border: 1px solid #444;
        border-radius: 8px;
        padding: 8px;
        h2, p {
            padding: 10px;
        }
    }
`

export default About
