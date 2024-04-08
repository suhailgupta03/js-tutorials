import { readFromDatabase } from "@/database";
import "./posts.css";

const rounded = {
  borderRadius: "10px",
}

const bold = {
  fontWeight: "bold",
}

export default async function DefaultPostComponent() {
  const data = readFromDatabase();
  return <p>
    Inside view
  </p>
}

// ○ -> Treated as static route by Next.js
    // -> NextJs will use its default CACHING RULES
// λ -> Treated as dyanamic route by Next.js
    // -> No CACHING RULES are applied by NextJS