import React from 'react'
import styled from 'styled-components'
// images
import top_view from "./images/undraw_react_y7wq.png"
import section_view1 from "./images/undraw_Group_chat_re_frmo.png"
import section_view2 from "./images/undraw_professor_8lrt.png"
import section_view3 from "./images/data-processing-illustration-concept.jpg"
// components
import Section from "./components/Section"
import SectionTitle from "./components/SectionTitle"
import TopView from "./components/TopView"

function Contents() {
    return (
        <StyledComponent>
            <TopView
                title="CONTENTS"
                subtitle="それぞれにあった学び方"
                img={top_view}
            />
            <Section
                subtitle="学びの土台の提供"
                imgComp={section_view1}
            >
                <ul>
                    <li>Slackを用いたコミュニティ</li>
                    <li>一緒に学ぶ仲間ができる</li>
                    <li>プログラミングの勉強方法を知る</li>
                    <li>読書グループで定期的なアウトプットや刺激を</li>
                    <li>やる気のある人ほど成長する環境</li>
                </ul>
            </Section>
            <Section
                subtitle="エンジニア育成"
                imgComp={section_view2}
                imgRight={true}
            >
                <ul>
                    <li>基本講座（HTML/CSS/JavaScript/React）</li>
                    <li>現役エンジニアに質問し放題</li>
                    <li>実務レベルの開発し放題</li>
                    <li>キャリア相談</li>
                    <li>サポートつきで実際の案件をこなせる</li>
                </ul>
            </Section>
            <Section
                subtitle="最先端の知識の実践"
                imgComp={section_view3}
            >
                <ul>
                    <li>脳科学や心理学に基づいた勉強法の実践</li>
                    <li>コミュニティ内で最先端の情報を入手し,それらを実践できる</li>
                    <li>挫折のしにくい仕組み作り</li>
                    <li>本の読み放題制度</li>
                </ul>
            </Section>

            <SectionTitle title="PLAN" />
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
            <SectionTitle title="PRODUCT" />
            <div className="contents-plan">
                <h3>プログラミング基本講座</h3>
                <ul>
                    <li>Reactを学ぶための基本講座</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
                <h3>React講座</h3>
                <ul>
                    <li>実務レベルのReactを学ぶ講座</li>
                    <li>React</li>
                    <li>React Hooks</li>
                    <li>Firebase</li>
                </ul>
            </div>
        </StyledComponent>
    )
}

const StyledComponent = styled.div`
    
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
