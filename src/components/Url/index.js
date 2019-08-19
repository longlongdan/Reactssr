const Url = {
    addParam: ( url=location.href, name, value) => {
        return url.includes('?') ? url+='&'+name+'='+value:url+='?'+name+'='+value;
    }
};

module.exports = Url;