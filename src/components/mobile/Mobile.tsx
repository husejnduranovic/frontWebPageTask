import { Row, Col } from 'antd';
function Mobile (){
    return(
    <div style={{display:'flex', justifyContent:'center'}}>
        <Row style={{justifyContent: "space-between"}}>
        <Col span={8}> 
        <SingleMobile />
        </Col>
        <Col span={8}> 
        <SingleMobile />
        </Col>
        <Col span={8}> 
        <SingleMobile />
        </Col>
    </Row>
    </div>
    )
}

const SingleMobile = () => {
    return(
    <div className="iphone-x" style={{marginRight: "3rem", width: "100%", height: "100%"}}>
        <div className="side">
        <div className="screen">    
        </div>
        </div>
        <div className="line"></div>
        <div className="header">
            <div className="sensor-1"></div>
            <div className="sensor-2"></div>
            <div className="sensor-3"></div>
        </div>
        <div className="volume-button"></div>
        <div className="power-button"></div>
    </div>
    )
}

export default Mobile;