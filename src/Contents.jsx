import React from 'react'
import styled from 'styled-components'
import top_view from "./images/undraw_react_y7wq.png"
import section_view1 from "./images/orange-one-human.png"
import section_view2 from "./images/red-one-human.png"
import section_view3 from "./images/three-humans.png"

function Contents() {
    return (
        <StyledComponent>
            <div className="top-view">
                <div className="top-view-text">
                    <h2>CONTENTS</h2>
                    <h3>それぞれにあった学び方</h3>
                </div>
                <img src={top_view} />
            </div>
            <section>
                <img src={section_view2} />
                <div className="text-box">
                    <h3>学びの土台の提供</h3>
                    <li>Slackを用いたコミュニティ</li>
                    <li>一緒に学ぶ仲間ができる</li>
                    <li>プログラミングの勉強方法を知る</li>
                    <li>読書グループで定期的なアウトプットや刺激を</li>
                    <li>やる気のある人ほど成長する環境</li>
                </div>
            </section>
            <section>
                <div className="text-box">
                    <h3>エンジニア育成</h3>
                    <li>基本講座（HTML/CSS/JavaScript/React）</li>
                    <li>現役エンジニアに質問し放題</li>
                    <li>実務レベルの開発し放題</li>
                    <li>キャリア相談</li>
                    <li>サポートつきで実際の案件をこなせる</li>
                </div>
                <img src={section_view3} />
            </section>
            <section>
                <img src={section_view1} />
                <div className="text-box">
                    <h3>最先端の知識の実践</h3>
                    <li>脳科学や心理学に基づいた勉強法の実践</li>
                    <li>コミュニティ内で最先端の情報を入手し,それらを実践できる</li>
                    <li>挫折のしにくい仕組み作り</li>
                    <li>本の読み放題制度</li>
                </div>
            </section>
            <h2 className="section-title">PLAN</h2>
            <div className="contents-plan">
                <h3>Engineer Lite【月額980円】</h3>
                <ul>
                    <li>学習のロードマップを紹介・提案</li>
                    <li>現役エンジニアにSlackで質問し放題</li>
                    <li>独学でエンジニアになりたい人をサポート</li>
                </ul>
                <h3>Engineer Pro【月額1980円】</h3>
                <ul>
                    <li>開発し放題</li>
                    <li>現場のスキルを身につけることができます</li>
                    <li>実際にコーディングを依頼します</li>
                    <li>実際の案件のコーディングを依頼します</li>
                    <li>エンジニアとしての力がついてきて,実践に移りたい人をサポート</li>
                </ul>
                <h3>Output Plan【月額550円】</h3>
                <ul>
                    <li>本を買い放題（期間限定）</li>
                    <li>エンジニアの人と一緒に勉強し放題</li>
                    <li>読書アウトプットのグループに参加して本を読む習慣を身につけます</li>
                    <li>コミュニティメンバーのアウトプット内容が閲覧可能</li>
                    <li>コミュニティメンバーが読んだ本を共有できます</li>
                    <li>定期的に実施するアウトプット会に参加</li>
                    <li>定期的に参加するディスカッションに参加</li>
                </ul>
                上記の2つのコースでは,このプランが含まれます.
            </div>
            <h2 className="section-title">PRODUCT</h2>



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
            h3 {
                margin: 8px 0;
            }
        }
    }
    .contents-plan {
        margin: 20px;
        border: 1px solid #444;
        border-radius: 8px;
        padding: 8px;
        h3 {
            padding: 10px;
        }
        ul {
            padding-left: 30px;
        }

    }
`

export default Contents
