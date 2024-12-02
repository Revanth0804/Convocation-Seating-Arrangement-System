import React from "react";

function FindSeat() {
  return (
    <>
      <main>
        <section id="student-search" class="section">
          <div id="bg"></div>
          <div>
              <h2>Find Your Seat</h2>
              <form id="search-form">
                  <label for="regNumber"><b>Registration Number:</b></label>
                  <input type="text" id="regNumber" placeholder="Enter registration number"></input>
                  <button type="submit"><i class="fa-solid fa-magnifying-glass fa-beat-fade"></i> Search</button>
              </form>
              <div class="seat-details">
                  <p><strong>Section:</strong> A</p>
                  <p><strong>Seat Number:</strong> 110</p>
              </div>
          </div>
        </section>

        
        
      </main>
    </>
  );
}

export default FindSeat;