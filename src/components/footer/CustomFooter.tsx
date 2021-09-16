import { Button, Col, Row, Image } from "antd";
import { Container } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import { rootCertificates } from "tls";
import whiteVector from '../../assets/WhiteVector.png';
import CustomButton from "../../utils/CustomButton";

const strings={footerTitle:'LETS TALK! Schedule an Appointment', subtitle:'Get in touch with us',sorgerAndCo: 'Sorger&Co',info:'info@sorger.co', addressSorgerAndCo:'288 Bridgeland Ave', headOfficeAddress:'North York, CN | M6A 174', infoEurope:'office@artikastudio.com', numberEurope:'+381 64 00 987 90', addressEurpe:'21000 Novi Sad, SR'};
  


function CustomFooter(props: any){
    return(
       <>
       <Row style={{backgroundColor: '#212020', padding: '3% 6%', }}>
          <Col span={14} >
            <h2 style={{color:'white', fontFamily: "Gilroy-ExtraBold", lineHeight: "105%"}}><span style={{color: "#D7B46A"}}>LETS TALK!</span> Schedule an Appointment</h2>
          </Col>
          <Col span={10}>
            <Button style={{float:'right',marginTop:'1%', fontWeight: 700}}>
            {strings.subtitle.toUpperCase()}
            </Button>
          </Col>
        </Row>
        <Row style={{backgroundColor:'#000000', justifyContent:'center', display:'flex', paddingTop: "4rem"}}>
        <Col span={6} style={{color:'white', display:'flex', justifyContent:'center', alignItems: "center"}}>
          <div >
          <Image src={whiteVector} width={60} height={60} preview={false}/>
          <p>{strings.sorgerAndCo}</p>
            </div>
          </Col>
          <Col span={6} style={{color:'white'}}>
            <h4 style={{color:'white'}}>Head Office.</h4>
            <p>{strings.info}</p>
            <p>{strings.addressSorgerAndCo}</p>
            <p>{strings.headOfficeAddress}</p>
          </Col>
          <Col span={6} style={{color:'white'}}>
            <h4 style={{color:'white'}}>Studio Europe.</h4>
            <p>{strings.infoEurope}</p>
            <p>{strings.numberEurope}</p>
            <p>{strings.addressEurpe}</p>
          </Col>
          <Col span={6}>
            <SocialIcon url="https://behance.com" bgColor="transparent" fgColor="white"/>
            <SocialIcon url="https://twitter.com" bgColor="transparent" fgColor="white"/>
            <SocialIcon url="https://facebook.com" bgColor="transparent" fgColor="white"/>
            <SocialIcon url="https://linkedin.com" bgColor="transparent" fgColor="white"/>
            <div style={{display: "block"}}>
              </div>
          <small style={{color: "#828282"}}>All rights reserved © 2021 Artika Studio</small>

          </Col>
        <CustomButton executeScroll={props.executeScroll} />
        </Row>
       </>
        
    )
}

export default CustomFooter;