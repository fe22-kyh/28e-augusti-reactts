import { ChangeEvent, FormEvent, useState } from "react";
import { Booking } from "../types/Booking";

interface BookData {
  name: string;
  date: Date;
}

type InputEvent = ChangeEvent<HTMLInputElement>;

type BookFormProps = {
  handleBooking: (booking: Booking) => void
}

const defaultBookData: BookData = {
  name: '',
  date: new Date()
}

function BookForm({handleBooking}: BookFormProps): JSX.Element {
  const [bookData, setBookData] = useState(defaultBookData); // Använd BookData i setBookData

  const handleNameChange = (event: InputEvent) => {
    setBookData({...bookData, name: event.target.value});
  }

  const handleDateChange = (event: InputEvent) => {
    const date = new Date(event.target.value);
    setBookData({...bookData, date});
  }

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleBooking({
      owner: bookData.name,
      date: bookData.date
    });
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>Name</label>
        <input type="text" name="name" onChange={handleNameChange} />
      </div>

      <div>
        <label>Date</label>
        <input type="date" name="date" onChange={handleDateChange}/>
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

export default BookForm;