import React from "react";
import "./Timeline.css";

const Timeline = () => {
  return (
    <div id="timeline">
      <h1 className="text-center">Timeline</h1>

      <ul class="timeline">
        <li class="event" data-date="12:30 - 1:00pm">
          <h3>Registration</h3>
          <p>
            Get here on time, it's first come first serve. Be late, get turned
            away.
          </p>
          <p>
            Get here on time, it's first come first serve. Be late, get turned
            away.
          </p>
          <p>
            Get here on time, it's first come first serve. Be late, get turned
            away.
          </p>
        </li>
        <li class="event" data-date="2:30 - 4:00pm">
          <h3>Opening Ceremony</h3>
          <p>
            Get ready for an exciting event, this will kick off in amazing
            fashion with MOP & Busta Rhymes as an opening show.
          </p>
        </li>
        <li class="event" data-date="5:00 - 8:00pm">
          <h3>Main Event</h3>
          <p>
            This is where it all goes down. You will compete head to head with
            your friends and rivals. Get ready!
          </p>
        </li>
        <li class="event" data-date="8:30 - 9:30pm">
          <h3>Closing Ceremony</h3>
          <p>
            See how is the victor and who are the losers. The big stage is where
            the winners bask in their own glory.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
