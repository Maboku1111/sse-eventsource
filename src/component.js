import { useEffect, useState } from "react";

const EventComponent = () => {
  const [message, setMessage] = useState();

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:3000/events");

    if (typeof EventSource !== "undefined") {
      console.log("EventSource is defined");
    } else {
      console.log("EventSource is not defined");
    }

    eventSource.onmessage = (event) => {
      const eventData = JSON.parse(event.data);
      setMessage(eventData.message);
    };

    return () => {
      eventSource.close();
    }
  }, []);

  return (
    <div>{message} hello</div>
  )
};

export default EventComponent;
