import { Button } from "antd";
import UpOutlined from '@ant-design/icons/lib/icons/UpOutlined';

function CustomButton(props: any){
    return(
        <Button style={{backgroundColor:'transparent', left:2000, bottom: 0, position:'sticky', borderRadius:'20px', marginRight:'10px', marginBottom:'20px'}} onClick={props.executeScroll}>
            <UpOutlined style={{color:'white', marginBottom: "4px"}}/>
        </Button>
        )
}

export default CustomButton;