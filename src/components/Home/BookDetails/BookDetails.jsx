import { useLoaderData, useParams } from "react-router-dom";
import { addToLS } from "../../../utils/AddToLs";

const BookDetails = () => {
  const { id } = useParams();

  let books = useLoaderData();
  let bookDet = books.find((book) => book.bookId === parseInt(id));

  let handleRead = (id) => {
    addToLS(id);
  }

  return (
    <div className="container py-5">
      <div className="hero bg-base-200  ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={bookDet.image} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="space-y-5">
            <h1 className="text-5xl font-bold">{bookDet.bookName}</h1>

            <div className="flex wrap gap-2">
              {bookDet.tags.map((tag, index) => (
                <div key={index} className="badge badge-soft badge-primary">{tag}</div>
              ))}
            </div>

            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="2 star"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="5 star"
              />
            </div>

            <p>{bookDet.review}</p>

            <div className="flex gap-2">

              <button className="btn btn-active btn-primary" onClick={() => handleRead(id)}>Mark as Read</button>

              <button className="btn btn-active btn-secondary">Add WishList</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
