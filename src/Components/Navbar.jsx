import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaBars } from "react-icons/fa6";
import { Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { IoIosSearch } from "react-icons/io";
import { toggleMenu } from "../Utils/ToggleSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResultdata, setSearchResult] = useState([]);


  const menuToggle = () => {
    dispatch(toggleMenu());
    console.log("clikced");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      searchResult();
    }, 200);

    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  //Youtube Search API
  const searchResult = async () => {
    const searchData = await fetch(
      `http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=${searchQuery}`
    );
    const json = await searchData.json();
    setSearchResult(json[1]);

    if (json[1].length === 0) {
      document.getElementById("card").classList.remove("card");
    } else {
      document.getElementById("card").classList.add("card");
    }
  };

  return (
    <>
      <Navbar className="d-block z-4 w-100">
        <Nav
          style={{ width: "95%", margin: "auto" }}
          className="d-flex bg-light justify-content-between fixed-top p-2"
        >
          <div className="w-25">
            <span onClick={() => menuToggle()} className="mt-2" style={{cursor:"pointer"}}>
              <FaBars />
            </span>
            <Link to="/">
              <Image
                className="ms-4 mt-2"
                width="35%"
                src="https://seeklogo.com/images/Y/youtube-premium-logo-34F248EA34-seeklogo.com.png"
              />
            </Link>
          </div>
          <div className="w-50">
            <Form className="d-flex">
              <input
                style={{ width: "35rem", marginLeft: "70px" }}
                className="form-control me-0 rounded-start-pill youtube-search shadow-none"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-secondary rounded-end-pill w-50%">
                <IoIosSearch />
              </button>
            </Form>
          </div>
          <div className="w-25 d-flex justify-content-end">
            <Nav.Link href="#pricing">
              <svg height="24" viewBox="0 0 24 24" width="24" focusable="false">
                <path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"></path>
              </svg>
            </Nav.Link>
            <Nav.Link href="#pricing" className="mx-3">
              <svg
                enableBackground="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
              >
                <path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"></path>
              </svg>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Image
                id="img"
                draggable="false"
                className="style-scope yt-img-shadow rounded-circle"
                alt="Avatar image"
                height="32"
                width="32"
                src="https://yt3.ggpht.com/yti/AOXPAcWiv3tSEIM-Iicc9Ao9Dq-fgf5BUIHJbaQK1xSkwg=s88-c-k-c0x00ffffff-no-rj"
              />
            </Nav.Link>
          </div>
        </Nav>
        <div className="fixed-top search-bar" id="card">
          {searchResultdata.map((items, count) => {
            return (
              <li className="py-2" key={count}>
                <span className="mx-3">
                  <IoIosSearch />
                </span>
                {items}
              </li>
            );
          })}
        </div>
      </Navbar>
    </>
  );
};

export default HeaderNav;
