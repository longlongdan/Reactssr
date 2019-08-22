export default (state, actions) => {
    console.log('sssssss');
    switch (actions.type) {
        case 'change':
            console.log(',,,,,,,')
            return {
                name: "xiaolong"
            }
            break;
        case 'hahah':
            return {
                name: "hahahah"
            }
            break;
        default: 
            return {name: "lalalalaall"};
            break;
    }
}
