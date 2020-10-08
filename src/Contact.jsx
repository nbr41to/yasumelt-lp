import React from 'react'
import styled from 'styled-components'
import top_view from "./images/undraw_team_spirit_hrr4.png"
import section_view1 from "./images/orange-one-human.png"
import section_view2 from "./images/red-one-human.png"
import section_view3 from "./images/three-humans.png"

function Contact() {
    return (
        <StyledComponent>
            <div className="top-view">
                <div className="top-view-text">
                    <h2>CONTACT</h2>
                    <h3>なにかできることはありますか？</h3>
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
            h3 {
                margin: 8px 0;
            }
            p {

            }
        }
    }
`

export default Contact
