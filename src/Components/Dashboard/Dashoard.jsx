/** @format */
import React, { useState, useEffect } from "react";
// import Displaybook from "../Displaybook/Displaybook"
import Header from "../Header/Header";
import Displaybook from "../Displaybook/Displaybook";
import BookService from "../../Services/BookService";
import bookListContext from "../Context";
import  "./dashboard.scss"

import Footer from "../Footer/Footer";

const DisplayBooks = (props) => {
  const [BookList, setBookList] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);
  const getBooks = () => {
    BookService.getBooks()
      .then((response) => {
        console.log(response);
        setBookList(response.data.result);
        books.map((data) => (data.isCart = false));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <React.Fragment>
      <Header />
      <div className="dashboraddisplay">
      <bookListContext.Provider value={{ books: BookList }}>
        <Displaybook />
      </bookListContext.Provider>
      </div>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default DisplayBooks;
