import line from '../../assets/WhiteLine.png';
import ellipse from '../../assets/Ellipse.png';
import backgroundImage from '../../assets/BackgroundFirstPage.png';
import { Row } from 'react-flexbox-grid';
import { Image } from 'antd';
import { Col} from 'antd';
import CustomFooter from '../footer/CustomFooter';
import { useRef } from 'react';
import arrowDown from '../../assets/WhiteArrow.png';
import CustomCollapse from '../../utils/CustomCollapse';
import CustomColumn from '../../utils/CustomColumn';
import CustomButton from '../../utils/CustomButton';
import whiteVector from '../../assets/WhiteVector.png';
import Mobile from '../mobile/Mobile';

const dataCustomColumn = [
  {
    title:'Product',
    list:['Finding Produt market fit.', 'Pricing strategies', 'Roadmap planning']
  },
  {
    title:'Technology',
    list:['Finding Produt market fit.', 'Pricing strategies', 'Roadmap planning']
  },
  {
    title:'Marketing',
    list:['Finding Produt market fit.', 'Pricing strategies', 'Roadmap planning']
  },
  {
    title:'Marketing',
    list:['Finding Produt market fit.', 'Pricing strategies', 'Roadmap planning']
  }
]

const dataCustomCollapse=[
  {
    title:'Listen',
    text:'Lorem ipsum'
  },
  {
    title:'Create',
    text:'Lorem ipsum'
  },
  {
    title:'Deliver',
    text:'Lorem ipsum'
  },
  {
    title:'Inspire',
    text:'Lorem ipsum'
  }
]
const strings={titleAtika:'Artika', titleNumber:'01', overviewTitle:'Our Promise.', overviewTitle1:'Overview'}

const scrollToRef = (ref: any) =>{
  window.scrollTo(0, ref.current.offsetTop);
} 

function FirstPage(props: any) {
  const firstPageRef = useRef(null);
  const executeScroll = (refType: any) => {
    console.log(refType);
    scrollToRef(firstPageRef);
  }

  let _top;
  props.visible ? _top="100vh" : _top="0vh"

  return (
    <div style={{backgroundImage:`url(${backgroundImage})`, top:_top, transition: 'opacity 1s', width: "100%"}} className="firstPage" ref={firstPageRef}>
      
    <Row>
          <div style={{position:'relative', paddingTop:'5%'}}>
          <Row >
              <Col xs={6} sm={2} md={2} lg={4}>
                  <Row style={{ display:'flex', textAlign:'center', justifyContent:'center'}}>
                    <Image src={whiteVector} width={70} height={40} preview={false}/>
                    <p style={{color:'white'}}>{strings.titleAtika}</p>
                  </Row>
                  <Row style={{ display:'flex', textAlign:'center'}}>
                      <h2 style={{color:'white'}}>{strings.titleNumber}</h2>
                  </Row>
                  <Row style={{display:'flex', justifyContent:'center'}}>
                    <Image src={line} preview={false} width={25} height={'50vh'} style={{color: "white"}} />
                  </Row>
                  <Row style={{ display:'flex', justifyContent:'center', marginTop:'3%'}}>
                    <Image src={arrowDown} preview={false} width={75} height={'auto'}/>
                  </Row>
              </Col>
              <Col style={{width:'83%'}}>
                  <Row>

                  <Col span={12}>
                    <Col style={{width:'35%'}}>
                      <h5 style={{color:'white'}}>{strings.overviewTitle}</h5>
                      {
                        dataCustomCollapse.map(d => <CustomCollapse title={d.title} text={d.text} />)
                      }
                    </Col>
                      <h5 style={{paddingTop:'5%', color:'white'}}>{strings.overviewTitle1}.</h5>
                      <h1 style={{color:'white'}}>Strategy</h1><h1 style={{color:'white'}}>and planing.</h1>
                    </Col>
                  <Col span={12} style={{display:'flex', justifyContent:'center'}}>
                    <Image src={ellipse} preview={false}/>
                  </Col>
                  </Row>
                  <br />
                  <br />
                <Row>
                  {
                    dataCustomColumn.map(d => 
                      <CustomColumn props={d} />
                    ) 
                  }
                </Row>
              </Col>
          </Row>
          </div>
          <div style={{position:'absolute', top:'40vh'}}>
            <Mobile />
          </div>
      </Row>
      <CustomButton executeScroll={props.executeScroll} />
      <CustomFooter executeScroll={executeScroll}/>
    </div>
  );
}

export default FirstPage;
