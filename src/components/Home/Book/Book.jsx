import { useNavigate } from "react-router-dom";

const Book = ({ book }) => {
  let { bookId, bookName, image, author, tags, review, totalPages, rating } =
    book;

  const navigate = useNavigate();

  let handleBtn = () => {
    navigate(`/book/${bookId}`);
  };

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="bg-sky-50 p-5 rounded-md">
        <img className="h-[166px]" src={image} alt={bookName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary whitespace-nowrap">
            {author}
          </div>
        </h2>
        <p>{review.substr(0, 100)}...</p>
        <div className="card-actions justify-end">
          {tags.map((map, index) => {
            return (
              <div key={index} className="badge badge-outline">
                {map}
              </div>
            );
          })}
        </div>

        <div className="flex gap-3">
          <p>Total Page: {totalPages}</p>
          <p>Rating: {rating}</p>
        </div>

        <button
          type="button"
          className="btn bg-sky-400 mt-4"
          onClick={handleBtn}
        >
          More Details
        </button>
      </div>
    </div>
  );
};

export default Book;
