import BlogSidebar from "@/components/elements/BlogSidebar";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import data from "../../util/blogData";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function BlogDetails() {
  let Router = useRouter();
  const [item, setItem] = useState(null);
  const [fieldsdata, setfielddata] = useState({});
  const [datex, setdatex] = useState("");
  const [writername, setwritername] = useState("");
  const { id } = Router.query;
  const [category, setcategory] = useState("");

  const client = createClient({
    space: "t0pszie0jiqu",
    accessToken: "bm2qgxL1ruXxTPkEQT0KgtAuHOwVxlOzOuj-AoNo-AM",
  });

  useEffect(() => {
    const fetchData = async () => {
      let story = await client.getEntry(id);

      try {
        if (story?.fields.storyId) {
          setfielddata(story?.fields.storyId.fields);

          let cate = await client?.getEntry(fieldsdata.categoryId?.sys.id);
          setcategory(cate.fields.category);
        } else {
          setcategory(story?.fields.categoryId?.fields.category);
          setfielddata(story?.fields);
          setwritername(story?.fields.writerId?.fields.name);
        }
      } catch (error) {}

      try {
        if (story?.fields.storyId) {
          let writername = await client.getEntry(fieldsdata.writerId.sys.id);
          setwritername(writername.fields.name);
        }
      } catch (error) {}

      let timez = new Date(story.sys.createdAt);
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ];

      const day = timez.getDate();
      const monthIndex = timez.getMonth();
      const year = timez.getFullYear();
      const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;
      setdatex(formattedDate);
    };

    fetchData();
  }, [id]);

  return (
    <>
      {fieldsdata && (
        <Layout
          breadcrumbCategory={category}
          breadcrumbPostTitle={fieldsdata.heading}
        >
          <>
            <section className="blog-details-area pt-80 pb-100">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-1">
                    <div className="blog-details-social">
                      <ul className="list-wrap">
                        <li>
                          <Link href="">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="">
                            <i className="fab fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-instagram" />
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
                    <div className="blog-details-wrap">
                      <ul className="tgbanner__content-meta list-wrap">
                        <li className="category">
                          <Link href={`/blog/${id}`}>{category}</Link>
                        </li>
                        <li>
                          <Link href="/blog">{writername}.</Link>
                        </li>
                        <li>{datex}</li>
                        <li>23 comments</li>
                      </ul>
                      <h2 className="title">{fieldsdata.heading}</h2>
                      <div className="blog-details-thumb">
                        <img
                          src={fieldsdata.thumbnail?.fields.file.url}
                          alt=""
                          className="img-fluid "
                        />
                      </div>
                      <div className="blog-details-content">
                        {fieldsdata.body?.content.map((item, index) => {
                          if (item.data.target) {
                            return (
                              <div className="blog-details-inner" key={index}>
                                <div className="blog-details-images">
                                  <div className="row">
                                    <div className="col-md-12 col-sm-6">
                                      <div className="details-inner-image d-flex justify-content-center align-items-center">
                                        <img
                                          src={item.data.target.fields.file.url}
                                          alt="img"
                                          className="img-fluid"
                                        />
                                      </div>
                                    </div>
                                    {/* Add more columns if needed */}
                                  </div>
                                </div>
                              </div>
                            );
                          }

                          return item.content.map((one, i) => (
                            <p key={i}>{documentToReactComponents(one)}</p>
                          ));
                        })}
                        <div className="details-advertisement">
                          <Link href="#">
                            <img
                              src="/assets/img/others/advertisement02.png"
                              alt="img"
                              className="img-fluid   "
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="blog-details-bottom">
                        <div className="row align-items-baseline">
                          <div className="col-xl-6 col-md-7">
                            {/* <div className="blog-details-tags">
                              <ul className="list-wrap mb-0">
                                <li>
                                  <Link href="#">technology</Link>
                                </li>
                                <li>
                                  <Link href="#">finance</Link>
                                </li>
                                <li>
                                  <Link href="#">business</Link>
                                </li>
                              </ul>
                            </div> */}
                          </div>
                        </div>
                      </div>

                      <div className="blog-prev-next-posts">
                        <div className="row">
                          <div className="col-xl-6 col-lg-8 col-md-6">
                            <div className="pn-post-item">
                              <div className="thumb">
                                <Link href="/blog/1">
                                  <img
                                    src="/assets/img/lifestyle/life_style06.jpg"
                                    alt="img"
                                    className="img-fluid   "
                                  />
                                </Link>
                              </div>
                              <div className="content">
                                <span>Prev Post</span>
                                <h5 className="title tgcommon__hover">
                                  <Link href="/blog/1">
                                    3 Stocks to Buy and Hold Through the
                                    Panic...
                                  </Link>
                                </h5>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-8 col-md-6">
                            <div className="pn-post-item next-post">
                              <div className="thumb">
                                <Link href="/blog/1">
                                  <img
                                    src="/assets/img/lifestyle/life_style07.jpg"
                                    alt="img"
                                    className="img-fluid   "
                                  />
                                </Link>
                              </div>
                              <div className="content">
                                <span>Next Post</span>
                                <h5 className="title tgcommon__hover">
                                  <Link href="/blog/1">
                                    Mood Boards for Product Designers dome...
                                  </Link>
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <BlogSidebar />
                  </div>
                </div>
              </div>
            </section>
          </>
        </Layout>
      )}
    </>
  );
}
