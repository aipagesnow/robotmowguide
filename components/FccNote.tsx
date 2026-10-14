import type { ReactNode } from "react";
import { FCC_COVERED_LIST, FCC_DA_26_789, FCC_SEARCH, FCC_TABLE_CHECKED } from "@/lib/site";
import { formatDate } from "@/lib/format";

export function FccWaiver() {
  return (
    <>
      Models already authorized can keep receiving updates until at least Jan 1, 2029 (
      <a href={FCC_DA_26_789}>FCC DA 26-789</a>). You can look up any model's FCC ID in the{" "}
      <a href={FCC_SEARCH}>FCC equipment authorization search</a>.
    </>
  );
}

export function SupportOutlook({ brand, second }: { brand: string; second?: ReactNode }) {
  return (
    <>
      <h2>Support outlook</h2>
      <p className="measure">
        {brand} has no <a href={FCC_COVERED_LIST}>FCC Conditional Approval</a> for new models, but models
        already authorized can keep receiving updates until at least <a href={FCC_DA_26_789}>Jan 1, 2029</a>.{" "}
        {second ?? (
          <>
            You can look up any model's FCC ID in the <a href={FCC_SEARCH}>FCC equipment authorization search</a>.
          </>
        )}
      </p>
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
