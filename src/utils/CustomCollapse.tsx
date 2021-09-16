import { Collapse } from "antd";
const { Panel } = Collapse;

function CustomCollapse(props: any){
    return(
        <Collapse  expandIconPosition="right" style={{backgroundColor:'transparent'}}>
            <Panel header={props.title} key="1" >
                <p>{props.text}</p>
            </Panel>
        </Collapse>
    )
}

export default CustomCollapse;
  