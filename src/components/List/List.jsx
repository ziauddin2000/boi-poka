import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect } from "react";
import { getStoredData } from "../../utils/AddToLs";
import { useState } from "react";
import Book from "../Home/Book/Book";

const List = () => {
  let allBooks = useLoaderData();

  const [readList, saveReadList] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    let storedData = getStoredData();
    let storedDataInt = storedData.map((data) => parseInt(data));

    // Check all books, where my LS match
    let readList = allBooks.filter((book) => {
      return storedDataInt.includes(book.bookId);
    });

    saveReadList(readList);
  }, []);

  let handleSort = (type) => {
    setSort(type);

    if (type === "rating") {
      let sortedList = readList.sort((a, b) => a.rating - b.rating);

      saveReadList(sortedList);
    }

    if (type === "totalPages") {
      let sortedList = readList.sort((a, b) => a.totalPages - b.totalPages);
      saveReadList(sortedList);
    }
  };

  return (
    <div className="container py-8">
      <div className="mb-4">
        <button
          className="btn"
          popoverTarget="popover-1"
          style={{ anchorName: "--anchor-1" }}
        >
          Sort By{sort ? `: ${sort}` : ""}
        </button>

        <ul
          className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
          popover="auto"
          id="popover-1"
          style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}
        >
          <li>
            <a onClick={() => handleSort("rating")}>Ratings</a>
          </li>
          <li>
            <a onClick={() => handleSort("totalPages")}>No Of Page</a>
          </li>
        </ul>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read List: {readList.length} </Tab>
          <Tab>WishList</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {readList.map((readItem) => (
              <Book key={readItem.bookId} book={readItem}></Book>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default List;
