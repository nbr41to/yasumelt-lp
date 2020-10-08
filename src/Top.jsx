import React from 'react'
import styled from 'styled-components'
// images
import top_view from "./images/developer-team.png"
import section_view1 from "./images/red-one-human.png"
import section_view2 from "./images/orange-one-human.png"
import section_view3 from "./images/three-humans.png"
// components
import Section from "./components/Section"
import TopView from "./components/TopView"

const Top = () => {
    return (
        <StyledComponent>
            <TopView
                subtitle="学び続ける人に特別なご招待を"
                img={top_view}
            />
            <Section
                subtitle="こんなことを思ったり経験したことはありませんか？"
                imgComp={section_view1}
            >
                <ul>
                    <li>エンジニアになりたい</li>
                    <li>プログラミングの勉強に挫折したことがある</li>
                    <li>ITに詳しくなってキャリアアップしたい</li>
                    <li>漠然とした不安を抱えているが勉強が続かない</li>
                    <li>新しいことに挑戦したい</li>
                </ul>
                <p>そんな人に特別なご招待があります</p>
            </Section>
            <Section
                subtitle="踏み出す人の背中をサポート"
                imgComp={section_view2}
                imgRight={true}
            >
                <p>「自分を変えたい」と思ったあなたのその勇気,決して無駄にはしません.過去を変えることはできなくても,未来を新しく創ることはできます.（説得力かつインパクトのある文章欲しいSTORY系かESSAY系か）「自分を変えたい」と思ったあなたのその勇気,決して無駄にはしません.過去を変えることはできなくても,未来を新しく創ることはできます.（説得力かつインパクトのある文章欲しいSTORY系かESSAY系か）「自分を変えたい」と思ったあなたのその勇気,決して無駄にはしません.過去を変えることはできなくても,未来を新しく創ることはできます.（説得力かつインパクトのある文章欲しいSTORY系かESSAY系か）</p>
            </Section>
            <Section
                subtitle="学び続ける人を応援するオンラインサロン"
                imgComp={section_view3}
            >
                <p>オンラインサロン「reset-button」では,エンジニアの養成を軸として,幅広い分野において,学び続けるマインドを育成します.プログラミングの学習を通して,学ぶ楽しさや重要性を感じてもらい,学んだことで社会に貢献できる喜びを体験できます.また,プログラミングの学習に不安が多い人に対しても充実したサポートを用意しております.過去に未経験からフリーランスエンジニアを輩出したこともあるこのオンラインサロンで,私たちと一緒に学び続けるマインドを身につけて,新しい自分を探しに行こう！</p>
            </Section>
        </StyledComponent>
    )
}

const StyledComponent = styled.div`
    
`

export default Top
