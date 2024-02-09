import Card from "./Card";
function Tours({ tours, removeTour }) {
  return (
    <div>
      <div>
        <h2>Plan with Love</h2>
      </div>
      <div>
        {tours.map((tour, id) => {
          return <Card key={id} {...tour} removetour={removeTour}></Card>;
        })}
      </div>
    </div>
  );
}

export default Tours;
