import { List, Col } from 'antd';

function CustomColumn(props: any){
    return(
        <Col span={6}>
            <h2 style={{color:'white'}}>{props.props.title}</h2>
            <List
                size="small"
                dataSource={props.props.list}
                renderItem={(item:any) => <List.Item style={{color:'white'}}>{item}</List.Item>}
            />
        </Col>
    )
}

export default CustomColumn;