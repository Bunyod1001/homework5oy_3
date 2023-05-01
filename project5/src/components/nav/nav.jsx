export function AsideNav() {
    return(
        <nav className="navbar  mt-5">
        <div className="container-fluid">
          <a className="navbar-brand" style={{ color: "#FFFFFF" }}>6 Suggestions</a>
          <div class="dropdown">
            <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sort by : Most Upvotes
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Most Upvotes</a></li>
              <li><a className="dropdown-item active" style={{backgroundColor:"#ffff",  color:"#AD1FEA"}} href="#" aria-current="true">Least Upvotes</a></li>
              <li><a className="dropdown-item" href="#">Most Comments</a></li>
              <li><a className="dropdown-item" href="#">Least Comments</a></li>
            </ul>
          </div>
          <form className="d-flex">
            <button className="btn btn-primary" type="submit">+ Add Feedback</button>
          </form>
        </div>
      </nav>
    )
}