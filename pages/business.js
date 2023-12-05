import BlogSidebar from "@/components/elements/BlogSidebar";
import BlogSidebar2 from "@/components/elements/BlogSidebar2";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router"
import { useEffect, useState } from 'react'
import {createClient} from 'contentful';
import ReactPaginate from 'react-paginate';
export default function Business() {

  const router = useRouter()
  const { hello } = router.query;
    // console.log(hello)
    const [pageSize, setpageSize] = useState(6)
    const [currentPage, setcurrentPage] = useState(1);
    const [Data, SetData] = useState([])
    const [numberofpage, setnumberofpage] = useState(1)
    const [orignalarr, setorignalarr] = useState([])
  const client =  createClient({
    space:'t0pszie0jiqu',
    accessToken:'bm2qgxL1ruXxTPkEQT0KgtAuHOwVxlOzOuj-AoNo-AM',
  });

  useEffect(()=>{
   const fetchStories = async()=>{
      let story = await client.getEntries({content_type:"currentstories",select:'fields', })

      const newData = await Promise.all(
        story?.items.map(async (item) => {
          let timez = new Date(item.fields.storyId.sys.createdAt)
            const monthNames = [
              "Jan", "Feb", "Mar",
              "Apr", "May", "Jun", "Jul",
              "Aug", "Sept", "Oct",
              "Nov", "Dec"
            ];   
            const day = timez.getDate();
            const monthIndex = timez.getMonth();
            const year = timez.getFullYear();
            const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;
            
           
          let data = await client.getEntry(item.fields.storyId.fields.categoryId.sys.id);
          let writer = await client.getEntry(item.fields.storyId.fields.writerId.sys.id)
          let answer = data.fields.category;
           let answriter = writer.fields.name
           return {
            heading: item.fields.storyId.fields.heading,
            summary: item.fields.storyId.fields.summary,
            presummary:item.fields.storyId.fields.preSummary,
            thumbnail:item.fields.storyId.fields.thumbnail.fields.file.url,
            category: answer,
            writer:answriter,
            id:item.sys.id,
            timez:formattedDate
           };
         })
       );
      
      
       // let filterdata = newData.filter((item)=>item.category.toLowerCase() == hello.toLowerCase())
       setorignalarr(newData)
        let page = Math.ceil(newData.length / 6);
        const indexofLastPost =  currentPage * pageSize;
        const indexofFirstPost = indexofLastPost - pageSize;
        let ansdata = newData?.slice(indexofFirstPost, indexofLastPost);
        SetData(ansdata)
        setnumberofpage(page)
    }

    fetchStories()

  },[hello])

  
  const handleNext =(ans)=>{
    let number = ans.selected + 1;  
    const indexofLastPost =  number * pageSize;
    const indexofFirstPost = indexofLastPost - pageSize;
    let ansdata = orignalarr.slice(indexofFirstPost, indexofLastPost);
    console.log(ansdata)
    SetData(ansdata)
  }


  return (
    <>
      <Layout breadcrumbCategory="Category" breadcrumbPostTitle="Business">
        <section className="blog-details-area pt-80 pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-1">
                <div className="blog-details-social">
                  <ul className="list-wrap">
                    <li>
                      <Link href="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fas fa-share" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-8 col-lg-7">
                <div className="blog-post-wrapper">
                    {Data && Data.length > 0?
                     <div className="latest__post-item" key={Data[0].id}>
                     <div className="latest__post-thumb tgImage__hover">
                       <Link href={`/blog/${encodeURIComponent(Data[0].id)}`} >
                         <img
                           src={Data[0].thumbnail}
                           alt="img"
                         />
                       </Link>
                     </div>
                     <div className="latest__post-content">
                       <ul className="tgbanner__content-meta list-wrap">
                         <li className="category">
                           <Link href={`/blog/${encodeURIComponent(Data[0].id)}`} >{Data[0].category}</Link>
                         </li>
                         <li>
                           <span className="by">By</span>{" "}
                           <Link href={`/blog/1?id=${encodeURIComponent(Data[0].id)}`} >{Data[0].writer}.</Link>
                         </li>
                         <li>nov 22, 2022</li>
                       </ul>
                       <h3 className="title tgcommon__hover">
                         <Link href={`/blog/${encodeURIComponent(Data[0].id)}`} >
                            {Data[0].heading}
                         </Link>
                       </h3>
                       <p>
                       {Data[0].summary}
                       </p>
                       <div className="latest__post-read-more">
                         <Link  href={`/blog/${encodeURIComponent(Data[0].id)}`}>
                           Read More <i className="far fa-long-arrow-right" />
                         </Link>
                       </div>
                     </div>
                   </div>
                    
                    :""}
                 
                  
                  
                  {/* Additional articles */}
                  <div className="row row--10">
                    {Data.slice(1, 3).length > 0?
                    Data.slice(1, 3).map((item, i)=>{
                      return   <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--20" key={i}>
                      <div className="latest__post-item">
                      <div className="latest__post-thumb tgImage__hover">
                        <Link  href={`/blog/${encodeURIComponent(item.id)}`}>
                          <img
                            src={item.thumbnail}
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="latest__post-content">
                        <ul className="tgbanner__content-meta list-wrap">
                          <li className="category">
                            <Link href="/blog">{item.heading}</Link>
                          </li>
                          <li>
                            <span className="by">By</span>{" "}
                            <Link href="/blog">{item.writer}.</Link>
                          </li>
                          <li>nov 22, 2022</li>
                        </ul>
                        <h3 className="title tgcommon__hover">
                          <Link  href={`/blog/${encodeURIComponent(item.id)}`}>
                           {item.presummary}
                          </Link>
                        </h3>
                        <p>
                        {item.summary.length > 200? item.summary.substr(0,150):""}
                        </p>
                        <div className="latest__post-read-more">
                          <Link  href={`/blog/${encodeURIComponent(item.id)}`}>
                            Read More <i className="far fa-long-arrow-right" />
                          </Link>
                        </div>
                      </div>
                        </div>
                      </div>
                    })
                    
                    :""}
                  </div>

                  <div className="row row--10">
                    {Data.slice(3, 5).length > 0?
                    Data.slice(3, 5).map((item, i)=>{
                      return   <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--20" key={i}>
                      <div className="latest__post-item">
                      <div className="latest__post-thumb tgImage__hover">
                        <Link  href={`/blog/${encodeURIComponent(item.id)}`}>
                          <img
                            src={item.thumbnail}
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="latest__post-content">
                        <ul className="tgbanner__content-meta list-wrap">
                          <li className="category">
                            <Link href={`/blog/${encodeURIComponent(item.id)}`}>{item.heading}</Link>
                          </li>
                          <li>
                            <span className="by">By</span>{" "}
                            <Link href={`/blog/${encodeURIComponent(item.id)}`}>{item.writer}.</Link>
                          </li>
                          <li>nov 22, 2022</li>
                        </ul>
                        <h3 className="title tgcommon__hover">
                          <Link  href={`/blog/${encodeURIComponent(item.id)}`}>
                           {item.presummary}
                          </Link>
                        </h3>
                        <p>
                        {item.summary.length > 200? item.summary.substr(0,150):""}
                        </p>
                        <div className="latest__post-read-more">
                          <Link  href={`/blog/${encodeURIComponent(item.id)}`}>
                            Read More <i className="far fa-long-arrow-right" />
                          </Link>
                        </div>
                      </div>
                        </div>
                      </div>
                    })
                    
                    :""}
                  </div>

                  {Data && Data.length > 0?
                  <div className="latest__post-item">
                  <div className="latest__post-thumb tgImage__hover">
                    <Link  href={`/blog/${encodeURIComponent(Data[5].id)}`}>
                      <img
                        src={Data[5].thumbnail}
                        alt="img"
                      />
                    </Link>
                  </div>
                  <div className="latest__post-content">
                    <ul className="tgbanner__content-meta list-wrap">
                      <li className="category">
                        <Link  href={`/blog/${encodeURIComponent(Data[5].id)}`}>{Data[5].category}</Link>
                      </li>
                      <li>
                        <span className="by">By</span>{" "}
                        <Link href="/blog">{Data[5].writer}.</Link>
                      </li>
                      <li>{Data[5].timez}</li>
                    </ul>
                    <h3 className="title tgcommon__hover">
                      <Link  href={`/blog/${encodeURIComponent(Data[5].id)}`}>
                      {Data[5].heading}
                      </Link>
                    </h3>
                    <p>
                        {Data[5].presummary}
                    </p>
                    <div className="latest__post-read-more">
                      <Link  href={`/blog/${encodeURIComponent(Data[5].id)}`}>
                        Read More <i className="far fa-long-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                  :""}

                  


                </div>
                <div className="pagination__wrap">
                  {/* <ul className="list-wrap">
                    <li className="active">
                      <Link href="#">01</Link>
                    </li>
                    <li>
                      <Link href="#">02</Link>
                    </li>
                    <li>
                      <Link href="#">...</Link>
                    </li>
                    <li>
                      <Link href="#">06</Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fas fa-angle-double-right" />
                      </Link>
                    </li>
                  </ul> */}

                           <ReactPaginate
                  previousLabel={'<'}
                  nextLabel={'>'}
                   pageCount={numberofpage}
                    breakLabel={"..."}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={1}
                   onPageChange={handleNext}
                    containerClassName={'list-wrap'}
                    // pageclassNameName={' '}
                    pageLinkClassName={''}
                   // previousClassName={'bg-gray-400 rounded-lg px-2 py-1 text-lg justify-center items-center text-white'}
                   // nextClassName={'bg-gray-400 px-2 py-1 text-lg justify-center items-center text-white rounded-lg '}
                  />   
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6">
                <BlogSidebar2 />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
