import GrantsSearchBar from "../GrantsSearchBar/GrantsSearchBar";
import AgencyFilter from "../AgencyFilter/AgencyFilter";
import FundingSlider from "../FundingSlider/FundingSlider";
import MatchingRequirementsToggle from "../MatchingRequirementsToggle/MatchingRequirementsToggle";
import AvailabilityRange from "../AvailabilityRange/AvailabilityRange";

export default function GrantsAgenciesAside({ grants, setGrantsCopy, agencyFilters, setAgencyFilters, setFinalQuery, funding, setFunding, fundingOptions, matchingRequirements, setMatchingRequirements, availabilityRange, setAvailabilityRange }) {
  return (
    <aside className='flex flex-col gap-8'>
      <GrantsSearchBar
        setFinalQuery={setFinalQuery}
      />
      <AgencyFilter
        grants={grants}
        agencyFilters={agencyFilters}
        setAgencyFilters={setAgencyFilters}
      />
      <FundingSlider
        fundingOptions={fundingOptions}
        funding={funding}
        setFunding={setFunding}
      />
      <AvailabilityRange
        availabilityRange={availabilityRange}
        setAvailabilityRange={setAvailabilityRange}
      />
      <MatchingRequirementsToggle
        matchingRequirements={matchingRequirements}
        setMatchingRequirements={setMatchingRequirements}
      />
    </aside>
  )
}