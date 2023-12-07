import React from 'react'

const Recommend = () => {
    return (
        <>
            <div className="a">
                <div className="staticContainer">
                    <div className="staticTextSection">
                        <h1>오늘의 추천밴드</h1>
                        <h2>유다빈 밴드</h2>
                        <hr />
                            <h3>
                                한 순간들도 빠짐없이 사랑했던 모든 순간과 진정한 안녕을 말할 때, 마지막으로 딱 한 번만 나를 다정하게 기억해 주기를
                            </h3>
                            <p>이런 식으로 추가하면 될 듯</p>
                    </div>
                    <div className="staticVideoSection">
                        {/* YouTube Video Embed Code */}
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/wmMrFpemJNY" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recommend