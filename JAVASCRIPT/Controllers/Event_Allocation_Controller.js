import EventService from "../Services/Events_Service.js";

$(document).ready(function () {
  const urlparams = new URLSearchParams(window.location.search);
  const eventId = urlparams.get("id");

  EventService.geteventDetailsbyid(eventId).then((response) => {
    let eventDetails = response;

    let h2 = `<h2>${eventDetails.event_name}</h2>`;
    $(".event-details").append(h2);
    let eventBtn = `<button id="proceed-btn" eventId="${eventDetails.id}">Proceed</button>`;
    $(".proceed").append(eventBtn);

    $(document).on("click", "#proceed-btn", function () {
      const Id = $(this).attr("eventId");
      window.location.href = "Feedback.html?id=" + Id;
    });
  });
});
