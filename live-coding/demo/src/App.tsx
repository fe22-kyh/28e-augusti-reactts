import './App.css';
import PageBanner from './component/PageBanner';
import BookForm from './component/BookForm';
import { User } from './types/User';
import { useState } from 'react';
import { Booking } from './types/Booking';
import BookList from './component/BookList';

function App() {
  const user: User = {username: "Greta", role: "USER"};
  const [bookings, setBookings] = useState([] as Booking[]);
  
  const addBooking = (booking: Booking) => {
    setBookings([...bookings, booking]);
  }

  return (
    <div className="App">
      <PageBanner theme="light" user={user}/>
      <BookForm handleBooking={addBooking}/>
      <BookList bookings={bookings}/>
    </div>
  );
}

export default App;
