import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";

/* eslint-disable react/prop-types */
function Stats({ bookings, confirmedStays, numDays, numCabins }) {
  // 1.
  const numBookings = bookings.length;

  // 2.
  const sales = formatCurrency(
    bookings.reduce((acu, cur) => acu + cur.totalPrice, 0)
  );

  // 3.
  const numStays = confirmedStays.length;

  // 4.
  const occupationRate = Math.round(
    (confirmedStays.reduce((acu, cur) => acu + cur.numNights, 0) /
      (numDays * numCabins)) *
      100
  );

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={sales}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={numStays}
      />
      <Stat
        title="Occupancy Rates"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={occupationRate + "%"}
      />
    </>
  );
}

export default Stats;
