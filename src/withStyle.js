import React from 'react';

//使用高阶组件进行组件的样式添加
const withStyle = (OriginCom, style) => {
    return  (props) =>{
        if(props.staticContext) {
            props.staticContext.style.push(style._getCss());
        }
        return(<OriginCom {...props}/>)
    }
}
export default withStyle;