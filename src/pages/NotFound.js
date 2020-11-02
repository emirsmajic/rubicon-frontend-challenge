import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div>
      <Link to="/">Back to homepage</Link>
      <h2>Error 404: Site not found</h2>
    </div>
  )
}
