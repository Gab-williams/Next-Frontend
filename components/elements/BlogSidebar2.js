import Link from 'next/link'
import InstagramSidebarSlider from '../slider/InstagramSidebarSlider'
import SidePostSlider from '../slider/SidePostSlider'
import Authorside from "@/components/elements/AuthorSidebar"

export default function BlogSidebar2() {
    return (
        <>
        
          
            <aside className="blog-sidebarb">
           
                <div className="widget sidebar-widget widget_categories">
                    <h4 className="widget-title">Trending Category</h4>
                    <ul className="list-wrap">
                        <li>
                            <div className="thumb"><Link href="/blog"><img src="/assets/img/category/side_category01.jpg" alt="img" /></Link></div>
                            <Link href={`/business?hello=Business Insights`}>Business Insights</Link>
                            
                        </li>
                        <li>
                            <div className="thumb"><Link href="/blog"><img src="/assets/img/category/side_category02.jpg" alt="img" /></Link></div>
                            <Link href={`/business?hello=Technology Trends`}>Technology Trends</Link>
                            
                        </li>
                        <li>
                            <div className="thumb"><Link href="/blog"><img src="/assets/img/category/side_category03.jpg" alt="img" /></Link></div>
                            <Link href={`/business?hello=Marketing & Finance`}>Marketing & Finance</Link>
                            
                        </li>
                        <li>
                            <div className="thumb"><Link href="/blog"><img src="/assets/img/category/side_category04.jpg" alt="img" /></Link></div>
                            <Link href={`/business?hello=Workplace & Culture`}>Workplace & Culture</Link>
                            
                        </li>
                        <li>
                            <div className="thumb"><Link href="/blog"><img src="/assets/img/category/side_category05.jpg" alt="img" /></Link></div>
                            <Link href={`/business?hello=Productivity & Innovation`}  >Productivity & Innovation</Link>
                          
                        </li>
                        <li>
                            <div className="thumb"><Link href="/blog"><img src="/assets/img/category/side_category05.jpg" alt="img" /></Link></div>
                            <Link href={`/business?hello=Multimedia & Events`}>Multimedia & Events</Link>
                          
                        </li>
                        <li>
                            <div className="thumb"><Link href="/blog"><img src="/assets/img/category/side_category05.jpg" alt="img" /></Link></div>
                            <Link href={`/business?hello=Opinions & Editorials`}>Opinions & Editorials</Link>
                          
                        </li>
                    </ul>
                </div>
                <div className="widget sidebar-widget">
                    <SidePostSlider />
                </div>
                <div className="widget sidebar-widget">
                    <h4 className="widget-title">Instagram Feeds</h4>
                    <div className="sidebarInsta__wrap">
                        <div className="sidebarInsta__top">
                            <div className="sidebarInsta__logo">
                                <img src="/assets/img/instagram/insta_logo.png" alt="img" />
                            </div>
                            <div className="sidebarInsta__info">
                                <h6 className="name"><Link href="#">instagram/Dabar</Link></h6>
                                <span className="designation">Your lens into ...</span>
                            </div>
                        </div>
                        <div className="sidebarInsta__slider-wrap">
                            <div className="swiper-container sidebarInsta-active">
                                <InstagramSidebarSlider />
                            </div>
                            <div className="swiper-container sidebarInsta-active-2" dir="rtl">
                                <InstagramSidebarSlider />
                            </div>
                        </div>
                        <div className="sidebarInsta__bottom">
                            <Link href="https://www.instagram.com/the.dabar/?igshid=YzAwZjE1ZTI0Zg%3D%3D" target="_blank" className="btn"><i className="fab fa-instagram" /><span className="text">Follow Me</span></Link>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}
