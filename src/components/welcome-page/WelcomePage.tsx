import dragic from '../../assets/Dragic.png';
import vector from '../../assets/Vector.png';
import line from '../../assets/Line.png';
import arrowDown from '../../assets/ArrowDown.png';
import { Row, Col } from 'react-flexbox-grid';
import { Button, Image } from 'antd';

const strings={titleAtika:'Artika', titleNumber:'00', subtitleArtika: 'We are Artika studio', subtitleArtika1: 'Branding & Design Agency',
 text:'We blend creative passion, strategic insight and a firm belief in the power of extraordinary designs.'}


function WelcomePage(props: any){
    return(
        <div className="welcomePage">
        <Row style={{margin: '2%'}}>
            <Col xs={12} sm={12} md={5} lg={6}>
                <Row>
                    <Col xs={6} sm={5} md={5} lg={3}>
                        <Row style={{ display:'flex', textAlign:'center', justifyContent:'center'}}>
                            <Image src={vector} width={70} height={40} preview={false}/>
                            <p>{strings.titleAtika}</p>
                        </Row>
                        <Row style={{ display:'flex', textAlign:'center'}}>
                            <h2>{strings.titleNumber}</h2>
                        </Row>
                        <Row style={{display:'flex', justifyContent:'center'}}>
                            <Image src={line} preview={false} width={25} height={'50vh'}/>
                        </Row>
                        <Row style={{ display:'flex', justifyContent:'center', marginTop:'3%'}}>
                            <Button onClick={props.onArrowDownClick} style={{border:'none'}}>
                                <Image src={arrowDown} preview={false} width={75} height={'auto'}/>     
                            </Button>
                        </Row>
                    </Col>
                    <Col  xs={12} sm={5} md={5} lg={9} >
                        <div style={{marginTop: "%"}}>
                            <h1 style={{fontSize: "30px", marginBottom: 0, fontWeight: 700 }}>{strings.subtitleArtika}</h1>
                            <h1 style={{fontSize: "55px", fontWeight: 700}}>{strings.subtitleArtika1}</h1>
                            <h5 style={{fontSize: "25px"}}>{strings.text}</h5>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col xs={6} sm={5} md={5} lg={6}>
                <Image src={dragic} preview={false}/>
            </Col>
        </Row>
        </div>
    )
}

export default WelcomePage;

