//Query String Arguments from an URL
function getQueryStringArgs(){
    //get query string without the initial ?
    var qs = (location.search.length > 0 ? location.search.substring(1) : ""),
    
        //object to hold data
        args = {},
    
        //get individual items
        items = qs.length ? qs.split("&") : [],
        item = null,
        name = null,
        value = null,
        
        //used in for loop
        i = 0,
        len = items.length;
    
    //assign each item onto the args object
    for (i=0; i < len; i++){
        item = items[i].split("=");
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);
        if (name.length) {
            args[name] = value;
        }
    }
    
    return args;
}

/*
//assume query string of ?q=javascript&num=10
                   
var args = getQueryStringArgs();
                   
alert(args["q"]);    
alert(args["num"]); 

*/