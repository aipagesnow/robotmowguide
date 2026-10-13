import { FCC_COVERED_LIST, FCC_DA_26_789, FCC_SEARCH, FCC_TABLE_CHECKED } from "@/lib/site";
import { formatDate } from "@/lib/format";

export function FccWaiver() {
  return (
    <>
      Models that are already authorized may receive security and compatibility updates until at least January 1,
      2029 (<a href={FCC_DA_26_789}>FCC DA 26-789</a>). This page does not name an FCC ID. Look one up in the{" "}
      <a href={FCC_SEARCH}>FCC equipment authorization search</a>.
    </>
  );
}

export function NoConditionalApproval({ brand }: { brand: string }) {
  return (
    <>
      {brand} has no Conditional Approval for new models on the{" "}
      <a href={FCC_COVERED_LIST}>FCC Covered List and Conditional Approvals table</a>, checked{" "}
      {formatDate(FCC_TABLE_CHECKED)}. <FccWaiver />
    </>
  );
}
