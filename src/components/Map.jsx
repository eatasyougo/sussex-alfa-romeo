const MAP_SRC =
  "https://maps.google.com/maps?q=sussex%20alfa%20romeo&t=m&z=14&output=embed&iwloc=near";
const MAP_LINK = "https://www.google.com/maps/search/?api=1&query=Sussex+Alfa+Romeo+Hassocks";

export default function Map() {
  return (
    <div className="map-wrap">
      <iframe
        className="map"
        title="Sussex Alfa Romeo on Google Maps"
        src={MAP_SRC}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <a className="btn btn-ghost map-link" href={MAP_LINK} target="_blank" rel="noreferrer">
        Open in Google Maps
      </a>
    </div>
  );
}
