import { useRecentStays } from "./useRecentStays";
import { useRecentBookings } from "./useRecentBookings";
import { useCabins } from "../cabins/useCabins";
import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const {
    bookings,
    numDays,
    isLoading: isLoadingBookings,
  } = useRecentBookings();

  const { confirmedStyes, isLoading: isLoadingStays } = useRecentStays();

  const { cabins, isLoading: isLoadingCabins } = useCabins();

  if (isLoadingBookings || isLoadingStays || isLoadingCabins)
    return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStyes}
        numDays={numDays}
        numCabins={cabins.length}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStyes} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
