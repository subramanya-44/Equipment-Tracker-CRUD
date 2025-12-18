// Convert 2025-12-08T18:30:00.000Z to 08-12-2025
export function formatDateToIndianTime(isoDate) {
  if (!isoDate) return "N/A";
  
  const [yyyy, mm, dd] = isoDate.split("T")[0].split("-");
  return `${dd}-${mm}-${yyyy}`;
}
