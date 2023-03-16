import { KidsStatus, MarriageStatus } from "@prisma/client";

export const marriageStatuses = [
  {
    label: "רווק",
    value: MarriageStatus.SINGLE
  },
  {
    label: "נשוי",
    value: MarriageStatus.MARRIED
  },
  {
    label: "גרוש",
    value: MarriageStatus.DIVORCED
  },
  {
    label: "אלמן",
    value: MarriageStatus.WIDOW
  }
];

export const kidsStatuses = [
  { label: "עם ילדים", value: KidsStatus.HAVE_KIDS },
  { label: "ללא ילדים", value: KidsStatus.NO_KIDS },
  { label: "לא מעוניין לשתף", value: KidsStatus.NA }
];
