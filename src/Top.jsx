import React from 'react'
import styled from 'styled-components'
import top_view from "./images/developer-team.png"
import section_view1 from "./images/red-one-human.png"
import section_view2 from "./images/orange-one-human.png"
import section_view3 from "./images/three-humans.png"

const Top = () => {
    return (
        <StyledComponent>
            <div className="top-view">
                <h2>学び続ける人に特別なご招待を</h2>
                <img src={top_view} />
            </div>
            <section>
                <img src={section_view1} />
                <div className="text-box">
                    <h3>こんなことを思ったり経験したことはありませんか？</h3>
                    <li>エンジニアになりたい</li>
                    <li>プログラミングの勉強に挫折したことがある</li>
                    <li>ITに詳しくなってキャリアアップしたい</li>
                    <li>漠然とした不安を抱えているが勉強が続かない</li>
                    <li>新しいことに挑戦したい</li>
                    <p>そんな人に特別なご招待があります</p>
                </div>
            </section>
            <section>
                <div className="text-box">
                    <h3>踏み出す人の背中をサポート</h3>
                    <p>「自分を変えたい」と思ったあなたのその勇気,決して無駄にはしません.過去を変えることはできなくても,未来を新しく創ることはできます.（説得力かつインパクトのある文章欲しいSTORY系かESSAY系か）「自分を変えたい」と思ったあなたのその勇気,決して無駄にはしません.過去を変えることはできなくても,未来を新しく創ることはできます.（説得力かつインパクトのある文章欲しいSTORY系かESSAY系か）「自分を変えたい」と思ったあなたのその勇気,決して無駄にはしません.過去を変えることはできなくても,未来を新しく創ることはできます.（説得力かつインパクトのある文章欲しいSTORY系かESSAY系か）</p>
                </div>
                <img src={section_view2} />
            </section>
            <section>
                <img src={section_view3} />
                <div className="text-box">
                    <h3>学び続ける人を応援するオンラインサロン</h3>
                    <p>オンラインサロン「reset-button」では,エンジニアの養成を軸として,幅広い分野において,学び続けるマインドを育成します.プログラミングの学習を通して,学ぶ楽しさや重要性を感じてもらい,学んだことで社会に貢献できる喜びを体験できます.また,プログラミングの学習に不安が多い人に対しても充実したサポートを用意しております.過去に未経験からフリーランスエンジニアを輩出したこともあるこのオンラインサロンで,私たちと一緒に学び続けるマインドを身につけて,新しい自分を探しに行こう！</p>
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
        h2 {
            font-family : 'Arial' ,sans-serif;
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

export default Top
