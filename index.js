window.onload=function(){
    chrome.history.search({text:''},function(data){
        console.log(data)
        var i;
        for(i=0;i<data.length;i++){
            var title =data[i].title
            var url = data[i].url
            var otime = data[i].lastVisitTime
            var visit=data[i].visitCount
            // var id=data[i].id

            var heading =document.createElement("h3");
            heading.innerHTML=title;
            heading.className="title"

            var anchor=document.createElement('a');
            anchor.href=url;
            anchor.setAttribute("target","_blank");
            var element = document.createElement("img");
            element.setAttribute("src", "./Source/link.png");
            element.setAttribute("width","20px");
            element.setAttribute("height","20px");
            anchor.appendChild(element);
        

            var time=document.createElement("p")
            const outtime=new Date(otime)
            time.innerHTML="In Time : "+outtime.getHours() % 12 + ":" +outtime.getMinutes()+":"+outtime.getSeconds()+" "+(outtime.getHours()<12?"am":"pm")
            // var time=date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
            time.className="endtime"  

            var ootime=document.createElement("p")
            const outttime=new Date(otime)
            ootime.innerHTML="Our Time : "//+outttime.getHours() % 12 + ":" +outttime.getMinutes()+":"+outttime.getSeconds()+" "+(outttime.getHours()<12?"am":"pm")
            // var time=date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
            ootime.className="endtime"  
            
            
            var viscount=document.createElement("p")
            viscount.innerHTML="Visit Count : " +visit;
            viscount.className="endtime"

            var div1=document.createElement("div")
            div1.className="row-div"
            div1.append(heading)
            div1.append(anchor)

            var div2=document.createElement("div")
            div2.className="row2-div"
            div2.append(time)
            div2.append(ootime)
            div2.append(viscount)
            

            var div=document.createElement("div")
            div.className="col-div"
            div.append(div1)
            div.append(div2)

            document.body.append(div)
            
        }
    }); 
} 