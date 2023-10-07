import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  useEffect(function () {
    getCabins().then((data) => console.log(data));
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <img
        src="https://rcizndcjqludlczfwbrk.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2023-10-07T11%3A18%3A19.424Z"
        alt=""
      />
      <p>TEST</p>
    </Row>
  );
}

export default Cabins;
