import React, { useContext, useEffect } from 'react';
import MyContext from '../context';

let myContext = null;
const App = (props) => {
    myContext = useContext(MyContext);
    const [state, dispatch] = myContext.app;
    // App.getData(myContext.app);
    // console.log(myContext);
    // 
    // console.log(state);
    // dispatch({
    //     type: 'hahah'
    // })
    // console.log(state);
    // console.log(123);
    
    useEffect(()=>{
        console.log("服务端不会执行这一块！")
    })
    
    return (<div>aaaaaa</div>)
}
App.getData = (a) => {
    // const myContext = useContext(MyContext);
    const [state, dispatch] = a;
    console.log("静态方法调用获取：",a);
    // console.log("服务端"+myContext);
    dispatch({
        type: 'change'
    })
    //相当于conmponetDidMount 如何使用dispatch
    console.log(a);
}
export default App;