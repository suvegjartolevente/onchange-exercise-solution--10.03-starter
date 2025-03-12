

export const OrderConfirmed = ({ drink }) => {
  return (
    <>
      <h1 >Your : {drink.name} is coming</h1>
      <img src={drink.imgUrl} width={300} height={300} alt={drink.alt} />
      <p>Your drink will be ready in a few minutes</p>
    </>
  );
};
