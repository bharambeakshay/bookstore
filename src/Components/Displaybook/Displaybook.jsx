/** @format */

import React, { useState, useEffect, Fragment, useContext } from "react";

import Bookservice from "../../Services/BookService";
import "./displaybook.scss";
import bookImg from "../../Assets/Image12.png";
import bookListContext from "../Context";
import { Card, Button } from "react-bootstrap";
import cartCtx from "../../context/cartCtx";
let bookService= new Bookservice();

export default function DisplayBooks() {
  // const [BookList, setBookList] = useState([]);
  // console.log(BookList);
  // useEffect(() => {
  //   getAllBooks();
  // }, []);

  // const getAllBooks = () => {
  //   Bookservice.getBooks()
  //     .then((res) => {
  //       console.log(res);
  //       setBookList(res.data.result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

const[details,setDetails]=useState(false)

  const { books } = useContext(bookListContext);
  console.log("books from display", books);
  // const [data, setData] = useState({});
const addToBag=(e,item)=>{
e.stopPropagation();
const id=item._id;
console.log("iddd",id)
item.is_Cart=true;
bookService.addToCart(id).then((item)=>{
  console.log("itemmm",item)
  setDetails(true);
}).catch((err)=>{
  console.log(err)
})

}
  return (
    <>
    {/* // <cartCtx.Provider value={{ data }}> */}
      <div className="book-length-div">
        <div className="bookLength">
          Books <span className="book-length">({books.length}) </span>
        </div>{" "}
      </div>

      <div className="container-fluid">
        {books.map((item) => (
          <div className="display" key={item._id}>
            <div class="bookCard my-2 mx-2 card shadow p-3 mb-5 bg-white">
              <div className="image image-div">
                <img class="card-img-top" src={bookImg} alt="" />
              </div>

              <div className="title">
                <h5 class="card-title"> {item.bookName}</h5>
              </div>
              <div className="author">by {item.author}</div>
              {/* <div className="quantity">({item.quantity})</div> */}
              <div className="price">Rs.{item.price}</div>
              <div className="displayadd">
                <button
                  type="button"
                  className="displayadd1 btn btn-danger"
                  onClick={(e) => addToBag(e,item)}
                >
                  ADD TO BAG
                </button>
                <button
                  type="button "
                  className="displayWhishlist1 btn btn-light"
                >
                  WHISHLIST
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </>
    // </cartCtx.Provider>
  );
}
