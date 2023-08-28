import { Booking } from "../types/Booking";
import BookItem from "./BookItem";

type BookListProps = {
  bookings: Booking[]
}

function BookList({bookings}: BookListProps): JSX.Element {

  return (
    <> { /* fragment (tom root tag) */ }
      { bookings.map(booking => <BookItem booking={booking} />) }
    </>
  );
}

export default BookList;