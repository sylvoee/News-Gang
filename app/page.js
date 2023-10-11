import Image from 'next/image'
let getNews = async () =>{
    const URL = process.env.URL;
    let data = await fetch(URL, {next :{revalidate:3600}});
    let res = await data.json();
    // console.log(res); 
    return res;

    if(!res.ok){
      throw new err("failed to fetch data");
    }
};


export default async function Home() {
  let index = 0;
    let news = await getNews();
  return (
    <main>
    <div className='row main'>
    <h4 className='m-3 text-center text-success'>The NewsGanger | The Home of Authentic News</h4>
    <hr></hr>
     <div className='col-sm-3 left-side-bar d-none d-sm-block shadow'>

     <Image width ={270} height = {200} className ="news-img" src="/img/newslogo.png" alt="" /> 
     <Image width ={270} height = {200} className ="news-img" src="/img/music.jpg" alt="" />
     <Image width ={270} height = {200} className ="news-img" src="/img/ent.jpg" alt="" />
     <Image width ={270} height = {200} className ="news-img" src="/img/ecoPol.png" alt="" />
     <div className='src d-inline'>
     <h5>News Source</h5>
     <hr></hr>
     <button className='btn btn-secondary  m-1'>CNA</button>
     <button className='btn btn-secondary m-1'>Asia Times</button>
     <button className='btn btn-secondary m-1'>Bloomberg</button>
     <button className='btn btn-secondary m-1'>Reuters</button>
     <button className='btn btn-secondary m-1'>The New York Times</button>
     <button className='btn btn-secondary m-1'>The Register</button>
     <button className='btn btn-secondary m-1'>Investing.com</button>
     <button className='btn btn-secondary m-1'>WSJ</button>
     <button className='btn btn-secondary m-1'>nikkei</button>
     
     

     </div>

     </div>
     <div className='main-news row col-sm-9 mt-4'>
       
       {
        news.map(aNews =>{
        return(
          <div className='col-sm-4' key={aNews.cluster_uuid}>
          <div type="button" className=" col-sm-12 m-1 btn btn-light shadow" data-bs-toggle="modal" data-bs-target="#myModal">
         <div>
        <p>{aNews.description}</p>
       

         {aNews.topic_class ==='Energy' && (<Image width ={270} height = {200} className ="news-img" src="/img/energy.jpg" alt="" />)}
         {aNews.topic_class ==='International Relations' && (<Image width ={270} height = {200} className ="news-img" src="/img/international.jpg" alt="" />)}
         {aNews.topic_class ==='Politics' && (<Image width ={270} height = {200} className ="news-img" src="/img/politics.jpg" alt="" />)}
         {aNews.topic_class ==='Agriculture and Technology' && (<Image width ={270} height = {200} className ="news-img" src="/img/agric&tech.jpg" alt="" />)}
         {aNews.topic_class ==='Lottery' && (<Image width ={270} height = {200} className ="news-img" src="/img/lottery.jpg" alt="" />)}
         {aNews.topic_class ==='Finance' && (<Image width ={270} height = {200} className ="news-img" src="/img/finance.jpg" alt="" />)}
         {aNews.topic_class ==='Healthcare' && (<Image width ={270} height = {200} className ="news-img" src="/img/health.jpg" alt="" />)}
         {aNews.topic_class ==='Legal' && (<Image width ={270} height = {200} className ="news-img" src="/img/legal.jpg" alt="" />)}
         {aNews.topic_class ==='Technology' && (<Image width ={270} height = {200} className ="news-img" src="/img/tech.png" alt="" />)}
         {aNews.topic_class ==='Music' && (<Image width ={270} height = {200} className ="news-img" src="/img/music.jpg" alt="" />)}
         {aNews.topic_class ==='Environmental Health' && (<Image width ={270} height = {200} className ="news-img" src="/img/envHealth.jpg" alt="" />)}
         {aNews.topic_class ==='Sports' && (<Image width ={270} height = {200} className ="news-img" src="/img/sports.jpg" alt="" />)}
         {aNews.topic_class ==='Economy' && (<Image width ={270} height = {200} className ="news-img" src="/img/exec.png" alt="" />)}
         {aNews.topic_class ==='Shiping' && (<Image width ={270} height = {200} className ="news-img" src="/img/shiping.jpg" alt="" />)}
         {aNews.topic_class ==='Travel and Tourism' && (<Image width ={270} height = {200} className ="news-img" src="/img/travel.jpg" alt="" />)}
         {aNews.topic_class ==='Economics and Political' && (<Image width ={270} height = {200} className ="news-img" src="/img/ecoPol.png" alt="" />)}
         {aNews.topic_class ==='Entrepreneurship' && (<Image width ={270} height = {200} className ="news-img" src="/img/ent.jpg" alt="" />)}
         {aNews.topic_class ==='Banking and Finance' && (<Image width ={270} height = {200} className ="news-img" src="/img/bank&fin.jpg" alt="" />)}
         {aNews.topic_class ==='Agriculture' && (<Image width ={270} height = {200} className ="news-img" src="/img/agric.jpg" alt="" />)}
         {aNews.topic_class ==='Crime and Social Issues' && (<Image width ={270} height = {200} className ="news-img" src="/img/crime&so.jpg" alt="" />)}
         {aNews.topic_class ==='Business and Finance' && (<Image width ={270} height = {200} className ="news-img" src="/img/busfin.jpg" alt="" />)}
         {aNews.topic_class ==='Legislation' && (<Image width ={270} height = {200} className ="news-img" src="/img/legislation.jpg" alt="" />)}
         {aNews.topic_class ==='Business' && (<Image width ={270} height = {200} className ="news-img" src="/img/business.webp" alt="" />)}
         {aNews.topic_class ==='Aviation' && (<Image width ={270} height = {200} className ="news-img" src="/img/aviation.webp" alt="" />)}
         {aNews.topic_class ==='International Trade' && (<Image width ={270} height = {200} className ="news-img" src="/img/int-trade.jpg" alt="" />)}
         {aNews.topic_class ==='Entertainment' && (<Image width ={270} height = {200} className ="news-img" src="/img/ent.jpg" alt="" />)}
         {aNews.topic_class ==='Health' && (<Image width ={270} height = {200} className ="news-img" src="/img/health.jpg" alt="" />)}
         {aNews.topic_class ==='Business and Entrepreneurship' && (<Image width ={270} height = {200} className ="news-img" src="/img/business.webp" alt="" />)}
         {aNews.topic_class ==='Climate Development' && (<Image width ={270} height = {200} className ="news-img" src="/img/climate.jpg" alt="" />)}
         {aNews.topic_class ==='Mining' && (<Image width ={270} height = {200} className ="news-img" src="/img/mining.jpg" alt="" />)}

         {aNews.topic_class !=='Technology' && aNews.topic_class !=='Finance' && aNews.topic_class !=='Lottery'
         && aNews.topic_class !=='Politics' && aNews.topic_class !=='International Relations' 
         && aNews.topic_class !=='Agriculture and Technology'  && aNews.topic_class !=='Heat Care' 
         && aNews.topic_class !=='Legal'  && aNews.topic_class !=='Technology'   && aNews.topic_class !=='Music'
         && aNews.topic_class !=='Economy'  && aNews.topic_class !=='Sports'   && aNews.topic_class !=='Music'  
         && aNews.topic_class !== 'Shiping'  && aNews.topic_class !=='Travel and Tourism'   && aNews.topic_class !=='Healthcare' 
         && aNews.topic_class !== 'Environmental Health'  && aNews.topic_class !=='Economics and Political'   && aNews.topic_class !=='Entrepreneurship'   
         && aNews.topic_class !== 'Banking and Finance'   && aNews.topic_class !== 'Agriculture'  && aNews.topic_class !== 'Crime and Social Issues' 
         && aNews.topic_class !== 'Business and Finance'   && aNews.topic_class !== 'Legislation'  && aNews.topic_class !== 'Business' 
         && aNews.topic_class !== 'Aviation'   && aNews.topic_class !== 'International Trade' 
         && aNews.topic_class !== 'Health'   && aNews.topic_class !== 'Entertainment' 
         && aNews.topic_class !== 'Business and Entrepreneurship'   && aNews.topic_class !== 'Climate Development' 
         && aNews.topic_class !== 'Mining'

          && (<Image width ={180} height = {200} className ="news-img" src="/img/logo.png" alt="" />)}

          <p>
        <button  className='btn btn-secondary'> {aNews.topic_class}</button>
        </p>
        
         </div>
         
</div>

{/* <!-- The Modal --> */}
<div className="modal" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content">

      {/* <!-- Modal Header --> */}
      <div className="modal-header bg-secondary text-light">
        <h6 className="modal-title">{aNews.description}</h6>
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>

      {/* <!-- Modal body --> */}
      <div className="modal-body">
       <div className='single-news'>
        <p>{aNews.teaser}</p>
        <p>{aNews.summary}</p>
        <p>{aNews.created_at.toLocaleString() }</p>
        <hr></hr>
        <h6>News Source</h6>
        <div className='sources d-inline'>
       <button className='btn btn-secondary m-1'> {aNews.news_sources[0]}</button> 
       <button className='btn btn-secondary m-1'> {aNews.news_sources[1]}</button> 
       <button className='btn btn-secondary m-1'> {aNews.news_sources[2]}</button> 
       <button className='btn btn-secondary m-1'> {aNews.news_sources[3]}</button> 
       <button className='btn btn-secondary m-1'> {aNews.news_sources[4]}</button> 
       <button className='btn btn-secondary m-1'> {aNews.news_sources[5]}</button> 
       <button className='btn btn-secondary m-1'> {aNews.news_sources[6]}</button> 
       
      
        </div>

       </div>
      </div>

      {/* <!-- Modal footer --> */}
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
           
          </div>
        )
       }) 
     }

    
     
    
     

     </div>
    
    </div>


    </main>
  );
}
